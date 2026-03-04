'use client';

import { useState, useRef, useEffect, useCallback } from 'react';

function formatTime(totalSeconds: number): string {
  const m = Math.floor(totalSeconds / 60);
  const s = Math.floor(totalSeconds % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

const SPEEDS = [1, 1.25, 1.5, 2, 2.5, 3, 0.75] as const;

interface ArticleNarratorProps {
  slug: string;
}

export function ArticleNarrator({ slug }: ArticleNarratorProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [available, setAvailable] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [speedIdx, setSpeedIdx] = useState(0);

  const handleError = useCallback(() => setAvailable(false), []);

  const handleLoadedMetadata = useCallback(() => {
    if (audioRef.current) setDuration(audioRef.current.duration);
  }, []);

  const handleTimeUpdate = useCallback(() => {
    if (audioRef.current) setCurrentTime(audioRef.current.currentTime);
  }, []);

  const handleEnded = useCallback(() => {
    setPlaying(false);
    setCurrentTime(0);
    if (audioRef.current) audioRef.current.currentTime = 0;
  }, []);

  function handlePlayPause() {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play();
      setPlaying(true);
    }
  }

  function handleSeek(e: React.ChangeEvent<HTMLInputElement>) {
    const audio = audioRef.current;
    if (!audio || !duration) return;
    const time = (Number(e.target.value) / 100) * duration;
    audio.currentTime = time;
    setCurrentTime(time);
  }

  function handleSpeedChange() {
    const newIdx = (speedIdx + 1) % SPEEDS.length;
    setSpeedIdx(newIdx);
    if (audioRef.current) audioRef.current.playbackRate = SPEEDS[newIdx];
  }

  useEffect(() => {
    if (!('mediaSession' in navigator) || !available) return;
    navigator.mediaSession.metadata = new MediaMetadata({
      title: slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
      artist: 'Rohit Mangtani',
      album: 'Writing',
    });
    navigator.mediaSession.setActionHandler('play', () => {
      audioRef.current?.play();
      setPlaying(true);
    });
    navigator.mediaSession.setActionHandler('pause', () => {
      audioRef.current?.pause();
      setPlaying(false);
    });
    navigator.mediaSession.setActionHandler('seekto', (details) => {
      if (audioRef.current && details.seekTime != null) {
        audioRef.current.currentTime = details.seekTime;
        setCurrentTime(details.seekTime);
      }
    });
    return () => {
      navigator.mediaSession.setActionHandler('play', null);
      navigator.mediaSession.setActionHandler('pause', null);
      navigator.mediaSession.setActionHandler('seekto', null);
    };
  }, [slug, available]);

  const speed = SPEEDS[speedIdx];
  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;
  const title = slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

  if (!available) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 print:hidden">
      {/* Progress bar along the very top edge */}
      <div className="h-[2px] bg-[var(--border)]">
        <div
          className="h-full bg-[var(--fg-muted)] transition-[width] duration-200 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="backdrop-blur-xl bg-[var(--bg)]/90 border-t border-[var(--border)]">
        <div className="max-w-3xl mx-auto px-4 py-2.5 flex items-center gap-4">
          <audio
            ref={audioRef}
            src={`/audio/${slug}.mp3`}
            preload="metadata"
            onLoadedMetadata={handleLoadedMetadata}
            onTimeUpdate={handleTimeUpdate}
            onEnded={handleEnded}
            onError={handleError}
          />

          {/* Play / Pause */}
          <button
            onClick={handlePlayPause}
            className="flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-full border border-[var(--border)] text-[var(--fg-muted)] hover:text-[var(--fg)] hover:border-[var(--fg-muted)] transition-colors"
            aria-label={playing ? 'Pause narration' : 'Play narration'}
          >
            {playing ? (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <rect x="6" y="4" width="4" height="16" rx="1" />
                <rect x="14" y="4" width="4" height="16" rx="1" />
              </svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5.14v13.72a1 1 0 001.5.86l11.14-6.86a1 1 0 000-1.72L9.5 4.28A1 1 0 008 5.14z" />
              </svg>
            )}
          </button>

          {/* Title + time */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-3">
              <span className="text-xs text-[var(--fg)] font-medium truncate">
                {title}
              </span>
              <span className="flex-shrink-0 text-[10px] text-[var(--fg-muted)] tabular-nums">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
            </div>
            <input
              type="range"
              className="narrator-slider w-full mt-1"
              min={0}
              max={100}
              step={0.1}
              value={progress}
              onChange={handleSeek}
              aria-label="Narration progress"
            />
          </div>

          {/* Speed */}
          <button
            onClick={handleSpeedChange}
            className="flex-shrink-0 text-[10px] font-semibold text-[var(--fg-muted)] hover:text-[var(--fg)] min-w-[2rem] text-center px-1.5 py-0.5 rounded border border-[var(--border)] hover:border-[var(--fg-muted)] transition-colors"
            aria-label={`Playback speed: ${speed}x`}
          >
            {speed}x
          </button>

          {/* Waveform icon */}
          <svg className="flex-shrink-0 text-[var(--fg-muted)] opacity-50" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <line x1="4" y1="8" x2="4" y2="16" />
            <line x1="8" y1="5" x2="8" y2="19" />
            <line x1="12" y1="3" x2="12" y2="21" />
            <line x1="16" y1="5" x2="16" y2="19" />
            <line x1="20" y1="8" x2="20" y2="16" />
          </svg>
        </div>
      </div>
    </div>
  );
}

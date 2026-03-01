'use client';

import { useState, useRef, useEffect, useCallback } from 'react';

function formatTime(totalSeconds: number): string {
  const m = Math.floor(totalSeconds / 60);
  const s = Math.floor(totalSeconds % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

const SPEEDS = [1, 1.25, 1.5, 0.75] as const;

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

  const speed = SPEEDS[speedIdx];
  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  if (!available) return null;

  return (
    <div className="mb-8 flex items-center gap-3 px-4 py-3 border border-[var(--border)] rounded-lg bg-[var(--bg-secondary)]">
      <audio
        ref={audioRef}
        src={`/audio/${slug}.mp3`}
        preload="metadata"
        onLoadedMetadata={handleLoadedMetadata}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
        onError={handleError}
      />

      <button
        onClick={handlePlayPause}
        className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-[var(--fg-muted)] hover:text-[var(--fg)]"
        aria-label={playing ? 'Pause narration' : 'Play narration'}
      >
        {playing ? (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
            <rect x="2" y="1" width="3.5" height="12" rx="0.75" />
            <rect x="8.5" y="1" width="3.5" height="12" rx="0.75" />
          </svg>
        ) : (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
            <path d="M3 1.5v11l9.5-5.5L3 1.5z" />
          </svg>
        )}
      </button>

      <input
        type="range"
        className="narrator-slider flex-1"
        min={0}
        max={100}
        step={0.1}
        value={progress}
        onChange={handleSeek}
        aria-label="Narration progress"
      />

      <button
        onClick={handleSpeedChange}
        className="flex-shrink-0 text-xs font-medium text-[var(--fg-muted)] hover:text-[var(--fg)] min-w-[2.5rem] text-center"
        aria-label={`Playback speed: ${speed}x`}
      >
        {speed}x
      </button>

      <span className="flex-shrink-0 text-xs text-[var(--fg-muted)] tabular-nums min-w-[4.5rem] text-right">
        {formatTime(currentTime)} / {formatTime(duration)}
      </span>
    </div>
  );
}

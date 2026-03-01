'use client';

import { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import type { ContentSection } from '@/types/base';

function stripHtml(html: string): string {
  return html
    .replace(/<(?:table|figure|svg)[\s\S]*?<\/(?:table|figure|svg)>/gi, '')
    .replace(/<\/(?:p|div|li|h[1-6]|blockquote|tr|figcaption)>/gi, '\n')
    .replace(/<br\s*\/?>/gi, ' ')
    .replace(/<[^>]*>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

function splitSentences(text: string): string[] {
  if (!text) return [];
  return text.split(/\n/)
    .flatMap(line => line.split(/(?<=[.!?])\s+/))
    .filter(s => s.trim().length > 0);
}

function extractSentences(sections: ContentSection[]): string[] {
  const result: string[] = [];
  for (const section of sections) {
    result.push(section.title);
    const text = stripHtml(section.content);
    if (text) result.push(...splitSentences(text));
    if (section.subsections) {
      for (const sub of section.subsections) {
        result.push(sub.title);
        const subText = stripHtml(sub.content);
        if (subText) result.push(...splitSentences(subText));
        if (sub.list) {
          for (const item of sub.list) {
            const t = stripHtml(item);
            if (t) result.push(...splitSentences(t));
          }
        }
      }
    }
  }
  return result;
}

function formatTime(totalSeconds: number): string {
  const m = Math.floor(totalSeconds / 60);
  const s = Math.floor(totalSeconds % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

const SPEEDS = [1, 1.25, 1.5, 0.75] as const;
const WPM = 150;

type Status = 'idle' | 'playing' | 'paused';

interface ArticleNarratorProps {
  sections: ContentSection[];
}

export function ArticleNarrator({ sections }: ArticleNarratorProps) {
  const [status, setStatus] = useState<Status>('idle');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [speedIdx, setSpeedIdx] = useState(0);
  const [mounted, setMounted] = useState(false);

  const statusRef = useRef<Status>('idle');
  const indexRef = useRef(0);
  const speedRef = useRef<number>(SPEEDS[0]);
  const genRef = useRef(0);

  // Keep refs in sync for async callback access
  statusRef.current = status;
  indexRef.current = currentIndex;
  speedRef.current = SPEEDS[speedIdx];

  const { sentences, cumulativeWords, totalWords } = useMemo(() => {
    const s = extractSentences(sections);
    const wc = s.map(sent => sent.split(/\s+/).length);
    const cum: number[] = [];
    let sum = 0;
    for (const c of wc) {
      sum += c;
      cum.push(sum);
    }
    return { sentences: s, cumulativeWords: cum, totalWords: sum };
  }, [sections]);

  const sentencesRef = useRef(sentences);
  sentencesRef.current = sentences;

  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      setMounted(true);
    }
    return () => { window.speechSynthesis?.cancel(); };
  }, []);

  const speakFrom = useCallback((index: number) => {
    const gen = ++genRef.current;
    window.speechSynthesis.cancel();

    if (index >= sentencesRef.current.length) {
      statusRef.current = 'idle';
      setStatus('idle');
      indexRef.current = 0;
      setCurrentIndex(0);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(sentencesRef.current[index]);
    utterance.rate = speedRef.current;

    utterance.onend = () => {
      if (gen !== genRef.current) return;
      if (statusRef.current !== 'playing') return;
      const next = indexRef.current + 1;
      indexRef.current = next;
      setCurrentIndex(next);
      if (next < sentencesRef.current.length) {
        speakFrom(next);
      } else {
        statusRef.current = 'idle';
        setStatus('idle');
        indexRef.current = 0;
        setCurrentIndex(0);
      }
    };

    window.speechSynthesis.speak(utterance);
  }, []);

  function handlePlayPause() {
    if (status === 'playing') {
      window.speechSynthesis.pause();
      statusRef.current = 'paused';
      setStatus('paused');
    } else if (status === 'paused') {
      window.speechSynthesis.resume();
      statusRef.current = 'playing';
      setStatus('playing');
    } else {
      statusRef.current = 'playing';
      setStatus('playing');
      speakFrom(indexRef.current);
    }
  }

  function handleSeek(e: React.ChangeEvent<HTMLInputElement>) {
    const pct = Number(e.target.value) / 100;
    const targetWords = pct * totalWords;
    let idx = 0;
    for (let i = 0; i < cumulativeWords.length; i++) {
      if (cumulativeWords[i] >= targetWords) { idx = i; break; }
      idx = i;
    }
    indexRef.current = idx;
    setCurrentIndex(idx);
    if (status === 'playing' || status === 'paused') {
      statusRef.current = 'playing';
      setStatus('playing');
      speakFrom(idx);
    }
  }

  function handleSpeedChange() {
    const newIdx = (speedIdx + 1) % SPEEDS.length;
    setSpeedIdx(newIdx);
    speedRef.current = SPEEDS[newIdx];
    if (status === 'playing' || status === 'paused') {
      statusRef.current = 'playing';
      setStatus('playing');
      speakFrom(indexRef.current);
    }
  }

  const speed = SPEEDS[speedIdx];
  const totalTimeSec = (totalWords / WPM) * 60 / speed;
  const elapsedWords = currentIndex > 0 && currentIndex <= cumulativeWords.length
    ? cumulativeWords[currentIndex - 1]
    : 0;
  const elapsedTimeSec = (elapsedWords / WPM) * 60 / speed;
  const progress = totalWords > 0 ? (elapsedWords / totalWords) * 100 : 0;

  if (!mounted || sentences.length === 0) return null;

  return (
    <div className="mb-8 flex items-center gap-3 px-4 py-3 border border-[var(--border)] rounded-lg bg-[var(--bg-secondary)]">
      <button
        onClick={handlePlayPause}
        className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-[var(--fg-muted)] hover:text-[var(--fg)]"
        aria-label={status === 'playing' ? 'Pause narration' : 'Play narration'}
      >
        {status === 'playing' ? (
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
        {formatTime(elapsedTimeSec)} / {formatTime(totalTimeSec)}
      </span>
    </div>
  );
}

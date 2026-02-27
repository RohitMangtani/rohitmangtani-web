'use client';

import Nav from '@/components/Nav';
import { computeSchedule, TOTAL_UPLOADS, getUploadsCompleted, DEITIES, type ScheduleEntry } from '@/data/lab/upload-dashboard';
import { useState, useMemo } from 'react';

/* ── Helpers ─────────────────────────────────────────── */

function isSameDay(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate();
}

function dayName(d: Date) {
  return d.toLocaleDateString('en-US', { weekday: 'long' });
}

function formatDate(d: Date) {
  return d.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
}

function formatShort(d: Date) {
  return d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
}

function daysUntil(from: Date, to: Date) {
  const ms = to.getTime() - from.getTime();
  return Math.ceil(ms / (1000 * 60 * 60 * 24));
}

/* ── Status Badge ────────────────────────────────────── */

function StatusBadge({ entry }: { entry: ScheduleEntry }) {
  const today = new Date();
  const isToday = isSameDay(entry.date, today);

  switch (entry.status) {
    case 'uploaded':
      return entry.youtubeUrl ? (
        <a
          href={entry.youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[10px] px-2 py-0.5 rounded border border-green-300 bg-green-50 text-green-700 hover:bg-green-100 transition-colors"
          onClick={e => e.stopPropagation()}
        >
          Uploaded
        </a>
      ) : (
        <span className="text-[10px] px-2 py-0.5 rounded border border-green-300 bg-green-50 text-green-700">Uploaded</span>
      );
    case 'generating':
      return (
        <span className="text-[10px] px-2 py-0.5 rounded border border-yellow-300 bg-yellow-50 text-yellow-700 animate-pulse">
          Generating...
        </span>
      );
    case 'uploading':
      return (
        <span className="text-[10px] px-2 py-0.5 rounded border border-blue-300 bg-blue-50 text-blue-700 animate-pulse">
          Uploading...
        </span>
      );
    case 'ready':
      if (isToday) {
        return (
          <span className="text-[10px] px-2 py-0.5 rounded border border-amber-300 bg-amber-50 text-amber-700 animate-pulse">
            Coming at 8 PM
          </span>
        );
      }
      return (
        <span className="text-[10px] px-2 py-0.5 rounded border border-cyan-300 bg-cyan-50 text-cyan-700">Ready</span>
      );
    case 'generation_failed':
      return (
        <span className="text-[10px] px-2 py-0.5 rounded border border-red-300 bg-red-50 text-red-700">Failed</span>
      );
    default: {
      const diff = daysUntil(today, entry.date);
      if (diff <= 0) return null;
      return (
        <span className="text-[10px] text-[var(--fg-muted)] font-mono">{formatShort(entry.date)}</span>
      );
    }
  }
}

/* ── Copy Block ──────────────────────────────────────── */

function CopyBlock({ label, value, mono }: { label: string; value: string; mono?: boolean }) {
  const [copied, setCopied] = useState(false);
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-[11px] uppercase tracking-widest text-[var(--fg-muted)] font-medium">{label}</span>
        <button
          onClick={() => {
            navigator.clipboard.writeText(value);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
          }}
          className={`text-[10px] uppercase tracking-wider px-2.5 py-1 rounded transition-all cursor-pointer ${
            copied
              ? 'bg-green-100 text-green-700'
              : 'bg-[var(--bg-secondary)] text-[var(--fg-muted)] hover:text-[var(--fg)]'
          }`}
        >
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
      <div className={`p-4 rounded-lg border border-[var(--border)] bg-[var(--bg)] ${mono ? 'font-mono text-[13px]' : 'text-sm'} text-[var(--fg)] whitespace-pre-line break-all leading-relaxed`}>
        {value}
      </div>
    </div>
  );
}

/* ── Upload Card ─────────────────────────────────────── */

function UploadCard({ entry, label, onBack }: { entry: ScheduleEntry; label: string; onBack?: () => void }) {
  const langLabel = entry.language === 'hi' ? 'Hindi' : 'English';
  const langColor = entry.language === 'hi' ? 'bg-orange-50 text-orange-700 border-orange-300' : 'bg-blue-50 text-blue-700 border-blue-300';

  return (
    <div className="space-y-10">

      {/* ── Header ── */}
      <div>
        {onBack && (
          <button
            onClick={onBack}
            className="text-xs text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors cursor-pointer mb-6"
          >
            &larr; Back to current schedule
          </button>
        )}

        <div className="flex items-center gap-2 flex-wrap mb-3">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-green-700 text-xs font-bold uppercase tracking-widest">{label}</span>
          <span className={`text-[10px] px-2 py-0.5 rounded border font-mono ${langColor}`}>{langLabel}</span>
          <StatusBadge entry={entry} />
        </div>

        <p className="text-xs text-[var(--fg-muted)] mb-1">
          {entry.language === 'hi' ? entry.deityNameHi : entry.deityNameEn} &middot; Chapter {entry.chapter} of {entry.totalChapters}
        </p>
        <h2 className="text-2xl font-bold text-[var(--fg)] leading-tight">
          {entry.titleEn}
        </h2>
        <p className="text-[var(--fg-muted)] text-sm mt-1">
          {formatDate(entry.date)} at <span className="font-mono font-bold text-[var(--fg)]">{entry.time}</span>
        </p>
      </div>

      {/* ── YouTube Link (if uploaded) ── */}
      {entry.youtubeUrl && (
        <a
          href={entry.youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-4 rounded-xl border border-green-300/60 bg-green-50/50 hover:bg-green-50 transition-colors"
        >
          <span className="text-green-600 text-lg">&#9654;</span>
          <div>
            <p className="text-sm font-medium text-green-700">Watch on YouTube</p>
            <p className="text-xs text-green-600/60 font-mono">{entry.youtubeUrl}</p>
          </div>
        </a>
      )}

      {/* ── Generate (if needed) ── */}
      {!entry.generated && (
        <div className="border border-yellow-300 rounded-xl bg-yellow-50 p-6 space-y-4">
          <p className="text-sm font-medium text-yellow-800">Step 0 — Generate videos first</p>
          <CopyBlock label="Pipeline command" value={entry.pipelineCmd} mono />
          <p className="text-xs text-yellow-600">Generates all {entry.totalChapters} chapters. Come back when done.</p>
        </div>
      )}

      {/* ── Video File ── */}
      <CopyBlock label="Video file" value={entry.videoPath} mono />

      {/* ── Title ── */}
      <CopyBlock label="YouTube title" value={entry.ytTitle} mono />

      {/* ── Description ── */}
      <CopyBlock label="YouTube description" value={entry.description} />

      {/* ── Thumbnail ── */}
      <CopyBlock label="Thumbnail file" value={entry.thumbnailPath} mono />

      {/* ── Playlist ── */}
      <CopyBlock label="Add to playlist" value={entry.playlist} mono />

      {/* ── Tags ── */}
      <CopyBlock label="Tags" value={entry.tags.join(', ')} />

      {/* ── Subtitles ── */}
      <CopyBlock label="Subtitles (optional — burned into video)" value={entry.subtitlesPath} mono />

      {/* ── Settings ── */}
      <div>
        <span className="text-[11px] uppercase tracking-widest text-[var(--fg-muted)] font-medium">Settings</span>
        <div className="grid grid-cols-3 gap-3 mt-2">
          <div className="p-3 rounded-lg border border-[var(--border)] bg-[var(--bg)] text-center">
            <p className="text-[10px] text-[var(--fg-muted)] uppercase tracking-wider mb-0.5">Category</p>
            <p className="text-sm text-[var(--fg)] font-medium">Education</p>
          </div>
          <div className="p-3 rounded-lg border border-[var(--border)] bg-[var(--bg)] text-center">
            <p className="text-[10px] text-[var(--fg-muted)] uppercase tracking-wider mb-0.5">Privacy</p>
            <p className="text-sm text-[var(--fg)] font-medium">Public</p>
          </div>
          <div className="p-3 rounded-lg border border-[var(--border)] bg-[var(--bg)] text-center">
            <p className="text-[10px] text-[var(--fg-muted)] uppercase tracking-wider mb-0.5">Language</p>
            <p className="text-sm text-[var(--fg)] font-medium">{langLabel}</p>
          </div>
        </div>
      </div>

      {/* ── Publish ── */}
      <div className="border-t border-[var(--border)] pt-6">
        <p className="text-sm text-[var(--fg)]">
          Schedule for <span className="font-mono font-bold">{entry.time}</span> or publish immediately.
        </p>
      </div>
    </div>
  );
}

/* ── Deity Progress ──────────────────────────────────── */

function DeityProgress({ schedule }: { schedule: ScheduleEntry[] }) {
  return (
    <div className="space-y-2">
      {DEITIES.map(deity => {
        const deityEntries = schedule.filter(e => e.deityId === deity.id);
        const uploaded = deityEntries.filter(e => e.uploaded).length;
        const total = deityEntries.length;
        const pct = total > 0 ? Math.round((uploaded / total) * 100) : 0;
        const enGenerated = deityEntries.some(e => e.language === 'en' && e.videoGenerated);
        const hiGenerated = deityEntries.some(e => e.language === 'hi' && e.videoGenerated);

        return (
          <div key={deity.id} className="flex items-center gap-3 text-xs">
            <span className="w-24 shrink-0 text-[var(--fg)]">{deity.nameEn}</span>
            <div className="flex-1 h-1.5 bg-[var(--border)] rounded-full overflow-hidden">
              <div className="h-full bg-green-500 rounded-full transition-all" style={{ width: `${pct}%` }} />
            </div>
            <span className="text-[var(--fg-muted)] w-12 text-right">{uploaded}/{total}</span>
            <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${enGenerated ? 'bg-blue-500' : 'bg-zinc-300'}`} title={`EN ${enGenerated ? 'generated' : 'pending'}`} />
            <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${hiGenerated ? 'bg-orange-500' : 'bg-zinc-300'}`} title={`HI ${hiGenerated ? 'generated' : 'pending'}`} />
          </div>
        );
      })}
    </div>
  );
}

/* ── Page ─────────────────────────────────────────────── */

export default function UploadDashboard() {
  const today = new Date();
  const schedule = useMemo(() => computeSchedule(), []);

  const todayEntry = schedule.find(e => !e.uploaded && isSameDay(e.date, today));
  const upcoming = schedule.filter(e => !e.uploaded && e.date > today);
  const defaultEntry = todayEntry || upcoming[0];
  const isToday = todayEntry !== undefined;
  const completedCount = getUploadsCompleted();

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [showFullSchedule, setShowFullSchedule] = useState(false);
  const [showProgress, setShowProgress] = useState(false);

  const activeEntry = selectedIndex !== null
    ? schedule.find(e => e.index === selectedIndex) || defaultEntry
    : defaultEntry;

  const isCustomSelection = selectedIndex !== null;

  function getLabel(entry: ScheduleEntry | undefined) {
    if (!entry) return '';
    if (isCustomSelection) {
      const diff = daysUntil(today, entry.date);
      if (isSameDay(entry.date, today)) return 'Scheduled today';
      if (diff < 0) return `Uploaded ${Math.abs(diff)} day${Math.abs(diff) !== 1 ? 's' : ''} ago`;
      return `Scheduled in ${diff} day${diff !== 1 ? 's' : ''}`;
    }
    if (isToday) return 'Upload today';
    const diff = daysUntil(today, entry.date);
    return `Next upload \u2014 ${diff} day${diff !== 1 ? 's' : ''} away`;
  }

  return (
    <>
      <Nav />
      <main className="max-w-5xl mx-auto px-5 py-16 sm:py-24">

        {/* Header */}
        <header className="mb-12">
          <p className="text-xs text-[var(--fg-muted)] mb-2">
            {dayName(today)} &middot; {completedCount} of {TOTAL_UPLOADS} uploaded
          </p>
          <h1 className="text-xl font-bold tracking-tight text-[var(--fg)]">
            The Sleepless Rishi
          </h1>
        </header>

        {/* Upload Data */}
        {activeEntry ? (
          <UploadCard
            entry={activeEntry}
            label={getLabel(activeEntry)}
            onBack={isCustomSelection ? () => setSelectedIndex(null) : undefined}
          />
        ) : (
          <div className="border border-[var(--border)] rounded-xl p-8 text-center">
            <p className="text-[var(--fg-muted)]">All {TOTAL_UPLOADS} videos uploaded.</p>
          </div>
        )}

        {/* ── Schedule & Progress ── */}
        <div className="mt-16 pt-8 border-t border-[var(--border)] space-y-6">

          <button
            onClick={() => setShowProgress(!showProgress)}
            className="text-xs text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors cursor-pointer"
          >
            {showProgress ? 'Hide' : 'Show'} deity progress
          </button>
          {showProgress && <DeityProgress schedule={schedule} />}

          <button
            onClick={() => setShowFullSchedule(!showFullSchedule)}
            className="block text-xs text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors cursor-pointer"
          >
            {showFullSchedule ? 'Hide' : 'Show'} full schedule ({schedule.length} uploads)
          </button>

          {showFullSchedule && (
            <div className="space-y-0.5">
              {schedule.map(entry => {
                const isCurrent = defaultEntry && entry.index === defaultEntry.index;
                const isSelected = selectedIndex === entry.index;
                return (
                  <button
                    key={entry.index}
                    onClick={() => {
                      setSelectedIndex(entry.index);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={`w-full flex items-center gap-2 px-3 py-2.5 rounded-lg text-xs text-left transition-colors cursor-pointer ${
                      isSelected
                        ? 'bg-green-50 border border-green-400'
                        : isCurrent
                          ? 'bg-green-50/50 border border-green-300/50'
                          : entry.uploaded
                            ? 'opacity-35 hover:opacity-60'
                            : 'hover:bg-[var(--bg-secondary)]'
                    }`}
                  >
                    {entry.uploaded ? (
                      <span className="text-green-600 shrink-0">&#10003;</span>
                    ) : (
                      <span className="w-3 shrink-0" />
                    )}
                    <span className="text-[var(--fg-muted)] font-mono w-20 shrink-0">{formatShort(entry.date)}</span>
                    <span className={`px-1.5 py-0.5 rounded font-mono shrink-0 ${
                      entry.language === 'hi' ? 'bg-orange-50 text-orange-700' : 'bg-blue-50 text-blue-700'
                    }`}>
                      {entry.language.toUpperCase()}
                    </span>
                    <span className="text-[var(--fg-muted)] shrink-0">{entry.deityNameEn}</span>
                    <span className="text-[var(--fg)] truncate">{entry.titleEn}</span>
                    <span className="ml-auto shrink-0">
                      <StatusBadge entry={entry} />
                    </span>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-4 border-t border-[var(--border)] text-[10px] text-[var(--fg-muted)]">
          Every 2 days &middot; 8 PM EST (EN) / 8 PM IST (HI) &middot; {TOTAL_UPLOADS} total
        </footer>
      </main>
    </>
  );
}

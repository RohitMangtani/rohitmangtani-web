'use client';

import Nav from '@/components/Nav';
import { computeSchedule, TOTAL_UPLOADS, DEITIES, type ScheduleEntry } from '@/data/lab/upload-dashboard';
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

/* ── Copy Field ──────────────────────────────────────── */

function CopyField({ label, value, mono }: { label: string; value: string; mono?: boolean }) {
  const [copied, setCopied] = useState(false);
  return (
    <div className="group">
      <div className="text-[10px] uppercase tracking-widest text-[var(--fg-muted)] mb-1.5">{label}</div>
      <button
        onClick={() => {
          navigator.clipboard.writeText(value);
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
        }}
        className={`w-full text-left p-3 rounded border transition-all cursor-pointer ${
          copied
            ? 'border-green-700 bg-green-950/40'
            : 'border-[var(--border)] bg-[var(--bg)] hover:border-[var(--fg-muted)]'
        }`}
      >
        <div className="flex items-start justify-between gap-3">
          <span className={`text-sm ${mono ? 'font-mono' : ''} ${copied ? 'text-green-300' : 'text-[var(--fg)]'} whitespace-pre-line break-all`}>
            {value}
          </span>
          <span className={`text-[10px] shrink-0 mt-0.5 uppercase tracking-wider ${copied ? 'text-green-400' : 'text-[var(--fg-muted)] group-hover:text-[var(--fg)]'}`}>
            {copied ? 'Copied' : 'Copy'}
          </span>
        </div>
      </button>
    </div>
  );
}

/* ── Step Number ─────────────────────────────────────── */

function Step({ n, label, children, dimmed }: { n: number; label: string; children?: React.ReactNode; dimmed?: boolean }) {
  return (
    <div className={`flex gap-4 ${dimmed ? 'opacity-40' : ''}`}>
      <div className="shrink-0 w-7 h-7 rounded-full border border-[var(--border)] flex items-center justify-center text-xs font-bold text-[var(--fg-muted)]">
        {n}
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-sm font-medium text-[var(--fg)] mb-2">{label}</div>
        {children}
      </div>
    </div>
  );
}

/* ── Main Upload Card ────────────────────────────────── */

function UploadNow({ entry, label }: { entry: ScheduleEntry; label: string }) {
  const langLabel = entry.language === 'hi' ? 'Hindi' : 'English';
  const langColor = entry.language === 'hi' ? 'bg-orange-950 text-orange-300 border-orange-900' : 'bg-blue-950 text-blue-300 border-blue-900';

  return (
    <div className="border border-green-900/60 rounded-xl bg-green-950/10 p-6 sm:p-8">
      {/* Status Badge */}
      <div className="flex items-center gap-2 flex-wrap mb-5">
        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        <span className="text-green-400 text-xs font-bold uppercase tracking-widest">{label}</span>
        <span className={`text-[10px] px-2 py-0.5 rounded border font-mono ${langColor}`}>{langLabel}</span>
        {!entry.generated && (
          <span className="text-[10px] px-2 py-0.5 rounded border border-yellow-900 bg-yellow-950 text-yellow-300">Needs Generation</span>
        )}
      </div>

      {/* Deity + Chapter */}
      <div className="text-xs text-[var(--fg-muted)] mb-1">
        {entry.language === 'hi' ? entry.deityNameHi : entry.deityNameEn} &middot; Chapter {entry.chapter} of {entry.totalChapters}
      </div>

      {/* Title */}
      <h2 className="text-xl sm:text-2xl font-bold text-[var(--fg)] leading-tight mb-1">
        {entry.language === 'hi' ? entry.titleHi : entry.titleEn}
      </h2>
      <p className="text-[var(--fg-muted)] text-sm mb-8">
        {formatDate(entry.date)} at <span className="font-mono font-bold text-[var(--fg)]">{entry.time}</span>
      </p>

      {/* Steps */}
      <div className="space-y-6">

        {/* Step 0: Generate (only if not ready) */}
        {!entry.generated && (
          <Step n={0} label={`Generate all ${entry.totalChapters} ${entry.deityNameEn} ${langLabel} chapters`}>
            <CopyField label="Run in terminal (generates all chapters at once)" value={entry.pipelineCmd} mono />
            <p className="text-xs text-yellow-400/70 mt-2">This generates all {entry.totalChapters} chapters. Come back when it&apos;s done.</p>
          </Step>
        )}

        {/* Step 1: Open YouTube Studio */}
        <Step n={1} label="Open YouTube Studio" dimmed={!entry.generated}>
          <p className="text-xs text-[var(--fg-muted)]">
            Go to <span className="font-mono text-[var(--fg)]">studio.youtube.com</span> &rarr; Create &rarr; Upload video
          </p>
        </Step>

        {/* Step 2: Select video file */}
        <Step n={2} label="Select the video file" dimmed={!entry.generated}>
          <CopyField label="Video file path" value={entry.videoPath} mono />
        </Step>

        {/* Step 3: Paste title */}
        <Step n={3} label="Paste the title" dimmed={!entry.generated}>
          <CopyField label="YouTube title" value={entry.ytTitle} mono />
        </Step>

        {/* Step 4: Paste description */}
        <Step n={4} label="Paste the description" dimmed={!entry.generated}>
          <CopyField label="YouTube description" value={entry.description} />
        </Step>

        {/* Step 5: Upload thumbnail */}
        <Step n={5} label="Upload the thumbnail" dimmed={!entry.generated}>
          <CopyField label="Thumbnail file path" value={entry.thumbnailPath} mono />
        </Step>

        {/* Step 6: Add to playlist */}
        <Step n={6} label="Add to playlist" dimmed={!entry.generated}>
          <p className="text-sm text-[var(--fg)] font-mono">{entry.playlist}</p>
        </Step>

        {/* Step 7: Paste tags */}
        <Step n={7} label="Paste tags (Show More section)" dimmed={!entry.generated}>
          <CopyField label="Tags" value={entry.tags.join(', ')} />
        </Step>

        {/* Step 8: Upload subtitles (optional — already burned in) */}
        <Step n={8} label="Upload subtitles (optional — already burned into video)" dimmed={!entry.generated}>
          <CopyField label="SRT file path" value={entry.subtitlesPath} mono />
        </Step>

        {/* Step 9: Settings */}
        <Step n={9} label="Set remaining fields" dimmed={!entry.generated}>
          <div className="grid grid-cols-3 gap-2 text-xs">
            <div className="p-2 rounded border border-[var(--border)] bg-[var(--bg)]">
              <span className="text-[var(--fg-muted)]">Category:</span> <span className="text-[var(--fg)]">Education</span>
            </div>
            <div className="p-2 rounded border border-[var(--border)] bg-[var(--bg)]">
              <span className="text-[var(--fg-muted)]">Privacy:</span> <span className="text-[var(--fg)]">Public</span>
            </div>
            <div className="p-2 rounded border border-[var(--border)] bg-[var(--bg)]">
              <span className="text-[var(--fg-muted)]">Language:</span> <span className="text-[var(--fg)]">{langLabel}</span>
            </div>
          </div>
        </Step>

        {/* Step 10: Publish */}
        <Step n={10} label="Schedule or Publish">
          <p className="text-xs text-[var(--fg-muted)]">
            Schedule for <span className="font-mono font-bold text-[var(--fg)]">{entry.time}</span> if uploading early, or publish immediately if it&apos;s time.
          </p>
        </Step>
      </div>
    </div>
  );
}

/* ── Deity Progress Bar ──────────────────────────────── */

function DeityProgress({ schedule }: { schedule: ScheduleEntry[] }) {
  const today = new Date();
  return (
    <div className="space-y-2">
      {DEITIES.map(deity => {
        const deityEntries = schedule.filter(e => e.deityId === deity.id);
        const uploaded = deityEntries.filter(e => e.date < today && !isSameDay(e.date, today)).length;
        const total = deityEntries.length;
        const pct = total > 0 ? Math.round((uploaded / total) * 100) : 0;
        const enDone = deity.generated.en;
        const hiDone = deity.generated.hi;

        return (
          <div key={deity.id} className="flex items-center gap-3 text-xs">
            <span className="w-24 shrink-0 text-[var(--fg)]">{deity.nameEn}</span>
            <div className="flex-1 h-1.5 bg-[var(--border)] rounded-full overflow-hidden">
              <div className="h-full bg-green-500 rounded-full transition-all" style={{ width: `${pct}%` }} />
            </div>
            <span className="text-[var(--fg-muted)] w-12 text-right">{uploaded}/{total}</span>
            <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${enDone ? 'bg-blue-400' : 'bg-zinc-600'}`} title={`EN ${enDone ? 'generated' : 'pending'}`} />
            <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${hiDone ? 'bg-orange-400' : 'bg-zinc-600'}`} title={`HI ${hiDone ? 'generated' : 'pending'}`} />
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

  const todayEntry = schedule.find(e => isSameDay(e.date, today));
  const upcoming = schedule.filter(e => e.date > today);
  const past = schedule.filter(e => e.date < today && !isSameDay(e.date, today));
  const activeEntry = todayEntry || upcoming[0];
  const isToday = todayEntry !== undefined;

  const completedCount = past.length;

  const [showFullSchedule, setShowFullSchedule] = useState(false);
  const [showProgress, setShowProgress] = useState(false);

  return (
    <>
      <Nav />
      <main className="max-w-[640px] mx-auto px-5 py-16 sm:py-20">

        {/* Header */}
        <header className="mb-8">
          <p className="text-xs text-[var(--fg-muted)] mb-2">
            {dayName(today)} &middot; {completedCount} of {TOTAL_UPLOADS} uploaded &middot; 9 deities &middot; 59 hymns
          </p>
          <h1 className="text-xl font-bold tracking-tight text-[var(--fg)]">
            The Sleepless Rishi
          </h1>
        </header>

        {/* The One Card */}
        {activeEntry ? (
          <UploadNow
            entry={activeEntry}
            label={isToday ? 'Upload today' : `Next upload \u2014 ${daysUntil(today, activeEntry.date)} day${daysUntil(today, activeEntry.date) !== 1 ? 's' : ''} away`}
          />
        ) : (
          <div className="border border-[var(--border)] rounded-xl p-8 text-center">
            <p className="text-[var(--fg-muted)]">All {TOTAL_UPLOADS} videos have been uploaded. You&apos;re done.</p>
          </div>
        )}

        {/* Deity Progress */}
        <section className="mt-8">
          <button
            onClick={() => setShowProgress(!showProgress)}
            className="text-xs text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors cursor-pointer mb-3"
          >
            {showProgress ? 'Hide' : 'Show'} deity progress
          </button>
          {showProgress && <DeityProgress schedule={schedule} />}
        </section>

        {/* Upcoming Queue */}
        {upcoming.length > 0 && (
          <section className="mt-6">
            <button
              onClick={() => setShowFullSchedule(!showFullSchedule)}
              className="text-xs text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors cursor-pointer mb-3"
            >
              {showFullSchedule ? 'Hide' : 'Show'} full schedule ({upcoming.length} remaining)
            </button>

            {showFullSchedule && (
              <div className="space-y-1">
                {upcoming.map(entry => {
                  const isNext = activeEntry && entry.index === activeEntry.index && !isToday;
                  return (
                    <div
                      key={entry.index}
                      className={`flex items-center gap-2 px-3 py-2 rounded text-xs ${
                        isNext ? 'bg-green-950/20 border border-green-900/40' : ''
                      }`}
                    >
                      <span className="text-[var(--fg-muted)] font-mono w-20 shrink-0">{formatShort(entry.date)}</span>
                      <span className={`px-1.5 py-0.5 rounded font-mono shrink-0 ${
                        entry.language === 'hi' ? 'bg-orange-950 text-orange-300' : 'bg-blue-950 text-blue-300'
                      }`}>
                        {entry.language.toUpperCase()}
                      </span>
                      <span className="text-[var(--fg-muted)] shrink-0">{entry.deityNameEn}</span>
                      <span className="text-[var(--fg)] truncate">{entry.titleEn}</span>
                      <span className="ml-auto shrink-0">
                        {entry.generated ? (
                          <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                        ) : (
                          <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 inline-block" />
                        )}
                      </span>
                    </div>
                  );
                })}
              </div>
            )}
          </section>
        )}

        {/* Footer */}
        <footer className="mt-12 pt-4 border-t border-[var(--border)] text-[10px] text-[var(--fg-muted)]">
          Every 2 days &middot; 8 PM EST (EN) / 8 PM IST (HI) &middot; {TOTAL_UPLOADS} total &middot; 9 deities &middot; 59 hymns
        </footer>
      </main>
    </>
  );
}

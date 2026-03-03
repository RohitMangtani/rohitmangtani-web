'use client';

export default function ExportPDFButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="text-xs text-[var(--fg-muted)] uppercase tracking-wider hover:opacity-60 print:hidden cursor-pointer"
    >
      Export PDF
    </button>
  );
}

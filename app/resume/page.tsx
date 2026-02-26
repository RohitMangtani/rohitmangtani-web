'use client';

import Nav from '@/components/Nav';
import { resumeData } from '@/data/resume';

export default function ResumePage() {
  return (
    <>
      <Nav />
      <main className="max-w-[720px] mx-auto px-4 sm:px-6 py-10 sm:py-16 print:py-0 print:px-0 print:max-w-none">
        {/* Download button — hidden in print */}
        <div className="mb-6 sm:mb-8 flex items-center justify-between print:hidden">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Resume</h1>
          <a
            href="/resume/Rohit_Mangtani_Resume.pdf"
            download="Rohit_Mangtani_Resume.pdf"
            className="px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium border border-[var(--border)] rounded-lg hover:bg-[var(--bg-secondary)] transition-colors shrink-0"
          >
            Download PDF
          </a>
        </div>

        {/* Resume content */}
        <div className="border border-[var(--border)] rounded-lg p-4 sm:p-8 bg-white print:border-none print:rounded-none print:p-0">
          {/* Header */}
          <header className="text-center mb-6 pb-4 border-b border-[var(--border)]">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-2">{resumeData.name}</h2>
            <div className="text-xs sm:text-sm text-[var(--fg-muted)] flex flex-wrap justify-center gap-x-2 gap-y-0.5">
              <span>{resumeData.location}</span>
              <span className="hidden sm:inline">|</span>
              <span>{resumeData.phone}</span>
              <span className="hidden sm:inline">|</span>
              <span>{resumeData.email}</span>
              <span className="hidden sm:inline">|</span>
              <span>{resumeData.linkedin}</span>
            </div>
          </header>

          {/* Education */}
          <section className="mb-5">
            <h3 className="text-sm font-bold uppercase tracking-wider border-b border-[var(--fg)] pb-1 mb-3">Education</h3>
            {resumeData.education.map((edu, i) => (
              <div key={i} className="mb-3">
                <div className="flex flex-wrap justify-between items-baseline gap-x-2">
                  <span className="font-semibold text-sm">{edu.school}</span>
                  <span className="text-xs text-[var(--fg-muted)]">{edu.location}</span>
                </div>
                {edu.degrees.map((deg, j) => (
                  <div key={j} className="flex flex-wrap justify-between items-baseline gap-x-2">
                    <span className="text-sm italic">{deg.title}</span>
                    <span className="text-xs text-[var(--fg-muted)]">{deg.date}</span>
                  </div>
                ))}
                <p className="text-xs text-[var(--fg-muted)] mt-1">
                  <strong className="text-[var(--fg)]">Relevant Coursework:</strong> {edu.coursework}
                </p>
              </div>
            ))}
          </section>

          {/* Work Experience */}
          <section className="mb-5">
            <h3 className="text-sm font-bold uppercase tracking-wider border-b border-[var(--fg)] pb-1 mb-3">Work Experience</h3>
            {resumeData.experience.map((exp, i) => (
              <div key={i} className="mb-4">
                <div className="flex flex-wrap justify-between items-baseline gap-x-2">
                  <span className="font-semibold text-sm">{exp.company}</span>
                  <span className="text-xs text-[var(--fg-muted)]">{exp.location}</span>
                </div>
                <div className="flex flex-wrap justify-between items-baseline gap-x-2">
                  <span className="text-sm italic">{exp.title}</span>
                  <span className="text-xs text-[var(--fg-muted)]">{exp.dates}</span>
                </div>
                <ul className="mt-1.5 space-y-1">
                  {exp.bullets.map((bullet, j) => (
                    <li key={j} className="text-sm text-[var(--fg-muted)] pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[var(--fg-muted)]">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* Projects */}
          {resumeData.projects.length > 0 && (
            <section className="mb-5">
              <h3 className="text-sm font-bold uppercase tracking-wider border-b border-[var(--fg)] pb-1 mb-3">Projects</h3>
              {resumeData.projects.map((proj, i) => (
                <div key={i} className="mb-3">
                  <span className="font-semibold text-sm">{proj.name}</span>
                  <ul className="mt-1 space-y-1">
                    {proj.bullets.map((bullet, j) => (
                      <li key={j} className="text-sm text-[var(--fg-muted)] pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[var(--fg-muted)]">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>
          )}

          {/* Leadership */}
          <section className="mb-5">
            <h3 className="text-sm font-bold uppercase tracking-wider border-b border-[var(--fg)] pb-1 mb-3">Leadership Experience</h3>
            {resumeData.leadership.map((lead, i) => (
              <div key={i} className="mb-3">
                <div className="flex flex-wrap justify-between items-baseline gap-x-2">
                  <span className="font-semibold text-sm">{lead.org}</span>
                  <span className="text-xs text-[var(--fg-muted)]">{lead.location}</span>
                </div>
                <div className="flex flex-wrap justify-between items-baseline gap-x-2">
                  <span className="text-sm italic">{lead.title}</span>
                  <span className="text-xs text-[var(--fg-muted)]">{lead.dates}</span>
                </div>
                <ul className="mt-1 space-y-1">
                  {lead.bullets.map((bullet, j) => (
                    <li key={j} className="text-sm text-[var(--fg-muted)] pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[var(--fg-muted)]">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* Skills */}
          <section>
            <h3 className="text-sm font-bold uppercase tracking-wider border-b border-[var(--fg)] pb-1 mb-3">Skills & Interests</h3>
            {resumeData.skills.map((skill, i) => (
              <p key={i} className="text-sm text-[var(--fg-muted)] mb-1">
                <strong className="text-[var(--fg)]">{skill.category}:</strong> {skill.items}
              </p>
            ))}
          </section>
        </div>
      </main>
    </>
  );
}

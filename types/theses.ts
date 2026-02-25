// Thesis Data Schema (academic/conceptual theses)
// Extends base article type

import type { ArticleBase, Reference, TableData, ContentSection } from './base';

export type { Reference, TableData, ContentSection };

// Thesis-specific section with richer subsection support
export interface ThesisSection extends ContentSection {
  subsections?: {
    id?: string;
    title: string;
    content: string;
    table?: TableData;
    list?: string[];
  }[];
}

export interface ThesisArticleData extends Omit<ArticleBase, 'sections'> {
  // Thesis uses richer sections
  sections: ThesisSection[];

  // Intro paragraph (optional)
  intro?: string;

  // Footer
  footerText?: string;
}

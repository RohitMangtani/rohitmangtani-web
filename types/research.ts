// Research Article Data Schema
// Extends base article type

import type { ArticleBase, Reference, TableData, ContentSection } from './base';

export type { Reference, TableData, ContentSection };

export interface KeyNumber {
  value: string;
  label: string;
  color?: 'green' | 'blue' | 'yellow' | 'zinc' | 'red';
}

export interface ResearchData extends ArticleBase {
  // Optional version tag
  version?: string;

  // Optional key numbers grid
  keyNumbers?: KeyNumber[];

  // Optional claim box
  claim?: string;

  // Related work links
  relatedWork?: {
    title: string;
    href: string;
  }[];

  // Footer
  footerVersion?: string;
}

// Unified Base Article Schema
// All content types (research, theses, speculation) extend from this

export interface Reference {
  text: string;
  url?: string;
}

export interface TableData {
  headers: string[];
  rows: { [key: string]: string }[];
}

export interface ContentSection {
  id: string;
  title: string;
  content: string; // HTML string
  subsections?: {
    id?: string;
    title: string;
    content: string;
    table?: TableData;
    list?: string[];
  }[];
  table?: TableData;
}

// Standard reader on-ramp block - consistent across all content types
export interface OnRamp {
  description: string;
  whatItDoes: string;
  whatItDoesNot: string;
  howToRead?: string;
}

// Base article data that all content types share
export interface ArticleBase {
  // Meta
  slug: string;
  date: string;
  title: string;
  subtitle: string;

  // Reader on-ramp (consistent naming across all types)
  onRamp: OnRamp;

  // Main content sections
  sections: ContentSection[];

  // References
  references?: Reference[];

  // Data availability notes
  dataAvailability?: string[];
}

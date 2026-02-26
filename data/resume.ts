// Resume data — edit this file to update the website resume.
// After changes, regenerate the PDF with:
//   pandoc (source docx) -o public/resume/Rohit_Mangtani_Resume.pdf --pdf-engine=tectonic -V geometry:margin=0.75in -V fontsize=11pt
// Or ask Claude to regenerate it from this data.

export interface ResumeData {
  name: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  education: {
    school: string;
    location: string;
    degrees: { title: string; date: string }[];
    coursework: string;
  }[];
  experience: {
    company: string;
    location: string;
    title: string;
    dates: string;
    bullets: string[];
  }[];
  projects: {
    name: string;
    bullets: string[];
  }[];
  leadership: {
    org: string;
    location: string;
    title: string;
    dates: string;
    bullets: string[];
  }[];
  skills: {
    category: string;
    items: string;
  }[];
}

export const resumeData: ResumeData = {
  name: 'Rohit Vijay Mangtani',
  location: 'Nashua, NH',
  phone: '603.305.0320',
  email: 'mangtani.rohit20@gmail.com',
  linkedin: 'linkedin.com/in/rohitmangtani',

  education: [
    {
      school: 'Bentley University',
      location: 'Waltham, MA',
      degrees: [
        { title: 'Master of Business Administration in Business Analytics', date: 'May 2024' },
        { title: 'Bachelor of Science in Computer Information Systems, Minor in Finance', date: 'May 2023' },
      ],
      coursework: 'Finance and Economics | Quantitative and Statistical Analysis | Data Management | Operations',
    },
  ],

  experience: [
    {
      company: 'Royal Bank of Canada (RBC)',
      location: 'Jersey City, NJ',
      title: 'Fixed Income Operations Analyst',
      dates: 'June 2024 – Present',
      bullets: [
        'Execute daily cross-system reconciliations across multiple fixed income entities, validating transaction-level data between internal platforms and external counterparties to ensure position accuracy and control integrity',
        'Isolate and diagnose funding discrepancies by extracting account-level transaction data and performing root-cause analysis across settlement, cash, and journal records to resolve breaks before downstream impact',
        'Identified structural inefficiencies in daily reconciliation workflows; redesigned Excel-based templating processes to reduce redundant manual steps and improve data consistency across reporting cycles',
        'Monitor trial balance variances across independent source systems, flagging anomalies that indicate upstream data quality degradation or potential control failures',
        'Evaluate reconciliation processes for automation potential by categorizing workflows as rules-based vs. judgment-dependent, scoping systematic reduction of manual overhead',
      ],
    },
    {
      company: 'Fidelity Investments',
      location: 'Boston, MA',
      title: 'Technology Risk Analyst Intern',
      dates: 'June 2022 – August 2022 | June 2023 – August 2023',
      bullets: [
        'Enhanced data integrity across 3 platforms; uncovered 100+ inconsistencies in audit-related documents',
        'Created a PowerBI dashboard enabling business units to filter and view specific controls related to their applications',
        'Improved internal audit processes by tracking findings, documenting control inconsistencies, and presenting solutions to business unit leads and the audit committee',
        'Gained in-depth knowledge in service organization controls (SOC) reporting and IT general control assessments',
        'Placed first in paper trading competition for interns',
      ],
    },
    {
      company: 'Carbix Corporation',
      location: 'Quincy, MA',
      title: 'Finance Intern',
      dates: 'June 2020 – September 2020',
      bullets: [
        'Supported Carbix\'s growth by creating financial models, including competitive analysis, cost models, and LOIs',
        'Facilitated discussions with 10+ clients to identify partnerships and tax advantages to reduce expenditures',
        'Implemented strategy to increase brand awareness for venture capitalists',
      ],
    },
    {
      company: 'Allegro Microsystems',
      location: 'Manchester, NH',
      title: 'Corporate Finance Intern',
      dates: 'December 2019 – January 2020',
      bullets: [
        'Formulated a system to import updated foreign exchange rates from a trusted source into proprietary reports',
        'Monitored reports and identified cost-saving opportunities at Allegro manufacturing facilities worldwide',
        'Analyzed competitors\' forecasted expenses and financial statements to highlight opportunities for improvement',
      ],
    },
  ],

  projects: [
    {
      name: 'RMGTNI — Financial Intelligence & Research Platform',
      bullets: [
        'Built a full-stack market research platform (Next.js, TypeScript, Python) with 79 internal modules spanning signal detection, regime classification, event-driven analysis, and automated backtesting',
        'Engineered a real-time signal pipeline integrating yfinance, FRED, Finnhub, and Polygon data with event detectors for Fed decisions, earnings, VIX regime shifts, yield curve inversions, and commodity moves',
        'Designed and implemented a scenario-first trading intelligence architecture with regime-conditional scoring, signal decay tracking, out-of-sample validation, and honest-mode invalidation triggers',
        'Published 12+ quantitative research articles including multi-asset correlation analysis (364 days of price data), market persistence studies (736 days, $130B volume), and macro liquidity signal dashboards',
      ],
    },
    {
      name: 'Medicaid Provider Fraud Detection',
      bullets: [
        'Built a two-phase anomaly detection system identifying statistical outliers in Medicaid provider spending patterns across billing categories and geographic regions',
        'Applied cross-validation techniques in Phase 2 to reduce false positive rates and isolate high-confidence fraud indicators from legitimate variance',
      ],
    },
  ],

  leadership: [
    {
      org: 'Bentley Streetwear Society',
      location: 'Waltham, MA',
      title: 'Co-Founder & Co-President',
      dates: 'September 2021 – May 2023',
      bullets: [
        'Directed and supervised overall operations, including educational content and member engagement',
        'Organized monthly marketplace events with participation from 10+ vendors and 300+ students',
      ],
    },
  ],

  skills: [
    { category: 'Skills', items: 'Financial Modeling, Analytical Skills, Agile Methodologies, Strategic Thinking, Communication, Collaboration' },
    { category: 'Applications', items: 'Microsoft Word, Microsoft Excel, Microsoft PowerPoint, JIRA, Confluence, PowerBI, Tableau, Alteryx, Snowflake, PyCharm, Eclipse, Rstudio, MySQL, SAP, ServiceNOW, Bloomberg, Morningstar' },
    { category: 'Computer Languages', items: 'Python, R, SQL, HTML, CSS' },
    { category: 'Interests', items: 'Thematic Investing, Collecting Novelty Shoes, Music Production, Taekwondo (Black Belt II)' },
  ],
};

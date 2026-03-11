import { execSync } from 'child_process';
import { writeFileSync, mkdirSync, existsSync, unlinkSync } from 'fs';
import { join } from 'path';

import { thePositiveLoopData } from '../data/research/the-positive-loop';
import { honestGamblingData } from '../data/research/honest-gambling';
import { theHumanYieldData } from '../data/research/the-human-yield';
import { theFutureOfPmData } from '../data/research/the-future-of-pm';
import { theHumanSensorLayerData } from '../data/research/the-human-sensor-layer';
import { theHumanBridgeData } from '../data/research/the-human-bridge';
import { theFiveInputsData } from '../data/research/the-five-inputs';
import { theGameableSocietyData } from '../data/theses/the-gameable-society';
import { theCompoundData } from '../data/research/the-compound';
import { theSplitData } from '../data/research/the-split';
import { closeYourEyesData } from '../data/research/close-your-eyes';
import { hiveData } from '../data/research/hive';
import { safeModeData } from '../data/research/safe-mode';
import { techIsNotTechAnymoreData } from '../data/research/tech-is-not-tech-anymore';
import { theReferencePointData } from '../data/research/the-reference-point';
import { aVisualWorkflowForAiAgentsData } from '../data/research/a-visual-workflow-for-ai-agents';

const articles: Record<string, { slug: string; title: string; subtitle: string; sections: any[] }> = {
  'the-positive-loop': thePositiveLoopData,
  'honest-gambling': honestGamblingData,
  'the-human-yield': theHumanYieldData,
  'the-future-of-pm': theFutureOfPmData,
  'the-human-sensor-layer': theHumanSensorLayerData,
  'the-human-bridge': theHumanBridgeData,
  'the-five-inputs': theFiveInputsData,
  'the-gameable-society': theGameableSocietyData,
  'the-compound': theCompoundData,
  'the-split': theSplitData,
  'close-your-eyes': closeYourEyesData,
  'hive': hiveData,
  'safe-mode': safeModeData,
  'tech-is-not-tech-anymore': techIsNotTechAnymoreData,
  'the-reference-point': theReferencePointData,
  'a-visual-workflow-for-ai-agents': aVisualWorkflowForAiAgentsData,
};

const VOICE = 'en-US-AriaNeural';
const OUTPUT_DIR = join(process.cwd(), 'public', 'audio');

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

function extractText(data: typeof articles[string]): string {
  const parts: string[] = [];

  parts.push(data.title);
  if (data.subtitle) parts.push(data.subtitle);
  parts.push('');

  for (const section of data.sections) {
    parts.push(section.title);
    const text = stripHtml(section.content);
    if (text) parts.push(text);

    if (section.subsections) {
      for (const sub of section.subsections) {
        parts.push(sub.title);
        const subText = stripHtml(sub.content);
        if (subText) parts.push(subText);
        if (sub.list) {
          for (const item of sub.list) {
            const t = stripHtml(item);
            if (t) parts.push(t);
          }
        }
      }
    }
    parts.push('');
  }

  return parts.join('\n\n');
}

async function generateOne(slug: string) {
  const data = articles[slug];
  if (!data) {
    console.error(`Unknown slug: ${slug}`);
    process.exit(1);
  }

  const text = extractText(data);
  const tmpFile = join(OUTPUT_DIR, `${slug}.txt`);
  const outFile = join(OUTPUT_DIR, `${slug}.mp3`);

  writeFileSync(tmpFile, text, 'utf-8');

  console.log(`Generating ${slug}...`);
  try {
    execSync(
      `python3 -m edge_tts --voice "${VOICE}" --file "${tmpFile}" --write-media "${outFile}"`,
      { stdio: 'inherit' }
    );
    console.log(`  -> ${outFile}`);
  } finally {
    if (existsSync(tmpFile)) unlinkSync(tmpFile);
  }
}

async function main() {
  mkdirSync(OUTPUT_DIR, { recursive: true });

  const arg = process.argv[2];

  if (!arg || arg === '--all') {
    for (const slug of Object.keys(articles)) {
      await generateOne(slug);
    }
  } else {
    await generateOne(arg);
  }

  console.log('Done.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

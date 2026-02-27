/**
 * Sacred Hymns YouTube Channel — Upload Dashboard Data
 *
 * 9 deities, 59 hymns, bilingual (EN + HI) = 118 uploads.
 * Pipeline: python3 pipeline.py --deity {id} --lang {lang}
 * Each pipeline run generates ALL chapters for a deity+language at once.
 */

export const START_DATE = '2026-02-26';
export const INTERVAL_DAYS = 2;
export const OUTPUT_BASE = '~/factory/projects/rmgtni-web/tools/sleep-history-yt/output';

export const BASE_TAGS_EN = [
  'hinduism', 'hindu hymns', 'hindu stotra', 'sleep story', 'bedtime story',
  'hindu mythology for sleep', 'sanatan dharma', 'indian mythology',
  'relaxing', 'fall asleep', 'meditation', 'devotional',
];

export const BASE_TAGS_HI = [
  'हिंदू स्तोत्र', 'सनातन धर्म', 'नींद की कहानी', 'भक्ति',
  'ध्यान', 'hinduism', 'hindu hymns', 'sleep story',
  'devotional hindi', 'स्तोत्र पाठ',
];

// ── Types ────────────────────────────────────────────────

interface HymnDef {
  titleEn: string;
  titleHi: string;
  slug: string; // matches output dir: ch{NN}_{slug}
}

interface DeityDef {
  id: string;
  nameEn: string;
  nameHi: string;
  playlistEn: string;
  playlistHi: string;
  tagsEn: string[];
  tagsHi: string[];
  generated: { en: boolean; hi: boolean };
  hymns: HymnDef[];
}

// ── Deities & Hymns ──────────────────────────────────────

export const DEITIES: DeityDef[] = [
  {
    id: 'ganesha',
    nameEn: 'Ganesha', nameHi: 'गणेश',
    playlistEn: 'Sacred Hymns of Lord Ganesha', playlistHi: 'भगवान गणेश के पवित्र स्तोत्र',
    tagsEn: ['Ganesha', 'Ganesh stotra', 'Ganpati', 'remover of obstacles', 'Vinayaka'],
    tagsHi: ['गणेश', 'गणपति', 'विघ्नहर्ता', 'गणेश स्तोत्र', 'विनायक'],
    generated: { en: true, hi: false },
    hymns: [
      { titleEn: 'Vakratunda Mahakaya — The Great Invocation', titleHi: 'वक्रतुण्ड महाकाय — महान आवाहन', slug: 'vakratunda_mahakaya' },
      { titleEn: 'Ganesh Atharvashirsha — The Vedic Hymn', titleHi: 'गणेश अथर्वशीर्ष — वैदिक स्तोत्र', slug: 'ganesh_atharvashirsha' },
      { titleEn: 'Sankat Nashan Ganesh Stotra — Destroyer of Difficulties', titleHi: 'संकट नाशन गणेश स्तोत्र — कठिनाइयों का नाश', slug: 'sankat_nashan_ganesh_stotra' },
      { titleEn: 'Ganesh Chalisa — Forty Verses of Devotion', titleHi: 'गणेश चालीसा — भक्ति के चालीस छंद', slug: 'ganesh_chalisa' },
      { titleEn: 'Jai Ganesh Deva — The Beloved Aarti', titleHi: 'जय गणेश देवा — प्रिय आरती', slug: 'jai_ganesh_deva' },
      { titleEn: 'Siddhi Vinayak Stotram — Lord of Success', titleHi: 'सिद्धि विनायक स्तोत्रम् — सफलता के देवता', slug: 'siddhi_vinayak_stotram' },
      { titleEn: 'Ganesha Ashtakam — Eight Verses of Praise', titleHi: 'गणेश अष्टकम् — आठ स्तुति छंद', slug: 'ganesha_ashtakam' },
    ],
  },
  {
    id: 'shiva',
    nameEn: 'Shiva', nameHi: 'शिव',
    playlistEn: 'Sacred Hymns of Lord Shiva', playlistHi: 'भगवान शिव के पवित्र स्तोत्र',
    tagsEn: ['Shiva', 'Mahadev', 'Shiv stotra', 'Om Namah Shivaya', 'Shiva meditation'],
    tagsHi: ['शिव', 'महादेव', 'शिव स्तोत्र', 'ॐ नमः शिवाय', 'भोलेनाथ'],
    generated: { en: false, hi: false },
    hymns: [
      { titleEn: 'Shiv Tandav Stotram — Ravana\'s Thunderous Hymn', titleHi: 'शिव तांडव स्तोत्रम् — रावण का गर्जनापूर्ण स्तोत्र', slug: 'shiv_tandav_stotram' },
      { titleEn: 'Lingashtakam — Eight Verses on the Sacred Linga', titleHi: 'लिंगाष्टकम् — पवित्र लिंग के आठ छंद', slug: 'lingashtakam' },
      { titleEn: 'Shiv Chalisa — Forty Verses to Mahadev', titleHi: 'शिव चालीसा — महादेव के चालीस छंद', slug: 'shiv_chalisa' },
      { titleEn: 'Rudrashtakam — Tulsidas\'s Eight Verses', titleHi: 'रुद्राष्टकम् — तुलसीदास के आठ छंद', slug: 'rudrashtakam' },
      { titleEn: 'Shiv Mahimna Stotram — The Glory of Shiva', titleHi: 'शिव महिम्न स्तोत्रम् — शिव की महिमा', slug: 'shiv_mahimna_stotram' },
      { titleEn: 'Om Jai Shiv Omkara — The Universal Aarti', titleHi: 'ॐ जय शिव ओमकारा — सार्वभौमिक आरती', slug: 'om_jai_shiv_omkara' },
      { titleEn: 'Bilvashtakam — The Sacred Bilva Leaves', titleHi: 'बिल्वाष्टकम् — पवित्र बिल्व पत्र', slug: 'bilvashtakam' },
      { titleEn: 'Panchakshari Stotram — The Five Sacred Syllables', titleHi: 'पंचाक्षरी स्तोत्रम् — पाँच पवित्र अक्षर', slug: 'panchakshari_stotram' },
      { titleEn: 'Dwadash Jyotirlinga Stotram — The Twelve Sacred Shrines', titleHi: 'द्वादश ज्योतिर्लिंग स्तोत्रम् — बारह पवित्र मंदिर', slug: 'dwadash_jyotirlinga_stotram' },
    ],
  },
  {
    id: 'vishnu',
    nameEn: 'Vishnu & Krishna', nameHi: 'विष्णु और कृष्ण',
    playlistEn: 'Sacred Hymns of Lord Vishnu & Krishna', playlistHi: 'भगवान विष्णु और कृष्ण के पवित्र स्तोत्र',
    tagsEn: ['Vishnu', 'Krishna', 'Hari', 'Narayana', 'Vishnu stotra', 'Krishna bhajan'],
    tagsHi: ['विष्णु', 'कृष्ण', 'हरि', 'नारायण', 'विष्णु स्तोत्र', 'कृष्ण भजन'],
    generated: { en: false, hi: false },
    hymns: [
      { titleEn: 'Vishnu Sahasranama — The Thousand Names', titleHi: 'विष्णु सहस्रनाम — सहस्र नाम', slug: 'vishnu_sahasranama' },
      { titleEn: 'Madhurashtakam — The Sweetness of Krishna', titleHi: 'मधुराष्टकम् — कृष्ण की मधुरता', slug: 'madhurashtakam' },
      { titleEn: 'Govind Damodar Stotram — Names of Baby Krishna', titleHi: 'गोविंद दामोदर स्तोत्रम् — बाल कृष्ण के नाम', slug: 'govind_damodar_stotram' },
      { titleEn: 'Achyutam Keshavam — The Eternal Lord', titleHi: 'अच्युतम् केशवम् — शाश्वत भगवान', slug: 'achyutam_keshavam' },
      { titleEn: 'Om Jai Jagdish Hare — The Most Popular Aarti', titleHi: 'ॐ जय जगदीश हरे — सबसे लोकप्रिय आरती', slug: 'om_jai_jagdish_hare' },
      { titleEn: 'Narayana Suktam — The Vedic Hymn to Vishnu', titleHi: 'नारायण सूक्तम् — विष्णु का वैदिक स्तोत्र', slug: 'narayana_suktam' },
      { titleEn: 'Dashavatara Stotram — The Ten Incarnations', titleHi: 'दशावतार स्तोत्रम् — दस अवतार', slug: 'dashavatara_stotram' },
      { titleEn: 'Krishna Chalisa — Forty Verses to the Dark Lord', titleHi: 'कृष्ण चालीसा — श्याम के चालीस छंद', slug: 'krishna_chalisa' },
      { titleEn: 'Vishnu Chalisa — Forty Verses to the Preserver', titleHi: 'विष्णु चालीसा — पालनकर्ता के चालीस छंद', slug: 'vishnu_chalisa' },
    ],
  },
  {
    id: 'hanuman',
    nameEn: 'Hanuman', nameHi: 'हनुमान',
    playlistEn: 'Sacred Hymns of Lord Hanuman', playlistHi: 'भगवान हनुमान के पवित्र स्तोत्र',
    tagsEn: ['Hanuman', 'Bajrangbali', 'Hanuman Chalisa', 'Pawanputra', 'Hanuman stotra'],
    tagsHi: ['हनुमान', 'बजरंगबली', 'हनुमान चालीसा', 'पवनपुत्र', 'हनुमान स्तोत्र'],
    generated: { en: false, hi: false },
    hymns: [
      { titleEn: 'Hanuman Chalisa — The Most Recited Prayer in the World', titleHi: 'हनुमान चालीसा — विश्व की सबसे पढ़ी जाने वाली प्रार्थना', slug: 'hanuman_chalisa' },
      { titleEn: 'Bajrang Baan — The Arrow of Hanuman', titleHi: 'बजरंग बाण — हनुमान का बाण', slug: 'bajrang_baan' },
      { titleEn: 'Hanuman Ashtak — Eight Verses by Tulsidas', titleHi: 'हनुमान अष्टक — तुलसीदास के आठ छंद', slug: 'hanuman_ashtak' },
      { titleEn: 'Hanuman Aarti — Aarti Kije Hanuman Lala Ki', titleHi: 'हनुमान आरती — आरती कीजै हनुमान लला की', slug: 'hanuman_aarti' },
      { titleEn: 'Sankat Mochan Hanumanashtak — Reliever of Distress', titleHi: 'संकट मोचन हनुमानाष्टक — संकट हरने वाले', slug: 'sankat_mochan_hanumanashtak' },
      { titleEn: 'Hanuman Bahuk — Tulsidas\'s Healing Prayer', titleHi: 'हनुमान बाहुक — तुलसीदास की उपचार प्रार्थना', slug: 'hanuman_bahuk' },
    ],
  },
  {
    id: 'durga',
    nameEn: 'Durga', nameHi: 'दुर्गा',
    playlistEn: 'Sacred Hymns of Goddess Durga', playlistHi: 'देवी दुर्गा के पवित्र स्तोत्र',
    tagsEn: ['Durga', 'Devi', 'Shakti', 'Divine Mother', 'Durga stotra', 'Navratri'],
    tagsHi: ['दुर्गा', 'देवी', 'शक्ति', 'दिव्य माँ', 'दुर्गा स्तोत्र', 'नवरात्रि'],
    generated: { en: false, hi: false },
    hymns: [
      { titleEn: 'Ya Devi Sarvabhuteshu — The Goddess in All Beings', titleHi: 'या देवी सर्वभूतेषु — सभी प्राणियों में देवी', slug: 'ya_devi_sarvabhuteshu' },
      { titleEn: 'Mahishasura Mardini Stotram — Slayer of the Buffalo Demon', titleHi: 'महिषासुर मर्दिनी स्तोत्रम् — महिषासुर का वध', slug: 'mahishasura_mardini_stotram' },
      { titleEn: 'Durga Chalisa — Forty Verses to the Divine Mother', titleHi: 'दुर्गा चालीसा — दिव्य माँ के चालीस छंद', slug: 'durga_chalisa' },
      { titleEn: 'Nav Durga Stuti — The Nine Forms of the Goddess', titleHi: 'नव दुर्गा स्तुति — देवी के नौ रूप', slug: 'nav_durga_stuti' },
      { titleEn: 'Durga Aarti — Ambe Tu Hai Jagdambe Kali', titleHi: 'दुर्गा आरती — अम्बे तू है जगदम्बे काली', slug: 'durga_aarti' },
      { titleEn: 'Argala Stotram — The Bolt of Protection', titleHi: 'अर्गला स्तोत्रम् — रक्षा का कवच', slug: 'argala_stotram' },
      { titleEn: 'Kali Stotram — Hymn to the Dark Mother', titleHi: 'काली स्तोत्रम् — काली माँ का स्तोत्र', slug: 'kali_stotram' },
    ],
  },
  {
    id: 'lakshmi',
    nameEn: 'Lakshmi', nameHi: 'लक्ष्मी',
    playlistEn: 'Sacred Hymns of Goddess Lakshmi', playlistHi: 'देवी लक्ष्मी के पवित्र स्तोत्र',
    tagsEn: ['Lakshmi', 'prosperity', 'Lakshmi stotra', 'Diwali', 'goddess of fortune'],
    tagsHi: ['लक्ष्मी', 'समृद्धि', 'लक्ष्मी स्तोत्र', 'दीवाली', 'धन की देवी'],
    generated: { en: false, hi: false },
    hymns: [
      { titleEn: 'Shri Suktam — The Vedic Hymn of Prosperity', titleHi: 'श्री सूक्तम् — समृद्धि का वैदिक स्तोत्र', slug: 'shri_suktam' },
      { titleEn: 'Kanakdhara Stotram — The Golden Rain', titleHi: 'कनकधारा स्तोत्रम् — सुनहरी वर्षा', slug: 'kanakdhara_stotram' },
      { titleEn: 'Lakshmi Chalisa — Forty Verses to the Goddess of Fortune', titleHi: 'लक्ष्मी चालीसा — भाग्य की देवी के चालीस छंद', slug: 'lakshmi_chalisa' },
      { titleEn: 'Om Jai Lakshmi Mata — The Most Beloved Aarti', titleHi: 'ॐ जय लक्ष्मी माता — सबसे प्रिय आरती', slug: 'om_jai_lakshmi_mata' },
      { titleEn: 'Ashtalakshmi Stotram — The Eight Forms of Abundance', titleHi: 'अष्टलक्ष्मी स्तोत्रम् — समृद्धि के आठ रूप', slug: 'ashtalakshmi_stotram' },
    ],
  },
  {
    id: 'saraswati',
    nameEn: 'Saraswati', nameHi: 'सरस्वती',
    playlistEn: 'Sacred Hymns of Goddess Saraswati', playlistHi: 'देवी सरस्वती के पवित्र स्तोत्र',
    tagsEn: ['Saraswati', 'goddess of knowledge', 'Saraswati stotra', 'wisdom', 'Vasant Panchami'],
    tagsHi: ['सरस्वती', 'विद्या की देवी', 'सरस्वती स्तोत्र', 'ज्ञान', 'वसंत पंचमी'],
    generated: { en: false, hi: false },
    hymns: [
      { titleEn: 'Ya Kundendu Tushar Hara — The Most Famous Invocation', titleHi: 'या कुन्देन्दु तुषार हार — सबसे प्रसिद्ध आवाहन', slug: 'ya_kundendu_tushar_hara' },
      { titleEn: 'Saraswati Vandana — Prayers for Knowledge', titleHi: 'सरस्वती वंदना — ज्ञान की प्रार्थना', slug: 'saraswati_vandana' },
      { titleEn: 'Saraswati Chalisa — Forty Verses to the Goddess of Learning', titleHi: 'सरस्वती चालीसा — विद्या की देवी के चालीस छंद', slug: 'saraswati_chalisa' },
      { titleEn: 'Saraswati Aarti — Lamp for the Goddess of Wisdom', titleHi: 'सरस्वती आरती — बुद्धि की देवी का दीप', slug: 'saraswati_aarti' },
      { titleEn: 'Medha Suktam — The Vedic Hymn for Intelligence', titleHi: 'मेधा सूक्तम् — बुद्धि का वैदिक स्तोत्र', slug: 'medha_suktam' },
    ],
  },
  {
    id: 'rama',
    nameEn: 'Rama', nameHi: 'राम',
    playlistEn: 'Sacred Hymns of Lord Rama', playlistHi: 'भगवान राम के पवित्र स्तोत्र',
    tagsEn: ['Rama', 'Ram', 'Ayodhya', 'Ram stotra', 'Jai Shri Ram', 'Ramayana'],
    tagsHi: ['राम', 'अयोध्या', 'राम स्तोत्र', 'जय श्री राम', 'रामायण'],
    generated: { en: false, hi: false },
    hymns: [
      { titleEn: 'Ram Raksha Stotra — The Armor of Rama\'s Protection', titleHi: 'राम रक्षा स्तोत्र — राम के रक्षा कवच', slug: 'ram_raksha_stotra' },
      { titleEn: 'Ram Stuti — Praises of the Ideal King', titleHi: 'राम स्तुति — आदर्श राजा की स्तुति', slug: 'ram_stuti' },
      { titleEn: 'Ram Chalisa — Forty Verses of Devotion', titleHi: 'राम चालीसा — भक्ति के चालीस छंद', slug: 'ram_chalisa' },
      { titleEn: 'Ram Aarti — The Light for Shri Ram', titleHi: 'राम आरती — श्री राम का दीप', slug: 'ram_aarti' },
      { titleEn: 'Ramashtak — Eight Verses of Pure Devotion', titleHi: 'रामाष्टक — शुद्ध भक्ति के आठ छंद', slug: 'ramashtak' },
      { titleEn: 'Ram Naam Mahima — The Power of Rama\'s Name', titleHi: 'राम नाम महिमा — राम नाम की शक्ति', slug: 'ram_naam_mahima' },
    ],
  },
  {
    id: 'surya',
    nameEn: 'Surya', nameHi: 'सूर्य',
    playlistEn: 'Sacred Hymns of Lord Surya', playlistHi: 'भगवान सूर्य के पवित्र स्तोत्र',
    tagsEn: ['Surya', 'Sun God', 'Surya stotra', 'Aditya', 'Gayatri Mantra', 'solar deity'],
    tagsHi: ['सूर्य', 'सूर्य देव', 'सूर्य स्तोत्र', 'आदित्य', 'गायत्री मंत्र'],
    generated: { en: false, hi: false },
    hymns: [
      { titleEn: 'Aditya Hridayam — The Heart of the Sun', titleHi: 'आदित्य हृदयम् — सूर्य का हृदय', slug: 'aditya_hridayam' },
      { titleEn: 'Gayatri Mantra — The Mother of All Mantras', titleHi: 'गायत्री मंत्र — सभी मंत्रों की माता', slug: 'gayatri_mantra' },
      { titleEn: 'Surya Chalisa — Forty Verses to the Sun God', titleHi: 'सूर्य चालीसा — सूर्य देव के चालीस छंद', slug: 'surya_chalisa' },
      { titleEn: 'Surya Ashtakam — Eight Verses to the Radiant One', titleHi: 'सूर्य अष्टकम् — प्रकाशमान देवता के आठ छंद', slug: 'surya_ashtakam' },
      { titleEn: 'Surya Namaskar Mantras — The Twelve Salutations', titleHi: 'सूर्य नमस्कार मंत्र — बारह अभिवादन', slug: 'surya_namaskar_mantras' },
    ],
  },
];

// ── Schedule Computation ─────────────────────────────────

export interface ScheduleEntry {
  index: number;
  date: Date;
  deityId: string;
  deityNameEn: string;
  deityNameHi: string;
  chapter: number;       // 1-based
  totalChapters: number;
  titleEn: string;
  titleHi: string;
  language: 'en' | 'hi';
  time: string;
  playlist: string;
  ytTitle: string;
  description: string;
  tags: string[];
  videoPath: string;
  thumbnailPath: string;
  subtitlesPath: string;
  pipelineCmd: string;
  generated: boolean;
}

function buildDescription(deityName: string, hymnTitle: string, lang: 'en' | 'hi'): string {
  if (lang === 'hi') {
    return `${hymnTitle} — शांतिपूर्ण नींद के लिए भक्तिमय कथा के रूप में वर्णित।

यह प्राचीन स्तोत्र सदियों से गाया जाता रहा है। यहाँ इसके अर्थ और पौराणिक कथाओं को एक शांत सोने की कहानी के रूप में सुनाया गया है।

🕉️ ${deityName} के पवित्र स्तोत्र श्रृंखला का भाग।
🙏 और अधिक हिंदू स्तोत्र और कथाओं के लिए सब्सक्राइब करें।`;
  }
  return `${hymnTitle} — narrated as a calming devotional story for deep sleep.

This ancient hymn has been chanted for centuries. Here, its meaning and mythology are woven into a peaceful bedtime narration.

🕉️ Part of the Sacred Hymns of ${deityName} series.
🙏 Subscribe for more Hindu hymns and mythology narrated for sleep.`;
}

/**
 * Upload order: deity by deity, EN then HI, chapters in sequence.
 * Total: 59 hymns × 2 languages = 118 uploads.
 */
export function computeSchedule(): ScheduleEntry[] {
  const start = new Date(START_DATE + 'T12:00:00');
  const entries: ScheduleEntry[] = [];
  let idx = 0;

  for (const deity of DEITIES) {
    for (const lang of ['en', 'hi'] as const) {
      for (let ch = 0; ch < deity.hymns.length; ch++) {
        const hymn = deity.hymns[ch];
        const chNum = ch + 1;
        const chPad = String(chNum).padStart(2, '0');
        const isHi = lang === 'hi';

        const date = new Date(start);
        date.setDate(start.getDate() + idx * INTERVAL_DAYS);

        const suffix = isHi ? '| हिंदू स्तोत्र नींद के लिए' : '| Hindu Hymns For Sleep';
        const title = isHi ? hymn.titleHi : hymn.titleEn;
        const baseTags = isHi ? BASE_TAGS_HI : BASE_TAGS_EN;
        const deityTags = isHi ? deity.tagsHi : deity.tagsEn;
        const basePath = `${OUTPUT_BASE}/${deity.id}/${lang}/ch${chPad}_${hymn.slug}`;

        entries.push({
          index: idx,
          date,
          deityId: deity.id,
          deityNameEn: deity.nameEn,
          deityNameHi: deity.nameHi,
          chapter: chNum,
          totalChapters: deity.hymns.length,
          titleEn: hymn.titleEn,
          titleHi: hymn.titleHi,
          language: lang,
          time: isHi ? '8:00 PM IST' : '8:00 PM EST',
          playlist: isHi ? deity.playlistHi : deity.playlistEn,
          ytTitle: `${title} ${suffix}`,
          description: buildDescription(isHi ? deity.nameHi : deity.nameEn, title, lang),
          tags: [...baseTags, ...deityTags],
          videoPath: `${basePath}/video_final.mp4`,
          thumbnailPath: `${basePath}/thumbnail.jpg`,
          subtitlesPath: `${basePath}/subtitles_clean.srt`,
          pipelineCmd: `python3 pipeline.py --deity ${deity.id} --lang ${lang}`,
          generated: deity.generated[lang],
        });
        idx++;
      }
    }
  }

  return entries;
}

// ── Stats ────────────────────────────────────────────────

export const TOTAL_HYMNS = DEITIES.reduce((sum, d) => sum + d.hymns.length, 0);
export const TOTAL_UPLOADS = TOTAL_HYMNS * 2;

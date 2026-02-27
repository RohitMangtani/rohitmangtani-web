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
  descriptionEn?: string;  // rich per-chapter description (from pipeline metadata)
  descriptionHi?: string;
  hymnTagsEn?: string[];   // chapter-specific tags
  hymnTagsHi?: string[];
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
    generated: { en: true, hi: true },
    hymns: [
      {
        titleEn: 'Vakratunda Mahakaya — The Great Invocation', titleHi: 'वक्रतुण्ड महाकाय — महान आवाहन', slug: 'vakratunda_mahakaya',
        descriptionEn: `Welcome to Part 1 of our 7-part series exploring the sacred hymns of Lord Ganesha! In this opening video, we dive deep into the most beloved and widely recited Ganesha invocation: "Vakratunda Mahakaya Suryakoti Samaprabha." This powerful mantra is traditionally chanted at the beginning of every Hindu ritual, prayer, and auspicious occasion to remove obstacles and invoke divine blessings.

Join us as we break down each Sanskrit word of this great invocation: Vakratunda (the curved trunk that removes obstacles), Mahakaya (the magnificent large body), Suryakoti (radiance equal to ten million suns), and Nirvighna (the remover of all impediments). Whether you're new to Hindu mantras or deepening your spiritual practice, this detailed explanation will help you understand the profound meaning behind these sacred words and their significance in Ganesha worship. Perfect for daily recitation and meditation.

🕉️ Part of the Sacred Hymns of Ganesha series.
🙏 Subscribe for more Hindu hymns and mythology narrated for sleep.`,
        descriptionHi: `भगवान गणेश के पवित्र स्तोत्रों की 7-भाग श्रृंखला के भाग 1 में आपका स्वागत है! इस पहले वीडियो में हम गणेश जी के सबसे प्रिय और सर्वाधिक पठित आवाहन मंत्र "वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ" (Vakratunda Mahakaya Suryakoti Samaprabha) की गहन व्याख्या करते हैं। यह शक्तिशाली मंत्र परंपरागत रूप से प्रत्येक हिंदू अनुष्ठान, पूजा और शुभ अवसर की शुरुआत में विघ्नों को दूर करने और दिव्य आशीर्वाद प्राप्त करने के लिए पढ़ा जाता है।

इस महान आवाहन के प्रत्येक संस्कृत शब्द को समझें: वक्रतुण्ड (curved trunk — विघ्नों को हटाने वाली घुमावदार सूंड), महाकाय (magnificent large body — भव्य विशाल शरीर), सूर्यकोटि (radiance of ten million suns — करोड़ सूर्यों के समान तेज), और निर्विघ्न (remover of all impediments — सभी बाधाओं को दूर करने वाले)। चाहे आप हिंदू मंत्रों में नए हों या अपनी आध्यात्मिक साधना को गहरा कर रहे हों, यह विस्तृत व्याख्या इन पवित्र शब्दों के गहन अर्थ और गणेश पूजा में उनके महत्व को समझने में सहायक होगी। दैनिक पाठ और ध्यान के लिए उत्तम।

🕉️ भगवान गणेश के पवित्र स्तोत्र श्रृंखला का भाग।
🙏 और अधिक हिंदू स्तोत्र और नींद के लिए कथाओं हेतु सब्सक्राइब करें।`,
        hymnTagsEn: ['Vakratunda Mahakaya', 'Suryakoti Samaprabha', 'Ganesha invocation mantra', 'Hindu ritual prayers', 'Sanskrit mantra meaning', 'obstacle remover prayer'],
        hymnTagsHi: ['वक्रतुण्ड महाकाय', 'सूर्यकोटि समप्रभ', 'गणेश आवाहन मंत्र', 'हिंदू पूजा मंत्र', 'संस्कृत मंत्र अर्थ', 'विघ्नहर्ता प्रार्थना'],
      },
      {
        titleEn: 'Ganesh Atharvashirsha — The Vedic Hymn', titleHi: 'गणेश अथर्वशीर्ष — वैदिक स्तोत्र', slug: 'ganesh_atharvashirsha',
        descriptionEn: `Welcome to Part 2 of our 7-part sacred series exploring the divine hymns of Lord Ganesha! In this episode, we delve deep into the profound "Ganesh Atharvashirsha" - one of the most powerful and philosophically rich Vedic hymns dedicated to Ganapati from the Atharva Veda Upanishads.

This sacred Upanishadic text reveals Ganesha not merely as the beloved remover of obstacles, but as the supreme reality itself - Brahman. The hymn's most profound declaration "Tvam eva pratyaksham tattvam asi" (You alone are the visible truth/reality) establishes Ganesha as the ultimate cosmic principle. We'll explore the deep Vedantic philosophy embedded in this ancient text, understanding how it presents Ganapati as both the manifest and unmanifest divine consciousness, bridging the gap between devotional practice and absolute spiritual realization.

🕉️ Part of the Sacred Hymns of Ganesha series.
🙏 Subscribe for more Hindu hymns and mythology narrated for sleep.`,
        descriptionHi: `भगवान गणेश के दिव्य स्तोत्रों की 7-भाग श्रृंखला के भाग 2 में आपका स्वागत है! इस कड़ी में हम गहन "गणेश अथर्वशीर्ष" (Ganesh Atharvashirsha) की विस्तृत व्याख्या करते हैं — अथर्ववेद उपनिषदों से गणपति को समर्पित सबसे शक्तिशाली और दार्शनिक रूप से समृद्ध वैदिक स्तोत्रों में से एक।

यह पवित्र उपनिषदिक ग्रंथ गणेश को केवल प्रिय विघ्नहर्ता के रूप में नहीं, बल्कि स्वयं परम सत्य — ब्रह्म (Brahman — the supreme reality) के रूप में प्रकट करता है। इस स्तोत्र की सबसे गहन घोषणा "त्वमेव प्रत्यक्षं तत्त्वमसि" (Tvam eva pratyaksham tattvam asi — You alone are the visible truth) गणेश को परम ब्रह्मांडीय सिद्धांत के रूप में स्थापित करती है। हम इस प्राचीन ग्रंथ में निहित गहन वेदांतिक दर्शन (Vedantic philosophy) को समझेंगे — कैसे यह गणपति को व्यक्त और अव्यक्त दोनों दिव्य चेतना के रूप में प्रस्तुत करता है, भक्ति साधना और परम आध्यात्मिक अनुभूति के बीच सेतु बनाता है।

🕉️ भगवान गणेश के पवित्र स्तोत्र श्रृंखला का भाग।
🙏 और अधिक हिंदू स्तोत्र और नींद के लिए कथाओं हेतु सब्सक्राइब करें।`,
        hymnTagsEn: ['Ganapati Atharvashirsha Upanishad', 'Tvam eva pratyaksham tattvam', 'Atharva Veda hymns', 'Ganesha as Brahman', 'Vedantic philosophy Ganesha', 'Atharvashirsha meaning'],
        hymnTagsHi: ['गणपति अथर्वशीर्ष उपनिषद', 'त्वमेव प्रत्यक्षं तत्त्वमसि', 'अथर्ववेद स्तोत्र', 'गणेश ब्रह्म स्वरूप', 'वेदांतिक दर्शन गणेश', 'अथर्वशीर्ष अर्थ'],
      },
      {
        titleEn: 'Sankat Nashan Ganesh Stotra — Destroyer of Difficulties', titleHi: 'संकट नाशन गणेश स्तोत्र — कठिनाइयों का नाश', slug: 'sankat_nashan_ganesh_stotra',
        descriptionEn: `Welcome to Part 3 of our 7-part series exploring the sacred hymns of Lord Ganesha! In this episode, we dive deep into the powerful "Sankat Nashan Ganesh Stotra" from the ancient Narada Purana - a divine prayer specifically designed to destroy difficulties and remove all obstacles from your path. This stotra is one of the most potent invocations to Lord Ganesha for those facing challenges in life, career, relationships, or spiritual practice.

Join us as we explore each verse of this sacred hymn with detailed explanations of how different aspects of Lord Ganesha's divine power work to eliminate specific types of obstacles. From financial troubles to health issues, from family conflicts to career blockages - each verse addresses different categories of difficulties that devotees commonly face. Learn the proper pronunciation, understand the deeper meaning, and discover how this ancient wisdom from the Narada Purana can transform your life by invoking Ganesha's role as the ultimate remover of obstacles (Vighnaharta).

🕉️ Part of the Sacred Hymns of Ganesha series.
🙏 Subscribe for more Hindu hymns and mythology narrated for sleep.`,
        descriptionHi: `भगवान गणेश के पवित्र स्तोत्रों की 7-भाग श्रृंखला के भाग 3 में आपका स्वागत है! इस कड़ी में हम प्राचीन नारद पुराण (Narada Purana) से शक्तिशाली "संकट नाशन गणेश स्तोत्र" (Sankat Nashan Ganesh Stotra) की गहन व्याख्या करते हैं — एक दिव्य प्रार्थना जो विशेष रूप से कठिनाइयों को नष्ट करने और आपके मार्ग से सभी बाधाओं को दूर करने के लिए रची गई है। यह स्तोत्र जीवन, करियर, रिश्तों या आध्यात्मिक साधना में चुनौतियों का सामना करने वालों के लिए भगवान गणेश के सबसे प्रभावशाली आवाहनों में से एक है।

इस पवित्र स्तोत्र के प्रत्येक श्लोक की विस्तृत व्याख्या सुनें — कैसे भगवान गणेश की दिव्य शक्ति के विभिन्न पहलू विशिष्ट प्रकार की बाधाओं को समाप्त करते हैं। आर्थिक कठिनाइयों (financial troubles) से लेकर स्वास्थ्य समस्याओं तक, पारिवारिक विवादों से लेकर करियर की रुकावटों तक — प्रत्येक श्लोक भक्तों की विभिन्न समस्याओं को संबोधित करता है। सही उच्चारण सीखें, गहरे अर्थ समझें, और जानें कि नारद पुराण की यह प्राचीन ज्ञान विघ्नहर्ता (Vighnaharta — the ultimate remover of obstacles) गणेश की कृपा से आपके जीवन को कैसे बदल सकती है।

🕉️ भगवान गणेश के पवित्र स्तोत्र श्रृंखला का भाग।
🙏 और अधिक हिंदू स्तोत्र और नींद के लिए कथाओं हेतु सब्सक्राइब करें।`,
        hymnTagsEn: ['Sankat Nashan Ganesh Stotra', 'Narada Purana Ganesha', 'obstacle removal prayer', 'Vighnaharta stotra', 'Ganesh mantra for difficulties', 'Hindu devotional stotra'],
        hymnTagsHi: ['संकट नाशन गणेश स्तोत्र', 'नारद पुराण गणेश', 'विघ्न निवारण प्रार्थना', 'विघ्नहर्ता स्तोत्र', 'कठिनाइयों के लिए गणेश मंत्र', 'हिंदू भक्ति स्तोत्र'],
      },
      {
        titleEn: 'Ganesh Chalisa — Forty Verses of Devotion', titleHi: 'गणेश चालीसा — भक्ति के चालीस छंद', slug: 'ganesh_chalisa',
        descriptionEn: `Welcome to Part 4 of our 7-part series exploring the sacred hymns of Lord Ganesha! In this video, we dive deep into the beloved Ganesh Chalisa - a powerful devotional hymn consisting of 40 verses that beautifully narrate the divine story of Ganesha's birth, his magnificent form, extraordinary powers, and the countless blessings he bestows upon devotees. We'll explore key verses of this Hindi poetry, examining the rich devotional language and spiritual significance embedded in each line.

This comprehensive guide takes you through the enchanting tale of Ganesha's miraculous birth from Mother Parvati's sandalwood paste, explaining how this beloved elephant-headed deity came to be the remover of obstacles and the lord of new beginnings. Whether you're learning the Ganesh Chalisa for the first time or deepening your understanding of its profound meanings, this video offers verse-by-verse explanations that will enhance your devotional practice and connection with Lord Ganesha. Perfect for devotees, students of Hindu scriptures, and anyone interested in the beautiful tradition of Ganesha worship.

🕉️ Part of the Sacred Hymns of Ganesha series.
🙏 Subscribe for more Hindu hymns and mythology narrated for sleep.`,
        descriptionHi: `भगवान गणेश के पवित्र स्तोत्रों की 7-भाग श्रृंखला के भाग 4 में आपका स्वागत है! इस वीडियो में हम प्रिय गणेश चालीसा (Ganesh Chalisa) की गहन व्याख्या करते हैं — 40 छंदों (40 verses) से युक्त एक शक्तिशाली भक्ति स्तोत्र जो गणेश जी के जन्म की दिव्य कथा, उनके भव्य स्वरूप, असाधारण शक्तियों और भक्तों पर उनकी अनगिनत कृपा का सुंदर वर्णन करता है। हम इस हिंदी काव्य के प्रमुख छंदों की व्याख्या करेंगे, प्रत्येक पंक्ति में निहित समृद्ध भक्ति भाषा और आध्यात्मिक महत्व को समझेंगे।

यह विस्तृत मार्गदर्शिका आपको माता पार्वती के चंदन लेप से गणेश जी के चमत्कारिक जन्म (Ganesha's miraculous birth from Parvati's sandalwood paste) की मनमोहक कथा से अवगत कराती है — कैसे ये प्रिय गजानन विघ्नहर्ता और नई शुरुआत के स्वामी बने। चाहे आप पहली बार गणेश चालीसा सीख रहे हों या इसके गहन अर्थों को और समझना चाहते हों, यह वीडियो श्लोक-दर-श्लोक व्याख्या प्रदान करता है जो भगवान गणेश के साथ आपकी भक्ति साधना और संबंध को और गहरा करेगी। भक्तों, हिंदू शास्त्रों के विद्यार्थियों और गणेश पूजा की सुंदर परंपरा में रुचि रखने वाले सभी के लिए उत्तम।

🕉️ भगवान गणेश के पवित्र स्तोत्र श्रृंखला का भाग।
🙏 और अधिक हिंदू स्तोत्र और नींद के लिए कथाओं हेतु सब्सक्राइब करें।`,
        hymnTagsEn: ['ganesh chalisa lyrics', '40 verses ganesha', 'parvati sandalwood story', 'hindi devotional poetry', 'ganesha birth story', 'chalisa meaning explained'],
        hymnTagsHi: ['गणेश चालीसा बोल', 'गणेश 40 छंद', 'पार्वती चंदन कथा', 'हिंदी भक्ति काव्य', 'गणेश जन्म कथा', 'चालीसा अर्थ सहित'],
      },
      {
        titleEn: 'Jai Ganesh Deva — The Beloved Aarti', titleHi: 'जय गणेश देवा — प्रिय आरती', slug: 'jai_ganesh_deva',
        descriptionEn: `Welcome to Part 5 of our 7-part sacred series exploring the divine hymns of Lord Ganesha! In this episode, we dive deep into "Jai Ganesh Deva" - the most beloved and widely sung Ganesha Aarti that resonates in temples, homes, and hearts across India. This timeless devotional song beautifully captures the essence of the elephant-headed deity through its melodious verses.

Join us as we explore each meaningful stanza of this cherished aarti, understanding the profound descriptions of Ganesha's divine form, his love for modak sweets, his sacred relationship with mother Parvati and father Shiva, and the symbolism of his faithful mouse vehicle Mushak. Whether you're seeking spiritual understanding or simply want to connect with this ancient tradition, this detailed explanation will enrich your devotional practice and deepen your connection with Vighnaharta Ganesha.

🕉️ Part of the Sacred Hymns of Ganesha series.
🙏 Subscribe for more Hindu hymns and mythology narrated for sleep.`,
        descriptionHi: `भगवान गणेश के दिव्य स्तोत्रों की 7-भाग श्रृंखला के भाग 5 में आपका स्वागत है! इस कड़ी में हम "जय गणेश देवा" (Jai Ganesh Deva) — सबसे प्रिय और व्यापक रूप से गाई जाने वाली गणेश आरती की गहन व्याख्या करते हैं जो पूरे भारत के मंदिरों, घरों और हृदयों में गूंजती है। यह कालातीत भक्ति गीत अपने मधुर छंदों के माध्यम से गजानन के सार को सुंदरता से प्रस्तुत करता है।

इस प्रिय आरती के प्रत्येक अर्थपूर्ण छंद को समझें — गणेश जी के दिव्य स्वरूप का वर्णन, मोदक (modak — their favorite sweet) के प्रति उनका प्रेम, माता पार्वती और पिता शिव (mother Parvati and father Shiva) के साथ उनका पवित्र संबंध, और उनके विश्वासपात्र वाहन मूषक (Mushak — the faithful mouse vehicle) का प्रतीकवाद। चाहे आप आध्यात्मिक समझ की खोज में हों या इस प्राचीन परंपरा से जुड़ना चाहते हों, यह विस्तृत व्याख्या आपकी भक्ति साधना को समृद्ध करेगी और विघ्नहर्ता गणेश के साथ आपके संबंध को और गहरा करेगी।

🕉️ भगवान गणेश के पवित्र स्तोत्र श्रृंखला का भाग।
🙏 और अधिक हिंदू स्तोत्र और नींद के लिए कथाओं हेतु सब्सक्राइब करें।`,
        hymnTagsEn: ['jai ganesh deva aarti', 'ganesh aarti lyrics meaning', 'modak ganesha favorite sweet', 'parvati shiva ganesha family', 'mushak ganesha mouse vehicle', 'temple aarti ganesha'],
        hymnTagsHi: ['जय गणेश देवा आरती', 'गणेश आरती अर्थ सहित', 'मोदक गणेश प्रिय मिठाई', 'पार्वती शिव गणेश परिवार', 'मूषक गणेश वाहन', 'मंदिर आरती गणेश'],
      },
      {
        titleEn: 'Siddhi Vinayak Stotram — Lord of Success', titleHi: 'सिद्धि विनायक स्तोत्रम् — सफलता के देवता', slug: 'siddhi_vinayak_stotram',
        descriptionEn: `Welcome to Part 6 of our 7-part series exploring sacred Ganesha hymns! In this episode, we delve into the powerful "Siddhi Vinayak Stotram" from the ancient Ganesh Purana, which honors Lord Ganesha as Siddhi Vinayak - the divine bestower of success and supernatural powers. This beautiful stotra invokes Ganesha's blessings for achieving both material success and spiritual siddhis (mystical powers).

We'll explore the profound concept of the eight classical siddhis in Hindu philosophy: Anima (the power to become minute), Mahima (expanding to cosmic size), Garima (becoming infinitely heavy), Laghima (becoming weightless), Prapti (obtaining anything desired), Prakamya (fulfilling wishes), Ishitva (lordship over creation), and Vashitva (control over natural forces). Discover how devotees invoke Lord Ganesha's grace through this sacred hymn to overcome obstacles and attain both worldly achievements and divine realizations. Perfect for daily recitation, meditation, and understanding the deeper mysteries of Ganesha worship.

🕉️ Part of the Sacred Hymns of Ganesha series.
🙏 Subscribe for more Hindu hymns and mythology narrated for sleep.`,
        descriptionHi: `भगवान गणेश के पवित्र स्तोत्रों की 7-भाग श्रृंखला के भाग 6 में आपका स्वागत है! इस कड़ी में हम प्राचीन गणेश पुराण (Ganesh Purana) से शक्तिशाली "सिद्धि विनायक स्तोत्रम्" (Siddhi Vinayak Stotram) की व्याख्या करते हैं, जो भगवान गणेश को सिद्धि विनायक — सफलता और अलौकिक शक्तियों के दिव्य दाता के रूप में सम्मानित करता है। यह सुंदर स्तोत्र भौतिक सफलता और आध्यात्मिक सिद्धियों (siddhis — mystical powers) दोनों की प्राप्ति के लिए गणेश जी का आशीर्वाद आवाहित करता है।

हम हिंदू दर्शन में आठ शास्त्रीय सिद्धियों (eight classical siddhis) की गहन अवधारणा को समझेंगे: अणिमा (Anima — सूक्ष्म होने की शक्ति), महिमा (Mahima — ब्रह्मांडीय आकार तक विस्तार), गरिमा (Garima — अनंत भारी होना), लघिमा (Laghima — भारहीन होना), प्राप्ति (Prapti — किसी भी वस्तु की प्राप्ति), प्राकाम्य (Prakamya — इच्छापूर्ति), ईशित्व (Ishitva — सृष्टि पर प्रभुत्व), और वशित्व (Vashitva — प्राकृतिक शक्तियों पर नियंत्रण)। जानें कैसे भक्त इस पवित्र स्तोत्र के माध्यम से बाधाओं पर विजय और सांसारिक उपलब्धियों तथा दिव्य अनुभूतियों की प्राप्ति के लिए गणेश जी की कृपा का आवाहन करते हैं। दैनिक पाठ, ध्यान और गणेश पूजा के गहन रहस्यों को समझने के लिए उत्तम।

🕉️ भगवान गणेश के पवित्र स्तोत्र श्रृंखला का भाग।
🙏 और अधिक हिंदू स्तोत्र और नींद के लिए कथाओं हेतु सब्सक्राइब करें।`,
        hymnTagsEn: ['Siddhi Vinayak Stotram', 'eight siddhis hinduism', 'Ganesh Purana stotram', 'supernatural powers hinduism', 'Siddhi Vinayak mantra', 'mystical powers ganesha'],
        hymnTagsHi: ['सिद्धि विनायक स्तोत्रम्', 'अष्ट सिद्धि हिंदू धर्म', 'गणेश पुराण स्तोत्र', 'अलौकिक शक्तियाँ हिंदू', 'सिद्धि विनायक मंत्र', 'गणेश रहस्यमय शक्तियाँ'],
      },
      {
        titleEn: 'Ganesha Ashtakam — Eight Verses of Praise', titleHi: 'गणेश अष्टकम् — आठ स्तुति छंद', slug: 'ganesha_ashtakam',
        descriptionEn: `Welcome to Part 7, the grand finale of our sacred series exploring the divine hymns of Lord Ganesha! In this concluding episode, we present the beautiful "Ganesha Ashtakam" - eight exquisite verses of praise that celebrate every aspect of the elephant-headed deity's divine nature. This ashtakam (eight-verse hymn) is a masterpiece of Sanskrit devotional poetry that encapsulates the complete essence of Ganesha worship in just eight carefully crafted stanzas.

Each verse of this ashtakam illuminates a different facet of Ganesha's divine personality: his role as the cosmic scribe who wrote the Mahabharata, his position as the first deity worshipped before all others, his embodiment of wisdom and learning, and his compassionate nature as the guardian who guides devotees through life's challenges. The hymn concludes with a powerful phala shruti (fruit of recitation) promising that those who recite these eight verses with devotion will be blessed with success, wisdom, and the removal of all obstacles. A perfect conclusion to our Ganesha series.

🕉️ Part of the Sacred Hymns of Ganesha series.
🙏 Subscribe for more Hindu hymns and mythology narrated for sleep.`,
        descriptionHi: `भगवान गणेश के दिव्य स्तोत्रों की 7-भाग श्रृंखला के भाग 7 — इस भव्य समापन में आपका स्वागत है! इस अंतिम कड़ी में हम सुंदर "गणेश अष्टकम्" (Ganesha Ashtakam) प्रस्तुत करते हैं — आठ उत्कृष्ट स्तुति छंद (eight exquisite verses of praise) जो गजानन के दिव्य स्वरूप के प्रत्येक पहलू का गुणगान करते हैं। यह अष्टकम् (आठ छंदों का स्तोत्र) संस्कृत भक्ति काव्य की एक उत्कृष्ट कृति है जो केवल आठ सुंदर छंदों में गणेश पूजा के संपूर्ण सार को समाहित करती है।

इस अष्टकम् का प्रत्येक श्लोक गणेश जी के दिव्य व्यक्तित्व के एक अलग पहलू को प्रकाशित करता है: महाभारत के लेखक के रूप में उनकी ब्रह्मांडीय भूमिका (cosmic scribe of the Mahabharata), सभी देवताओं से पहले पूजे जाने वाले प्रथम देव के रूप में उनका स्थान, ज्ञान और विद्या के मूर्त रूप (embodiment of wisdom), और जीवन की चुनौतियों में भक्तों का मार्गदर्शन करने वाले करुणामय रक्षक के रूप में उनका स्वरूप। स्तोत्र एक शक्तिशाली फल श्रुति (phala shruti — fruit of recitation) के साथ समाप्त होता है — जो भक्तिपूर्वक इन आठ श्लोकों का पाठ करते हैं उन्हें सफलता, ज्ञान और सभी बाधाओं से मुक्ति का आशीर्वाद प्राप्त होता है। हमारी गणेश श्रृंखला का एक उत्तम समापन।

🕉️ भगवान गणेश के पवित्र स्तोत्र श्रृंखला का भाग।
🙏 और अधिक हिंदू स्तोत्र और नींद के लिए कथाओं हेतु सब्सक्राइब करें।`,
        hymnTagsEn: ['Ganesha Ashtakam', 'eight verses ganesha praise', 'Sanskrit devotional poetry', 'Mahabharata scribe Ganesha', 'phala shruti benefits', 'ashtakam hymn meaning'],
        hymnTagsHi: ['गणेश अष्टकम्', 'गणेश स्तुति आठ छंद', 'संस्कृत भक्ति काव्य', 'महाभारत लेखक गणेश', 'फल श्रुति लाभ', 'अष्टकम् स्तोत्र अर्थ'],
      },
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

        // Prefer rich per-chapter description/tags when available
        const richDesc = isHi ? hymn.descriptionHi : hymn.descriptionEn;
        const hymnTags = isHi ? hymn.hymnTagsHi : hymn.hymnTagsEn;

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
          description: richDesc || buildDescription(isHi ? deity.nameHi : deity.nameEn, title, lang),
          tags: [...baseTags, ...deityTags, ...(hymnTags || [])],
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

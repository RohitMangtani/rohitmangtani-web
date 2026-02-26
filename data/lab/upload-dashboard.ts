/**
 * Hindu Stories YouTube Channel — Upload Dashboard Data
 *
 * This drives the upload dashboard at /lab/dashboard.
 * Update `generated` flags and metadata as videos are produced.
 */

export const START_DATE = '2026-02-26';
export const INTERVAL_DAYS = 2;
export const OUTPUT_BASE = '~/factory/projects/rmgtni-web/tools/sleep-history-yt/output';

export const PLAYLISTS: Record<string, Record<string, string>> = {
  gita:        { en: 'Bhagavad Gita — Complete (English)', hi: 'Bhagavad Gita — Complete (Hindi)' },
  mahabharata: { en: 'Mahabharata Stories (English)',      hi: 'Mahabharata Stories (Hindi)' },
  ramayana:    { en: 'Ramayana (English)',                 hi: 'Ramayana (Hindi)' },
  hanuman:     { en: 'Ramayana (English)',                 hi: 'Ramayana (Hindi)' },
  mythology:   { en: 'Hindu Mythology (English)',          hi: 'Hindu Mythology (Hindi)' },
};

export const BASE_TAGS_EN = [
  'hinduism', 'hindu stories', 'bhagavad gita', 'mahabharata', 'ramayana',
  'indian mythology', 'sleep story', 'bedtime story', 'hindu mythology for sleep',
  'sanatan dharma', 'krishna', 'hanuman', 'indian history',
  'relaxing history', 'fall asleep',
];

export const BASE_TAGS_HI = [
  'हिंदू कहानियां', 'भगवद गीता', 'महाभारत', 'रामायण',
  'सनातन धर्म', 'कृष्ण', 'हनुमान', 'भारतीय इतिहास',
  'नींद की कहानी', 'hinduism', 'hindu stories', 'sleep story',
  'mahabharata hindi', 'bhagavad gita hindi',
];

export interface Episode {
  id: string;
  seriesId: string;
  series: string;
  titleEn: string;
  titleHi: string;
  descEn: string;
  descHi: string;
  extraTagsEn: string[];
  extraTagsHi: string[];
  generated: { en: boolean; hi: boolean };
}

export const EPISODES: Episode[] = [
  {
    id: 'maha-04',
    seriesId: 'mahabharata', series: 'Mahabharata',
    titleEn: 'Karna — The Tragic Hero Who Fought Against Destiny',
    titleHi: 'कर्ण — भाग्य से लड़ने वाला दुखद नायक',
    descEn: `Immerse yourself in the most heart-wrenching tale from the Mahabharata — the complete story of Karna, the warrior who defied destiny itself. Born divine yet abandoned, raised humble yet noble, Karna's life is a tapestry of loyalty, sacrifice, and tragic heroism. From his secret birth as Kunti's son to his final battle where every curse converged, this narrated journey explores why Karna remains the most beloved tragic figure in all of Hindu mythology.

Let this retelling guide you through Karna's struggles with identity, honor, and friendship as you drift into peaceful sleep.`,
    descHi: `महाभारत का सबसे दुखद और प्रेरणादायक पात्र कर्ण की संपूर्ण गाथा। जन्म से लेकर मृत्यु तक, कर्ण का जीवन भाग्य के विरुद्ध संघर्ष की अमर कहानी है। सूर्यपुत्र होकर भी सूतपुत्र कहलाने वाले, दानवीर और महान योद्धा कर्ण की यह गाथा हमें सिखाती है कि जन्म नहीं, कर्म से व्यक्ति महान बनता है।

यह sleep story आपको कर्ण के संघर्ष, मित्रता, दानवीरता और अंतिम बलिदान के माध्यम से एक गहरी और शांतिपूर्ण नींद देगी।`,
    extraTagsEn: ['Karna story', 'tragic hero mythology', 'Mahabharata warriors', 'Hindu epic tales', 'ancient Indian legends'],
    extraTagsHi: ['सूर्यपुत्र कर्ण', 'दानवीर कर्ण कहानी', 'कुंती पुत्र कर्ण', 'अंगराज कर्ण', 'कर्ण अर्जुन युद्ध'],
    generated: { en: true, hi: true },
  },
  {
    id: 'maha-02',
    seriesId: 'mahabharata', series: 'Mahabharata',
    titleEn: "Draupadi's Swayamvara and the Game of Dice",
    titleHi: 'द्रौपदी स्वयंवर और चौसर का खेल',
    descEn: `The story of Draupadi — from her miraculous birth from fire to the moment that ignited the greatest war in history. Witness Arjuna winning her hand at the swayamvara, the fateful game of dice where Yudhishthira lost everything, and the horrifying scene where Dushasana dragged her by her hair in the royal court. Krishna's divine intervention saved her honor, but Draupadi's terrible vow would echo through thirteen years of exile and into the battlefield of Kurukshetra.`,
    descHi: `द्रौपदी की कथा — अग्नि से जन्म से लेकर उस क्षण तक जिसने इतिहास का सबसे बड़ा युद्ध प्रज्वलित किया। स्वयंवर में अर्जुन की विजय, युधिष्ठिर का सर्वस्व हारना, और राजसभा में द्रौपदी के चीरहरण का भयावह दृश्य। कृष्ण के दिव्य हस्तक्षेप ने उनकी रक्षा की, परंतु द्रौपदी की भीषण प्रतिज्ञा तेरह वर्षों के वनवास से होकर कुरुक्षेत्र तक गूँजती रही।`,
    extraTagsEn: ['Draupadi story', 'game of dice Mahabharata', 'Draupadi swayamvara', 'Pandava exile'],
    extraTagsHi: ['द्रौपदी कथा', 'चौसर का खेल', 'द्रौपदी वस्त्रहरण', 'पांडव वनवास'],
    generated: { en: false, hi: false },
  },
  {
    id: 'rama-04',
    seriesId: 'ramayana', series: 'Ramayana',
    titleEn: "The Battle of Lanka and Rama's Return",
    titleHi: 'लंका युद्ध और राम की वापसी',
    descEn: `The epic climax of the Ramayana — the great battle of Lanka. Witness Indrajit's illusory powers, Kumbhakarna's terrifying awakening, Lakshmana's near-death and the Sanjeevani mountain, and the final showdown between Rama and the ten-headed Ravana. After Ravana's fall, Sita's trial by fire, and the triumphant return to Ayodhya — the entire city lit with oil lamps, the origin of Diwali. Ram Rajya begins.`,
    descHi: `रामायण का महाकाव्य चरमोत्कर्ष — लंका का महायुद्ध। इंद्रजीत की माया, कुंभकर्ण का भयानक जागरण, लक्ष्मण की मृत्यु-शय्या और संजीवनी पर्वत, और राम-रावण का अंतिम युद्ध। रावण के पतन के बाद, सीता की अग्नि परीक्षा, और अयोध्या में विजयी वापसी — दीपों से जगमगाता नगर, दीवाली का उत्सव। राम राज्य का आरंभ।`,
    extraTagsEn: ['battle of Lanka', 'Rama Ravana battle', 'Diwali origin story', 'Ramayana climax'],
    extraTagsHi: ['लंका युद्ध', 'राम रावण युद्ध', 'दीवाली कथा', 'राम राज्य'],
    generated: { en: false, hi: false },
  },
  {
    id: 'maha-01',
    seriesId: 'mahabharata', series: 'Mahabharata',
    titleEn: "The Birth of the Kuru Dynasty — From Shantanu to Bhishma's Terrible Vow",
    titleHi: 'कुरु वंश की उत्पत्ति — शांतनु से भीष्म की भीषण प्रतिज्ञा',
    descEn: `The origin of the Mahabharata. King Shantanu's love for the river goddess Ganga, who drowned seven sons before the eighth survived as Devavrata — the boy who would become Bhishma. Then Shantanu's love for Satyavati, and Bhishma's terrible vow of lifelong celibacy so his father could remarry. A single act of sacrifice that planted the seeds of the greatest tragedy in Indian literature.`,
    descHi: `महाभारत की उत्पत्ति कथा। राजा शांतनु का गंगा से प्रेम, सात पुत्रों को नदी में बहाना, और देवव्रत का जन्म — वह बालक जो भीष्म बना। फिर शांतनु का सत्यवती से प्रेम, और भीष्म की आजीवन ब्रह्मचर्य की भीषण प्रतिज्ञा। एक त्याग जिसने भारतीय साहित्य की सबसे बड़ी त्रासदी के बीज बोए।`,
    extraTagsEn: ['Bhishma vow', 'Kuru dynasty origin', 'Shantanu Ganga story', 'Mahabharata beginning'],
    extraTagsHi: ['भीष्म प्रतिज्ञा', 'कुरु वंश', 'शांतनु गंगा कथा', 'महाभारत आरंभ'],
    generated: { en: false, hi: false },
  },
  {
    id: 'maha-03',
    seriesId: 'mahabharata', series: 'Mahabharata',
    titleEn: 'The Great War of Kurukshetra — Eighteen Days That Changed the World',
    titleHi: 'कुरुक्षेत्र का महायुद्ध — अठारह दिन जिन्होंने दुनिया बदल दी',
    descEn: `Eighteen days of the most devastating war in mythology. Bhishma falling on a bed of arrows. Abhimanyu's heroic death trapped in the Chakravyuha. Drona's death through heartbreaking deception. Karna's tragic end fighting against destiny. Duryodhana's final battle with Bhima. Millions dead, families destroyed — the Pyrrhic victory of the Pandavas.`,
    descHi: `पौराणिक इतिहास के सबसे विनाशकारी युद्ध के अठारह दिन। शर-शय्या पर भीष्म, चक्रव्यूह में अभिमन्यु की वीरगति, छल से द्रोण का पतन, भाग्य से हारता कर्ण, और भीम-दुर्योधन का अंतिम गदा-युद्ध। लाखों मृत, परिवार नष्ट — पांडवों की ऐसी विजय जिसमें कुछ भी नहीं बचा।`,
    extraTagsEn: ['Kurukshetra war', '18 day war Mahabharata', 'Abhimanyu Chakravyuha', 'Bhishma arrows'],
    extraTagsHi: ['कुरुक्षेत्र युद्ध', 'अभिमन्यु चक्रव्यूह', 'भीष्म शर शय्या', 'महाभारत युद्ध'],
    generated: { en: false, hi: false },
  },
  {
    id: 'rama-01',
    seriesId: 'ramayana', series: 'Ramayana',
    titleEn: "The Prince of Ayodhya — Rama's Birth and Early Life",
    titleHi: 'अयोध्या के राजकुमार — राम का जन्म और बाल्यकाल',
    descEn: `King Dasharatha's fire sacrifice for sons, the birth of Rama and his brothers, training under Sage Vishwamitra, slaying of the demoness Tataka, and the breaking of Lord Shiva's bow to win Sita's hand. A story of divine purpose, sacred duty, and the golden age of Ayodhya.`,
    descHi: `राजा दशरथ का पुत्रेष्टि यज्ञ, राम और उनके भाइयों का जन्म, विश्वामित्र के साथ शिक्षा, ताड़का वध, और सीता स्वयंवर में शिव धनुष तोड़ना। दिव्य उद्देश्य, पवित्र कर्तव्य, और अयोध्या के स्वर्ण युग की कथा।`,
    extraTagsEn: ['Rama birth story', 'Ayodhya', 'Sita swayamvara', 'Shiva bow'],
    extraTagsHi: ['राम जन्म कथा', 'अयोध्या', 'सीता स्वयंवर', 'शिव धनुष'],
    generated: { en: false, hi: false },
  },
  {
    id: 'rama-02',
    seriesId: 'ramayana', series: 'Ramayana',
    titleEn: 'The Exile — Fourteen Years in the Forest',
    titleHi: 'वनवास — चौदह वर्ष का वनगमन',
    descEn: `Kaikeyi's demand, Dasharatha's agony, Rama's calm acceptance of fourteen years in exile. Sita and Lakshmana refuse to let him go alone. Bharata's rage at his mother, placing Rama's sandals on the throne. Life in the forest, the golden deer, Ravana's deception, Sita's abduction. Jatayu's heroic sacrifice trying to save her.`,
    descHi: `कैकेयी की माँग, दशरथ की वेदना, राम का शांत स्वीकार। सीता और लक्ष्मण का साथ, भरत का क्रोध और राम की चरण पादुकाएँ सिंहासन पर। वन में जीवन, स्वर्ण मृग, रावण का छल, सीता हरण। जटायु का वीरतापूर्ण बलिदान।`,
    extraTagsEn: ['Rama exile', 'Sita abduction', 'Jatayu sacrifice', 'golden deer Ramayana'],
    extraTagsHi: ['राम वनवास', 'सीता हरण', 'जटायु बलिदान', 'स्वर्ण मृग'],
    generated: { en: false, hi: false },
  },
  {
    id: 'rama-03',
    seriesId: 'ramayana', series: 'Ramayana',
    titleEn: "The Bridge to Lanka — Hanuman and the Vanara Army",
    titleHi: 'लंका का सेतु — हनुमान और वानर सेना',
    descEn: `Rama's alliance with Sugriva and the monkey kingdom. Hanuman's leap across the ocean, finding Sita in the Ashoka grove, burning Lanka. The building of Rama Setu — where even the squirrel contributed and received Rama's blessing. The march to Lanka begins.`,
    descHi: `सुग्रीव से मित्रता और वानर राज्य। हनुमान की समुद्र पार छलांग, अशोक वाटिका में सीता से मिलन, लंका दहन। रामसेतु का निर्माण — जहाँ गिलहरी ने भी योगदान दिया और राम का आशीर्वाद पाया।`,
    extraTagsEn: ['Hanuman Lanka', 'Rama Setu bridge', 'Vanara army', 'Sundara Kanda'],
    extraTagsHi: ['हनुमान लंका', 'रामसेतु', 'वानर सेना', 'सुंदरकांड'],
    generated: { en: false, hi: false },
  },
  {
    id: 'hanu-01',
    seriesId: 'hanuman', series: 'Hanuman',
    titleEn: 'The Birth of Hanuman — Son of the Wind God',
    titleHi: 'हनुमान जन्म — पवनपुत्र की कथा',
    descEn: `Baby Hanuman mistakes the sun for a ripe fruit and flies toward it. Indra strikes him with his thunderbolt. The wind god Vayu withdraws all air from the world in grief. The gods grant the child extraordinary boons. His education under Surya, racing alongside the sun's chariot. The curse that made him forget his own powers until the moment he needed them most.`,
    descHi: `बालक हनुमान ने सूर्य को फल समझकर उड़ान भरी। इंद्र ने वज्र से प्रहार किया। पवनदेव ने क्रोध में सारी वायु खींच ली। देवताओं ने बालक को अनेक वरदान दिए। सूर्य देव की शिक्षा, सूर्य रथ के साथ दौड़ना। वह श्राप जिसने उन्हें अपनी शक्तियाँ भुला दीं।`,
    extraTagsEn: ['Hanuman birth story', 'baby Hanuman sun', 'Anjana Hanuman', 'wind god son'],
    extraTagsHi: ['हनुमान जन्म', 'बाल हनुमान', 'अंजना हनुमान', 'पवनपुत्र'],
    generated: { en: false, hi: false },
  },
  {
    id: 'hanu-02',
    seriesId: 'hanuman', series: 'Hanuman',
    titleEn: 'Hanuman Chalisa — The Sacred Forty Verses Explained',
    titleHi: 'हनुमान चालीसा — चालीस पवित्र छंदों की व्याख्या',
    descEn: `A verse-by-verse journey through the Hanuman Chalisa, written by the poet-saint Tulsidas. Each verse explained with the stories behind every reference — Hanuman's strength, wisdom, devotion, humility. Why he is worshipped for courage, why he tore open his chest to reveal Rama and Sita in his heart.`,
    descHi: `गोस्वामी तुलसीदास रचित हनुमान चालीसा की पंक्ति-दर-पंक्ति व्याख्या। हर छंद के पीछे की कथा — हनुमान की शक्ति, बुद्धि, भक्ति, विनम्रता। क्यों वे साहस के देवता हैं, क्यों उन्होंने अपना वक्ष चीरकर राम-सीता दिखाए।`,
    extraTagsEn: ['Hanuman Chalisa explained', 'Tulsidas', 'Hanuman devotion', 'forty verses'],
    extraTagsHi: ['हनुमान चालीसा', 'तुलसीदास', 'हनुमान भक्ति', 'चालीसा व्याख्या'],
    generated: { en: false, hi: false },
  },
  {
    id: 'gita-01',
    seriesId: 'gita', series: 'Bhagavad Gita',
    titleEn: "Arjuna's Crisis and the Immortal Soul — Bhagavad Gita Chapters 1-3",
    titleHi: 'अर्जुन का विषाद और अमर आत्मा — भगवद गीता अध्याय 1-3',
    descEn: `The armies assemble at Kurukshetra. Arjuna sees his grandfather Bhishma, his teacher Drona, his cousins — all standing on the other side. His bow slips from his hands. He refuses to fight. Krishna responds with the most profound teaching in Hindu philosophy: the soul is eternal, action without attachment is the highest path, and sacred duty cannot be abandoned.`,
    descHi: `कुरुक्षेत्र में सेनाएँ खड़ी हैं। अर्जुन अपने पितामह भीष्म, गुरु द्रोण, भाइयों को सामने देखता है। गांडीव हाथ से फिसल जाता है। कृष्ण का उत्तर — आत्मा अमर है, निष्काम कर्म सर्वोच्च मार्ग है, स्वधर्म का त्याग नहीं किया जा सकता।`,
    extraTagsEn: ['Bhagavad Gita chapter 1', 'Arjuna crisis', 'Karma Yoga', 'immortal soul'],
    extraTagsHi: ['भगवद गीता अध्याय 1', 'अर्जुन विषाद', 'कर्म योग', 'अमर आत्मा'],
    generated: { en: true, hi: false }, // EN already uploaded
  },
  {
    id: 'gita-02',
    seriesId: 'gita', series: 'Bhagavad Gita',
    titleEn: 'Divine Knowledge and the Art of Meditation — Bhagavad Gita Chapters 4-6',
    titleHi: 'दिव्य ज्ञान और ध्यान की कला — भगवद गीता अध्याय 4-6',
    descEn: `Krishna reveals he has taught this wisdom across ages — as Avatar, he manifests whenever dharma declines. Knowledge is the supreme purifier. The path of renunciation and action are united. Practical meditation instructions: how to still the restless mind through practice and detachment.`,
    descHi: `कृष्ण बताते हैं कि यह ज्ञान युगों-युगों से सिखाया गया है। जब-जब धर्म की हानि होती है, वे अवतार लेते हैं। ज्ञान सर्वोच्च शुद्धिकर्ता है। संन्यास और कर्म एक हैं। ध्यान की व्यावहारिक विधि — अभ्यास और वैराग्य से मन को शांत करना।`,
    extraTagsEn: ['Bhagavad Gita meditation', 'Dhyana Yoga', 'Krishna avatar', 'divine knowledge'],
    extraTagsHi: ['भगवद गीता ध्यान', 'ध्यान योग', 'कृष्ण अवतार', 'दिव्य ज्ञान'],
    generated: { en: false, hi: false },
  },
  {
    id: 'gita-03',
    seriesId: 'gita', series: 'Bhagavad Gita',
    titleEn: 'The Nature of God and the Royal Secret — Bhagavad Gita Chapters 7-9',
    titleHi: 'ईश्वर का स्वरूप और राजविद्या — भगवद गीता अध्याय 7-9',
    descEn: `Krishna reveals his divine nature: "I am the taste in water, the light in the sun and moon, the fragrance in earth." The two paths after death, cosmic cycles of creation and dissolution, and the most confidential knowledge — the royal secret of pure devotion.`,
    descHi: `कृष्ण अपना दिव्य स्वरूप प्रकट करते हैं: "मैं जल में रस हूँ, सूर्य-चंद्र में प्रकाश, पृथ्वी में सुगंध।" मृत्यु के बाद के दो मार्ग, सृष्टि के चक्र, और सबसे गोपनीय ज्ञान — शुद्ध भक्ति का राज रहस्य।`,
    extraTagsEn: ['Bhagavad Gita devotion', 'Raja Vidya', 'nature of God', 'Bhakti Yoga'],
    extraTagsHi: ['भगवद गीता भक्ति', 'राजविद्या', 'ईश्वर स्वरूप', 'भक्ति योग'],
    generated: { en: false, hi: false },
  },
  {
    id: 'gita-04',
    seriesId: 'gita', series: 'Bhagavad Gita',
    titleEn: 'The Cosmic Vision — Bhagavad Gita Chapters 10-12',
    titleHi: 'विश्वरूप दर्शन — भगवद गीता अध्याय 10-12',
    descEn: `The dramatic climax. Krishna reveals his divine manifestations, then grants Arjuna divine eyes to see the Vishvarupa — the entire universe in one body. Infinite mouths, eyes, arms. Warriors rushing into flaming mouths. The most awe-inspiring chapter in all of Hindu scripture, followed by the tender path of devotion.`,
    descHi: `महाकाव्य का चरमोत्कर्ष। कृष्ण अपनी विभूतियाँ बताते हैं, फिर अर्जुन को दिव्य दृष्टि देते हैं — विश्वरूप, एक शरीर में संपूर्ण ब्रह्मांड। अनंत मुख, नेत्र, भुजाएँ। योद्धा ज्वलंत मुखों में समाते हुए। हिंदू शास्त्र का सबसे विस्मयकारी अध्याय।`,
    extraTagsEn: ['Vishvarupa', 'cosmic vision Krishna', 'Bhagavad Gita chapter 11', 'universal form'],
    extraTagsHi: ['विश्वरूप दर्शन', 'कृष्ण विराट रूप', 'भगवद गीता अध्याय 11', 'विभूति योग'],
    generated: { en: false, hi: false },
  },
  {
    id: 'gita-05',
    seriesId: 'gita', series: 'Bhagavad Gita',
    titleEn: 'The Three Gunas and the Cosmic Tree — Bhagavad Gita Chapters 13-15',
    titleHi: 'तीन गुण और संसार वृक्ष — भगवद गीता अध्याय 13-15',
    descEn: `The body is the field, the soul is the knower. Sattva, Rajas, Tamas — the three forces that bind every being. The stunning metaphor of the cosmic banyan tree with roots above and branches below, cut only by the axe of detachment. Deep philosophy made accessible.`,
    descHi: `शरीर क्षेत्र है, आत्मा क्षेत्रज्ञ। सत्त्व, रजस, तमस — तीन गुण जो हर प्राणी को बाँधते हैं। अश्वत्थ वृक्ष — जड़ें ऊपर, शाखाएँ नीचे, केवल वैराग्य की कुल्हाड़ी से काटा जा सकता है।`,
    extraTagsEn: ['three Gunas', 'cosmic tree', 'Sattva Rajas Tamas', 'Bhagavad Gita philosophy'],
    extraTagsHi: ['तीन गुण', 'संसार वृक्ष', 'सत्त्व रजस तमस', 'भगवद गीता दर्शन'],
    generated: { en: false, hi: false },
  },
  {
    id: 'gita-06',
    seriesId: 'gita', series: 'Bhagavad Gita',
    titleEn: "The Final Teaching and Arjuna's Awakening — Bhagavad Gita Chapters 16-18",
    titleHi: 'अंतिम उपदेश और अर्जुन की जागृति — भगवद गीता अध्याय 16-18',
    descEn: `The grand conclusion. Divine and demonic natures, the three types of faith, and Krishna's supreme secret: "Abandon all dharmas and surrender to me alone." Arjuna's awakening: "My delusion is destroyed. I shall act according to your word." He picks up Gandiva. The ending feels like coming home.`,
    descHi: `महान समापन। दैवी और आसुरी स्वभाव, तीन प्रकार की श्रद्धा, और कृष्ण का परम रहस्य: "सर्व धर्मान् परित्यज्य माम् एकं शरणं व्रज।" अर्जुन की जागृति: "मेरा मोह नष्ट हुआ। मैं आपकी आज्ञा का पालन करूँगा।" वह गांडीव उठाता है।`,
    extraTagsEn: ['Bhagavad Gita conclusion', 'Moksha', 'surrender to Krishna', 'Arjuna awakening'],
    extraTagsHi: ['भगवद गीता समापन', 'मोक्ष', 'कृष्ण शरणागति', 'अर्जुन जागृति'],
    generated: { en: false, hi: false },
  },
  {
    id: 'myth-01',
    seriesId: 'mythology', series: 'Hindu Mythology',
    titleEn: 'The Churning of the Ocean — Samudra Manthan',
    titleHi: 'समुद्र मंथन — अमृत की खोज',
    descEn: `Gods and demons churn the cosmic ocean using Mount Mandara and the serpent Vasuki. Vishnu supports them as Kurma, the tortoise. Fourteen treasures emerge — the deadly poison Halahala swallowed by Shiva, the goddess Lakshmi, the celestial elephant Airavata, and finally the nectar of immortality. Mohini distributes the Amrit.`,
    descHi: `देवता और दानव मंदराचल पर्वत और वासुकि नाग से समुद्र मंथन करते हैं। विष्णु कूर्म अवतार में सहारा देते हैं। चौदह रत्न निकलते हैं — हलाहल विष जो शिव ने पिया, लक्ष्मी, ऐरावत, और अंत में अमृत। मोहिनी अवतार अमृत बाँटती हैं।`,
    extraTagsEn: ['Samudra Manthan', 'churning ocean', 'Kurma avatar', 'nectar immortality'],
    extraTagsHi: ['समुद्र मंथन', 'अमृत', 'कूर्म अवतार', 'देव दानव'],
    generated: { en: false, hi: false },
  },
  {
    id: 'myth-02',
    seriesId: 'mythology', series: 'Hindu Mythology',
    titleEn: 'Shiva and Parvati — The Greatest Love Story',
    titleHi: 'शिव और पार्वती — सबसे महान प्रेम कथा',
    descEn: `Sati's self-immolation, Shiva's devastating grief and cosmic dance of destruction. Sati reborn as Parvati, her severe penance to win Shiva's love, Shiva testing her in disguise. Their divine marriage, the birth of Ganesha and Kartikeya. Ardhanarishvara — the lord who is half woman. A love story across lifetimes.`,
    descHi: `सती का आत्मदाह, शिव का विनाशकारी तांडव। सती का पार्वती के रूप में पुनर्जन्म, शिव को पाने के लिए कठोर तपस्या। शिव की परीक्षा, दिव्य विवाह, गणेश और कार्तिकेय का जन्म। अर्धनारीश्वर — जो आधे नारी हैं। जन्मों-जन्मों की प्रेम कथा।`,
    extraTagsEn: ['Shiva Parvati love story', 'Ardhanarishvara', 'Hindu wedding', 'Tandava dance'],
    extraTagsHi: ['शिव पार्वती', 'अर्धनारीश्वर', 'शिव विवाह', 'तांडव नृत्य'],
    generated: { en: false, hi: false },
  },
  {
    id: 'myth-03',
    seriesId: 'mythology', series: 'Hindu Mythology',
    titleEn: 'How Ganesha Got His Elephant Head',
    titleHi: 'गणेश को हाथी का सिर कैसे मिला',
    descEn: `Parvati creates a boy from sandalwood paste to guard her door. Shiva returns, the boy refuses entry, Shiva beheads him in fury. Parvati's devastation, Shiva's remorse. A baby elephant's head restores the child to life. Ganesha — remover of obstacles, scribe of the Mahabharata, lover of modaka sweets, rider of the mouse.`,
    descHi: `पार्वती चंदन से एक बालक बनाती हैं। शिव लौटते हैं, बालक रोकता है, शिव क्रोध में उसका सिर काट देते हैं। पार्वती का विलाप, शिव का पश्चाताप। हाथी के बच्चे का सिर लगाकर बालक जीवित होता है — गणेश, विघ्नहर्ता, मोदक प्रेमी, मूषक वाहन।`,
    extraTagsEn: ['Ganesha origin story', 'elephant head story', 'Ganesha Shiva Parvati', 'Hindu gods for kids'],
    extraTagsHi: ['गणेश कथा', 'गणेश जन्म', 'गणेश शिव पार्वती', 'विघ्नहर्ता'],
    generated: { en: false, hi: false },
  },
];

/** Upload queue — the order episodes get uploaded. */
export const UPLOAD_QUEUE: { episodeId: string; language: 'en' | 'hi' }[] = [
  // Phase 1: Manual bootstrap (8 videos)
  { episodeId: 'maha-04', language: 'hi' },
  { episodeId: 'maha-04', language: 'en' },
  { episodeId: 'maha-02', language: 'en' },
  { episodeId: 'maha-02', language: 'hi' },
  { episodeId: 'rama-04', language: 'en' },
  { episodeId: 'rama-04', language: 'hi' },
  { episodeId: 'maha-01', language: 'en' },
  { episodeId: 'maha-01', language: 'hi' },
  // Phase 3: Continuing queue
  { episodeId: 'maha-03', language: 'en' },
  { episodeId: 'maha-03', language: 'hi' },
  { episodeId: 'rama-01', language: 'en' },
  { episodeId: 'rama-01', language: 'hi' },
  { episodeId: 'rama-02', language: 'en' },
  { episodeId: 'rama-02', language: 'hi' },
  { episodeId: 'rama-03', language: 'en' },
  { episodeId: 'rama-03', language: 'hi' },
  { episodeId: 'hanu-01', language: 'en' },
  { episodeId: 'hanu-01', language: 'hi' },
  { episodeId: 'hanu-02', language: 'en' },
  { episodeId: 'hanu-02', language: 'hi' },
  { episodeId: 'gita-01', language: 'hi' }, // EN already uploaded
  { episodeId: 'gita-02', language: 'en' },
  { episodeId: 'gita-02', language: 'hi' },
  { episodeId: 'gita-03', language: 'en' },
  { episodeId: 'gita-03', language: 'hi' },
  { episodeId: 'gita-04', language: 'en' },
  { episodeId: 'gita-04', language: 'hi' },
  { episodeId: 'gita-05', language: 'en' },
  { episodeId: 'gita-05', language: 'hi' },
  { episodeId: 'gita-06', language: 'en' },
  { episodeId: 'gita-06', language: 'hi' },
  { episodeId: 'myth-01', language: 'en' },
  { episodeId: 'myth-01', language: 'hi' },
  { episodeId: 'myth-02', language: 'en' },
  { episodeId: 'myth-02', language: 'hi' },
  { episodeId: 'myth-03', language: 'en' },
  { episodeId: 'myth-03', language: 'hi' },
];

// --- Helpers ---

export function getEpisode(id: string): Episode | undefined {
  return EPISODES.find(e => e.id === id);
}

export interface ScheduleEntry {
  index: number;
  date: Date;
  episodeId: string;
  language: 'en' | 'hi';
  episode: Episode;
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

export function computeSchedule(): ScheduleEntry[] {
  const start = new Date(START_DATE + 'T12:00:00');

  return UPLOAD_QUEUE.map((upload, i) => {
    const ep = getEpisode(upload.episodeId)!;
    const date = new Date(start);
    date.setDate(start.getDate() + i * INTERVAL_DAYS);

    const isHi = upload.language === 'hi';
    const suffix = isHi ? '| हिंदू कथाएं नींद के लिए' : '| Hindu Stories For Sleep';
    const title = isHi ? ep.titleHi : ep.titleEn;
    const baseTags = isHi ? BASE_TAGS_HI : BASE_TAGS_EN;
    const extraTags = isHi ? ep.extraTagsHi : ep.extraTagsEn;
    const basePath = `${OUTPUT_BASE}/${ep.id}/${upload.language}`;

    return {
      index: i,
      date,
      episodeId: ep.id,
      language: upload.language,
      episode: ep,
      time: isHi ? '8:00 PM IST' : '8:00 PM EST',
      playlist: PLAYLISTS[ep.seriesId]?.[upload.language] ?? '',
      ytTitle: `${title} ${suffix}`,
      description: isHi ? ep.descHi : ep.descEn,
      tags: [...baseTags, ...extraTags],
      videoPath: `${basePath}/video.mp4`,
      thumbnailPath: `${basePath}/thumbnail.jpg`,
      subtitlesPath: `${basePath}/subtitles.srt`,
      pipelineCmd: `python3 pipeline.py --episode ${ep.id} --lang ${upload.language} --no-upload`,
      generated: ep.generated[upload.language],
    };
  });
}

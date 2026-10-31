export type ModuleId = 'home' | 'train' | 'detect' | 'patterns' | 'theater' | 'quiz' | 'lab'

export interface Portal { id: ModuleId; title: string; subtitle: string; emoji: string; color: string }
export interface TrainMission { title: string; left: string; right: string; examples: string[]; test: string[] }
export interface DetectorItem { name: string; emoji: string; ai: boolean; why: string }
export interface PatternLevel { sequence: string[]; answers: string[]; correct: number }
export interface QuizQuestion { question: string; emoji: string; answers: string[]; correct: number; hint: string }
export interface VideoItem { title: string; description: string; videoId: string }

export const portals: Portal[] = [
  { id: 'train', title: 'אַלֵּף אֶת הָרוֹבּוֹט', subtitle: 'מְלַמְּדִים מֵדֻגְמָאוֹת', emoji: '🤖', color: '#ff8552' },
  { id: 'detect', title: 'חָכָם אוֹ רָגִיל?', subtitle: 'מְגַלִּים אֵיפֹה יֵשׁ AI', emoji: '🧠', color: '#7966e8' },
  { id: 'patterns', title: 'בַּלַּשׁ הַדְּפוּסִים', subtitle: 'מְחַפְּשִׂים סִדְרָה', emoji: '🔍', color: '#15bda4' },
  { id: 'theater', title: 'קוֹלְנוֹעַ הַבִּינָה', subtitle: 'סִפּוּרִים וְסֶרְטוֹנִים', emoji: '🎬', color: '#e65ca8' },
  { id: 'quiz', title: 'חִידוֹן הָאַלּוּפִים', subtitle: '8 שְׁאֵלוֹת מַדְהִימוֹת', emoji: '🏆', color: '#f5ae32' },
  { id: 'lab', title: 'הַמַּעְבָּדָה שֶׁל רוֹבִּי', subtitle: 'מְעַצְּבִים וְאוֹסְפִים', emoji: '🎨', color: '#40a9e8' },
]

export const missions: TrainMission[] = [
  { title: 'חַיּוֹת אוֹ כְּלֵי רֶכֶב?', left: 'חַיּוֹת', right: 'כְּלֵי רֶכֶב', examples: ['🐶','🚗','🐱','🚌','🐰','🚲'], test: ['🐼','🚕','🦊','🚂'] },
  { title: 'פֵּרוֹת וִירָקוֹת אוֹ מַמְתַּקִּים?', left: 'פֵּרוֹת וִירָקוֹת', right: 'מַמְתַּקִּים', examples: ['🍎','🍩','🥕','🍭','🍌','🍫'], test: ['🍓','🍪','🥦','🍬'] },
  { title: 'עוֹפוֹת אוֹ יְצוּרֵי מַיִם?', left: 'עוֹפוֹת', right: 'יְצוּרֵי מַיִם', examples: ['🦅','🐬','🦋','🐳','🦜','🐟'], test: ['🦉','🦈','🦇','🐙'] },
]

export const detectorItems: DetectorItem[] = [
  { name:'שׁוֹאֵב אָבָק רוֹבּוֹטִי', emoji:'🤖', ai:true, why:'הוּא לוֹמֵד אֵיפֹה לִנְסֹעַ וּמוֹצֵא לִכְלוּךְ בְּעַצְמוֹ.' },
  { name:'מְכוֹנִית אוֹטוֹנוֹמִית', emoji:'🚘', ai:true, why:'הַמַּחְשֵׁב מִתְבּוֹנֵן בַּדֶּרֶךְ וּמַחְלִיט לְאָן לִנְסֹעַ.' },
  { name:'עוֹזֵר קוֹלִי חָכָם', emoji:'🗣️', ai:true, why:'הוּא מַקְשִׁיב לַמִּלִּים וְעוֹנֶה לִשְׁאֵלוֹת.' },
  { name:'רוֹבּוֹט מְשַׂחֵק שַׁחְמָט', emoji:'♟️', ai:true, why:'הוּא חוֹשֵׁב עַל מַהֲלָכִים וְלוֹמֵד אֵיךְ לְנַצֵּחַ.' },
  { name:'אוֹפַנַּיִם', emoji:'🚲', ai:false, why:'הֵם נוֹסְעִים רַק כְּשֶׁמִּישֶׁהוּ מְדוֹשֵׁשׁ, בְּלִי לַחְשֹׁב.' },
  { name:'כִּסֵּא עֵץ', emoji:'🪑', ai:false, why:'הוּא חֵפֶץ פָּשׁוּט. הוּא לֹא לוֹמֵד וְלֹא מַחְלִיט.' },
  { name:'שָׁלָט רָחוֹק רָגִיל', emoji:'🎛️', ai:false, why:'הוּא מַחְלִיף עֲרוּצִים כְּשֶׁלּוֹחֲצִים עַל כַּפְתּוֹר.' },
  { name:'כַּדּוּר', emoji:'⚽', ai:false, why:'הוּא חֵפֶץ רָגִיל. הוּא לֹא יָכוֹל לִלְמֹד מִדֻּגְמָאוֹת.' },
  { name:'מִבְרֶשֶׁת שִׁנַּיִם', emoji:'🪥', ai:false, why:'הִיא מַנְקָה שִׁנַּיִם, אֲבָל לֹא מַחְלִיטָה דְּבָרִים.' },
  { name:'טֵלֵפוֹן מִתְחַכֵּם', emoji:'📱', ai:true, why:'הוּא מוֹצֵא תְּמוּנוֹת וּמַצִּיע מִלִּים לִכְתִיבָה.' },
]

export const patterns: PatternLevel[] = [
  { sequence:['🤖','🌟','🤖','🌟','🤖','?'], answers:['🤖','🌟','🚀'], correct:1 },
  { sequence:['🔵','🔵','🟡','🔵','🔵','?'], answers:['🔴','🔵','🟡'], correct:2 },
  { sequence:['🐱','🐶','🐱','🐶','🐱','?'], answers:['🐶','🦊','🐱'], correct:0 },
  { sequence:['⭐','⭐','🌙','⭐','⭐','?'], answers:['☀️','🌙','⭐'], correct:1 },
  { sequence:['🟢','🟡','🔴','🟢','🟡','?'], answers:['🔵','🟢','🔴'], correct:2 },
  { sequence:['🤖','🚀','🚀','🤖','🚀','🚀','?'], answers:['🤖','🌟','🚀'], correct:0 },
]

export const stories = [
  { title:'מָה זֹאת בִּינָה מְלָאכוּתִית?', emoji:'💡', slides:['מַחְשֵׁב הוּא מְכוֹנָה שֶׁיּוֹדַעַת לַעֲשׂוֹת דְּבָרִים.','בִּינָה מְלָאכוּתִית הִיא כְּמוֹ מוֹחַ קָטָן בְּתוֹךְ מַחְשֵׁב.','הִיא לוֹמֶדֶת מֵהַרְבֵּה דֻּגְמָאוֹת וְעוֹזֶרֶת לָנוּ!'] },
  { title:'אֵיךְ מַחְשֵׁב רוֹאֶה תְּמוּנוֹת?', emoji:'👀', slides:['הַמַּחְשֵׁב מְקַבֵּל תְּמוּנָה כְּמוֹ חִידָה צִבְעוֹנִית.','הוּא מוֹצֵא דְּפוּסִים: אֹזְנַיִם, עֵינַיִם וְזָנָב.','אַחַר כָּךְ הוּא מְנַחֵשׁ: זֶה כֶּלֶב!'] },
  { title:'אֵיךְ רוֹבּוֹטִים עוֹזְרִים לָנוּ?', emoji:'🦾', slides:['רוֹבּוֹטִים יְכוֹלִים לַעֲזֹר בַּבַּיִת וּבַמִּפְעָל.','הֵם מִתְבּוֹנְנִים, לוֹמְדִים וְעוֹבְדִים בְּבִטָּחוֹן.','אֲנַחְנוּ תָּמִיד הַמְּנַהֲלִים שֶׁלָּהֶם!'] },
]

export const quiz: QuizQuestion[] = [
  { question:'מִי לוֹמֵד מֵדֻגְמָאוֹת?', emoji:'🤖', answers:['רוֹבּוֹט חָכָם','כִּסֵּא','כַּדּוּר'], correct:0, hint:'רמז: משהו שיכול לחשוב וללמוד!' },
  { question:'מָה עוֹזֵר לְמַחְשֵׁב לִרְאוֹת?', emoji:'📷', answers:['מַצְלֵמָה','מַגֶּבֶת','כַּף'], correct:0, hint:'רמז: מצלמים איתה תמונות.' },
  { question:'מָה זֶה דְּפוּס?', emoji:'🔎', answers:['סִדְרָה שֶׁחוֹזֶרֶת','צֶבַע','מַאֲכָל'], correct:0, hint:'רמז: משהו שחוזר שוב ושוב.' },
  { question:'מִי יָכוֹל לַעֲנוֹת בְּקוֹל?', emoji:'🎙️', answers:['עוֹזֵר קוֹלִי','עֵץ','נַעַל'], correct:0, hint:'רמז: הוא מקשיב ומדבר.' },
  { question:'הַאִם כִּסֵּא לוֹמֵד מֵנִסְיוֹן?', emoji:'🪑', answers:['כֵּן','לֹא','רַק בַּלַּיְלָה'], correct:1, hint:'כיסא הוא חפץ רגיל.' },
  { question:'מָה רוֹבּוֹט צָרִיךְ כְּדֵי לִלְמֹד?', emoji:'📚', answers:['דֻּגְמָאוֹת','גֶּשֶׁם','כּוֹבַע'], correct:0, hint:'רמז: מראים לו דברים רבים.' },
  { question:'מָה עוֹשָׂה מְכוֹנִית אוֹטוֹנוֹמִית?', emoji:'🚗', answers:['נוֹהֶגֶת לְבַד','אוֹפָה עוּגָה','שָׁרָה'], correct:0, hint:'היא יכולה לנסוע ולראות את הדרך.' },
  { question:'מָה אֲנַחְנוּ צְרִיכִים לַעֲשׂוֹת עִם AI?', emoji:'🧒', answers:['לִבְדֹּק וּלְהַחְלִיט','לִישֹׁן','לָרוּץ'], correct:0, hint:'אנחנו תמיד המנהלים!' },
]

export const videos: VideoItem[] = [
  { title: 'אֵיךְ רוֹבּוֹטִים לוֹמְדִים?', description: 'סִרְטוֹן מַדָּע קָצָר עַל רוֹבּוֹטִים וְלְמִידָה.', videoId: '4qHc9ZRBsAk' },
  { title: 'מָה זֹאת בִּינָה מְלָאכוּתִית?', description: 'הֶסְבֵּר יְלָדִים מְאוּיָּר עַל AI.', videoId: 'ad79nYk2keg' },
  { title: 'רוֹבּוֹטִים בְּעוֹלָם הָאֲמִתִּי', description: 'מַדְרִיךְ מַדָּעִי עַל רוֹבּוֹטִים שֶׁעוֹזְרִים לָנוּ.', videoId: 'H2t7lknrK28' },
]

export const badges = ['מוּמְחֶה הָרוֹבּוֹטִים','בַּלַּשׁ הַדְּפוּסִים','מְאַלֵּף הַבִּינָה']
export const hats = [{name:'כּוֹבַע קוֹסֵם', emoji:'🎩', cost:4},{name:'כֶּתֶר זָהָב', emoji:'👑', cost:8},{name:'קַסְדַּת חָלָל', emoji:'🪐', cost:12}]
export const colors = [{name:'כְּחוֹל שָׁמַיִם', value:'#55bde8', cost:0},{name:'וָרוֹד מַמְתָּק', value:'#f47fb1', cost:5},{name:'סָגֹל קֶסֶם', value:'#8b75e8', cost:7}]

export const formatHebrew = (text: string, showNikud: boolean) => showNikud ? text : text.replace(/[\u0591-\u05C7]/g, '')

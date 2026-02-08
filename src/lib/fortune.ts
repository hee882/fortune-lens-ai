import type { Birthday } from "./types";

// ── 별자리 ──
export interface ZodiacInfo {
  sign: string;
  name: string;
  emoji: string;
  element: string;
  ruling: string;
  personality: string;
}

const ZODIAC_TABLE: ZodiacInfo[] = [
  { sign: "capricorn", name: "염소자리", emoji: "♑", element: "흙", ruling: "토성", personality: "책임감 있고 야심찬 현실주의자" },
  { sign: "aquarius", name: "물병자리", emoji: "♒", element: "공기", ruling: "천왕성", personality: "독창적이고 자유로운 이상주의자" },
  { sign: "pisces", name: "물고기자리", emoji: "♓", element: "물", ruling: "해왕성", personality: "감성적이고 직관적인 몽상가" },
  { sign: "aries", name: "양자리", emoji: "♈", element: "불", ruling: "화성", personality: "용감하고 에너지 넘치는 개척자" },
  { sign: "taurus", name: "황소자리", emoji: "♉", element: "흙", ruling: "금성", personality: "꾸준하고 감각적인 안정주의자" },
  { sign: "gemini", name: "쌍둥이자리", emoji: "♊", element: "공기", ruling: "수성", personality: "재치 있고 호기심 넘치는 소통가" },
  { sign: "cancer", name: "게자리", emoji: "♋", element: "물", ruling: "달", personality: "다정하고 보호 본능이 강한 감성인" },
  { sign: "leo", name: "사자자리", emoji: "♌", element: "불", ruling: "태양", personality: "당당하고 카리스마 넘치는 리더" },
  { sign: "virgo", name: "처녀자리", emoji: "♍", element: "흙", ruling: "수성", personality: "꼼꼼하고 분석적인 완벽주의자" },
  { sign: "libra", name: "천칭자리", emoji: "♎", element: "공기", ruling: "금성", personality: "우아하고 균형 잡힌 중재자" },
  { sign: "scorpio", name: "전갈자리", emoji: "♏", element: "물", ruling: "명왕성", personality: "강렬하고 통찰력 있는 탐구자" },
  { sign: "sagittarius", name: "궁수자리", emoji: "♐", element: "불", ruling: "목성", personality: "자유롭고 낙관적인 모험가" },
];

const ZODIAC_DATES = [
  [1, 19], [2, 18], [3, 20], [4, 19], [5, 20], [6, 21],
  [7, 22], [8, 22], [9, 22], [10, 23], [11, 22], [12, 21],
];

export function getZodiac(month: number, day: number): ZodiacInfo {
  for (let i = 0; i < ZODIAC_DATES.length; i++) {
    const [m, d] = ZODIAC_DATES[i];
    if (month < m || (month === m && day <= d)) {
      return ZODIAC_TABLE[i];
    }
  }
  return ZODIAC_TABLE[0]; // 염소자리
}

// ── 중국 띠 ──
export interface ChineseZodiacInfo {
  animal: string;
  emoji: string;
  personality: string;
}

const CHINESE_ZODIAC: ChineseZodiacInfo[] = [
  { animal: "쥐", emoji: "🐀", personality: "영리하고 재치 있는" },
  { animal: "소", emoji: "🐂", personality: "성실하고 인내심 강한" },
  { animal: "호랑이", emoji: "🐅", personality: "용감하고 자신감 있는" },
  { animal: "토끼", emoji: "🐇", personality: "우아하고 평화로운" },
  { animal: "용", emoji: "🐉", personality: "열정적이고 카리스마 넘치는" },
  { animal: "뱀", emoji: "🐍", personality: "지혜롭고 신비로운" },
  { animal: "말", emoji: "🐎", personality: "활발하고 자유분방한" },
  { animal: "양", emoji: "🐑", personality: "온화하고 예술적인" },
  { animal: "원숭이", emoji: "🐒", personality: "재주 많고 유머러스한" },
  { animal: "닭", emoji: "🐓", personality: "부지런하고 관찰력 뛰어난" },
  { animal: "개", emoji: "🐕", personality: "충실하고 정의로운" },
  { animal: "돼지", emoji: "🐖", personality: "너그럽고 솔직한" },
];

export function getChineseZodiac(year: number): ChineseZodiacInfo {
  return CHINESE_ZODIAC[(year - 4) % 12];
}

// ── 수비학: 생명경로수 ──
export function getLifePathNumber(birthday: Birthday): number {
  const digits = `${birthday.year}${String(birthday.month).padStart(2, "0")}${String(birthday.day).padStart(2, "0")}`;
  let sum = 0;
  for (const d of digits) sum += parseInt(d);
  while (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
    let next = 0;
    for (const d of String(sum)) next += parseInt(d);
    sum = next;
  }
  return sum;
}

const LIFE_PATH_DESC: Record<number, { title: string; desc: string }> = {
  1: { title: "리더", desc: "독립적이고 창조적인 개척자. 새로운 길을 만들어 가는 타고난 리더입니다." },
  2: { title: "조화자", desc: "협력과 균형의 달인. 사람들 사이의 다리 역할을 하며 평화를 만듭니다." },
  3: { title: "표현자", desc: "창의력과 소통의 천재. 예술과 언어로 세상에 영감을 줍니다." },
  4: { title: "건축가", desc: "체계적이고 안정적인 기반을 만드는 사람. 꾸준함이 곧 힘입니다." },
  5: { title: "자유인", desc: "변화와 모험을 추구하는 영혼. 다양한 경험이 인생의 양분이 됩니다." },
  6: { title: "양육자", desc: "가정과 공동체를 돌보는 따뜻한 마음. 책임감과 사랑의 상징입니다." },
  7: { title: "탐구자", desc: "진리와 지식을 추구하는 철학자. 깊은 사색으로 진실에 다가갑니다." },
  8: { title: "성취자", desc: "권위와 풍요를 실현하는 실력자. 물질적 성공과 정신적 성장을 동시에 이룹니다." },
  9: { title: "인도주의자", desc: "넓은 시야로 세상을 품는 이상주의자. 이타적 행동으로 세상을 바꿉니다." },
  11: { title: "영감가 (마스터넘버)", desc: "높은 직관과 영적 통찰력의 소유자. 다른 이에게 영감을 줄 운명입니다." },
  22: { title: "마스터 건축가", desc: "거대한 비전을 현실로 만드는 능력자. 세상에 지속적인 유산을 남길 운명입니다." },
  33: { title: "마스터 교사", desc: "무조건적 사랑과 치유의 에너지. 인류를 가르치고 이끌 특별한 영혼입니다." },
};

export function getLifePathInfo(num: number) {
  return LIFE_PATH_DESC[num] || LIFE_PATH_DESC[9];
}

// ── 시드 기반 의사 난수 (개인화 점수용) ──
function seededRandom(seed: number): () => number {
  let s = seed;
  return () => {
    s = (s * 16807 + 0) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

function createSeed(birthday: Birthday, traits: string[]): number {
  const base = birthday.year * 10000 + birthday.month * 100 + birthday.day;
  let traitHash = 0;
  for (const t of traits) {
    for (let i = 0; i < t.length; i++) traitHash += t.charCodeAt(i) * (i + 1);
  }
  return base + traitHash;
}

// ── 8대 카테고리 운세 ──
export interface CategoryFortune {
  category: string;
  emoji: string;
  score: number;
  summary: string;
}

interface FortuneTexts {
  high: string[];
  mid: string[];
  low: string[];
}

const CATEGORIES: { name: string; emoji: string; texts: FortuneTexts }[] = [
  {
    name: "종합운", emoji: "✨",
    texts: {
      high: [
        "전반적으로 강한 상승 기운이 감지됩니다. 당신의 에너지가 주변을 밝히는 시기입니다.",
        "우주가 당신 편입니다. 직감을 믿고 과감하게 행동할 때 최고의 결과를 얻을 수 있습니다.",
      ],
      mid: [
        "안정적인 흐름 속에 작은 기회들이 숨어있습니다. 세심한 관찰이 행운을 부릅니다.",
        "균형 잡힌 에너지가 당신을 감싸고 있습니다. 급하지 않게, 그러나 꾸준히 나아가세요.",
      ],
      low: [
        "잠시 숨을 고르는 시기입니다. 내면의 목소리에 귀 기울이면 새로운 돌파구가 열립니다.",
        "재충전의 시간이 필요합니다. 쉬는 것도 전략이라는 걸 기억하세요.",
      ],
    },
  },
  {
    name: "연애운", emoji: "💕",
    texts: {
      high: [
        "강렬한 인연의 기운이 감지됩니다. 새로운 만남이든 깊어지는 관계든, 마음을 열어두세요.",
        "당신의 매력이 빛나는 시기입니다. 진심 어린 감정 표현이 관계를 한 단계 끌어올립니다.",
      ],
      mid: [
        "소소하지만 따뜻한 교류가 이어집니다. 작은 배려가 큰 사랑으로 돌아올 수 있습니다.",
        "관계에서 서로를 이해하려는 노력이 중요한 시기입니다. 대화의 힘을 믿으세요.",
      ],
      low: [
        "감정의 파도가 잦아드는 시기입니다. 혼자만의 시간이 오히려 관계의 질을 높여줍니다.",
        "지금은 자기 자신을 사랑하는 데 집중할 때입니다. 스스로를 돌보는 것이 최고의 연애 전략입니다.",
      ],
    },
  },
  {
    name: "재물운", emoji: "💰",
    texts: {
      high: [
        "재물의 흐름이 활발해지는 시기입니다. 현명한 판단이 큰 수확으로 이어질 수 있습니다.",
        "예상치 못한 금전적 기회가 다가올 수 있습니다. 준비된 자에게 행운이 따릅니다.",
      ],
      mid: [
        "안정적인 재정 흐름이 유지됩니다. 불필요한 지출만 줄이면 여유가 생길 수 있습니다.",
        "지금은 씨앗을 뿌리는 시기입니다. 당장의 결과보다 장기적 투자에 집중하세요.",
      ],
      low: [
        "지출에 주의가 필요한 시기입니다. 충동적인 소비를 자제하고 계획적으로 관리하세요.",
        "잠시 허리띠를 조이는 것이 미래의 풍요를 준비하는 길입니다.",
      ],
    },
  },
  {
    name: "직장/학업운", emoji: "💼",
    texts: {
      high: [
        "실력이 빛을 발하는 시기입니다. 자신감을 갖고 도전하면 인정받을 기회가 옵니다.",
        "업무에서의 성과가 눈에 띄게 향상됩니다. 리더십을 발휘할 절호의 타이밍입니다.",
      ],
      mid: [
        "꾸준한 노력이 차곡차곡 쌓이고 있습니다. 조급해하지 마세요, 때가 오면 결과가 보입니다.",
        "새로운 기술이나 지식을 습득하기 좋은 시기입니다. 배움에 투자하세요.",
      ],
      low: [
        "업무에서 정체감을 느낄 수 있습니다. 시야를 넓히고 새로운 접근법을 시도해 보세요.",
        "지금은 실력을 조용히 쌓아가는 시기입니다. 보이지 않는 곳에서의 노력이 곧 빛날 것입니다.",
      ],
    },
  },
  {
    name: "사업운", emoji: "🚀",
    texts: {
      high: [
        "새로운 기회의 문이 열리고 있습니다. 파트너십이나 협업에서 좋은 성과가 기대됩니다.",
        "비즈니스 감각이 날카로워지는 시기입니다. 과감한 결정이 큰 도약으로 이어집니다.",
      ],
      mid: [
        "안정적인 성장세를 유지하고 있습니다. 기본에 충실하면서 천천히 확장하세요.",
        "네트워킹에 신경 쓸 때입니다. 의외의 인연이 사업의 전환점이 될 수 있습니다.",
      ],
      low: [
        "신중한 판단이 필요한 시기입니다. 큰 투자나 결정은 좀 더 신중하게 검토하세요.",
        "지금은 내실을 다지는 데 집중하세요. 기초가 탄탄해야 높이 올라갈 수 있습니다.",
      ],
    },
  },
  {
    name: "건강운", emoji: "🏃",
    texts: {
      high: [
        "활력이 넘치는 시기입니다. 새로운 운동을 시작하거나 활동적인 취미를 즐기기 좋습니다.",
        "심신이 조화로운 상태입니다. 이 에너지를 유지하면 장기적 건강에 큰 도움이 됩니다.",
      ],
      mid: [
        "전반적으로 양호하지만, 수면과 스트레스 관리에 신경 쓰면 더 좋아질 수 있습니다.",
        "규칙적인 생활 패턴이 건강의 열쇠입니다. 작은 습관 하나가 큰 차이를 만듭니다.",
      ],
      low: [
        "몸이 보내는 신호에 주의를 기울이세요. 충분한 휴식이 최고의 보약입니다.",
        "정신 건강에도 관심을 기울여야 할 시기입니다. 가끔은 멈추는 것도 괜찮습니다.",
      ],
    },
  },
  {
    name: "대인관계운", emoji: "🤝",
    texts: {
      high: [
        "주변 사람들과의 관계가 깊어지는 시기입니다. 진심은 반드시 통한다는 걸 경험하게 됩니다.",
        "새로운 인연이 당신의 삶에 긍정적인 변화를 가져올 수 있습니다. 열린 마음으로 맞이하세요.",
      ],
      mid: [
        "기존 관계를 돌아보기 좋은 시기입니다. 오래된 친구에게 연락해 보세요.",
        "소통에 조금 더 신경 쓰면 관계의 질이 크게 향상됩니다. 듣는 것에 집중하세요.",
      ],
      low: [
        "오해가 생기기 쉬운 시기입니다. 말 한마디에 신중을 기하고, 감정적 반응을 자제하세요.",
        "혼자만의 시간이 필요할 수 있습니다. 무리하게 사교 활동을 하기보다 진정한 관계에 집중하세요.",
      ],
    },
  },
  {
    name: "행운 아이템", emoji: "🍀",
    texts: {
      high: [
        "행운의 기운이 당신 곁에 머무르고 있습니다. 작은 우연이 큰 기회로 이어질 수 있습니다.",
        "긍정적인 에너지가 강하게 흐르고 있습니다. 본능적으로 끌리는 것을 따라가 보세요.",
      ],
      mid: [
        "행운은 준비된 자에게 옵니다. 평소에 정리정돈을 해두면 좋은 기운이 찾아옵니다.",
        "새로운 색상이나 아이템을 시도해 보세요. 작은 변화가 행운의 물꼬를 틀어줄 수 있습니다.",
      ],
      low: [
        "지금은 행운을 만들어가는 시기입니다. 작은 선행이 좋은 기운을 불러옵니다.",
        "행운은 먼 곳에 있지 않습니다. 일상의 작은 것들에 감사하면 기운이 바뀝니다.",
      ],
    },
  },
];

const LUCKY_COLORS = ["레드", "블루", "골드", "그린", "퍼플", "화이트", "실버", "오렌지", "핑크", "네이비"];
const LUCKY_ITEMS = ["열쇠 모양 액세서리", "나무 소재 소품", "둥근 모양 귀걸이", "파란색 손수건", "은색 반지", "별 모양 스티커", "작은 수정 원석", "가죽 팔찌", "빈티지 동전", "미니 화분"];
const LUCKY_DIRECTIONS = ["동쪽", "서쪽", "남쪽", "북쪽", "동남쪽", "남서쪽"];

export interface FortuneResult {
  zodiac: ZodiacInfo;
  chineseZodiac: ChineseZodiacInfo;
  lifePath: number;
  lifePathInfo: { title: string; desc: string };
  categories: CategoryFortune[];
  overallScore: number;
  todaySummary: string;
  yearlySummary: string;
  lifeSummary: string;
  keywords: string[];
  luckyNumber: number;
  luckyColor: string;
  luckyItem: string;
  luckyDirection: string;
}

export function generateFortune(birthday: Birthday, traits: string[]): FortuneResult {
  const zodiac = getZodiac(birthday.month, birthday.day);
  const chineseZodiac = getChineseZodiac(birthday.year);
  const lifePath = getLifePathNumber(birthday);
  const lifePathInfo = getLifePathInfo(lifePath);

  const seed = createSeed(birthday, traits);
  const rand = seededRandom(seed);

  // 8카테고리 점수 & 텍스트
  const categories: CategoryFortune[] = CATEGORIES.map((cat) => {
    const score = Math.floor(rand() * 35) + 65; // 65~99
    const level = score >= 85 ? "high" : score >= 75 ? "mid" : "low";
    const texts = cat.texts[level];
    const summary = texts[Math.floor(rand() * texts.length)];
    return { category: cat.name, emoji: cat.emoji, score, summary };
  });

  const overallScore = Math.round(categories.reduce((s, c) => s + c.score, 0) / categories.length);

  const todaySummary = `오늘 ${zodiac.name} ${zodiac.emoji}의 기운은 ${overallScore >= 80 ? "매우 긍정적" : overallScore >= 70 ? "안정적" : "차분한 에너지"} 상태입니다. ${traits[0] ? `당신의 ${traitToKo(traits[0])} 성향이 오늘 특히 빛을 발할 것입니다.` : ""} 행운의 숫자 ${(lifePath * 7 + birthday.day) % 49 + 1}과 함께하는 하루를 보내세요.`;

  const yearlySummary = `2026년은 ${zodiac.name}에게 "${overallScore >= 80 ? "도약과 성취" : overallScore >= 70 ? "성장과 안정" : "성찰과 준비"}"의 해입니다. 생명경로수 ${lifePath}(${lifePathInfo.title})의 에너지가 ${chineseZodiac.animal}띠의 ${chineseZodiac.personality} 기질과 만나 ${overallScore >= 80 ? "큰 전환점" : "꾸준한 발전"}을 만들어갑니다. ${traits.length >= 3 ? `당신의 ${traitToKo(traits[1])} 성향과 ${traitToKo(traits[2])} 에너지가 올해의 핵심 동력이 될 것입니다.` : ""}`;

  const lifeSummary = `${zodiac.name}(${zodiac.element} 원소) + ${chineseZodiac.animal}띠 + 생명경로수 ${lifePath}(${lifePathInfo.title})의 조합은 ${lifePathInfo.desc} ${chineseZodiac.personality} 기질이 더해져 당신만의 독특한 인생 궤적을 만들어갑니다. ${traits.length >= 2 ? `특히 ${traitToKo(traits[0])} 성향과 ${traitToKo(traits[traits.length - 1])} 에너지의 조합은 다른 누구도 가지지 못한 당신만의 강점입니다.` : ""}`;

  const keywordPool = ["도전", "성장", "만남", "변화", "안정", "창조", "사랑", "지혜", "풍요", "자유", "직관", "열정"];
  const keywords: string[] = [];
  for (let i = 0; i < 3; i++) {
    const idx = Math.floor(rand() * keywordPool.length);
    keywords.push(keywordPool.splice(idx, 1)[0]);
  }

  const luckyNumber = (lifePath * 7 + birthday.day) % 49 + 1;
  const luckyColor = LUCKY_COLORS[Math.floor(rand() * LUCKY_COLORS.length)];
  const luckyItem = LUCKY_ITEMS[Math.floor(rand() * LUCKY_ITEMS.length)];
  const luckyDirection = LUCKY_DIRECTIONS[Math.floor(rand() * LUCKY_DIRECTIONS.length)];

  return {
    zodiac, chineseZodiac, lifePath, lifePathInfo,
    categories, overallScore,
    todaySummary, yearlySummary, lifeSummary,
    keywords, luckyNumber, luckyColor, luckyItem, luckyDirection,
  };
}

// trait 영문 → 한글 변환
function traitToKo(trait: string): string {
  const map: Record<string, string> = {
    energetic: "열정적인", intuitive: "직관적인", intellectual: "사색적인", grounded: "안정적인",
    introspective: "내면 지향적인", spontaneous: "즉흥적인", creative: "창의적인", social: "사교적인",
    ambitious: "야심 있는", peaceful: "평화로운", driven: "추진력 있는", explorer: "탐험가적인",
    empathetic: "공감하는", analytical: "분석적인", storyteller: "이야기를 좋아하는", motivator: "동기부여적인",
    visionary: "비전 있는", harmonious: "조화로운", catalyst: "변화를 이끄는", patient: "인내심 깊은",
  };
  return map[trait] || trait;
}

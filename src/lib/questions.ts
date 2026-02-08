import type { Question } from "./types";

// 전체 질문 풀 (20개) — 매번 랜덤 5개 선택
export const questionPool: Question[] = [
  // ── 추상적 / 몽환적 ──
  {
    id: "element",
    text: "당신을 끌어당기는 원소는?",
    options: [
      { id: "element_fire", emoji: "🔥", label: "불 — 열정과 행동", trait: "energetic", gradient: "from-orange-500/20 to-red-600/20" },
      { id: "element_water", emoji: "🌊", label: "물 — 흐름과 직관", trait: "intuitive", gradient: "from-blue-400/20 to-cyan-500/20" },
      { id: "element_air", emoji: "🌬️", label: "바람 — 사유와 자유", trait: "intellectual", gradient: "from-sky-300/20 to-indigo-300/20" },
      { id: "element_earth", emoji: "🏔️", label: "대지 — 안정과 성장", trait: "grounded", gradient: "from-green-500/20 to-amber-700/20" },
    ],
  },
  {
    id: "symbol",
    text: "끌리는 상징을 고르세요",
    options: [
      { id: "symbol_infinity", emoji: "∞", label: "무한 — 끝없는 가능성", trait: "visionary", gradient: "from-purple-400/20 to-violet-500/20" },
      { id: "symbol_balance", emoji: "⚖️", label: "균형 — 모든 것의 조화", trait: "harmonious", gradient: "from-sky-300/20 to-blue-400/20" },
      { id: "symbol_spark", emoji: "⚡", label: "불꽃 — 돌파와 변화", trait: "catalyst", gradient: "from-yellow-400/20 to-amber-500/20" },
      { id: "symbol_seed", emoji: "🌱", label: "씨앗 — 인내와 성장", trait: "patient", gradient: "from-green-300/20 to-emerald-400/20" },
    ],
  },
  {
    id: "moon",
    text: "어떤 달이 당신의 밤과 닮았나요?",
    options: [
      { id: "moon_full", emoji: "🌕", label: "보름달 — 충만하고 환한", trait: "energetic", gradient: "from-yellow-300/20 to-amber-400/20" },
      { id: "moon_crescent", emoji: "🌙", label: "초승달 — 조용한 시작", trait: "patient", gradient: "from-indigo-400/20 to-purple-500/20" },
      { id: "moon_eclipse", emoji: "🌑", label: "개기월식 — 신비롭고 강렬한", trait: "intuitive", gradient: "from-slate-500/20 to-violet-600/20" },
      { id: "moon_half", emoji: "🌓", label: "반달 — 균형 잡힌", trait: "harmonious", gradient: "from-blue-300/20 to-sky-400/20" },
    ],
  },
  {
    id: "season",
    text: "당신의 영혼이 머무는 계절은?",
    options: [
      { id: "season_spring", emoji: "🌸", label: "봄 — 새 시작의 설렘", trait: "spontaneous", gradient: "from-pink-300/20 to-rose-400/20" },
      { id: "season_summer", emoji: "☀️", label: "여름 — 뜨거운 열정", trait: "energetic", gradient: "from-orange-400/20 to-yellow-500/20" },
      { id: "season_autumn", emoji: "🍂", label: "가을 — 깊은 사색", trait: "intellectual", gradient: "from-amber-400/20 to-orange-500/20" },
      { id: "season_winter", emoji: "❄️", label: "겨울 — 고요한 내면", trait: "introspective", gradient: "from-blue-200/20 to-indigo-300/20" },
    ],
  },
  {
    id: "door",
    text: "세 개의 문이 있습니다. 어디로?",
    options: [
      { id: "door_gold", emoji: "🚪", label: "금빛 문 — 알 수 없는 보상", trait: "ambitious", gradient: "from-yellow-400/20 to-amber-500/20" },
      { id: "door_mist", emoji: "🌫️", label: "안개 낀 문 — 미지의 세계", trait: "explorer", gradient: "from-slate-300/20 to-gray-400/20" },
      { id: "door_vine", emoji: "🌿", label: "덩굴로 뒤덮인 문 — 자연의 품", trait: "peaceful", gradient: "from-green-400/20 to-emerald-500/20" },
      { id: "door_star", emoji: "⭐", label: "별빛이 새어나오는 문 — 운명", trait: "visionary", gradient: "from-purple-400/20 to-indigo-500/20" },
    ],
  },
  {
    id: "dream",
    text: "반복되는 꿈이 있다면 어떤 느낌?",
    options: [
      { id: "dream_fly", emoji: "🕊️", label: "하늘을 나는 꿈", trait: "visionary", gradient: "from-sky-300/20 to-blue-400/20" },
      { id: "dream_ocean", emoji: "🐚", label: "끝없는 바다를 걷는 꿈", trait: "intuitive", gradient: "from-cyan-300/20 to-blue-400/20" },
      { id: "dream_maze", emoji: "🔮", label: "미로를 탐험하는 꿈", trait: "analytical", gradient: "from-violet-400/20 to-purple-500/20" },
      { id: "dream_light", emoji: "✨", label: "따뜻한 빛에 감싸이는 꿈", trait: "empathetic", gradient: "from-amber-300/20 to-yellow-400/20" },
    ],
  },
  {
    id: "color",
    text: "지금 가장 끌리는 색은?",
    options: [
      { id: "color_red", emoji: "🔴", label: "강렬한 레드", trait: "energetic", gradient: "from-red-500/20 to-rose-600/20" },
      { id: "color_blue", emoji: "🔵", label: "깊은 블루", trait: "introspective", gradient: "from-blue-500/20 to-indigo-600/20" },
      { id: "color_green", emoji: "🟢", label: "자연의 그린", trait: "grounded", gradient: "from-green-500/20 to-emerald-600/20" },
      { id: "color_purple", emoji: "🟣", label: "신비로운 퍼플", trait: "intuitive", gradient: "from-purple-500/20 to-violet-600/20" },
    ],
  },

  // ── 일상적 / 시나리오 ──
  {
    id: "evening",
    text: "계획 없는 저녁, 당신은?",
    options: [
      { id: "evening_alone", emoji: "📖", label: "혼자만의 아늑한 시간", trait: "introspective", gradient: "from-indigo-400/20 to-purple-500/20" },
      { id: "evening_adventure", emoji: "✨", label: "친구에게 전화, 즉흥 모험", trait: "spontaneous", gradient: "from-yellow-400/20 to-orange-400/20" },
      { id: "evening_create", emoji: "🎨", label: "창작 활동에 몰입", trait: "creative", gradient: "from-pink-400/20 to-rose-500/20" },
      { id: "evening_social", emoji: "🎉", label: "집에서 모임 열기", trait: "social", gradient: "from-emerald-400/20 to-teal-500/20" },
    ],
  },
  {
    id: "landscape",
    text: "마음의 고향 같은 풍경은?",
    options: [
      { id: "landscape_mountain", emoji: "🌌", label: "별 쏟아지는 산꼭대기", trait: "ambitious", gradient: "from-violet-500/20 to-indigo-600/20" },
      { id: "landscape_ocean", emoji: "🌅", label: "노을빛 잔잔한 바다", trait: "peaceful", gradient: "from-orange-300/20 to-rose-400/20" },
      { id: "landscape_city", emoji: "🌃", label: "불빛 가득한 도시 야경", trait: "driven", gradient: "from-cyan-400/20 to-blue-500/20" },
      { id: "landscape_forest", emoji: "🌿", label: "햇살 드는 고요한 숲길", trait: "explorer", gradient: "from-green-400/20 to-emerald-500/20" },
    ],
  },
  {
    id: "friend",
    text: "친구가 큰 고민을 털어놓으면?",
    options: [
      { id: "friend_empathy", emoji: "💛", label: "깊이 들어주며 공감", trait: "empathetic", gradient: "from-yellow-300/20 to-amber-400/20" },
      { id: "friend_solve", emoji: "💡", label: "함께 해결책 고민", trait: "analytical", gradient: "from-blue-300/20 to-sky-400/20" },
      { id: "friend_story", emoji: "🧭", label: "내 경험담 나누기", trait: "storyteller", gradient: "from-teal-300/20 to-cyan-400/20" },
      { id: "friend_cheer", emoji: "🔥", label: "\"넌 할 수 있어!\" 응원", trait: "motivator", gradient: "from-red-400/20 to-orange-500/20" },
    ],
  },
  {
    id: "morning",
    text: "이상적인 아침 루틴은?",
    options: [
      { id: "morning_early", emoji: "🌅", label: "새벽에 일어나 조용히 명상", trait: "introspective", gradient: "from-orange-300/20 to-pink-400/20" },
      { id: "morning_workout", emoji: "💪", label: "상쾌한 운동으로 시작", trait: "energetic", gradient: "from-red-400/20 to-orange-500/20" },
      { id: "morning_slow", emoji: "☕", label: "커피 한 잔, 여유롭게", trait: "peaceful", gradient: "from-amber-300/20 to-yellow-400/20" },
      { id: "morning_plan", emoji: "📋", label: "오늘 할 일 꼼꼼히 정리", trait: "analytical", gradient: "from-blue-300/20 to-indigo-400/20" },
    ],
  },
  {
    id: "travel",
    text: "여행지를 고른다면?",
    options: [
      { id: "travel_ancient", emoji: "🏛️", label: "역사 깊은 고대 도시", trait: "intellectual", gradient: "from-amber-400/20 to-stone-500/20" },
      { id: "travel_nature", emoji: "🏕️", label: "아무도 없는 자연 속", trait: "explorer", gradient: "from-green-400/20 to-lime-500/20" },
      { id: "travel_vibrant", emoji: "🎪", label: "활기 넘치는 축제의 도시", trait: "social", gradient: "from-pink-400/20 to-purple-500/20" },
      { id: "travel_cozy", emoji: "🏡", label: "한적한 시골 마을에서 힐링", trait: "peaceful", gradient: "from-emerald-300/20 to-teal-400/20" },
    ],
  },
  {
    id: "superpower",
    text: "하루 동안 초능력이 생긴다면?",
    options: [
      { id: "super_time", emoji: "⏰", label: "시간을 멈추는 능력", trait: "analytical", gradient: "from-blue-400/20 to-indigo-500/20" },
      { id: "super_read", emoji: "🧠", label: "마음을 읽는 능력", trait: "empathetic", gradient: "from-purple-400/20 to-pink-500/20" },
      { id: "super_fly", emoji: "🦅", label: "자유롭게 나는 능력", trait: "explorer", gradient: "from-sky-300/20 to-blue-400/20" },
      { id: "super_heal", emoji: "💚", label: "무엇이든 치유하는 능력", trait: "empathetic", gradient: "from-green-300/20 to-emerald-400/20" },
    ],
  },
  {
    id: "music",
    text: "지금 기분을 음악으로 표현하면?",
    options: [
      { id: "music_jazz", emoji: "🎷", label: "잔잔한 재즈", trait: "peaceful", gradient: "from-amber-300/20 to-orange-400/20" },
      { id: "music_rock", emoji: "🎸", label: "강렬한 록", trait: "energetic", gradient: "from-red-500/20 to-orange-600/20" },
      { id: "music_classical", emoji: "🎻", label: "깊은 클래식", trait: "intellectual", gradient: "from-indigo-300/20 to-purple-400/20" },
      { id: "music_electronic", emoji: "🎧", label: "신나는 일렉트로닉", trait: "spontaneous", gradient: "from-cyan-400/20 to-pink-500/20" },
    ],
  },
  {
    id: "gift",
    text: "소중한 사람에게 줄 선물은?",
    options: [
      { id: "gift_handmade", emoji: "🎁", label: "직접 만든 핸드메이드", trait: "creative", gradient: "from-pink-300/20 to-rose-400/20" },
      { id: "gift_experience", emoji: "🎫", label: "잊을 수 없는 경험", trait: "spontaneous", gradient: "from-yellow-400/20 to-orange-500/20" },
      { id: "gift_practical", emoji: "🛍️", label: "실용적이고 품질 좋은 것", trait: "grounded", gradient: "from-slate-300/20 to-zinc-400/20" },
      { id: "gift_letter", emoji: "💌", label: "마음을 담은 편지", trait: "empathetic", gradient: "from-rose-300/20 to-pink-400/20" },
    ],
  },
  {
    id: "animal",
    text: "당신의 영혼을 닮은 동물은?",
    options: [
      { id: "animal_cat", emoji: "🐱", label: "고양이 — 독립적이고 우아한", trait: "introspective", gradient: "from-purple-300/20 to-violet-400/20" },
      { id: "animal_dog", emoji: "🐕", label: "강아지 — 충성스럽고 따뜻한", trait: "social", gradient: "from-amber-300/20 to-yellow-400/20" },
      { id: "animal_eagle", emoji: "🦅", label: "독수리 — 자유롭고 날카로운", trait: "ambitious", gradient: "from-sky-400/20 to-blue-500/20" },
      { id: "animal_dolphin", emoji: "🐬", label: "돌고래 — 영리하고 유쾌한", trait: "spontaneous", gradient: "from-cyan-300/20 to-blue-400/20" },
    ],
  },

  // ── 느낌 / 바이브 ──
  {
    id: "weather",
    text: "당신의 내면은 어떤 날씨와 닮았나요?",
    options: [
      { id: "weather_sunny", emoji: "☀️", label: "맑고 따뜻한 햇살", trait: "social", gradient: "from-yellow-300/20 to-amber-400/20" },
      { id: "weather_rain", emoji: "🌧️", label: "촉촉한 비 내리는 오후", trait: "introspective", gradient: "from-slate-400/20 to-blue-500/20" },
      { id: "weather_thunder", emoji: "⛈️", label: "천둥번개 치는 밤", trait: "catalyst", gradient: "from-purple-500/20 to-indigo-600/20" },
      { id: "weather_snow", emoji: "🌨️", label: "소복소복 눈 내리는 풍경", trait: "peaceful", gradient: "from-blue-200/20 to-sky-300/20" },
    ],
  },
  {
    id: "time",
    text: "가장 마음이 편한 시간대는?",
    options: [
      { id: "time_dawn", emoji: "🌅", label: "고요한 새벽", trait: "introspective", gradient: "from-indigo-400/20 to-purple-500/20" },
      { id: "time_noon", emoji: "🌞", label: "활기찬 한낮", trait: "energetic", gradient: "from-yellow-400/20 to-orange-500/20" },
      { id: "time_sunset", emoji: "🌇", label: "따뜻한 황혼", trait: "peaceful", gradient: "from-orange-300/20 to-rose-400/20" },
      { id: "time_midnight", emoji: "🌙", label: "깊은 한밤중", trait: "creative", gradient: "from-violet-500/20 to-indigo-600/20" },
    ],
  },
  {
    id: "scent",
    text: "코끝을 스치면 기분 좋은 향은?",
    options: [
      { id: "scent_ocean", emoji: "🌊", label: "바다 내음", trait: "peaceful", gradient: "from-cyan-300/20 to-blue-400/20" },
      { id: "scent_campfire", emoji: "🔥", label: "모닥불 연기", trait: "grounded", gradient: "from-orange-400/20 to-amber-500/20" },
      { id: "scent_flower", emoji: "🌺", label: "꽃향기", trait: "empathetic", gradient: "from-pink-300/20 to-rose-400/20" },
      { id: "scent_rain", emoji: "🌧️", label: "비 온 뒤 흙냄새", trait: "intuitive", gradient: "from-green-300/20 to-teal-400/20" },
    ],
  },
  {
    id: "book",
    text: "한 권의 책을 받는다면?",
    options: [
      { id: "book_adventure", emoji: "🗺️", label: "모험 소설", trait: "explorer", gradient: "from-amber-400/20 to-orange-500/20" },
      { id: "book_philosophy", emoji: "📜", label: "철학서", trait: "intellectual", gradient: "from-indigo-300/20 to-violet-400/20" },
      { id: "book_poetry", emoji: "🌙", label: "시집", trait: "creative", gradient: "from-purple-300/20 to-pink-400/20" },
      { id: "book_self", emoji: "💡", label: "자기계발서", trait: "driven", gradient: "from-yellow-400/20 to-green-500/20" },
    ],
  },
];

// 질문 개수
export const QUESTION_COUNT = 5;

// 랜덤 5개 선택 (셔플 후 앞에서 자름)
export function pickRandomQuestions(seed?: number): Question[] {
  const shuffled = [...questionPool];
  // Fisher-Yates shuffle with optional seed
  let s = seed ?? Math.floor(Math.random() * 100000);
  for (let i = shuffled.length - 1; i > 0; i--) {
    s = (s * 16807 + 0) % 2147483647;
    const j = Math.floor(((s - 1) / 2147483646) * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, QUESTION_COUNT);
}

// 현재 세션의 질문 (하위호환용)
export let questions: Question[] = [];

export function initQuestions(seed?: number) {
  questions = pickRandomQuestions(seed);
  return questions;
}

export function extractTraits(
  answers: Record<string, string>
): string[] {
  // questionPool에서 모든 질문을 검색해서 trait 추출
  return questionPool
    .map((q) => {
      const selectedId = answers[q.id];
      return q.options.find((o) => o.id === selectedId)?.trait;
    })
    .filter((t): t is string => !!t);
}

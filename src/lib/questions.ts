import type { Question } from "./types";

export const questions: Question[] = [
  {
    id: "element",
    text: "당신을 끌어당기는 원소는?",
    options: [
      {
        id: "q1_fire",
        emoji: "\uD83D\uDD25",
        label: "\uBD88 \u2014 \uC5F4\uC815\uACFC \uD589\uB3D9",
        trait: "energetic",
        gradient: "from-orange-500/20 to-red-600/20",
      },
      {
        id: "q1_water",
        emoji: "\uD83C\uDF0A",
        label: "\uBB3C \u2014 \uD750\uB984\uACFC \uC9C1\uAD00",
        trait: "intuitive",
        gradient: "from-blue-400/20 to-cyan-500/20",
      },
      {
        id: "q1_air",
        emoji: "\uD83C\uDF2C\uFE0F",
        label: "\uBC14\uB78C \u2014 \uC0AC\uC720\uC640 \uC790\uC720",
        trait: "intellectual",
        gradient: "from-sky-300/20 to-indigo-300/20",
      },
      {
        id: "q1_earth",
        emoji: "\uD83C\uDFD4\uFE0F",
        label: "\uB300\uC9C0 \u2014 \uC548\uC815\uACFC \uC131\uC7A5",
        trait: "grounded",
        gradient: "from-green-500/20 to-amber-700/20",
      },
    ],
  },
  {
    id: "evening",
    text: "\uACC4\uD68D \uC5C6\uB294 \uC800\uB141, \uB2F9\uC2E0\uC740?",
    options: [
      {
        id: "q2_alone",
        emoji: "\uD83D\uDCD6",
        label: "\uD63C\uC790\uB9CC\uC758 \uC544\uB291\uD55C \uC2DC\uAC04",
        trait: "introspective",
        gradient: "from-indigo-400/20 to-purple-500/20",
      },
      {
        id: "q2_adventure",
        emoji: "\u2728",
        label: "\uCE5C\uAD6C\uC5D0\uAC8C \uC804\uD654, \uC989\uD765 \uBAA8\uD5D8",
        trait: "spontaneous",
        gradient: "from-yellow-400/20 to-orange-400/20",
      },
      {
        id: "q2_create",
        emoji: "\uD83C\uDFA8",
        label: "\uCC3D\uC791 \uD65C\uB3D9\uC5D0 \uBAB0\uC785",
        trait: "creative",
        gradient: "from-pink-400/20 to-rose-500/20",
      },
      {
        id: "q2_social",
        emoji: "\uD83C\uDF89",
        label: "\uC9D1\uC5D0\uC11C \uBAA8\uC784 \uC5F4\uAE30",
        trait: "social",
        gradient: "from-emerald-400/20 to-teal-500/20",
      },
    ],
  },
  {
    id: "landscape",
    text: "\uB9C8\uC74C\uC758 \uACE0\uD5A5 \uAC19\uC740 \uD48D\uACBD\uC740?",
    options: [
      {
        id: "q3_mountain",
        emoji: "\uD83C\uDF0C",
        label: "\uBCC4 \uC3DF\uC544\uC9C0\uB294 \uC0B0\uAF2D\uB300\uAE30",
        trait: "ambitious",
        gradient: "from-violet-500/20 to-indigo-600/20",
      },
      {
        id: "q3_ocean",
        emoji: "\uD83C\uDF05",
        label: "\uB178\uC744\uBE5B \uC794\uC794\uD55C \uBC14\uB2E4",
        trait: "peaceful",
        gradient: "from-orange-300/20 to-rose-400/20",
      },
      {
        id: "q3_city",
        emoji: "\uD83C\uDF03",
        label: "\uBD88\uBE5B \uAC00\uB4DD\uD55C \uB3C4\uC2DC \uC57C\uACBD",
        trait: "driven",
        gradient: "from-cyan-400/20 to-blue-500/20",
      },
      {
        id: "q3_forest",
        emoji: "\uD83C\uDF3F",
        label: "\uD587\uC0B4 \uB4DC\uB294 \uACE0\uC694\uD55C \uC20F\uAE38",
        trait: "explorer",
        gradient: "from-green-400/20 to-emerald-500/20",
      },
    ],
  },
  {
    id: "friend",
    text: "\uCE5C\uAD6C\uAC00 \uD070 \uACE0\uBBFC\uC744 \uD138\uC5B4\uB193\uC73C\uBA74?",
    options: [
      {
        id: "q4_empathy",
        emoji: "\uD83D\uDC9B",
        label: "\uAE4A\uC774 \uB4E4\uC5B4\uC8FC\uBA70 \uACF5\uAC10",
        trait: "empathetic",
        gradient: "from-yellow-300/20 to-amber-400/20",
      },
      {
        id: "q4_solve",
        emoji: "\uD83D\uDCA1",
        label: "\uD568\uAED8 \uD574\uACB0\uCC45 \uACE0\uBBFC",
        trait: "analytical",
        gradient: "from-blue-300/20 to-sky-400/20",
      },
      {
        id: "q4_story",
        emoji: "\uD83E\uDDED",
        label: "\uB0B4 \uACBD\uD5D8\uB2F4 \uB098\uB204\uAE30",
        trait: "storyteller",
        gradient: "from-teal-300/20 to-cyan-400/20",
      },
      {
        id: "q4_cheer",
        emoji: "\uD83D\uDD25",
        label: '\u201C\uB10C \uD560 \uC218 \uC788\uC5B4!\u201D \uC751\uC6D0',
        trait: "motivator",
        gradient: "from-red-400/20 to-orange-500/20",
      },
    ],
  },
  {
    id: "symbol",
    text: "\uB04C\uB9AC\uB294 \uC0C1\uC9D5\uC744 \uACE0\uB974\uC138\uC694",
    options: [
      {
        id: "q5_infinity",
        emoji: "\u221E",
        label: "\uBB34\uD55C \u2014 \uB05D\uC5C6\uB294 \uAC00\uB2A5\uC131",
        trait: "visionary",
        gradient: "from-purple-400/20 to-violet-500/20",
      },
      {
        id: "q5_balance",
        emoji: "\u2696\uFE0F",
        label: "\uADE0\uD615 \u2014 \uBAA8\uB4E0 \uAC83\uC758 \uC870\uD654",
        trait: "harmonious",
        gradient: "from-sky-300/20 to-blue-400/20",
      },
      {
        id: "q5_spark",
        emoji: "\u26A1",
        label: "\uBD88\uAF43 \u2014 \uB3CC\uD30C\uC640 \uBCC0\uD654",
        trait: "catalyst",
        gradient: "from-yellow-400/20 to-amber-500/20",
      },
      {
        id: "q5_seed",
        emoji: "\uD83C\uDF31",
        label: "\uC528\uC557 \u2014 \uC778\uB0B4\uC640 \uC131\uC7A5",
        trait: "patient",
        gradient: "from-green-300/20 to-emerald-400/20",
      },
    ],
  },
];

export function extractTraits(
  answers: Record<string, string>
): string[] {
  return questions
    .map((q) => {
      const selectedId = answers[q.id];
      return q.options.find((o) => o.id === selectedId)?.trait;
    })
    .filter((t): t is string => !!t);
}

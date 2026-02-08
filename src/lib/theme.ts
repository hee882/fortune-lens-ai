export const colors = {
  cosmic: {
    900: "#0a0a2e",
    800: "#0d0d3a",
    700: "#1a1150",
    600: "#2d1b69",
    500: "#3d2b7a",
  },
  gold: {
    primary: "#f5c542",
    secondary: "#fbbf24",
    dim: "#b8860b",
  },
  purple: {
    glow: "rgba(139, 92, 246, 0.3)",
    accent: "#8b5cf6",
  },
} as const;

export const gradients = {
  cosmicBg: "bg-gradient-to-b from-[#0a0a2e] via-[#1a1150] to-[#0d0d3a]",
  goldShimmer: "bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400",
  purpleGlow: "bg-gradient-to-r from-purple-500 via-violet-500 to-purple-500",
} as const;

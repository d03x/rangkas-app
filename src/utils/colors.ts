const baseColor = {
  white: "white",
};
export const ColorsLight = {
  ...baseColor,

  // Primary Colors (Orange-based)
  primary: "#F97316", // Orange utama (vibrant)
  primaryLight: "#FB923C", // Orange muda
  primaryDark: "#EA580C", // Orange gelap (lebih dalam)

  // Secondary Colors (Complementary colors)
  secondary: "#84CC16", // Lime hijau (kontras segar)
  secondaryLight: "#A3E635", // Lime muda

  // Background & Surface
  background: "#FFFFFF",
  card: "#FFFFFF",
  surface: "#F5F5F4", // Warm gray sangat light

  // Text & Border
  text: "#292524", // Warm black (bukan hitam netral)
  textSecondary: "#78716C", // Warm gray
  border: "#D6D3D1", // Garis subtle warm

  // Action Colors
  success: "#84CC16", // Lime hijau
  error: "#DC2626", // Merah hangat
  warning: "#F59E0B", // Kuning-orange
  info: "#F97316", // Orange utama

  // Feature Colors
  epay: "#F97316", // Orange
  ecar: "#EAB308", // Kuning emas
  efood: "#EA580C", // Orange gelap
  eride: "#F97316",
  esend: "#D97706", // Orange kecoklatan

  // Input Fields
  input: {
    background: "#FFFFFF",
    text: "#292524",
    placeholder: "#A8A29E",
    border: "#D6D3D1",
    borderFocused: "#F97316",
    icon: "#78716C",
    helperText: "#78716C",
    errorText: "#DC2626",
    disabled: "#F5F5F4",
    disabledText: "#A8A29E",
  },
};

export const ColorsDark = {
  ...baseColor,
  // Primary Colors
  primary: "#FB923C", // Orange muda di dark mode
  primaryLight: "#FDBA74", // Orange pastel
  primaryDark: "#F97316",

  // Secondary Colors
  secondary: "#A3E635", // Lime terang
  secondaryLight: "#BEF264", // Lime neon

  // Background & Surface
  background: "#1C1917", // Warm dark
  card: "#292524",
  surface: "#44403C",

  // Text & Border
  text: "#F5F5F4",
  textSecondary: "#D6D3D1",
  border: "#57534E",

  // Action Colors
  success: "#A3E635",
  error: "#F87171",
  warning: "#FBBF24",
  info: "#FB923C",

  // Feature Colors
  epay: "#FB923C",
  ecar: "#FACC15",
  efood: "#FB923C",
  eride: "#FB923C",
  esend: "#F59E0B",

  // Input Fields
  input: {
    background: "#292524",
    text: "#F5F5F4",
    placeholder: "#A8A29E",
    border: "#57534E",
    borderFocused: "#FB923C",
    icon: "#D6D3D1",
    helperText: "#D6D3D1",
    errorText: "#FCA5A5",
    disabled: "#44403C",
    disabledText: "#78716C",
  },
};

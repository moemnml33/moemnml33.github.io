import withMT from "@material-tailwind/react/utils/withMT";
const { nextui } = require("@nextui-org/react");

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "-apple-system",
          "Poppins",
          "ui-sans-serif",
          "system-ui",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
    },
    colors: {
      slate: {
        50: "#f8fafc",
        100: "#f1f5f9",
        200: "#e2e8f0",
        300: "#cbd5e1",
        400: "#94a3b8",
        500: "#64748b",
        600: "#475569",
        700: "#334155",
        800: "#1e293b",
        900: "#0f172a",
      },
      zinc: {
        50: "#fafafa",
        100: "#f4f4f5",
        200: "#e4e4e7",
        300: "#d4d4d8",
        400: "#a1a1aa",
        500: "#71717a",
        600: "#52525b",
        700: "#3f3f46",
        800: "#27272a",
        900: "#18181b",
        950: "#09090b",
      },
    },
    borderWidth: {
      DEFAULT: "1px",
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: "#f1f5f9",
            cardBackground: "#f8fafc",
            textBackground: "#0f172a",
          },
        },
        dark: {
          colors: {
            background: "#09090b",
            cardBackground: "#27272a",
            textBackground: "#a1a1aa",
          },
        },
      },
    }),
  ],
});

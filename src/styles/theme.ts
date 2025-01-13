import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  colors: {
    primary: {
      main: "#0070f3",
      light: "#00a8ff",
      dark: "#0050b3",
    },
    secondary: {
      main: "#2d3748",
      light: "#4a5568",
      dark: "#1a202c",
    },
    background: {
      main: "#ffffff",
      light: "#f8f9fa",
      glass: "rgba(255, 255, 255, 0.7)",
    },
    text: {
      primary: "#2d3748",
      secondary: "#4a5568",
      light: "#718096",
    },
  },
  typography: {
    fontFamily: {
      heading: "Montserrat, sans-serif",
      body: "Open Sans, sans-serif",
    },
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
  },
  spacing: {
    xs: "0.5rem",
    sm: "1rem",
    md: "1.5rem",
    lg: "2rem",
    xl: "3rem",
    "2xl": "4rem",
    "3xl": "6rem",
  },
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
  },
  animation: {
    duration: {
      fast: "0.15s",
      normal: "0.3s",
      slow: "0.5s",
    },
    timing: "cubic-bezier(0.4, 0, 0.2, 1)",
  },
  borderRadius: {
    sm: "0.25rem",
    md: "0.5rem",
    lg: "1rem",
    full: "9999px",
  },
  shadows: {
    sm: "0 1px 3px rgba(0,0,0,0.12)",
    md: "0 4px 6px rgba(0,0,0,0.1)",
    lg: "0 10px 15px rgba(0,0,0,0.1)",
  },
};

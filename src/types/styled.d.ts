import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: {
        main: string;
        light: string;
        dark: string;
      };
      secondary: {
        main: string;
        light: string;
        dark: string;
      };
      background: {
        main: string;
        light: string;
        glass: string;
      };
      text: {
        primary: string;
        secondary: string;
        light: string;
      };
    };
    typography: {
      fontFamily: {
        heading: string;
        body: string;
      };
      fontSize: {
        xs: string;
        sm: string;
        base: string;
        lg: string;
        xl: string;
        "2xl": string;
        "3xl": string;
        "4xl": string;
      };
      fontWeight: {
        normal: number;
        medium: number;
        semibold: number;
        bold: number;
      };
    };
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      "2xl": string;
      "3xl": string;
    };
    breakpoints: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    animation: {
      duration: {
        fast: string;
        normal: string;
        slow: string;
      };
      timing: string;
    };
    borderRadius: {
      sm: string;
      md: string;
      lg: string;
      full: string;
    };
    shadows: {
      sm: string;
      md: string;
      lg: string;
    };
  }
}

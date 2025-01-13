import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }

  body {
    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    color: ${({ theme }) => theme.colors.text.primary};
    background: ${({ theme }) => theme.colors.background.main};
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.typography.fontFamily.heading};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    line-height: 1.2;
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }

  section {
    padding: ${({ theme }) => theme.spacing["3xl"]} ${({ theme }) =>
  theme.spacing.lg};
    position: relative;
    
    &.with-bg {
      background: ${({ theme }) => theme.colors.background.glass};
      backdrop-filter: blur(8px);
      border-radius: ${({ theme }) => theme.borderRadius.lg};
      box-shadow: ${({ theme }) => theme.shadows.md};
      transition: transform ${({ theme }) =>
        theme.animation.duration.normal} ${({ theme }) =>
  theme.animation.timing};
      
      &:hover {
        transform: translateY(-4px);
        box-shadow: ${({ theme }) => theme.shadows.lg};
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    section {
      padding: ${({ theme }) => theme.spacing["2xl"]} ${({ theme }) =>
  theme.spacing.md};
    }
  }

  img {
    max-width: 100%;
    height: auto;
  }

  a {
    color: ${({ theme }) => theme.colors.primary.main};
    text-decoration: none;
    transition: color ${({ theme }) => theme.animation.duration.fast} ${({
  theme,
}) => theme.animation.timing};

    &:hover {
      color: ${({ theme }) => theme.colors.primary.dark};
    }
  }

  button {
    cursor: pointer;
    font-family: inherit;
  }
`;

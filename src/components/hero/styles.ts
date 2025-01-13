import styled from "styled-components";
import { motion } from "framer-motion";

export const HeroContainer = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: ${({ theme }) => theme.spacing["3xl"]};
  position: relative;
  overflow: hidden;
`;

export const HeroContent = styled(motion.div)`
  max-width: ${({ theme }) => theme.breakpoints.xl};
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl};
  text-align: center;
  z-index: 1;
`;

export const Title = styled(motion.h1)`
  font-size: clamp(
    2.5rem,
    5vw,
    ${({ theme }) => theme.typography.fontSize["4xl"]}
  );
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary.main},
    ${({ theme }) => theme.colors.primary.light}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

export const Subtitle = styled(motion.p)`
  font-size: clamp(1rem, 2vw, ${({ theme }) => theme.typography.fontSize.xl});
  color: ${({ theme }) => theme.colors.text.secondary};
  max-width: 600px;
  margin: 0 auto ${({ theme }) => theme.spacing.xl};
  line-height: 1.6;
`;

export const CTAContainer = styled(motion.div)`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  justify-content: center;
  flex-wrap: wrap;
`;

export const CTAButton = styled(motion.a)<{
  $variant: "primary" | "secondary";
}>`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  transition: all ${({ theme }) => theme.animation.duration.normal}
    ${({ theme }) => theme.animation.timing};

  ${({ theme, $variant }) =>
    $variant === "primary"
      ? `
    background: linear-gradient(135deg, ${theme.colors.primary.main}, ${theme.colors.primary.light});
    color: white;
    &:hover {
      transform: translateY(-2px);
      box-shadow: ${theme.shadows.md};
    }
  `
      : `
    background: ${theme.colors.background.glass};
    color: ${theme.colors.text.primary};
    border: 2px solid ${theme.colors.primary.main};
    &:hover {
      background: ${theme.colors.primary.main};
      color: white;
    }
  `}
`;

export const StatsContainer = styled(motion.div)`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xl};
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing["2xl"]};
  flex-wrap: wrap;
`;

export const StatItem = styled(motion.div)`
  text-align: center;
`;

export const StatValue = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize["3xl"]};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.primary.main};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

export const StatLabel = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.text.secondary};
`;

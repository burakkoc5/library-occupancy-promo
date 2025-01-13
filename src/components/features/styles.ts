import styled from "styled-components";
import { motion } from "framer-motion";

export const FeaturesContainer = styled.section`
  position: relative;
  overflow: hidden;
`;

export const FeaturesContent = styled(motion.div)`
  max-width: ${({ theme }) => theme.breakpoints.xl};
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl};
`;

export const SectionTitle = styled(motion.h2)`
  font-size: ${({ theme }) => theme.typography.fontSize["3xl"]};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing["2xl"]};
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary.main},
    ${({ theme }) => theme.colors.primary.light}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const FeaturesGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

export const FeatureCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.background.glass};
  backdrop-filter: blur(8px);
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  box-shadow: ${({ theme }) => theme.shadows.md};
  transition: transform ${({ theme }) => theme.animation.duration.normal}
    ${({ theme }) => theme.animation.timing};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`;

export const IconContainer = styled(motion.div)`
  font-size: 2.5rem;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary.main},
    ${({ theme }) => theme.colors.primary.light}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const FeatureTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const FeatureDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 1.6;
`;

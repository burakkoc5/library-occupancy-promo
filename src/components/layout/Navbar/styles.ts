import styled from "styled-components";
import { motion } from "framer-motion";

export const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  background: ${({ theme }) => theme.colors.background.glass};
  backdrop-filter: blur(8px);
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  box-shadow: ${({ theme }) => theme.shadows.sm};
`;

export const NavContent = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.xl};
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.a`
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary.main},
    ${({ theme }) => theme.colors.primary.light}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  cursor: pointer;
`;

export const NavLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

export const NavLink = styled(motion.a)<{ $isActive?: boolean }>`
  font-family: ${({ theme }) => theme.typography.fontFamily.body};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme, $isActive }) =>
    $isActive ? theme.colors.primary.main : theme.colors.text.primary};
  text-decoration: none;
  position: relative;
  padding: ${({ theme }) => theme.spacing.xs} 0;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: ${({ theme }) => theme.colors.primary.main};
    transform: scaleX(0);
    transform-origin: right;
    transition: transform ${({ theme }) => theme.animation.duration.normal}
      ${({ theme }) => theme.animation.timing};
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }
`;

export const GitHubButton = styled.a`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.secondary.main};
  color: white;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  transition: all ${({ theme }) => theme.animation.duration.fast}
    ${({ theme }) => theme.animation.timing};

  &:hover {
    background: ${({ theme }) => theme.colors.secondary.dark};
    transform: translateY(-2px);
  }
`;

export const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  padding: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.text.primary};
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
  }
`;

export const MobileMenu = styled(motion.div)`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({ theme }) => theme.colors.background.glass};
  backdrop-filter: blur(8px);
  padding: ${({ theme }) => theme.spacing.xl};
  z-index: 100;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.lg};
  }
`;

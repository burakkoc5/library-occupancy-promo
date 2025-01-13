"use client";

import React, { memo } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useAnimationVariants } from "@/hooks/useAnimationVariants";
import { HeroProps, CTAButtonProps } from "./types";
import {
  HeroContainer,
  HeroContent,
  Title,
  Subtitle,
  CTAContainer,
  CTAButton,
  StatsContainer,
  StatItem,
  StatValue,
  StatLabel,
} from "./styles";

const CTA = memo(({ variant, children, href }: CTAButtonProps) => (
  <CTAButton
    href={href}
    $variant={variant}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {children}
  </CTAButton>
));

CTA.displayName = "CTA";

const stats = [
  { value: "95%", label: "Accuracy Rate" },
  { value: "24/7", label: "Real-time Monitoring" },
  { value: "50+", label: "Libraries Served" },
];

export const Hero = memo(({ className }: HeroProps) => {
  const { elementRef, isVisible } = useIntersectionObserver();
  const { fadeInUp, staggerChildren } = useAnimationVariants();

  return (
    <HeroContainer id="home" className={className} ref={elementRef}>
      <HeroContent
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={staggerChildren}
      >
        <Title variants={fadeInUp}>
          Smart Library Occupancy Detection System
        </Title>
        <Subtitle variants={fadeInUp}>
          Revolutionize your library space management with real-time occupancy
          tracking and intelligent analytics, all while maintaining user
          privacy.
        </Subtitle>
        <CTAContainer variants={fadeInUp}>
          <CTA variant="primary" href="#demo">
            Try Demo
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </CTA>
          <CTA variant="secondary" href="#features">
            Learn More
          </CTA>
        </CTAContainer>
        <StatsContainer variants={staggerChildren}>
          {stats.map((stat, index) => (
            <StatItem key={index} variants={fadeInUp}>
              <StatValue>{stat.value}</StatValue>
              <StatLabel>{stat.label}</StatLabel>
            </StatItem>
          ))}
        </StatsContainer>
      </HeroContent>
    </HeroContainer>
  );
});

Hero.displayName = "Hero";

export default Hero;

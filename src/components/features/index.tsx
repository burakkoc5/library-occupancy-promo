"use client";

import React, { memo } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useAnimationVariants } from "@/hooks/useAnimationVariants";
import { FEATURES } from "@/constants/sections";
import { FeaturesProps, FeatureCardProps } from "./types";
import {
  FeaturesContainer,
  FeaturesContent,
  SectionTitle,
  FeaturesGrid,
  FeatureCard,
  IconContainer,
  FeatureTitle,
  FeatureDescription,
} from "./styles";

const FeatureCardComponent = memo(
  ({ title, description, icon, index }: FeatureCardProps) => {
    const { scaleIn } = useAnimationVariants();

    return (
      <FeatureCard
        variants={scaleIn}
        custom={index}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
      >
        <IconContainer>{icon}</IconContainer>
        <FeatureTitle>{title}</FeatureTitle>
        <FeatureDescription>{description}</FeatureDescription>
      </FeatureCard>
    );
  }
);

FeatureCardComponent.displayName = "FeatureCardComponent";

export const Features = memo(({ className }: FeaturesProps) => {
  const { elementRef, isVisible } = useIntersectionObserver();
  const { fadeInUp, staggerChildren } = useAnimationVariants();

  return (
    <FeaturesContainer id="features" className={className} ref={elementRef}>
      <FeaturesContent
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={staggerChildren}
      >
        <SectionTitle variants={fadeInUp}>
          Powerful Features for Smart Library Management
        </SectionTitle>
        <FeaturesGrid variants={staggerChildren}>
          {FEATURES.map((feature, index) => (
            <FeatureCardComponent
              key={feature.title}
              {...feature}
              index={index}
            />
          ))}
        </FeaturesGrid>
      </FeaturesContent>
    </FeaturesContainer>
  );
});

Features.displayName = "Features";

export default Features;

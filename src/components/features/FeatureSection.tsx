"use client";

import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const SectionContainer = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled(motion.h2)`
  font-family: var(--font-montserrat);
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(135deg, #2d3748 0%, #4a5568 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const FeatureCard = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const FeatureIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #0070f3;
`;

const FeatureTitle = styled.h3`
  font-family: var(--font-montserrat);
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #2d3748;
`;

const FeatureDescription = styled.p`
  font-family: var(--font-opensans);
  color: #4a5568;
  line-height: 1.6;
`;

const features = [
  {
    icon: "📊",
    title: "Real-Time Occupancy Updates",
    description:
      "Monitor library space usage with instant, accurate occupancy data through our advanced detection system.",
  },
  {
    icon: "🔒",
    title: "Privacy-First Approach",
    description:
      "Ensure user privacy with anonymous detection and compliance with data protection regulations.",
  },
  {
    icon: "⚡",
    title: "Dynamic Seat Management",
    description:
      "Efficiently manage seating with real-time availability updates and automated hold system.",
  },
  {
    icon: "📱",
    title: "Mobile Accessibility",
    description:
      "Access occupancy data on any device with our responsive web interface and mobile app.",
  },
  {
    icon: "📈",
    title: "Analytics Dashboard",
    description:
      "Make data-driven decisions with comprehensive usage analytics and trend reports.",
  },
  {
    icon: "🔄",
    title: "Scalable Solution",
    description:
      "Easily expand the system to cover multiple zones or entire library networks.",
  },
];

const FeatureSection = () => {
  return (
    <SectionContainer id="features-section">
      <ContentWrapper>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Features & Benefits
        </SectionTitle>

        <FeaturesGrid>
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <FeatureIcon>{feature.icon}</FeatureIcon>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureCard>
          ))}
        </FeaturesGrid>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default FeatureSection;

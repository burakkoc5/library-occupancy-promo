"use client";

import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const HeroContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 0 2rem;
  text-align: center;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
`;

const AnimatedBackground = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    45deg,
    rgba(0, 112, 243, 0.05),
    rgba(0, 168, 255, 0.05)
  );
  z-index: 0;
`;

const HeroContent = styled(motion.div)`
  max-width: 900px;
  color: #2d3748;
  position: relative;
  z-index: 1;
`;

const MainHeadline = styled(motion.h1)`
  font-family: var(--font-montserrat);
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #2d3748 0%, #4a5568 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const SubHeadline = styled(motion.p)`
  font-family: var(--font-opensans);
  font-size: 1.5rem;
  margin-bottom: 2.5rem;
  color: #4a5568;
  line-height: 1.6;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const CTAContainer = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  margin-top: 2.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    max-width: 300px;
  }
`;

interface CTAButtonProps {
  primary?: boolean;
}

const CTAButton = styled(motion.button)<CTAButtonProps>`
  padding: 1.25rem 2.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  font-family: var(--font-montserrat);
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);

  ${({ primary }) =>
    primary
      ? `
    background: linear-gradient(135deg, #0070f3 0%, #00a8ff 100%);
    color: white;
    border: none;
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 12px rgba(0, 112, 243, 0.2);
    }
  `
      : `
    background: white;
    color: #0070f3;
    border: 2px solid #0070f3;
    &:hover {
      background: rgba(0, 112, 243, 0.05);
      transform: translateY(-2px);
      box-shadow: 0 6px 12px rgba(0, 112, 243, 0.1);
    }
  `}
`;

const FloatingShape = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(135deg, #0070f3 0%, #00a8ff 100%);
  opacity: 0.1;
  z-index: 0;
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  z-index: 1;
`;

const ScrollText = styled.span`
  font-family: var(--font-montserrat);
  font-size: 0.9rem;
  color: #4a5568;
  opacity: 0.8;
`;

const ScrollArrow = styled(motion.div)`
  width: 24px;
  height: 24px;
  border: 2px solid #4a5568;
  border-left: 0;
  border-top: 0;
  transform: rotate(45deg);
  opacity: 0.8;
`;

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <HeroContainer>
      <AnimatedBackground
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <FloatingShape
        style={{
          width: "300px",
          height: "300px",
          top: "10%",
          left: "5%",
        }}
        animate={{
          y: [0, 50, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <FloatingShape
        style={{
          width: "200px",
          height: "200px",
          bottom: "10%",
          right: "5%",
        }}
        animate={{
          y: [0, -30, 0],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <HeroContent
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <MainHeadline>
          Revolutionizing Library Space Management with Real-Time Detection
        </MainHeadline>

        <SubHeadline>
          Transform your library experience with our intelligent occupancy
          detection system. Maximize space efficiency and enhance user
          satisfaction with real-time insights.
        </SubHeadline>

        <CTAContainer>
          <CTAButton
            primary
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => scrollToSection("demo-section")}
          >
            See How It Works
          </CTAButton>

          <CTAButton
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => scrollToSection("contact-section")}
          >
            Request Demo
          </CTAButton>
        </CTAContainer>
      </HeroContent>

      <ScrollIndicator
        onClick={() => scrollToSection("features-section")}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <ScrollText>Scroll to explore</ScrollText>
        <ScrollArrow
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </ScrollIndicator>
    </HeroContainer>
  );
};

export default HeroSection;

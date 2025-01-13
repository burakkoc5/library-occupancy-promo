"use client";

import styled from "styled-components";
import { motion } from "framer-motion";

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  overflow: hidden;
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
`;

const GradientOrb = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  mix-blend-mode: soft-light;
  will-change: transform;
`;

const AnimatedBackground = () => {
  return (
    <BackgroundContainer>
      <GradientOrb
        style={{
          background: "linear-gradient(120deg, #0070f3 0%, #00a8ff 100%)",
          width: "50vw",
          height: "50vw",
          top: "-10%",
          left: "50%",
          opacity: 0.15,
        }}
        animate={{
          scale: [1, 1.05, 1],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <GradientOrb
        style={{
          background: "linear-gradient(120deg, #2d3748 0%, #4a5568 100%)",
          width: "45vw",
          height: "45vw",
          top: "40%",
          left: "-10%",
          opacity: 0.12,
        }}
        animate={{
          scale: [1, 1.03, 1],
          x: [0, -15, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <GradientOrb
        style={{
          background: "linear-gradient(120deg, #0070f3 0%, #00a8ff 100%)",
          width: "40vw",
          height: "40vw",
          top: "60%",
          left: "60%",
          opacity: 0.1,
        }}
        animate={{
          scale: [1, 1.08, 1],
          y: [0, -15, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </BackgroundContainer>
  );
};

export default AnimatedBackground;

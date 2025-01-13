import styled from "styled-components";
import { motion } from "framer-motion";

export const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  overflow: hidden;
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
`;

export const GradientOrb = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  mix-blend-mode: soft-light;
  will-change: transform;
`;

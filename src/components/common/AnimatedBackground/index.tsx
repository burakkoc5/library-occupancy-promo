"use client";

import { motion } from "framer-motion";
import { BackgroundContainer, GradientOrb } from "./styles";
import { orbConfigs } from "./config";

export const AnimatedBackground = () => {
  return (
    <BackgroundContainer>
      {orbConfigs.map((config, index) => (
        <GradientOrb
          key={index}
          style={{
            background: config.gradient,
            width: config.size,
            height: config.size,
            top: config.position.top,
            left: config.position.left,
            opacity: config.opacity,
          }}
          animate={{
            scale: config.animation.scale,
            [config.animation.direction.axis]:
              config.animation.direction.values,
          }}
          transition={{
            duration: config.animation.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </BackgroundContainer>
  );
};

export default AnimatedBackground;

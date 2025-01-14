"use client";

import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Image from "next/image";

const SectionContainer = styled.section`
  padding: 6rem 2rem;
  background: white;
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
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #2d3748 0%, #4a5568 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const SectionSubtitle = styled.p`
  text-align: center;
  font-family: var(--font-opensans);
  color: #4a5568;
  font-size: 1.2rem;
  margin-bottom: 3rem;
`;

const DemoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
`;

const VideoContainer = styled.div`
  width: 100%;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  background: #f8f9fa;
  aspect-ratio: 16/9;
  position: relative;
`;

const DesignShowcase = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const DesignImage = styled(motion.div)`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  aspect-ratio: 4/3;

  &:hover {
    transform: translateY(-5px);
  }
`;

const FeatureDescription = styled.div`
  text-align: center;
  margin-top: 3rem;
`;

const FeatureTitle = styled.h3`
  font-family: var(--font-montserrat);
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
`;

const FeatureText = styled.p`
  font-family: var(--font-opensans);
  color: #4a5568;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
`;

const designImages = [
  {
    src: "/images/dashboard.png",
    alt: "Real-time Dashboard",
    title: "Real-time Occupancy Dashboard",
    description:
      "Monitor library spaces with our intuitive dashboard showing live occupancy data.",
  },
  {
    src: "/images/dashboard.png",
    alt: "Occupancy Heatmap",
    title: "Occupancy Heatmap",
    description:
      "Visualize space usage patterns with detailed heatmaps for better resource allocation.",
  },
  {
    src: "/images/dashboard.png",
    alt: "Analytics Interface",
    title: "Advanced Analytics",
    description:
      "Make data-driven decisions with comprehensive usage statistics and trends.",
  },
];

const DemoSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2.0;
    }
  }, []);

  return (
    <SectionContainer id="demo-section">
      <ContentWrapper>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          See It In Action
        </SectionTitle>
        <SectionSubtitle>
          Experience how our system transforms library space management
        </SectionSubtitle>

        <DemoContainer>
          <VideoContainer>
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            >
              <source src="/images/demo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </VideoContainer>

          <DesignShowcase>
            {designImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <DesignImage>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </DesignImage>
                <FeatureDescription>
                  <FeatureTitle>{image.title}</FeatureTitle>
                  <FeatureText>{image.description}</FeatureText>
                </FeatureDescription>
              </motion.div>
            ))}
          </DesignShowcase>
        </DemoContainer>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default DemoSection;

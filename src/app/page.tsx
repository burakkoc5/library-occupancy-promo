"use client";

import React from "react";
import Navbar from "@/components/navigation/Navbar";
import HeroSection from "@/components/hero/HeroSection";
import FeatureSection from "@/components/features/FeatureSection";
import DemoSection from "@/components/demo/DemoSection";
import TeamSection from "@/components/team/TeamSection";
import ContactSection from "@/components/contact/ContactSection";
import AnimatedBackground from "@/components/background/AnimatedBackground";
import styled from "styled-components";

const MainContent = styled.main`
  position: relative;
  z-index: 1;
`;

export default function Home() {
  return (
    <MainContent>
      <AnimatedBackground />
      <Navbar />
      <HeroSection />
      <section className="with-bg">
        <FeatureSection />
      </section>
      <section className="with-bg">
        <DemoSection />
      </section>
      <section className="with-bg">
        <TeamSection />
      </section>
      <section className="with-bg">
        <ContactSection />
      </section>
    </MainContent>
  );
}

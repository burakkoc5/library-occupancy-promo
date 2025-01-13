"use client";

import React from "react";
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
  margin-bottom: 3rem;
  background: linear-gradient(135deg, #2d3748 0%, #4a5568 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const TeamMemberCard = styled(motion.div)`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const MemberImage = styled.div`
  width: 100%;
  height: 300px;
  position: relative;
`;

const MemberInfo = styled.div`
  padding: 1.5rem;
`;

const MemberName = styled.h3`
  font-family: var(--font-montserrat);
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
`;

const MemberRole = styled.p`
  font-family: var(--font-opensans);
  color: #0070f3;
  font-weight: 500;
  margin-bottom: 1rem;
`;

const MemberBio = styled.p`
  font-family: var(--font-opensans);
  color: #4a5568;
  line-height: 1.6;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialLink = styled.a`
  color: #4a5568;
  transition: color 0.3s ease;

  &:hover {
    color: #0070f3;
  }
`;

const teamMembers = [
  {
    name: "Burak Koç",
    role: "Full Stack Developer",
    image: "/images/burak.jpeg",
    bio: "Computer Engineering student passionate about web development and AI.",
    github: "https://github.com/burakkoc5",
    linkedin: "https://linkedin.com/in/burak-koc",
  },
  {
    name: "Furkan Safa Altunyuva",
    role: "Machine Learning Engineer",
    image: "/images/burak.jpeg",
    bio: "Computer Engineering student specializing in computer vision and deep learning.",
    github: "https://github.com/fsaltunyuva",
    linkedin: "https://linkedin.com/in/fsaltunyuva",
  },
  {
    name: "Buse Öner",
    role: "Backend Developer",
    image: "/images/burak.jpeg",
    bio: "Computer Engineering student focused on backend development and system architecture.",
    github: "https://github.com/buseoner9",
    linkedin: "https://linkedin.com/in/buseoner",
  },
];

const TeamSection = () => {
  return (
    <SectionContainer>
      <ContentWrapper>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Meet Our Team
        </SectionTitle>

        <TeamGrid>
          {teamMembers.map((member, index) => (
            <TeamMemberCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <MemberImage>
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </MemberImage>
              <MemberInfo>
                <MemberName>{member.name}</MemberName>
                <MemberRole>{member.role}</MemberRole>
                <MemberBio>{member.bio}</MemberBio>
                <SocialLinks>
                  <SocialLink
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </SocialLink>
                  <SocialLink
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </SocialLink>
                </SocialLinks>
              </MemberInfo>
            </TeamMemberCard>
          ))}
        </TeamGrid>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default TeamSection;

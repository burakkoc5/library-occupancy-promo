"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4rem;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);

  @media (max-width: 768px) {
    padding: 0 2rem;
  }
`;

const Logo = styled.div`
  font-family: var(--font-montserrat);
  font-size: 1.5rem;
  font-weight: 700;
  color: #2d3748;
  background: linear-gradient(135deg, #2d3748 0%, #4a5568 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  font-family: var(--font-opensans);
  text-decoration: none;
  color: #4a5568;
  font-weight: 500;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -4px;
    left: 0;
    background: linear-gradient(135deg, #0070f3 0%, #00a8ff 100%);
    transition: width 0.3s ease;
  }

  &:hover {
    color: #0070f3;
    &:after {
      width: 100%;
    }
  }
`;

const GitHubButton = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: #24292e;
  color: white !important;
  border-radius: 8px;
  font-family: var(--font-montserrat);
  font-weight: 500;
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: #1a1e21;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    margin-top: 1rem;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: none;
    font-size: 1.5rem;
    color: #2d3748;
    cursor: pointer;
    width: 48px;
    height: 48px;
    border-radius: 8px;
    transition: background 0.3s ease;

    &:hover {
      background: rgba(0, 0, 0, 0.05);
    }
  }
`;

const MobileMenu = styled(motion.div)`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    position: fixed;
    top: 80px;
    left: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(20px);
    flex-direction: column;
    padding: 2rem;
    gap: 1.5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <NavContainer>
      <Logo>Library Occupancy</Logo>

      <div style={{ display: "flex", alignItems: "center" }}>
        <GitHubButton
          href="https://github.com/fsaltunyuva/library-occupancy-detector"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
          View on GitHub
        </GitHubButton>
      </div>

      <MobileMenuButton onClick={toggleMenu}>
        {isOpen ? "✕" : "☰"}
      </MobileMenuButton>

      <AnimatePresence>
        {isOpen && (
          <MobileMenu
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <NavLink href="/about">About</NavLink>
            <NavLink href="/features">Features</NavLink>
            <NavLink href="/how-it-works">How It Works</NavLink>
            <NavLink href="/demo">Demo</NavLink>
            <NavLink href="/contact">Contact</NavLink>
            <GitHubButton
              href="https://github.com/fsaltunyuva/library-occupancy-detector"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              View on GitHub
            </GitHubButton>
          </MobileMenu>
        )}
      </AnimatePresence>
    </NavContainer>
  );
};

export default Navbar;

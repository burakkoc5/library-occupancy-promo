"use client";

import React, { useState, useCallback, memo } from "react";
import { AnimatePresence } from "framer-motion";
import { useAnimationVariants } from "@/hooks/useAnimationVariants";
import { NAVIGATION_LINKS, GITHUB_LINK } from "@/constants/navigation";
import { NavLinkProps, MobileMenuProps } from "./types";
import {
  NavContainer,
  NavContent,
  Logo,
  NavLinks,
  NavLink,
  GitHubButton,
  MobileMenuButton,
  MobileMenu,
} from "./styles";

const NavLinkComponent = memo(({ href, children, isActive }: NavLinkProps) => (
  <NavLink
    href={href}
    $isActive={isActive}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {children}
  </NavLink>
));

NavLinkComponent.displayName = "NavLinkComponent";

const MobileMenuComponent = memo(({ isOpen, onClose }: MobileMenuProps) => {
  const { slideIn } = useAnimationVariants();

  return (
    <AnimatePresence>
      {isOpen && (
        <MobileMenu
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={slideIn}
        >
          {NAVIGATION_LINKS.map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              onClick={onClose}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.label}
            </NavLink>
          ))}
          <GitHubButton
            href={GITHUB_LINK}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
            </svg>
            View on GitHub
          </GitHubButton>
        </MobileMenu>
      )}
    </AnimatePresence>
  );
});

MobileMenuComponent.displayName = "MobileMenuComponent";

export const Navbar = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = useCallback(() => setIsOpen((prev) => !prev), []);

  return (
    <NavContainer>
      <NavContent>
        <Logo href="#home">LibraryOccupancy</Logo>
        <NavLinks>
          {NAVIGATION_LINKS.map((link) => (
            <NavLinkComponent key={link.href} href={link.href}>
              {link.label}
            </NavLinkComponent>
          ))}
          <GitHubButton
            href={GITHUB_LINK}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
            </svg>
            View on GitHub
          </GitHubButton>
        </NavLinks>
        <MobileMenuButton onClick={toggleMenu}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {isOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </MobileMenuButton>
      </NavContent>
      <MobileMenuComponent isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </NavContainer>
  );
});

Navbar.displayName = "Navbar";

export default Navbar;

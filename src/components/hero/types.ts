export interface HeroProps {
  className?: string;
}

export interface CTAButtonProps {
  variant: "primary" | "secondary";
  children: React.ReactNode;
  href: string;
}

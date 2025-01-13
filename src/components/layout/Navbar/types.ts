export interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

import { useState, useCallback, useEffect } from 'react';

/**
 * Manages mobile navigation open/close state with body scroll lock.
 */
export function useMobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const openNav = useCallback(() => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeNav = useCallback(() => {
    setIsOpen(false);
    document.body.style.overflow = '';
  }, []);

  // Close on escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape' && isOpen) closeNav();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen, closeNav]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return { isOpen, openNav, closeNav };
}

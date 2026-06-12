import { useEffect, useRef } from 'react';

export default function MobileNav({ isOpen, onClose, links }) {
  const firstLinkRef = useRef(null);

  // Trap focus when open
  useEffect(() => {
    if (isOpen && firstLinkRef.current) {
      firstLinkRef.current.focus();
    }
  }, [isOpen]);

  return (
    <div
      id="mobile-nav"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
      className="fixed inset-0 z-[99] flex-col gap-2 pt-24 px-8 pb-10 md:hidden"
      style={{
        background: 'rgba(27,27,30,0.97)',
        display: isOpen ? 'flex' : 'none',
      }}
    >
      {links.map((link, i) => (
        <a
          key={link.href}
          ref={i === 0 ? firstLinkRef : null}
          href={link.href}
          onClick={onClose}
          className="text-white/75 no-underline text-[22px] font-medium py-3.5 border-b border-white/[0.07] transition-colors hover:text-pacific"
          style={{ color: 'rgba(255,255,255,0.75)' }}
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}

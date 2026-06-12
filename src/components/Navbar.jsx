import { useMobileNav } from '../hooks/useMobileNav';
import MobileNav from './MobileNav';

const navLinks = [
  { label: 'Platform', href: '#platform' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const { isOpen, openNav, closeNav } = useMobileNav();

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      <nav
        aria-label="Main navigation"
        className="absolute top-0 left-0 right-0 z-[100] flex items-center justify-between px-5 md:px-[50px] h-32 md:h-40"
        style={{
          background: 'linear-gradient(180deg, rgba(27,27,30,0.9) 0%, rgba(27,27,30,0.55) 50%, rgba(27,27,30,0) 100%)',
        }}
      >
        {/* Logo */}
        <a
          href="/"
          className="flex items-center no-underline"
          aria-label="Floodsensing.AI home"
        >
          <img
            src="/logo_1.png"
            className="w-28 h-28 md:w-36 md:h-36 -mr-8 md:-mr-12 -ml-4 md:-ml-6 object-contain"
            style={{ filter: 'drop-shadow(0 0 6px #58A4B0)' }}
            alt=""
            aria-hidden="true"
            width="144"
            height="144"
          />
          <span
            className="font-serif text-2xl md:text-[28px] text-white"
          >
            Floodsensing<span style={{ color: '#58A4B0' }}>.AI</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-10 list-none" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-white/85 no-underline text-sm font-medium tracking-[0.05em] uppercase transition-colors duration-200 hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          id="hamburger-btn"
          className="flex md:hidden flex-col gap-[5px] bg-transparent border-none cursor-pointer p-2 min-w-[44px] min-h-[44px] items-center justify-center rounded"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          onClick={isOpen ? closeNav : openNav}
        >
          <span
            className="block w-[22px] h-[2px] rounded-sm transition-all duration-[250ms]"
            style={{
              background: 'rgba(255,255,255,0.8)',
              transform: isOpen ? 'translateY(7px) rotate(45deg)' : 'none',
            }}
          />
          <span
            className="block w-[22px] h-[2px] rounded-sm transition-all duration-[250ms]"
            style={{
              background: 'rgba(255,255,255,0.8)',
              opacity: isOpen ? 0 : 1,
              transform: isOpen ? 'scaleX(0)' : 'none',
            }}
          />
          <span
            className="block w-[22px] h-[2px] rounded-sm transition-all duration-[250ms]"
            style={{
              background: 'rgba(255,255,255,0.8)',
              transform: isOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
            }}
          />
        </button>
      </nav>

      <MobileNav isOpen={isOpen} onClose={closeNav} links={navLinks} />
    </>
  );
}

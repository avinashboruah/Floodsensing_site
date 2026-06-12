import { useMemo } from 'react';

export default function HeroSection() {
  // iOS Safari doesn't support background-attachment: fixed
  const isIOS = useMemo(
    () => /iPhone|iPad|iPod/i.test(typeof navigator !== 'undefined' ? navigator.userAgent : ''),
    [],
  );

  return (
    <section
      id="main-content"
      tabIndex={-1}
      className="relative flex items-center overflow-hidden"
      style={{
        height: '100vh',
        backgroundImage: "url('/floodsensing_hero_bg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundAttachment: isIOS ? 'scroll' : 'fixed',
        backgroundRepeat: 'no-repeat',
      }}
      aria-label="Hero: Predict and Prevent Flooding"
    >
      {/* Gradient overlay */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            'linear-gradient(90deg, rgba(27,27,30,0.95) 0%, rgba(27,27,30,0.65) 45%, rgba(27,27,30,0.15) 100%)',
        }}
      />

      {/* Hero content */}
      <div
        className="relative z-[2] w-full px-5 md:px-10 pt-20 max-w-[720px] mx-auto md:mx-0 md:ml-[4%] text-center md:text-left"
      >
        
        <h1
          className="text-white mb-12 max-w-full "
          style={{ fontSize: 'clamp(32px, 4.5vw, 56px)', lineHeight: 1.1, fontFamily: 'DM Serif Display, serif' }}
        >
          Designing Proactive Solutions for
          <br />
          Flood Prediction and Community Resilience Using AI
        </h1>

        <a
          href="#why-act"
          className="inline-flex items-center gap-4 no-underline text-[13px] font-semibold tracking-[0.05em] transition-all duration-300 group"
          style={{ color: '#fff' }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#58A4B0')}
          onMouseLeave={(e) => (e.currentTarget.style.color = '#fff')}
          aria-label="Learn more — scroll to Why Act section"
        >
          <span
            className="flex items-center justify-center w-12 h-12 rounded-full border transition-all duration-300"
            style={{
              borderColor: 'rgba(255,255,255,0.4)',
              background: 'rgba(27,27,30,0.4)',
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </span>
          LEARN MORE
        </a>
      </div>
    </section>
  );
}

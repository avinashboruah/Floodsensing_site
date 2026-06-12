import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const problems = [
  {
    id: 'financial',
    title: 'Financial Devastation',
    desc: 'Floods cause over $800 billion in global economic losses annually destroying infrastructure and livelihood',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
  },
  {
    id: 'community',
    title: 'Community Vulnerability & Unpreparedness',
    desc: 'When flood warnings fail, communities are left unprepared triggering panic among community and cause chaos',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
      </svg>
    ),
  },
  {
    id: 'public-health',
    title: 'Public health',
    desc: 'Floodwater contaminates drinking supplies, spread waterborne diseases and exposed vulnerable community to life-threatening conditions.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
];

function ProblemItem({ problem, delay }) {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <div
      ref={ref}
      className="text-center transition-[opacity,transform] duration-500"
      style={{
        transitionDelay: `${delay}ms`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
      }}
    >
      <div
        className="w-16 h-16 mx-auto mb-6 rounded-full border flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
        style={{
          borderColor: 'rgba(88,164,176,0.2)',
          color: '#58A4B0',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'rgba(88,164,176,0.1)';
          e.currentTarget.style.borderColor = '#58A4B0';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'transparent';
          e.currentTarget.style.borderColor = 'rgba(88,164,176,0.2)';
        }}
      >
        {problem.icon}
      </div>
      <h3 className="text-lg text-white mb-3 font-medium">{problem.title}</h3>
      <p className="text-sm leading-[1.6] max-w-[260px] mx-auto" style={{ color: 'rgba(255,255,255,0.6)' }}>
        {problem.desc}
      </p>
    </div>
  );
}

export default function ProblemSection() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section
      id="why-act"
      ref={ref}
      className="relative z-10 px-5 md:px-10 py-16"
      style={{
        background: '#1B1B1E',
        borderRadius: '32px 32px 0 0',
        marginTop: '-32px',
        boxShadow: '0 -8px 40px rgba(0,0,0,0.6)',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
      }}
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center max-w-[760px] mx-auto mb-12">
          <h2
            className="mb-6"
            style={{
              fontFamily: 'DM Serif Display, serif',
              fontSize: 'clamp(32px, 4vw, 48px)',
              lineHeight: 1.1,
              color: '#fff',
            }}
          >
            The Consequences of Unmanaged Flood Risk
          </h2>
          <p className="text-lg font-light" style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.6 }}>
            A warming planet is breaking the rules of hydrology. Rising rivers, erratic rainfall, and hydrological non-stationarity mean that yesterday&apos;s flood models cannot protect tomorrow&apos;s communities. As extreme events intensify, the window for reactive response is closing making proactive, AI-driven flood intelligence not a luxury, but a necessity.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16">
          {problems.map((p, i) => (
            <ProblemItem key={p.id} problem={p} delay={i * 120} />
          ))}
        </div>
      </div>
    </section>
  );
}

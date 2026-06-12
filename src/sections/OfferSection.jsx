import FadeIn from '../components/ui/FadeIn';
import { offers } from '../data/offers';

const ChevronRight = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    style={{ flexShrink: 0, marginTop: 3 }}
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
);

export default function OfferSection() {
  return (
    <section id="platform" className="px-5 md:px-10 py-24" style={{ background: '#F2F4F7' }}>
      <div
        className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start"
      >
        <FadeIn>
          <div>
            <span className="section-label">What We Offer</span>
            <h2 className="section-title">What We Offer</h2>
            <p className="section-sub">
              We build AI-powered solutions that intelligently sense, analyse, and respond to water challenges before they become crises.
            </p>
          </div>
        </FadeIn>

        <ul className="flex flex-col list-none">
          {offers.map((offer, i) => (
            <FadeIn key={offer.id} delay={i * 60}>
              <li
                className="flex items-start gap-3.5 py-4 text-[15px] leading-[1.65] transition-colors duration-200"
                style={{
                  borderBottom: '1px solid rgba(27,27,30,0.08)',
                  color: 'rgba(27,27,30,0.65)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(27,27,30,0.85)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(27,27,30,0.65)')}
              >
                <span style={{ color: '#58A4B0' }}>
                  <ChevronRight />
                </span>
                <span>
                  <strong style={{ color: '#1B1B1E', fontWeight: 700 }}>{offer.title}</strong>
                  {': '}
                  {offer.description}
                </span>
              </li>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  );
}

import FadeIn from '../components/ui/FadeIn';

const caseStudyImages = [
  {
    id: 'inundation',
    src: '/flood-inundation-maps.jpg',
    alt: 'Flood inundation maps showing South Fork Guadalupe River progression from 3 A.M. to 5 A.M.',
    className: 'md:col-span-2',
    aspectRatio: '16/9',
  },
  {
    id: 'forecast',
    src: '/hrrr-vs-mrms.jpg',
    alt: 'HRRR versus MRMS forecast comparison for the Texas flash flood case study.',
    className: '',
    aspectRatio: '4/3',
  },
  {
    id: 'streamflow',
    src: '/streamflow-analysis.jpg',
    alt: 'Streamflow analysis for the Texas flash flood case study.',
    className: '',
    aspectRatio: '4/3',
  },
];

const findings = [
  {
    id: 'spatial-displacement',
    title: 'Correcting Spatial Displacement',
    text: 'HRRR forecasts persistently underestimated and spatially misplaced convective cells. Our AI data fusion corrected these geometric errors before they propagated through the hydrologic chain.',
  },
  {
    id: 'gauge-outages',
    title: 'Resilience to Gauge Outages',
    text: 'When the USGS gauge near Hunt failed during fast-rising streamflow, our physics-informed models maintained accurate inundation predictions without relying on real-time streamflow nudging data.',
  },
];

export default function TexasCaseStudySection() {
  return (
    <section
      id="case-study"
      className="px-5 md:px-10 py-24"
      style={{ background: '#58A4B0' }}
    >
      <div className="max-w-[1200px] mx-auto">
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center"
        >
          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {caseStudyImages.map((image, i) => (
                <figure
                  key={image.id}
                  className={`relative overflow-hidden rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${image.className}`}
                  style={{
                    aspectRatio: image.aspectRatio,
                    borderColor: 'rgba(255,255,255,0.16)',
                    boxShadow: i === 0 ? '0 20px 60px rgba(0,0,0,0.28)' : '0 12px 40px rgba(0,0,0,0.22)',
                  }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="absolute inset-0 h-full w-full object-cover"
                    loading={i === 0 ? 'eager' : 'lazy'}
                  />
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        'linear-gradient(180deg, rgba(27,27,30,0.02) 0%, rgba(27,27,30,0.18) 100%)',
                    }}
                    aria-hidden="true"
                  />
                </figure>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={120}>
            <div>
              <span
                className="block text-[11px] font-bold tracking-[0.12em] uppercase mb-4"
                style={{ color: 'rgba(27,27,30,0.7)' }}
              >
                Post-Event Analysis
              </span>
              <h2
                className="mb-7"
                style={{
                  fontFamily: 'DM Serif Display, serif',
                  fontSize: 'clamp(32px, 4vw, 48px)',
                  lineHeight: 1.08,
                  color: '#fff',
                }}
              >
                Case Study: July 2025 Texas Flash Flood
              </h2>
              <p className="text-[15px] leading-[1.7] mb-8" style={{ color: 'rgba(255,255,255,0.82)' }}>
                When 100-year rainfall intensities hit the Guadalupe River basin, Floodsensing.AI accurately mapped the threat where traditional operational forecasts struggled.
              </p>

              {findings.map((finding, i) => (
                <div
                  key={finding.id}
                  className="mb-6 pb-6"
                  style={{
                    borderBottom: i < findings.length - 1 ? '1px solid rgba(255,255,255,0.16)' : 'none',
                  }}
                >
                  <h3 className="text-lg font-bold text-white mb-2">{finding.title}</h3>
                  <p className="text-sm leading-[1.65]" style={{ color: 'rgba(255,255,255,0.76)' }}>
                    {finding.text}
                  </p>
                </div>
              ))}

              <a
                href="/ciroh-report.pdf"
                className="inline-flex items-center gap-2 no-underline text-sm font-semibold text-white transition-opacity hover:opacity-80"
              >
                Read the full CIROH Research Report
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

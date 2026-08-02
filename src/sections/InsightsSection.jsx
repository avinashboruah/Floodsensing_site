import FadeIn from '../components/ui/FadeIn';

export default function InsightsSection() {
  return (
    <section className="px-5 md:px-10 py-24" style={{ background: '#F2F4F7' }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center max-w-[760px] mx-auto mb-14">
          <FadeIn>
            <span className="section-label">From the Field</span>
            <h2 className="section-title">Latest Insight</h2>
            <p className="section-sub mx-auto">
              Real-world analysis from our team, turning satellite observations into actionable
              flood intelligence.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={80}>
          <a
            href="/insights/assam-flood-2026"
            className="group grid grid-cols-1 lg:grid-cols-2 gap-0 no-underline rounded-2xl overflow-hidden border border-charcoal/10 hover:shadow-xl transition-all duration-300 max-w-[1000px] mx-auto"
            style={{ background: '#fff', boxShadow: '0 4px 20px rgba(0,0,0,0.04)' }}
          >
            <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
              <img
                src="/insights/assam-flood-2026/teaser-flood-map-2026-07-22.jpg"
                alt="Satellite-derived flood depth map for the July 22, 2026 Assam flood snapshot, showing inundation around the Dikhow and Darika rivers."
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                style={{ objectPosition: '50% 35%' }}
                loading="lazy"
              />
            </div>
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <span
                className="block text-[11px] font-bold tracking-[0.12em] uppercase mb-3"
                style={{ color: '#58A4B0' }}
              >
                Case Study &middot; Sivasagar, Assam &middot; July 2026
              </span>
              <h3 className="font-serif text-2xl font-bold text-carbon mb-4 leading-tight">
                From Extent to Impact: Mapping Flood Depth and Population Exposure
              </h3>
              <p className="text-[15px] leading-[1.65] mb-6" style={{ color: 'rgba(27,27,30,0.6)' }}>
                How satellite observations, a flood-depth estimation algorithm, and population data
                reveal the human impact of the 2026 Assam flood &mdash; and why flood extent alone
                doesn&rsquo;t tell the full story.
              </p>
              <span
                className="inline-flex items-center gap-2 text-sm font-semibold transition-transform duration-200 group-hover:translate-x-1"
                style={{ color: '#3d7b85' }}
              >
                Read the full analysis
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </span>
            </div>
          </a>
        </FadeIn>
      </div>
    </section>
  );
}

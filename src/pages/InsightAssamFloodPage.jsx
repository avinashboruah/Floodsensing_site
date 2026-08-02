import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FadeIn from '../components/ui/FadeIn';

const snapshots = [
  {
    id: '2026-07-15',
    date: 'July 15, 2026',
    heading: 'First Snapshot: Early Stage Flooding',
    image: '/insights/assam-flood-2026/flood-depth-2026-07-15.jpg',
    alt: 'Satellite-derived flood depth map and population exposure chart for July 15, 2026, showing 12,103 people exposed across 248 km² near the Dikhow and Darika rivers.',
    stats: [
      { label: 'Area flooded', value: '248 km²' },
      { label: 'People exposed', value: '12,103' },
      { label: '≥ 1m depth', value: '4,629 people' },
      { label: '≥ 0.5m depth', value: '7,802 people' },
    ],
    text: 'The first SAR snapshot captures the early stage of flooding around the Dikhow and Darika river system. At this stage, floodwaters had already spread across portions of the floodplain, inundating approximately 248 km² and exposing an estimated 12,103 people. More than 4,600 people were already located in areas where flood depths exceeded 1m.',
  },
  {
    id: '2026-07-22',
    date: 'July 22, 2026',
    heading: 'Flood Expanded',
    image: '/insights/assam-flood-2026/flood-depth-2026-07-22.jpg',
    alt: 'Satellite-derived flood depth map and population exposure chart for July 22, 2026, showing 26,223 people exposed across 385 km².',
    stats: [
      { label: 'Area flooded', value: '385 km²' },
      { label: 'People exposed', value: '26,223' },
      { label: '≥ 1m depth', value: '11,141 people' },
      { label: '≥ 0.5m depth', value: '18,110 people' },
    ],
    text: 'One week later, SAR captured another image: the flooded area expanded to approximately 385 km², while the total exposed population increased to 26,223 people. Floodwaters expanded farther away from the main river channels, reaching additional settlements across the floodplain. The number of people exposed to water depths exceeding 0.5m increased to more than 18,000, while exposure above 1m rose past 11,000.',
  },
  {
    id: '2026-07-27',
    date: 'July 27, 2026',
    heading: 'Receding, But Still Severe',
    image: '/insights/assam-flood-2026/flood-depth-2026-07-27.jpg',
    alt: 'Satellite-derived flood depth map and population exposure chart for July 27, 2026, showing 15,379 people exposed across 274 km².',
    stats: [
      { label: 'Area flooded', value: '274 km²' },
      { label: 'People exposed', value: '15,379' },
      { label: '≥ 2m depth', value: '2,538 people' },
      { label: '≥ 3m depth', value: '725 people' },
    ],
    text: 'The third observation, on July 27, showed floodwaters beginning to recede. The total flooded area decreased to approximately 274 km², and overall exposed population declined to around 15,379 people. At first glance, this suggests conditions were improving — but flood depth tells another story: despite the reduction in total exposure, approximately 2,500 people remained in areas with flood depths exceeding 2 meters, while over 700 people were still exposed to depths greater than 3 meters. In other words, the flood became less widespread but remained locally severe.',
  },
];

export default function InsightAssamFloodPage() {
  return (
    <>
      <Helmet>
        <title>From Extent to Impact: Mapping Flood Depth in Assam — Floodsensing.AI</title>
        <meta
          name="description"
          content="How satellite observations, a flood-depth estimation algorithm, and population data reveal the human impact of the 2026 Assam flood in Sivasagar District."
        />
        <meta property="og:title" content="From Extent to Impact: Mapping Flood Depth and Population Exposure During the 2026 Assam Flood" />
        <meta
          property="og:description"
          content="How satellite observations, flood-depth estimation, and population data reveal the human impact of the 2026 Assam flood."
        />
        <meta property="og:image" content="/insights/assam-flood-2026/flood-depth-2026-07-22.jpg" />
      </Helmet>

      <Navbar />

      <main id="main-content" tabIndex={-1}>
        {/* Header */}
        <header
          className="relative px-5 md:px-10 pt-44 pb-16 md:pt-52 md:pb-20 overflow-hidden"
          style={{ background: '#1B1B1E' }}
        >
          {/* Background photo, dimmed */}
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: "url('/insights/assam-flood-2026/hero-bg-assam-flood.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center 60%',
              opacity: 0.7,
            }}
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 z-[1]"
            style={{
              background:
                'linear-gradient(180deg, rgba(27,27,30,0.45) 0%, rgba(27,27,30,0.8) 55%, #1B1B1E 100%)',
            }}
            aria-hidden="true"
          />

          <div className="relative z-[2] max-w-[820px] mx-auto">
            <FadeIn>
              <span className="section-label">Case Study &middot; Sivasagar, Assam</span>
              <h1
                style={{
                  fontFamily: 'DM Serif Display, serif',
                  fontSize: 'clamp(30px, 4.2vw, 50px)',
                  lineHeight: 1.15,
                  color: '#fff',
                }}
              >
                From Extent to Impact: Mapping Flood Depth and Population Exposure During the 2026 Assam Flood
              </h1>
              <p className="mt-6 text-[15px]" style={{ color: 'rgba(255,255,255,0.6)' }}>
                By Dr. Anupal Baruah &middot; Floodsensing.AI
              </p>
              <p className="mt-4 text-[17px] leading-[1.7]" style={{ color: 'rgba(255,255,255,0.75)' }}>
                How satellite observations, a flood-depth estimation algorithm, and population data
                reveal the human impact of a recent flood in Assam.
              </p>
            </FadeIn>
          </div>
        </header>

        {/* Body */}
        <article className="px-5 md:px-10 py-16 md:py-20" style={{ background: '#F2F4F7' }}>
          <div className="max-w-[760px] mx-auto">
            <FadeIn>
              <div className="prose-content text-[17px] leading-[1.75]" style={{ color: 'rgba(27,27,30,0.82)' }}>
                <h2 className="font-serif text-2xl font-bold text-carbon mt-2 mb-4">Floods hit hard&hellip;</h2>
                <p className="mb-6">
                  Every monsoon, Assam experiences widespread flooding driven by the Brahmaputra and
                  its tributaries. Satellite images quickly reveal where floodwaters have spread, but
                  flood extent alone tells only part of the story. For instance, two neighborhoods may
                  both appear inundated, yet one may have only ankle-deep water while another is
                  submerged under several meters. For emergency managers, relief agencies, and local
                  communities, this distinction can determine evacuation priorities, road accessibility,
                  infrastructure damage, and recovery needs.
                </p>
                <p className="mb-6">
                  These July 2026 fluvial floods severely impacted Sivasagar District, Assam. The
                  intense monsoon rainfall and flooding in the Dikhow and Darika river systems affected
                  thousands of residents, with many families displaced and relief operations continuing
                  even after floodwaters began to recede.{' '}
                  <a
                    href="https://www.ndtv.com/india-news/assam-floods-death-count-rises-to-75-over-3-lakh-people-still-affected-11836057"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="font-semibold"
                    style={{ color: '#3d7b85' }}
                  >
                    NDTV reported the death toll rising to 75, with over 3 lakh people affected
                  </a>
                  . By looking at the severity of the event, we asked a more meaningful question:
                </p>
                <p
                  className="mb-6 pl-5 py-1 font-medium"
                  style={{ borderLeft: '3px solid #58A4B0', color: '#1B1B1E' }}
                >
                  How many people are exposed to different levels of flood depth, and how does this
                  change as the flood evolves?
                </p>
                <p className="mb-2">
                  We used the RS-FloodXdepth framework (Tian et al., 2025), which combines
                  satellite-derived flood extent with high-resolution topographic information to
                  estimate spatially distributed flood depth. For this case study, Sentinel-1 SAR
                  imagery (10m) was integrated with open-source Copernicus digital elevation data (30m)
                  to estimate flood depths across Sivasagar District. These depth estimates were then
                  combined with the Global Human Settlement Layer (GHSL 2025) dataset to quantify
                  population exposure under different flood-depth thresholds.
                </p>
              </div>
            </FadeIn>

            {/* Study area map */}
            <FadeIn delay={80}>
              <figure className="my-12">
                <div className="rounded-2xl overflow-hidden border border-charcoal/10" style={{ boxShadow: '0 12px 40px rgba(0,0,0,0.06)' }}>
                  <img
                    src="/insights/assam-flood-2026/study-area-sivasagar.jpg"
                    alt="Map of the study area in Sivasagar District, Assam, showing the processing area of interest, district boundary, permanent water, and the Dikhow and Darika rivers, with an inset locating Assam within Northeast India."
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
                <figcaption className="text-sm mt-3 text-center" style={{ color: 'rgba(27,27,30,0.5)' }}>
                  Study area — Sivasagar District, Assam, along the Dikhow and Darika river systems.
                </figcaption>
              </figure>
            </FadeIn>

            {/* Dated snapshots */}
            {snapshots.map((snap, i) => (
              <FadeIn key={snap.id} delay={i * 60}>
                <div className="mb-14">
                  <span
                    className="block text-[11px] font-bold tracking-[0.12em] uppercase mb-2"
                    style={{ color: '#58A4B0' }}
                  >
                    {snap.date}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-carbon mb-4">{snap.heading}</h3>

                  <figure className="mb-6">
                    <div className="rounded-2xl overflow-hidden border border-charcoal/10" style={{ boxShadow: '0 12px 40px rgba(0,0,0,0.06)' }}>
                      <img
                        src={snap.image}
                        alt={snap.alt}
                        className="w-full h-auto"
                        loading="lazy"
                      />
                    </div>
                  </figure>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                    {snap.stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="rounded-lg px-3 py-3 text-center"
                        style={{ background: 'rgba(88,164,176,0.06)', border: '1px solid rgba(88,164,176,0.1)' }}
                      >
                        <span className="block font-serif text-lg font-bold text-carbon">{stat.value}</span>
                        <span className="block text-[10px] uppercase tracking-wide mt-1" style={{ color: 'rgba(27,27,30,0.5)' }}>
                          {stat.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  <p className="text-[17px] leading-[1.75]" style={{ color: 'rgba(27,27,30,0.82)' }}>
                    {snap.text}
                  </p>
                </div>
              </FadeIn>
            ))}

            <FadeIn>
              <div className="text-[17px] leading-[1.75]" style={{ color: 'rgba(27,27,30,0.82)' }}>
                <h2 className="font-serif text-2xl font-bold text-carbon mt-4 mb-4">What&rsquo;s next?</h2>
                <p className="mb-6">
                  Can floods like this be prevented? Probably not. Flooding is a natural process, but
                  its frequency and severity are increasingly amplified by climate change, rapid
                  urbanization, deforestation, and floodplain encroachment. While we cannot stop
                  extreme rainfall or overflowing rivers, we can significantly reduce their impacts.
                </p>
                <p className="mb-10">
                  The key is to shift from a reactive approach to a proactive one. By leveraging
                  next-generation Earth observation, high-resolution datasets, and AI-driven
                  forecasting, we need better early warning systems that anticipate impacts before they
                  occur and support timely evacuations and emergency response. Better forecasts won&rsquo;t
                  stop floods, but they can save lives, protect livelihoods, and build more resilient
                  communities.
                </p>
              </div>
            </FadeIn>

            {/* References & disclaimer */}
            <FadeIn>
              <div
                className="pt-8 mt-4"
                style={{ borderTop: '1px solid rgba(27,27,30,0.1)' }}
              >
                <h4 className="text-[11px] font-bold tracking-[0.12em] uppercase mb-3" style={{ color: 'rgba(27,27,30,0.5)' }}>
                  Reference
                </h4>
                <p className="text-sm leading-[1.65] mb-8" style={{ color: 'rgba(27,27,30,0.6)' }}>
                  Tian, Dan and Liu, Hongxing and Wang, Lei and Cohen, Sagy and Mandal, Tantu,
                  Rs-FloodXdepth: Enhancing Remote Sensing-Derived Flood Extent and Estimating Flood
                  Depth Using a Hydrologically Guided Region-Growing Method and High-Resolution DEMs.
                  Available at SSRN:{' '}
                  <a
                    href="https://ssrn.com/abstract=5336977"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="font-semibold"
                    style={{ color: '#3d7b85' }}
                  >
                    https://ssrn.com/abstract=5336977
                  </a>{' '}
                  or{' '}
                  <a
                    href="http://dx.doi.org/10.2139/ssrn.5336977"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="font-semibold"
                    style={{ color: '#3d7b85' }}
                  >
                    dx.doi.org/10.2139/ssrn.5336977
                  </a>
                  .
                </p>

                <div
                  className="rounded-lg px-5 py-4 text-sm leading-[1.6]"
                  style={{ background: 'rgba(232,89,60,0.06)', border: '1px solid rgba(232,89,60,0.18)', color: 'rgba(27,27,30,0.65)' }}
                >
                  <strong>Disclaimer:</strong> The flood depth and population exposure estimates
                  presented in this article are preliminary research results generated using satellite
                  observations and the RS-FloodXdepth framework. These results have not been officially
                  validated or endorsed by any government agency.
                </div>
              </div>
            </FadeIn>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}

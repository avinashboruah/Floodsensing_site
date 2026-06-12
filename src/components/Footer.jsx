const footerLinks = {
  Platform: [
    { label: 'What We Offer', href: '#platform' },
    { label: 'Flood Risk Intelligence', href: '#why-act' },
    { label: 'Assessment Access', href: '#contact' },
  ],
  Solutions: [
    { label: 'Government & Disaster', href: '#platform' },
    { label: 'Urban Resilience', href: '#platform' },
    { label: 'Dam & Reservoir', href: '#platform' },
    { label: 'Agriculture', href: '#platform' },
  ],
  Company: [
    { label: 'Contact', href: '#contact' },
  ],
};

export default function Footer() {
  return (
    <footer style={{ background: '#07131F', borderTop: '1px solid rgba(88,164,176,0.14)' }}>
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 pt-20 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(260px,1.4fr)_minmax(0,2fr)] gap-14 lg:gap-24 mb-20">
          <div className="max-w-sm">
            <a href="/" className="inline-flex items-center no-underline mb-8" aria-label="Floodsensing.AI home">
              <span className="font-serif text-[28px] text-white">
                Floodsensing<span style={{ color: '#58A4B0' }}>.AI</span>
              </span>
            </a>
            <p className="text-[15px] leading-[1.65]" style={{ color: 'rgba(88,164,176,0.82)' }}>
              AI-powered flood intelligence and climate resilience for governments, infrastructure operators, and agricultural enterprises worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            {Object.entries(footerLinks).map(([heading, links]) => (
              <div key={heading}>
                <h4
                  className="text-[11px] font-bold tracking-[0.12em] uppercase mb-6"
                  style={{ color: '#fff' }}
                >
                  {heading}
                </h4>
                <ul className="flex flex-col gap-4 list-none">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-[14px] no-underline transition-colors duration-200"
                        style={{ color: 'rgba(88,164,176,0.82)' }}
                        onMouseEnter={(e) => (e.target.style.color = '#58A4B0')}
                        onMouseLeave={(e) => (e.target.style.color = 'rgba(88,164,176,0.82)')}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div
          className="flex flex-wrap justify-between items-center gap-4 pt-8"
          style={{ borderTop: '1px solid rgba(88,164,176,0.2)' }}
        >
          <p className="text-xs" style={{ color: 'rgba(88,164,176,0.55)' }}>
            © {new Date().getFullYear()} Floodsensing.AI — All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

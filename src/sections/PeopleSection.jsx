import FadeIn from '../components/ui/FadeIn';
import { coreTeam, advisoryBoard, internationalCollaborators } from '../data/team';

function AdvisorCard({ member, delay }) {
  return (
    <FadeIn delay={delay}>
      <div
        className="bg-white rounded-2xl px-6 py-5 border border-charcoal/10 hover:border-pacific/40 hover:shadow-lg transition-all duration-300 h-full flex flex-col justify-center"
        style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}
      >
        <h4 className="font-serif text-base font-bold text-carbon">{member.name}</h4>
        <span className="text-xs mt-1" style={{ color: '#4a8f9a' }}>
          {member.role ? `${member.role}, ` : ''}
          {member.affiliation}
        </span>
      </div>
    </FadeIn>
  );
}

export default function PeopleSection() {
  return (
    <section id="people" className="px-5 md:px-10 py-24" style={{ background: '#F2F4F7' }}>
      <div className="max-w-[1200px] mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-[760px] mx-auto mb-16">
          <FadeIn>
            <span className="section-label">Our People</span>
            <h2 className="section-title">Meet Our Team</h2>
            <p className="section-sub mx-auto">
              We are a dedicated group of hydrologists, computation scientists, and GIS specialists working together to build resilient water systems and climate adaptations.
            </p>
          </FadeIn>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreTeam.map((member, i) => (
            <FadeIn key={member.id} delay={i * 50}>
              <div
                className="bg-white rounded-2xl p-8 border border-charcoal/10 hover:border-pacific/40 hover:shadow-lg transition-all duration-300 h-full flex flex-col justify-between"
                style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}
              >
                <div>
                  {/* Name & Credentials */}
                  <div className="mb-5">
                    <h3 className="font-serif text-lg font-bold text-carbon">
                      {member.name}
                    </h3>
                    {member.credentials && (
                      <span
                        className="text-xs font-semibold tracking-wide block mt-0.5"
                        style={{ color: '#4a8f9a' }}
                      >
                        {member.credentials}
                      </span>
                    )}
                  </div>

                  {/* Expertise List */}
                  <div className="mt-4">
                    <span className="text-[9px] font-bold tracking-[0.15em] text-charcoal/40 uppercase block mb-3">
                      Expertise Areas
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {member.expertise.map((exp, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-2.5 py-1 rounded-md transition-all duration-200"
                          style={{
                            background: 'rgba(88,164,176,0.06)',
                            color: '#3d7b85',
                            border: '1px solid rgba(88,164,176,0.1)'
                          }}
                        >
                          {exp}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Advisory Board */}
        {advisoryBoard.length > 0 && (
          <div className="mt-20">
            <FadeIn>
              <span className="section-label text-center block">Guidance</span>
              <h3 className="font-serif text-2xl font-bold text-carbon text-center mb-10">
                Advisory Board
              </h3>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[800px] mx-auto">
              {advisoryBoard.map((member, i) => (
                <AdvisorCard key={member.id} member={member} delay={i * 50} />
              ))}
            </div>
          </div>
        )}

        {/* International Collaborators */}
        {internationalCollaborators.length > 0 && (
          <div className="mt-16">
            <FadeIn>
              <span className="section-label text-center block">Global Network</span>
              <h3 className="font-serif text-2xl font-bold text-carbon text-center mb-10">
                International Collaborators
              </h3>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {internationalCollaborators.map((member, i) => (
                <AdvisorCard key={member.id} member={member} delay={i * 50} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

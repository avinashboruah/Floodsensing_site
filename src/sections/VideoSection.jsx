import { useState, useEffect } from 'react';
import { useVideoPlayer } from '../hooks/useVideoPlayer';

export default function VideoSection() {
  const { videoRef, isPlaying, setIsPlaying, togglePlay } = useVideoPlayer();
  const [activeVideo, setActiveVideo] = useState('nwm');

  const videoUrl = activeVideo === 'nwm'
    ? (import.meta.env.VITE_VIDEO_URL || '/simulation_texas_floods_2025.mp4')
    : '/hec_ras_gis_merged.mp4';

  // Force video reload and reset playing state when changing sources
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.pause();
      video.load();
      setIsPlaying(false);
    }
  }, [activeVideo, videoRef, setIsPlaying]);

  return (
    <section id="demo-video" className="px-5 md:px-10 py-20 md:py-24" style={{ background: '#58A4B0' }}>
      <div
        className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center"
      >
        {/* Copy */}
        <div>
          <span
            className="block text-[11px] font-bold tracking-[0.12em] uppercase mb-4"
            style={{ color: '#58A4B0' }}
          >
            See It In Action
          </span>
          <h2
            className="mb-5"
            style={{
              fontFamily: 'DM Serif Display, serif',
              fontSize: 'clamp(32px, 3.5vw, 40px)',
              lineHeight: 1.15,
              color: '#fff',
            }}
          >
            Watch how we can utilize the river forecast and do impact based assessment before it can happen
          </h2>
          <p className="text-[15px] leading-[1.65]" style={{ color: 'rgba(255,255,255,0.75)' }}>
            From raw satelite data to quick decision making ..We provide the entire solution.
          </p>
        </div>

        {/* Video player */}
        <div>
          {/* Tabs for switching videos */}
          <div className="flex gap-2 mb-4 justify-center lg:justify-start">
            <button
              onClick={() => setActiveVideo('nwm')}
              className={`px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded-lg transition-all duration-200 cursor-pointer ${
                activeVideo === 'nwm'
                  ? 'bg-white text-[#58A4B0] shadow-md border border-white'
                  : 'bg-white/10 text-white hover:bg-white/20 border border-white/10'
              }`}
            >
              Impact based forecasting
            </button>
            <button
              onClick={() => setActiveVideo('hec-ras')}
              className={`px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded-lg transition-all duration-200 cursor-pointer ${
                activeVideo === 'hec-ras'
                  ? 'bg-white text-[#58A4B0] shadow-md border border-white'
                  : 'bg-white/10 text-white hover:bg-white/20 border border-white/10'
              }`}
            >
              Flood Inundation Mapping in Jiabhoroli River
            </button>
          </div>

          <div
            role="button"
            tabIndex={0}
            aria-label={isPlaying ? 'Pause product demo video' : 'Play product demo video'}
            onClick={togglePlay}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                togglePlay();
              }
            }}
            className="relative w-full cursor-pointer overflow-hidden rounded-xl"
            style={{
              aspectRatio: activeVideo === 'nwm' ? '16/10' : '16/9',
              background: 'rgba(0,0,0,0.4)',
              border: '1px solid rgba(255,255,255,0.12)',
              boxShadow: '0 24px 64px rgba(0,0,0,0.35)',
              transition: 'aspect-ratio 0.3s ease',
            }}
          >
            {videoUrl ? (
              <video
                ref={videoRef}
                className={`w-full h-full block ${activeVideo === 'nwm' ? 'object-cover' : 'object-contain bg-black/40'}`}
                preload="none"
                src={videoUrl}
              />
            ) : (
              /* Placeholder when no video URL is configured */
              <div
                className="w-full h-full flex flex-col items-center justify-center gap-3"
                style={{ background: 'rgba(27,27,30,0.7)' }}
              >
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"/>
                  <line x1="7" y1="2" x2="7" y2="22"/><line x1="17" y1="2" x2="17" y2="22"/>
                  <line x1="2" y1="12" x2="22" y2="12"/><line x1="2" y1="7" x2="7" y2="7"/>
                  <line x1="2" y1="17" x2="7" y2="17"/><line x1="17" y1="17" x2="22" y2="17"/>
                  <line x1="17" y1="7" x2="22" y2="7"/>
                </svg>
                <p className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
                  Demo video not configured
                </p>
              </div>
            )}

            {/* Play overlay */}
            <div
              className="absolute inset-0 flex items-center justify-center transition-opacity duration-[250ms]"
              style={{
                background: 'rgba(0,0,0,0.25)',
                opacity: isPlaying ? 0 : 1,
                pointerEvents: isPlaying ? 'none' : 'auto',
              }}
            >
              <div
                className="flex items-center justify-center rounded-full pl-1 transition-all duration-[250ms]"
                style={{
                  width: 68,
                  height: 68,
                  background: 'rgba(255,255,255,0.15)',
                  backdropFilter: 'blur(8px)',
                  border: '1.5px solid rgba(255,255,255,0.4)',
                  color: '#fff',
                }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <polygon points="5 3 19 12 5 21 5 3"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

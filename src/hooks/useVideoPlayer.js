import { useRef, useState, useCallback } from 'react';

/**
 * Manages video play/pause state and overlay visibility.
 */
export function useVideoPlayer() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      video.pause();
      setIsPlaying(false);
    }
  }, []);

  return { videoRef, isPlaying, setIsPlaying, togglePlay };
}

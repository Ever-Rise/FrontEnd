import { useEffect } from 'react';
import { loadGsap } from '@/motions/lib/loadGsap.js';

export function useVendasHeroScroll({
  sceneRef,
  copyRef,
  heroStageRef,
  mediaFrameRef,
  imageRef,
  videoRef,
}) {
  useEffect(() => {
    const scene = sceneRef?.current;
    const copy = copyRef?.current;
    const heroStage = heroStageRef?.current;
    const mediaFrame = mediaFrameRef?.current;
    const image = imageRef?.current;
    const video = videoRef?.current;

    if (!scene || !copy || !heroStage || !mediaFrame || !image || !video) {
      return undefined;
    }

    let cancelled = false;
    let timeline = null;
    let scrollTrigger = null;

    const syncVideoTime = (progress) => {
      if (!video || !Number.isFinite(video.duration) || video.duration <= 0) {
        return;
      }

      const nextTime = Math.min(video.duration, progress * video.duration);
      if (Math.abs(video.currentTime - nextTime) > 0.03) {
        video.currentTime = nextTime;
      }
    };

    const setup = async () => {
      const { gsap, ScrollTrigger } = await loadGsap();
      if (cancelled) {
        return;
      }

      video.pause();

      gsap.set(copy, { opacity: 1, y: 0 });
      gsap.set(heroStage, { overflow: 'visible' });
      gsap.set(mediaFrame, {
        x: 0,
        y: 0,
        clipPath: 'inset(0% 0% 0% 0% round 32px)',
        borderRadius: '32px',
        zIndex: 8,
      });
      gsap.set(image, { opacity: 1, scale: 1, transformOrigin: 'center center' });
      gsap.set(video, { opacity: 0, scale: 1.02, transformOrigin: 'center center' });

      timeline = gsap.timeline({
        scrollTrigger: {
          trigger: scene,
          start: 'top top',
          end: '+=280%',
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          onStart: () => {
            gsap.set(mediaFrame, {
              position: 'absolute',
              top: 0,
              right: 0,
              width: '100%',
              height: '100vh',
              zIndex: 8,
            });
          },
          onUpdate: (self) => syncVideoTime(self.progress),
          onRefresh: (self) => syncVideoTime(self.progress),
        },
        defaults: { ease: 'none' },
      });

      timeline.to(copy, { opacity: 0, y: -48, duration: 0.18 }, 0.08);
      timeline.to(
        mediaFrame,
        {
          top: 0,
          right: 0,
          width: '100%',
          height: '100vh',
          y: 0,
          clipPath: 'inset(0% 0% 0% 0% round 0px)',
          borderRadius: '0px',
          duration: 0.7,
        },
        0,
      );
      timeline.to(image, { opacity: 0, scale: 1.08, duration: 0.28 }, 0.36);
      timeline.to(video, { opacity: 1, scale: 1, duration: 0.3 }, 0.52);

      const refreshOnReady = () => {
        video.currentTime = 0;
        ScrollTrigger.refresh();
      };

      video.addEventListener('loadedmetadata', refreshOnReady, { once: true });
      scrollTrigger = timeline.scrollTrigger;
    };

    setup();

    return () => {
      cancelled = true;
      video?.pause();
      if (scrollTrigger) {
        scrollTrigger.kill();
      }
      if (timeline) {
        timeline.kill();
      }
      if (heroStage) {
        heroStage.style.overflow = '';
        heroStage.style.position = '';
      }
    };
  }, [sceneRef, copyRef, heroStageRef, mediaFrameRef, imageRef, videoRef]);
}

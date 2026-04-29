import { useRef, useEffect } from 'react';
import { prefersReducedMotion } from './motionConfig';

// Hook leve para criar e controlar timelines GSAP com cleanup e interrupção
export default function useGSAP({ reducedMotion = prefersReducedMotion() } = {}) {
    const tlRef = useRef(null);

    async function createTimeline(opts = {}) {
        const gsapModule = await import('gsap');
        const gsap = gsapModule.gsap || gsapModule.default || gsapModule;

        if (tlRef.current) {
            try { tlRef.current.kill(); } catch (e) { /* noop */ }
        }

        const tl = gsap.timeline({ paused: true, ...(opts.timeline || {}) });
        tlRef.current = tl;
        return tl;
    }

    function play() { if (tlRef.current) tlRef.current.play(); }
    function pause() { if (tlRef.current) tlRef.current.pause(); }
    function reverse() { if (tlRef.current) tlRef.current.reverse(); }
    function kill() { if (tlRef.current) { tlRef.current.kill(); tlRef.current = null; } }

    useEffect(() => {
        // If reduced motion is requested, ensure any timeline is short/paused
        if (reducedMotion && tlRef.current) {
            try { tlRef.current.timeScale(0); } catch (e) { /* noop */ }
        }
        return () => { if (tlRef.current) { try { tlRef.current.kill(); } catch (e) { } tlRef.current = null; } };
    }, [reducedMotion]);

    return { createTimeline, play, pause, reverse, kill, get timeline() { return tlRef.current; } };
}

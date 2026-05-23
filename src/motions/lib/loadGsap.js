const noopTimeline = {
  to: () => noopTimeline,
  from: () => noopTimeline,
  fromTo: () => noopTimeline,
  add: () => noopTimeline,
  kill: () => undefined,
  pause: () => undefined,
  play: () => undefined,
  scrollTrigger: {
    kill: () => undefined,
  },
};

const noopGsap = {
  set: () => undefined,
  timeline: () => ({ ...noopTimeline }),
  fromTo: () => ({ ...noopTimeline }),
  from: () => ({ ...noopTimeline }),
  to: () => ({ ...noopTimeline }),
  registerPlugin: () => undefined,
};

export async function loadGsap() {
  return {
    gsap: noopGsap,
    ScrollTrigger: {
      refresh: () => undefined,
      kill: () => undefined,
    },
  };
}

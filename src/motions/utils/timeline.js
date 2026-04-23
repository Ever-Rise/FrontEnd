/**
 * Animation Timeline Helpers
 * Construtores de timelines e sequências GSAP
 */

/**
 * Criar sequência de animações
 */
export const createSequence = (animations) => {
  let totalDuration = 0;

  return {
    animations: animations.map((anim) => {
      const startTime = totalDuration;
      totalDuration += (anim.delay || 0) + anim.duration;

      return {
        ...anim,
        startTime,
      };
    }),
    totalDuration,
  };
};

/**
 * Calcular stagger automático baseado na quantidade de elementos
 */
export const calculateStagger = (elementCount, baseDuration = 0.1) => {
  return baseDuration / Math.max(elementCount, 1);
};

/**
 * Criar timeline com presets
 */
export const createTimelinePreset = (preset = 'staggerIn') => {
  const presets = {
    staggerIn: {
      opacity: 0,
      y: 20,
      duration: 0.6,
      stagger: 0.1,
    },
    staggerOut: {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.1,
    },
    fadeInScale: {
      opacity: 0,
      scale: 0.8,
      duration: 0.5,
    },
    slideInLeft: {
      x: -100,
      opacity: 0,
      duration: 0.6,
    },
    slideInRight: {
      x: 100,
      opacity: 0,
      duration: 0.6,
    },
  };

  return presets[preset] || presets.staggerIn;
};

/**
 * Agrupar elementos por delay
 */
export const groupByDelay = (elements, delayMs = 100) => {
  return elements.reduce((groups, element, index) => {
    const groupIndex = Math.floor(index / Math.ceil(elements.length / (1000 / delayMs)));
    if (!groups[groupIndex]) groups[groupIndex] = [];
    groups[groupIndex].push(element);
    return groups;
  }, []);
};

/**
 * Criar efeito de cascata
 */
export const createCascadeEffect = (elements, baseDuration = 0.5, stagger = 0.1) => {
  return {
    elements,
    animations: elements.map((el, index) => ({
      element: el,
      delay: index * stagger,
      duration: baseDuration,
    })),
    totalDuration: elements.length * stagger + baseDuration,
  };
};

/**
 * Criar efeito de onda
 */
export const createWaveEffect = (elements, wavelength = 0.3, speed = 1) => {
  return elements.map((el, index) => ({
    element: el,
    wave: {
      amplitude: 1,
      frequency: wavelength,
      phase: (index / elements.length) * Math.PI * 2,
      speed,
    },
  }));
};

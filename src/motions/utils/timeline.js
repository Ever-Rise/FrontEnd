export const createSequence = (animations) => ({ animations, totalDuration: 0 });
export const calculateStagger = () => 0;
export const createTimelinePreset = () => ({})
export const groupByDelay = (elements) => [elements];
export const createCascadeEffect = (elements) => ({ elements, animations: [], totalDuration: 0 });
export const createWaveEffect = (elements) => elements.map((el) => ({ element: el }));

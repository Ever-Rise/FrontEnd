import { useEffect, useState } from 'react';
import breakpoints from '../theme/breakpoints';

const getCurrentBreakpoint = (width) => {
    if (width >= breakpoints.xl) return 'xl';
    if (width >= breakpoints.lg) return 'lg';
    if (width >= breakpoints.md) return 'md';
    if (width >= breakpoints.sm) return 'sm';
    return 'xs';
};

export const useBreakpoint = () => {
    const [breakpoint, setBreakpoint] = useState(getCurrentBreakpoint(window.innerWidth));

    useEffect(() => {
        const onResize = () => {
            setBreakpoint(getCurrentBreakpoint(window.innerWidth));
        };

        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    return breakpoint;
};

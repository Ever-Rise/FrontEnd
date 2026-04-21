import breakpoints from './breakpoints';

const theme = {
    colors: {
        aquamarine: '#93E9BE',
        balticBlue: '#185FA5',
        graphite: '#2C2C2A',
        beige: '#F5F5DC',
        alabaster: '#DBDBDB',
        emergency: '#FF8200',
    },
    fonts: {
        display: "'Raleway', sans-serif",
        body: "'Lato', sans-serif",
        displayFallback: "'Fraunces', serif",
        bodyFallback: "'DM Sans', sans-serif",
    },
    breakpoints,
    spacing: {
        xs: '0.25rem',
        sm: '0.5rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem',
    },
    radii: {
        sm: '0.5rem',
        md: '0.75rem',
        lg: '1rem',
        pill: '999px',
    },
    shadows: {
        card: '0 10px 28px rgba(24, 95, 165, 0.12)',
        focus: '0 0 0 3px rgba(147, 233, 190, 0.45)',
    },
};

export default theme;

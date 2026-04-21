import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Fraunces:opsz,wght@9..144,500;9..144,700&family=Lato:wght@400;700;900&family=Raleway:wght@500;700;800&display=swap');

  :root {
    --color-aquamarine: #93E9BE;
    --color-baltic-blue: #185FA5;
    --color-graphite: #2C2C2A;
    --color-beige: #F5F5DC;
    --color-alabaster: #DBDBDB;
    --color-emergency: #FF8200;

    --font-display: 'Raleway', sans-serif;
    --font-body: 'Lato', sans-serif;
    --font-display-fallback: 'Fraunces', serif;
    --font-body-fallback: 'DM Sans', sans-serif;

    --bp-xs: 0px;
    --bp-sm: 576px;
    --bp-md: 768px;
    --bp-lg: 992px;
    --bp-xl: 1200px;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html,
  body,
  #root {
    min-height: 100%;
  }

  body {
    background:
      radial-gradient(circle at 10% 10%, rgba(147, 233, 190, 0.35), transparent 30%),
      radial-gradient(circle at 85% 0%, rgba(24, 95, 165, 0.2), transparent 35%),
      var(--color-beige);
    color: var(--color-graphite);
    font-family: var(--font-body);
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  h1, h2, h3, h4, h5, h6, button, nav {
    font-family: var(--font-display);
  }

  img,
  picture,
  svg,
  canvas {
    display: block;
    max-width: 100%;
  }

  a {
    color: var(--color-baltic-blue);
    text-decoration: none;
  }

  button,
  input,
  textarea,
  select {
    font: inherit;
  }
`;

export default GlobalStyles;

import styled from 'styled-components';

export const Container = styled.section.attrs({
  role: 'region',
})
background: #fff;
border: 1px solid ${ ({ theme }) => theme.colors.alabaster };
border - radius: 0.8rem;
box - shadow: ${ ({ theme }) => theme.shadows.card };
max - width: 460px;
padding: 1.2rem;
;

export const Form = styled.form`
  display: grid;
  gap: 0.9rem;
`;

import styled from 'styled-components';

export const Container = styled.main.attrs({
  role: 'main',
})`
  margin: 0 auto;
  max-width: 1200px;
  padding: 2rem 1rem;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.balticBlue};
  font-family: ${({ theme }) => theme.fonts.display};
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.graphite};
`;

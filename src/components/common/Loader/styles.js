import styled from 'styled-components';

export const Container = styled.section.attrs({
  role: 'status',
})`
  align-items: center;
  display: grid;
  min-height: ${({ $fullPage }) => ($fullPage ? '100vh' : '4rem')};
  place-items: center;
  width: 100%;
`;

export const Spinner = styled.div.attrs({
  'aria-label': 'Carregando',
})`
  animation: spin 0.8s linear infinite;
  border: 4px solid ${({ theme }) => theme.colors.alabaster};
  border-radius: 50%;
  border-top-color: ${({ theme }) => theme.colors.balticBlue};
  height: 2.25rem;
  width: 2.25rem;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

export const SkeletonBlock = styled.div`
  animation: pulse 1.2s ease-in-out infinite;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.alabaster} 0%,
    #f2f2f2 50%,
    ${({ theme }) => theme.colors.alabaster} 100%
  );
  background-size: 200% 100%;
  border-radius: 0.7rem;
  height: 1.5rem;
  width: min(320px, 90%);

  @keyframes pulse {
    0% {
      background-position: 200% 0;
    }

    100% {
      background-position: -200% 0;
    }
  }
`;

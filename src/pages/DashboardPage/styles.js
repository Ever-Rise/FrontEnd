import styled from 'styled-components';

export const Wrapper = styled.main.attrs({
    role: 'main',
})`
  margin: 0 auto;
  max-width: 1200px;
  padding: 2rem 1rem 4rem;
`;

export const Header = styled.header`
  margin-bottom: 1.5rem;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.balticBlue};
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(1.4rem, 3vw, 2.1rem);
`;

export const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.graphite};
`;

export const DashboardGrid = styled.section.attrs({
    role: 'region',
})`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
`;

export const InfoCard = styled.article`
  background: #fff;
  border: 1px solid ${({ theme }) => theme.colors.alabaster};
  border-radius: 0.9rem;
  box-shadow: ${({ theme }) => theme.shadows.card};
  padding: 1rem;
`;

export const Label = styled.span`
  color: ${({ theme }) => theme.colors.graphite};
  font-size: 0.85rem;
`;

export const Strong = styled.strong`
  color: ${({ theme }) => theme.colors.balticBlue};
  display: block;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.25rem;
  margin-top: 0.3rem;
`;

export const AlertTag = styled.div.attrs({
    role: 'status',
})`
  margin-top: 1rem;
  padding: 0.8rem 1rem;
  border-radius: 0.7rem;
  background: #fff7ef;
  color: ${({ theme }) => theme.colors.graphite};
  border-left: 4px solid ${({ theme }) => theme.colors.balticBlue};
`;

export const EmergencyOverlay = styled.div.attrs({
    'data-emergency': 'true',
})`
  /* LINT WARNING: --color-emergency (#FF8200) somente para elementos de emergencia */
  align-items: center;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.emergency}, #ff9f3d);
  display: flex;
  inset: 0;
  justify-content: center;
  padding: 1rem;
  position: fixed;
  z-index: 9999;
`;

export const EmergencyContent = styled.div`
  background: rgba(0, 0, 0, 0.68);
  border-radius: 1rem;
  color: #fff;
  max-width: 640px;
  padding: 2rem;
  text-align: center;

  h2 {
    font-size: clamp(1.5rem, 4vw, 2.4rem);
    margin-bottom: 0.7rem;
  }
`;

export const EmergencyButton = styled.button.attrs({
    type: 'button',
})`
  /* LINT WARNING: --color-emergency (#FF8200) somente para elementos de emergencia */
  background: ${({ theme }) => theme.colors.emergency};
  border: 2px solid #fff;
  border-radius: 0.75rem;
  color: #fff;
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.1rem;
  font-weight: 800;
  margin-top: 1.2rem;
  padding: 0.9rem 1.2rem;
`;

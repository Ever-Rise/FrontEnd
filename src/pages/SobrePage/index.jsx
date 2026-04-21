import React from 'react';
import { Container, Title, Description } from './styles';

const PAGE_NAME = 'Sobre o Projeto';

const SobrePage = () => {
  return (
    <Container>
      <Title>{PAGE_NAME}</Title>
      <Description>Conteudo desta pagina em construcao para a plataforma hospitalar autonoma.</Description>
    </Container>
  );
};

export default SobrePage;


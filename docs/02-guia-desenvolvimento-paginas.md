# 02 - Guia para criar e manter paginas

## Checklist rapido para criar nova pagina

1. Criar pasta em `src/pages/NovaPagina/`.
2. Criar `index.jsx` com componente funcional.
3. Criar `styles.js` para os estilos da pagina.
4. Criar `index.js` reexportando `index.jsx`.
5. Registrar import lazy em `src/router/index.jsx`.
6. Adicionar rota no grupo correto (publica, privada ou aberta).
7. Se necessario, exportar em `src/pages/index.js`.

## Template recomendado de pagina

```jsx
import React from 'react';
import { Container, Title, Description } from './styles';

const NovaPagina = () => {
  return (
    <Container>
      <Title>Titulo da tela</Title>
      <Description>Descricao da funcionalidade.</Description>
    </Container>
  );
};

export default NovaPagina;
```

```js
import styled from 'styled-components';

export const Container = styled.main`
  margin: 0 auto;
  max-width: 1200px;
  padding: 2rem 1rem;
`;

export const Title = styled.h1``;
export const Description = styled.p``;
```

## Como decidir onde colocar logica

- Regra visual da tela: pagina/componente.
- Estado compartilhado entre telas: slice Redux.
- Fluxo assincrono (HTTP, WS, SSE, retry): saga.
- Chamada externa (endpoint/protocolo): service.
- Formatacao e utilitarios: `src/utils/`.

## Como conectar pagina ao estado global

1. Criar/usar hook em `src/hooks/`.
2. No hook, usar `useSelector` para leitura.
3. No hook, usar `useDispatch` para disparar acoes.
4. Consumir o hook na pagina.

Exemplo de fluxo:
- Usuario clica botao
- Pagina chama metodo do hook
- Hook dispara action `*Request`
- Saga escuta action e chama service
- Saga dispara `*Success` ou `*Failure`
- UI re-renderiza com base no novo estado

## Como adicionar uma rota privada

1. Declare o lazy import no topo de `src/router/index.jsx`.
2. Adicione a rota no bloco com `element: <PrivateRoute />`.
3. Garanta que a navegacao para ela exista (header/sidebar/menu).
4. Se a pagina depender de `deviceId`, valide o fluxo de vinculo.

## Como adicionar formulario novo

1. Criar componente em `src/components/forms/`.
2. Validar com Zod + React Hook Form.
3. Em submit, disparar acao do slice correspondente.
4. Mostrar estado de loading/erro com base no store.

## Boas praticas de manutencao de pagina

- Evite side effect direto no componente quando a regra e global.
- Evite duplicar strings: use locale em `src/locales/pt-BR.js` quando aplicavel.
- Use componentes de `src/components/common/` antes de criar novos.
- Preserve semantica e acessibilidade (main, section, role, aria-*).

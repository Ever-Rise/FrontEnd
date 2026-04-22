# 02 - Guia de desenvolvimento de paginas

Este guia mostra o processo completo para criar, registrar e manter paginas sem quebrar o padrao do projeto.

## 1) Estrutura padrao de pagina

Cada pagina usa o formato:

`src/pages/NomePagina/`

- `index.jsx`: componente principal
- `styles.js`: estilos da pagina
- `index.js`: reexport default

Exemplo de `index.js`:

```js
export { default } from './index.jsx';
```

## 2) Processo completo para criar pagina nova

1. Criar pasta da pagina em `src/pages/NomePagina`.
2. Criar `index.jsx` com estrutura da tela.
3. Criar `styles.js` com styled-components da tela.
4. Criar `index.js` para reexport.
5. Adicionar export em `src/pages/index.js`.
6. Registrar lazy import em `src/router/index.jsx`.
7. Criar rota no bloco correto (publico, privado ou aberto).
8. Atualizar navegacao (header/sidebar/menu) se aplicavel.
9. Validar fluxo em desktop e mobile.

## 3) Decisao de responsabilidade por camada

Use esta regra antes de codar:

- Visual/layout da tela: `pages` e `components`
- Comportamento compartilhado de tela: `hooks`
- Estado global de dominio: `slices`
- Fluxo assincrono e resiliencia: `sagas`
- Chamada externa e protocolo: `services`
- Constantes, formatadores e validadores: `utils`

## 4) Template base recomendado

`index.jsx`:

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

`styles.js`:

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

## 5) Como conectar pagina ao estado global

Passos:

1. Criar/usar um hook em `src/hooks`.
2. Ler estado com `useSelector` dentro do hook.
3. Expor metodos que disparam actions com `useDispatch`.
4. Consumir hook na pagina para manter UI limpa.

Fluxo esperado:

1. Usuario interage com a UI.
2. Pagina chama metodo do hook.
3. Hook dispara action `*Request`.
4. Saga processa side effect e chama service.
5. Saga despacha `*Success` ou `*Failure`.
6. Slice atualiza store.
7. Pagina reage ao novo estado.

## 6) Como registrar rota nova

Arquivo: `src/router/index.jsx`.

Passo a passo:

1. Declarar `const MinhaPagina = lazy(() => import('../pages/MinhaPagina'));`.
2. Adicionar rota no grupo adequado:
   - aberto (sem guard)
   - `PublicRoute`
   - `PrivateRoute`
3. Garantir fallback com `withSuspense`.
4. Validar navegacao por URL direta e por menu.

## 7) Como criar formularios

Padrao recomendado:

1. Criar componente em `src/components/forms`.
2. Definir schema com Zod.
3. Integrar com React Hook Form.
4. Disparar action `*Request` no submit.
5. Exibir estados de loading/erro vindos da store.

## 8) Boas praticas obrigatorias

1. Evitar side effect na pagina quando o impacto e global.
2. Reutilizar componentes existentes em `src/components/common`.
3. Evitar strings duplicadas quando houver chance de reaproveitamento em `src/locales/pt-BR.js`.
4. Manter acessibilidade minima: landmarks semanticos, labels e foco de teclado.
5. Preservar responsividade com breakpoints do tema.

## 9) Checklist final antes de merge

1. Rota funciona com usuario logado e deslogado conforme esperado.
2. Loading e erro aparecem corretamente.
3. Nao existe chamada HTTP direta dentro da pagina.
4. Nao houve quebra de rotas existentes.
5. Build local executa com sucesso (`npm run build`).

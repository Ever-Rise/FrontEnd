# Módulo Motion - Guia Completo

## 📋 Índice

1. [Visão Geral](#visão-geral)
2. [Estrutura do Projeto](#estrutura-do-projeto)
3. [Instalação de Dependências](#instalação-de-dependências)
4. [Configurações](#configurações)
5. [Hooks Disponíveis](#hooks-disponíveis)
6. [Exemplos de Uso](#exemplos-de-uso)
7. [Boas Práticas](#boas-práticas)
8. [Performance](#performance)
9. [Troubleshooting](#troubleshooting)

---

## 🎬 Visão Geral

O **módulo Motion** foi desenvolvido para adicionar um nível imersivo e interativo ao projeto frontend. Ele integra:

- **Three.js**: Renderização 3D em WebGL
- **GSAP**: Animações de alta performance (scroll, timelines, interações)
- **Scroll Triggers**: Animações sincronizadas com scroll
- **Mouse Interactions**: Rastreamento de mouse para interações 3D

### Arquitetura

```
src/motions/
├── canvas/          # Componentes Three.js (cenas, objetos 3D)
├── hooks/           # Hooks React (useGsap, useThreeCanvas, etc)
├── utils/           # Utilitários (math, timeline helpers)
├── contexts/        # React Contexts (MotionContext, etc)
├── services/        # Serviços de integração
├── configs/         # Configurações globais (presets, constantes)
├── types/           # TypeScript types (quando migrar)
└── shaders/         # Arquivos GLSL para custom shaders
```

---

## 📁 Estrutura do Projeto

### `/canvas` - Componentes Three.js

Nesta pasta, você criará componentes React que integram Three.js:

```jsx
// Exemplo: src/motions/canvas/Scene3D.jsx
import { useThreeCanvas } from '../hooks';

export const Scene3D = () => {
  const { containerRef, sceneRef } = useThreeCanvas({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  return <div ref={containerRef} style={{ width: '100%', height: '100%' }} />;
};
```

### `/hooks` - React Hooks

**Hooks disponíveis:**

- `useGsap()` - Gerenciamento de animações GSAP
- `useThreeCanvas()` - Inicialização de canvas Three.js
- `useScrollAnimation()` - Animações sincronizadas com scroll

### `/utils` - Utilitários

- `math.js` - Cálculos vetoriais (lerp, normalize, distance, etc)
- `timeline.js` - Helpers para timelines GSAP (stagger, cascata, onda)

### `/configs` - Configurações

- `index.ts` - Presets de easing, durações, cores, constantes

### `/types` - Type Definitions

Definições TypeScript para tipagem do módulo (útil quando migrar completamente para TS).

---

## 📦 Instalação de Dependências

### Passo 1: Instalar Three.js e GSAP

```bash
npm install three gsap
# ou
yarn add three gsap
```

### Passo 2: Instalar tipos TypeScript (opcional)

```bash
npm install --save-dev @types/three
```

### Passo 3: Verificar instalação

```bash
npm ls three gsap
```

---

## ⚙️ Configurações

### Configurações Globais (`src/motions/configs/index.ts`)

```javascript
import {
  DURATION,
  DELAY,
  EASING_PRESETS,
  THREE_DEFAULTS,
  SCROLL_DEFAULTS,
  COLOR_PALETTE,
  PERFORMANCE_DEFAULTS,
} from '@/motions/configs';
```

#### Durações Padrão

```javascript
DURATION.instant;  // 0.1s
DURATION.fast;     // 0.3s
DURATION.normal;   // 0.6s
DURATION.slow;     // 1s
DURATION.verySlow; // 1.5s
DURATION.glacial;  // 2s
```

#### Easings Disponíveis

```javascript
// Entrada
EASING_PRESETS.easeInQuad    // power1.in
EASING_PRESETS.easeInCubic   // power2.in

// Saída
EASING_PRESETS.easeOutQuad   // power1.out
EASING_PRESETS.easeOutCubic  // power2.out

// Entrada + Saída
EASING_PRESETS.easeInOutCubic // power2.inOut

// Especiais
EASING_PRESETS.easeOutElastic
EASING_PRESETS.easeInExpo
// ... mais 20+ opções
```

---

## 🎣 Hooks Disponíveis

### 1. `useGsap()`

Gerencia animações GSAP com cleanup automático.

```javascript
import { useGsap } from '@/motions/hooks';

export const Component = () => {
  const { registerAnimation, pauseAll, resumeAll, clearAll } = useGsap({
    debug: true,
    autoCleanup: true,
  });

  // Usar para rastrear animações
  const animId = registerAnimation(animation);

  // Pausar/retomar
  pauseAll();
  resumeAll();

  // Limpar ao desmontar
  clearAll();

  return <div>Component com animações</div>;
};
```

### 2. `useThreeCanvas()`

Inicializa e gerencia um canvas Three.js.

```javascript
import { useThreeCanvas } from '@/motions/hooks';

export const Scene3D = () => {
  const {
    containerRef,
    sceneRef,
    rendererRef,
    cameraRef,
    initializeThree,
    startRenderLoop,
  } = useThreeCanvas({
    width: 1920,
    height: 1080,
    backgroundColor: '#000000',
  });

  useEffect(() => {
    initializeThree();
    startRenderLoop(() => {
      // Render loop
    });
  }, []);

  return <div ref={containerRef} />;
};
```

### 3. `useScrollAnimation()`

Detecta scroll e dispara callbacks.

```javascript
import { useScrollAnimation } from '@/motions/hooks';

export const ScrollSection = () => {
  const { triggerRef } = useScrollAnimation({
    trigger: '.scroll-target',
    start: 'top 80%',
    end: 'top 20%',
    onEnter: () => console.log('Entrou no viewport'),
    onLeave: () => console.log('Saiu do viewport'),
  });

  return <div ref={triggerRef}>Scroll-triggered content</div>;
};
```

---

## 💡 Exemplos de Uso

### Exemplo 1: Animação com GSAP (sem Three.js)

```jsx
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGsap } from '@/motions/hooks';
import { DURATION, EASING_PRESETS } from '@/motions/configs';

export const AnimatedBox = () => {
  const boxRef = useRef(null);
  const { registerAnimation } = useGsap({ debug: true });

  useEffect(() => {
    const timeline = gsap.timeline();

    timeline.to(boxRef.current, {
      duration: DURATION.normal,
      ease: EASING_PRESETS.easeOutCubic,
      y: 50,
      opacity: 1,
    });

    registerAnimation(timeline);
  }, [registerAnimation]);

  return (
    <div
      ref={boxRef}
      style={{
        width: '100px',
        height: '100px',
        backgroundColor: '#FF6B6B',
        opacity: 0,
      }}
    />
  );
};
```

### Exemplo 2: Scroll Animation com ScrollTrigger

```jsx
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useScrollAnimation } from '@/motions/hooks';
import { SCROLL_DEFAULTS } from '@/motions/configs';

gsap.registerPlugin(ScrollTrigger);

export const ScrollBox = () => {
  const boxRef = useRef(null);
  const { triggerRef } = useScrollAnimation({
    trigger: boxRef,
    onEnter: () => {
      gsap.to(boxRef.current, {
        duration: 0.8,
        x: 100,
        opacity: 1,
      });
    },
  });

  return (
    <div ref={triggerRef} style={{ opacity: 0 }}>
      Box que anima ao entrar no scroll
    </div>
  );
};
```

### Exemplo 3: Timeline com Stagger

```jsx
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { timeline } from '@/motions/utils';
import { DURATION, EASING_PRESETS } from '@/motions/configs';

export const StaggerList = ({ items = [] }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const elements = containerRef.current?.querySelectorAll('li');

    gsap.to(elements, {
      duration: DURATION.normal,
      ease: EASING_PRESETS.easeOutCubic,
      opacity: 1,
      y: 0,
      stagger: 0.1, // Delay entre cada elemento
    });
  }, []);

  return (
    <ul ref={containerRef}>
      {items.map((item, i) => (
        <li key={i} style={{ opacity: 0, y: 20 }}>
          {item}
        </li>
      ))}
    </ul>
  );
};
```

### Exemplo 4: Math Utilities - Lerp e Distance

```jsx
import { math } from '@/motions/utils';

export const VectorExample = () => {
  // Criar vetores
  const start = math.vec3(0, 0, 0);
  const end = math.vec3(10, 10, 10);

  // Interpolar entre dois pontos
  const midpoint = math.lerp(start, end, 0.5);
  console.log(midpoint); // { x: 5, y: 5, z: 5 }

  // Calcular distância
  const dist = math.distance(start, end);
  console.log(dist); // 17.32...

  // Normalizar
  const normalized = math.normalize(math.subtract(end, start));
  console.log(normalized); // Vetor unitário

  // Mapear valor
  const mapped = math.map(50, 0, 100, 0, 1);
  console.log(mapped); // 0.5

  return <div>Ver console para resultados</div>;
};
```

---

## ✅ Boas Práticas

### 1. **Organize animações em contextos**

```jsx
// Evite spreads de animações direto em componentes
// Prefira: hooks customizados ou contextos

export const useHeroAnimation = () => {
  const { registerAnimation } = useGsap();
  // Lógica centralizada de animação
  return { /* API simplificada */ };
};
```

### 2. **Sempre faça cleanup**

```jsx
useEffect(() => {
  // Sua animação

  return () => {
    // Cleanup: remover event listeners, cancelar animations
  };
}, []);
```

### 3. **Respeite preferências de movimento reduzido**

```jsx
useEffect(() => {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReduced) {
    // Desativar animações ou usar versões estáticas
  }
}, []);
```

### 4. **Use configurações centralizadas**

```jsx
// ✅ BOM
import { DURATION, EASING_PRESETS } from '@/motions/configs';

gsap.to(el, {
  duration: DURATION.normal,
  ease: EASING_PRESETS.easeOutCubic,
});

// ❌ EVITE
gsap.to(el, {
  duration: 0.6,
  ease: 'power2.out',
});
```

### 5. **Optimize performance com throttling**

```jsx
// Para mouse events ou scroll handlers frequentes
import { throttle } from 'lodash'; // ou criar seu próprio

const handleMouseMove = throttle((e) => {
  // Lógica de atualização
}, 16); // ~60fps
```

---

## ⚡ Performance

### Otimizações Implementadas

1. **Cleanup Automático**: Hooks removem animações ao desmontar
2. **Lazy Loading**: Three.js e GSAP carregam sob demanda
3. **Memory Leaks Prevention**: Ref tracking de animations
4. **Responsividade**: Resize handlers otimizados

### Checklist de Performance

- [ ] Usar `useCallback` para funções em props
- [ ] Memoizar componentes com `React.memo` quando necessário
- [ ] Monitorar FPS com DevTools
- [ ] Testar em dispositivos low-end
- [ ] Desativar animações em modo `prefers-reduced-motion`
- [ ] Usar CSS transforms em vez de JS quando possível
- [ ] Aproveitar GPU com `will-change` e `transform`

```css
/* Ativar aceleração de GPU */
.animated-element {
  will-change: transform;
  transform: translateZ(0);
  backface-visibility: hidden;
}
```

---

## 📊 Monitoramento de Performance

### Verificar FPS em Tempo Real

```javascript
let lastTime = performance.now();
let frames = 0;

const measureFPS = () => {
  frames++;
  const currentTime = performance.now();

  if (currentTime - lastTime >= 1000) {
    console.log(`FPS: ${frames}`);
    frames = 0;
    lastTime = currentTime;
  }

  requestAnimationFrame(measureFPS);
};

measureFPS();
```

---

## 🐛 Troubleshooting

### Problema 1: Animações não funcionam

**Solução:**
```javascript
// Verificar se GSAP está importado corretamente
import gsap from 'gsap';
console.log(gsap); // Deve estar definido

// Registrar plugins necessários
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
```

### Problema 2: Canvas Three.js em branco

**Solução:**
```javascript
// Verificar container dimensions
console.log(containerRef.current.clientWidth);
console.log(containerRef.current.clientHeight);

// Container precisa ter tamanho definido
<div ref={containerRef} style={{ width: '100%', height: '100vh' }} />
```

### Problema 3: Baixa performance / Lag

**Solução:**
```javascript
// 1. Reduzir número de elementos animados
// 2. Usar RequestAnimationFrame ao invés de setInterval
// 3. Ativar aceleração de GPU:
element.style.willChange = 'transform';
element.style.transform = 'translateZ(0)';

// 4. Usar textures otimizadas no Three.js
// 5. Limitar quantidade de luzes
```

### Problema 4: Memory Leaks após navegação

**Solução:**
```javascript
useEffect(() => {
  // ... inicialização

  return () => {
    // Cleanup obrigatório
    clearAll();
    observerRef.current?.disconnect();
    rendererRef.current?.dispose();
  };
}, []);
```

---

## 🚀 Próximas Etapas

1. **Instalar dependências**: `npm install three gsap`
2. **Migrar para TypeScript**: Usar types em `/motions/types`
3. **Criar custom shaders**: Em `/motions/shaders`
4. **Adicionar 21dev**: Integrar quando necessário
5. **Documentar casos de uso**: Criar exemplos específicos do projeto

---

## 📚 Referências

- [GSAP Docs](https://greensock.com/docs/)
- [Three.js Docs](https://threejs.org/docs/)
- [ScrollTrigger Guide](https://greensock.com/scrolltrigger/)
- [WebGL Performance](https://www.khronos.org/webgl/wiki/WebGL_and_OpenGL_Differences)

---

## 📝 Versionamento

- **v1.0.0** - Setup inicial com GSAP, Three.js e utilities
- Próximas versões: Three.js integration, shaders customizados, 21dev

---

**Última atualização:** Abril de 2026  
**Autor:** Equipe Ever-Rise  
**Status:** Em Desenvolvimento 🚀

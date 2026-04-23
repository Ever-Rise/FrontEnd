# 🎬 Motion Module

Módulo de animações imersivas para o projeto Ever-Rise Frontend.

## 📦 O que está incluído

```
src/motions/
├── canvas/           # Componentes Three.js (pronto para expansão)
├── hooks/            # Hooks React para gerenciar animações
│   ├── useGsap.js           # Gerenciador de animações GSAP
│   ├── useThreeCanvas.js    # Inicialização de canvas Three.js
│   └── useScrollAnimation.js # Animações de scroll
├── utils/            # Utilitários de animação
│   ├── math.js       # Cálculos vetoriais (lerp, distance, etc)
│   └── timeline.js   # Timeline helpers (stagger, cascata, onda)
├── configs/          # Configurações centralizadas
│   └── index.ts      # Presets de easing, durações, cores
├── types/            # Type definitions (TypeScript)
├── services/         # Serviços de integração
├── shaders/          # Arquivos GLSL customizados
└── contexts/         # React Contexts
```

## 🚀 Início Rápido

### 1. Instalar Dependências

```bash
npm install three gsap
```

### 2. Usar nos Componentes

```jsx
import { useGsap, useThreeCanvas } from '@/motions/hooks';
import { DURATION, EASING_PRESETS } from '@/motions/configs';

export const MyComponent = () => {
  const { registerAnimation } = useGsap();

  // Usar animações GSAP
  useEffect(() => {
    const animation = gsap.to(element, {
      duration: DURATION.normal,
      ease: EASING_PRESETS.easeOutCubic,
    });

    registerAnimation(animation);
  }, []);

  return <div>Seu componente aqui</div>;
};
```

## 🎯 Funcionalidades

- ✅ **GSAP Animations**: Timeline, scroll triggers, easing presets
- ✅ **Three.js Canvas**: Base para cenas 3D
- ✅ **Math Utilities**: Lerp, distance, normalize, cross product
- ✅ **Cleanup Automático**: Previne memory leaks
- ✅ **Configurações Centralizadas**: Presets reutilizáveis
- ✅ **TypeScript Ready**: Type definitions prontas

## 📖 Documentação

Veja a documentação completa em `/docs/07-modulo-motions.md`

Exemplos práticos em `/src/motions/EXEMPLOS.md`

## 🔧 Próximas Etapas

1. Instalar `three` e `gsap`
2. Expandir componentes em `canvas/`
3. Criar custom shaders em `shaders/`
4. Integrar 21dev quando necessário
5. Migrar completamente para TypeScript

---

**Status**: Em desenvolvimento 🚀  
**Última atualização**: Abril de 2026

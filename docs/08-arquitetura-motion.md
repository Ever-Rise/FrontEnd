# Arquitetura do Módulo Motion

## 🏗️ Diagrama Geral

```
┌─────────────────────────────────────────────────────────────────┐
│                     Pages / Components                          │
│           (DashboardPage, LandingPage, etc)                     │
└─────────────────┬───────────────────────────────────────────────┘
                  │
                  │ Importam
                  ▼
┌─────────────────────────────────────────────────────────────────┐
│                    Motion Hooks Layer                           │
├─────────────────────────────────────────────────────────────────┤
│ • useGsap()           → Gerencia animações GSAP                │
│ • useThreeCanvas()    → Setup de Three.js                      │
│ • useScrollAnimation() → Scroll triggers                       │
└──────┬──────────────────┬──────────────────────┬────────────────┘
       │                  │                      │
       ▼                  ▼                      ▼
┌──────────────┐ ┌──────────────────┐ ┌─────────────────────────┐
│  GSAP Core   │ │ Three.js Canvas  │ │ Intersection Observer   │
│              │ │                  │ │ (Scroll Detection)      │
│ • Timeline   │ │ • Scene          │ │                         │
│ • Tween      │ │ • Camera         │ │ Nativo do navegador     │
│ • Plugin     │ │ • Renderer       │ │                         │
└──────┬───────┘ └────────┬─────────┘ └─────────┬───────────────┘
       │                  │                     │
       └──────────┬───────┴─────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────────────────────────┐
│                    Utilities Layer                              │
├─────────────────────────────────────────────────────────────────┤
│ math/           → Cálculos vetoriais, lerp, distance          │
│ timeline/       → Stagger, cascata, onda                       │
│ configs/        → Presets, constantes, easing                 │
└─────────────────────────────────────────────────────────────────┘
```

## 📊 Fluxo de Dados

```
Component Mount
    ↓
useGsap() / useThreeCanvas() / useScrollAnimation()
    ↓
Inicializa contexto (refs, observers, etc)
    ↓
useEffect dispara animações
    ↓
GSAP/Three.js renderizam
    ↓
Component Unmount
    ↓
Cleanup automático (kill animations, dispose renderer, etc)
```

## 🔌 Integração com o Projeto

```
src/
├── components/       (UI Components)
│   ├── Header/
│   ├── Button/
│   └── ... (existentes)
│
├── pages/           (Páginas com Motion)
│   ├── HeroPage/    ← Usa useGsap() + useScrollAnimation()
│   ├── AboutPage/   ← Usa useThreeCanvas()
│   └── ...
│
├── motions/         ← NOVO: Módulo de animações
│   ├── hooks/       (useGsap, useThreeCanvas, etc)
│   ├── utils/       (math, timeline)
│   ├── configs/     (presets, constantes)
│   ├── canvas/      (Three.js components)
│   └── types/       (TypeScript definitions)
│
└── store/          (Redux - existente)
    └── ... (sagas, slices, etc)
```

## 🎯 Casos de Uso Comuns

### 1. Animação de Entrada (Fade + Slide)
```
Component → useGsap() → GSAP Timeline → Animate opacity + transform
```

### 2. Scroll Animation
```
Component → useScrollAnimation() → IntersectionObserver → Trigger GSAP
```

### 3. Cena 3D Interativa
```
Component → useThreeCanvas() → RequestAnimationFrame → Three.js Render
```

### 4. Stagger Lista
```
Component (com map) → Selector querySelectorAll → GSAP Stagger
```

## 📈 Performance Architecture

```
Performance Monitoring
    ├─ FPS Counter
    ├─ Memory Profiler
    └─ Animation Queue
         ↓
   Atinge threshold?
         ├─ Sim → Reduz qualidade ou desativa
         └─ Não → Continua normal
```

## 🛠️ Extensibilidade

### Adicionar novo Hook
```
src/motions/hooks/
└── useCustomAnimation.js
    └── export em ./index.js
```

### Adicionar novo Utility
```
src/motions/utils/
└── custom.js
    └── export em ./index.js
```

### Adicionar Canvas Component
```
src/motions/canvas/
└── CustomScene.jsx
    └── export em ./index.js
```

### Adicionar Custom Shader
```
src/motions/shaders/
├── vertex.glsl
└── fragment.glsl
```

## 🔐 Segurança & Boas Práticas

- ✅ Cleanup automático de animations
- ✅ Memory leak prevention
- ✅ Respeita `prefers-reduced-motion`
- ✅ Configurações centralizadas (sem magic strings)
- ✅ TypeScript ready
- ✅ Refs bem gerenciados

---

**Documentação técnica**: `/docs/07-modulo-motions.md`  
**Exemplos práticos**: `/src/motions/EXEMPLOS.md`

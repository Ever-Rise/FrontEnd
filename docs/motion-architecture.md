# Motion Architecture

Esta seção descreve a "Santíssima Trindade" de animações usada neste projeto: **Framer Motion**, **GSAP** e **Three.js (R3F)**.

## Princípios
- Separação de responsabilidades: UI/Layout (Framer), Orquestração/Timelines (GSAP), Camada 3D (R3F).
- Animações interrompíveis e com cleanup rigoroso para evitar memory leaks.
- Adaptabilidade: animações reduzidas automaticamente em dispositivos móveis ou quando o usuário prefere movimento reduzido.

## Como as bibliotecas conversam
- A UI usa `Framer Motion` para transições declarativas e `layout` animations. Componentes React permanecem responsáveis por seus estados visuais.
- `GSAP` atua como maestro: timelines criadas em `useGSAP` podem animar propriedades de elementos DOM (refs) e também propriedades de objetos 3D (câmera, materiais) expostas pela ponte `useR3FBridge`.
- `Three.js` (via `@react-three/fiber`) executa a renderização 3D dentro de um Canvas isolado (`ImmersiveCanvas`). O Canvas registra seus elementos (câmera, objetos) no `R3FBridge`, permitindo que GSAP crie tweens sobre eles.

## Principais hooks e utilitários
- `useGSAP` (`src/animations/useGSAP.js`): cria e controla timelines GSAP, fornece `createTimeline`, `play`, `pause`, `reverse`, `kill`. Faz cleanup automático no unmount.
- `gsapUtils` (`src/animations/gsapUtils.js`): helpers `safeKill` e `tweenRef` para operações seguras com GSAP.
- `motionConfig` (`src/animations/motionConfig.js`): detecção de `isMobile`, `prefersReducedMotion` e intensidade de animação.
- `R3FBridgeProvider` / `useR3FBridge` (`src/three/useR3FBridge.jsx`): registra câmera/scene/objetos e cria `tweenTo` usando GSAP para controlar elementos 3D.
- `ImmersiveCanvas` (`src/three/ImmersiveCanvas.jsx`): Canvas isolado com exemplo de objeto e registro no bridge.
- `MotionLayout` (`src/components/MotionLayout.jsx`): wrapper para páginas com `AnimatePresence` e `layout`.

## Guia rápido: adicionar uma nova etapa ao fluxo de conversão

1. Criar o componente de UI e envolver com `MotionLayout` para entrada/saída.
2. Se a etapa requer sequência/timing complexo, use `useGSAP` para criar uma timeline:

```js
const { createTimeline, play, kill } = useGSAP();
useEffect(() => {
  let mounted = true;
  (async () => {
    const tl = await createTimeline();
    tl.to(ref.current, { opacity: 1, x: 0, duration: 0.6 });
    // animar câmera 3D
    // bridge.tweenTo({ camera: { position: { x: 1, y: 1, z: 5 } } });
    if (mounted) play();
  })();
  return () => { mounted = false; kill(); };
}, []);
```

3. Para efeitos 3D, injete `useR3FBridge()` e chame `tweenTo` com propriedades da câmera ou objetos registrados.

4. Sempre chame `kill()` em `useEffect` cleanup para garantir que timelines não vazem.

5. Verifique `motionConfig` para adaptar intensidade em mobile ou quando `prefers-reduced-motion` estiver ativo.

## Checklist de segurança/performance
- Lazy-load de bibliotecas pesadas (GSAP, R3F) quando possível.
- Matérias e geometrias Three.js devem ser `dispose()` ao desmontar.
- Timelines GSAP devem ser `kill()` no cleanup.

## Exemplos e próximos passos
- Há um `ImmersiveCanvas` de referência em `src/three/ImmersiveCanvas.jsx` — use-o como base e registre objetos com `useR3FBridge()`.
- Posso ajudar a integrar um fluxo de checkout existente com essas peças (ex: animar transições entre etapas e mover câmera 3D para destacar o produto).

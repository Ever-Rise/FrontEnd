/**
 * Exemplo: Como integrar animações Motion em uma página
 * 
 * Este arquivo demonstra como usar o módulo Motion
 * em seus componentes de página
 */

// ============================================
// EXEMPLO 1: Animação simples com GSAP
// ============================================

/*
import { useEffect, useRef } from 'react';
import { useGsap } from '@/motions/hooks';
import { DURATION, EASING_PRESETS } from '@/motions/configs';
import gsap from 'gsap';

export const AnimatedHero = () => {
  const titleRef = useRef(null);
  const { registerAnimation } = useGsap({ debug: true });

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(titleRef.current, {
      duration: DURATION.normal,
      ease: EASING_PRESETS.easeOutCubic,
      opacity: 1,
      y: 0,
    });

    registerAnimation(tl);
  }, [registerAnimation]);

  return (
    <h1 ref={titleRef} style={{ opacity: 0, y: 50 }}>
      Bem-vindo ao projeto imersivo
    </h1>
  );
};
*/

// ============================================
// EXEMPLO 2: Scroll Animation com ScrollTrigger
// ============================================

/*
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useScrollAnimation } from '@/motions/hooks';
import { SCROLL_DEFAULTS, DURATION, EASING_PRESETS } from '@/motions/configs';

gsap.registerPlugin(ScrollTrigger);

export const ScrollSection = () => {
  const sectionRef = useRef(null);
  const { triggerRef } = useScrollAnimation({ trigger: sectionRef });

  useEffect(() => {
    gsap.to(sectionRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: SCROLL_DEFAULTS.start,
        end: SCROLL_DEFAULTS.end,
        scrub: SCROLL_DEFAULTS.scrub,
        markers: SCROLL_DEFAULTS.markers,
      },
      duration: DURATION.normal,
      ease: EASING_PRESETS.easeOutCubic,
      opacity: 1,
      x: 0,
    });
  }, []);

  return (
    <section ref={sectionRef} style={{ opacity: 0, x: -100 }}>
      Conteúdo que anima ao fazer scroll
    </section>
  );
};
*/

// ============================================
// EXEMPLO 3: Timeline com Stagger
// ============================================

/*
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { DURATION, EASING_PRESETS, STAGGER } from '@/motions/configs';

export const AnimatedList = ({ items }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const elements = containerRef.current?.querySelectorAll('li');

    gsap.to(elements, {
      duration: DURATION.normal,
      ease: EASING_PRESETS.easeOutCubic,
      opacity: 1,
      y: 0,
      stagger: STAGGER.default,
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
*/

// ============================================
// EXEMPLO 4: Usar utilitários de Math
// ============================================

/*
import { math } from '@/motions/utils';

export const VectorCalculations = () => {
  // Criar vetores
  const pointA = math.vec3(0, 0, 0);
  const pointB = math.vec3(10, 10, 10);

  // Calcular meio ponto (lerp)
  const midPoint = math.lerp(pointA, pointB, 0.5);

  // Calcular distância
  const dist = math.distance(pointA, pointB);

  // Normalizar direção
  const direction = math.normalize(math.subtract(pointB, pointA));

  // Mapear valor (0-100 para 0-1)
  const normalized = math.map(50, 0, 100, 0, 1);

  console.log({ midPoint, dist, direction, normalized });

  return <div>Veja o console para cálculos vetoriais</div>;
};
*/

// ============================================
// EXEMPLO 5: Three.js Canvas Base
// ============================================

/*
import { useEffect, useRef } from 'react';
import { useThreeCanvas } from '@/motions/hooks';

export const Scene3D = () => {
  const { containerRef, initializeThree, startRenderLoop } = useThreeCanvas({
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor: '#000000',
  });

  useEffect(() => {
    initializeThree();

    startRenderLoop(() => {
      // Seu código de renderização Three.js aqui
      // renderer.render(scene, camera);
    });
  }, [initializeThree, startRenderLoop]);

  return (
    <div ref={containerRef} style={{ width: '100%', height: '100vh' }} />
  );
};
*/

// ============================================
// Instruções de Uso
// ============================================

/*
1. Descomente o exemplo que deseja testar
2. Instale dependências: npm install three gsap
3. Importe o componente em sua página
4. Verifique o resultado no navegador

Exemplos disponíveis:
- AnimatedHero: Animação de entrada com GSAP
- ScrollSection: Animação sincronizada ao scroll
- AnimatedList: Stagger (efeito de onda) em lista
- VectorCalculations: Demonstrar cálculos matemáticos
- Scene3D: Canvas Three.js base (ainda não implementado)

Documentação completa em: /docs/07-modulo-motions.md
*/

export const MotionExamples = () => {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Motion Module - Exemplos Disponíveis</h1>
      <p>Descomente os exemplos no arquivo para testar!</p>
      <p>Veja /docs/07-modulo-motions.md para documentação completa</p>
    </div>
  );
};

export default MotionExamples;

import React, { useState } from "react";
import styles from "./styles.module.css";
import { Footer, Header } from "../../components";


// Imagens Hero
import heroVideo from '../../assets/images/SobreGuincho/video_Hero.mp4'; // Ajuste o caminho se necessário

// Seção Guincho Interativo (imagem principal com hotspots)
import secaoImg from "../../assets/images/SobreGuincho/secao-guincho.png";

// Hardware
import raspberryImg from "../../assets/images/SobreGuincho/rasperry.png";
import esp32Img from "../../assets/images/SobreGuincho/esp32.png";
import fsr402Img from "../../assets/images/SobreGuincho/fsr402.png";
import cameraUsbImg from "../../assets/images/SobreGuincho/cameraUSB.png";
import motorImg from "../../assets/images/SobreGuincho/motor.png";
import fonteImg from "../../assets/images/SobreGuincho/fonte.png";
import logoHardware from "../../assets/images/SobreGuincho/logo.png";

// Especificações
import estruturaImg from "../../assets/images/SobreGuincho/estrutura.svg";
import revestimentoImg from "../../assets/images/SobreGuincho/revestimento.svg";
import segurancaImg from "../../assets/images/SobreGuincho/sistemaDeSeguranca.svg";

// Módulos
import algoritmoIcon from "../../assets/icons/SobreGuincho/icon_algoritmo.svg";
import modulosIcon from "../../assets/icons/SobreGuincho/icon_modulos.svg";
import reconhecimentoIcon from "../../assets/icons/SobreGuincho/icon_reconhecimento.svg";
import visaoIcon from "../../assets/icons/SobreGuincho/icon_visao.svg";
import interfaceIcon from "../../assets/icons/SobreGuincho/icon_interface.svg";

// Contato
import telefoneIcon from "../../assets/icons/SobreGuincho/icon_telefone.svg";
import emailIcon from "../../assets/icons/SobreGuincho/icon_email.svg";
import instagramIcon from "../../assets/icons/SobreGuincho/icon_instagram.svg";
import contatoImg from "../../assets/images/SobreGuincho/contato.jpg";

// Cards de features
import acessivelIcon from "../../assets/icons/SobreGuincho/icon_acessivel.svg";
import autonomoIcon from "../../assets/icons/SobreGuincho/icon_autonomo.svg";
import seguroIcon from "../../assets/icons/SobreGuincho/icon_seguro.svg";

// Decorações
import decoracao1 from "../../assets/images/SobreGuincho/decoracaoFundo/decoraca1.svg"
import decoracao2 from "../../assets/images/SobreGuincho/decoracaoFundo/circuloroxo.svg"
import decoracao3 from "../../assets/images/SobreGuincho/decoracaoFundo/circuloAmarelo.svg"

const features = [
  {
    icon: acessivelIcon,
    title: "ACESSÍVEL",
    text: "Construído com materiais acessíveis: PETG, EVA Foam, componentes de mercado. Pensado para famílias reais, não para hospitais de alto padrão.",
  },
  {
    icon: autonomoIcon,
    title: "AUTÔNOMO",
    text: "Controlado remotamente via plataforma web. O paciente ou cuidador opera o guincho de qualquer lugar, sem depender de profissional presente.",
  },
  {
    icon: seguroIcon,
    title: "SEGURO",
    text: "Sensor FSR 402, trava mecânica e botão físico failsafe que funciona sem internet. Segurança que não depende de nenhuma conexão.",
  },
];

// Pontos de interação sobre a imagem do guincho.
// x/y são porcentagens (0-100) relativas à largura/altura da imagem.
// Ajuste esses valores quando a imagem final estiver pronta.
const hotspotsGuincho = [
  {
    id: 1,
    x: 22,
    y: 28,
    title: "Motores e sistema de tração",
    description:
      "Responsáveis por movimentos suaves, estáveis e seguros durante toda a transferência.",
  },
  {
    id: 2,
    x: 62,
    y: 18,
    title: "Sensor de pressão FSR 402",
    description:
      "Detecta a pressão aplicada em tempo real, garantindo segurança total na operação.",
  },
  {
    id: 3,
    x: 78,
    y: 50,
    title: "Câmera USB",
    description:
      "Permite o monitoramento em tempo real do paciente durante todo o processo.",
  },
  {
    id: 4,
    x: 45,
    y: 78,
    title: "Estrutura em MDF e Ferro",
    description:
      "Base resistente que garante estabilidade, durabilidade e suporte de carga.",
  },
  {
    id: 5,
    x: 14,
    y: 62,
    title: "Botão Failsafe",
    description:
      "Botão físico de emergência que funciona mesmo sem conexão à internet.",
  },
];

const hardwareCardsTop = [
  {
    title: "Raspberry Pi 4",
    text: "Processamento potente e eficiente para máxima performance",
    image: raspberryImg,
  },
  {
    title: "ESP32",
    text: "Microcontrolador de alta performance para comunicação.",
    image: esp32Img,
  },
];

const hardwareCardsMiddle = [
  {
    title: "Sensor de pressão FSR 402",
    text: "Detecção precisa de pressão para segurança total nas transferências.",
    image: fsr402Img,
  },
  {
    title: "Câmera USB",
    text: "Monitoramento em tempo real para mais controle e tranquilidade",
    image: cameraUsbImg,
  },
];

const hardwareCardsBottom = [
  {
    title: "Motores e sistema de tração",
    text: "Movimentos suaves, estáveis e seguros em qualquer situação.",
    image: motorImg,
  },
  {
    title: "Fonte de alimentação",
    text: "Energia estável e confiável para operação contínua e segura.",
    image: fonteImg,
  },
];

const especificacoesCards = [
  {
    title: "Estrutura e Base",
    image: estruturaImg,
    items: ["MDF (base e estrutura)", "Ferro (suporte e reforço)"],
  },
  {
    title: "Revestimento e Design",
    image: revestimentoImg,
    items: ["PETG (carcaça impressa 3D)", "EVA Foam (revestimento de proteção)"],
  },
  {
    title: "Sistema de Segurança",
    image: segurancaImg,
    items: ["Cinto de Segurança de Alta Tenacidade", "Estabilidade Operacional"],
  },
];

const modulos = [
  {
    titulo: "Algoritmo PID",
    texto: "Precisão e estabilidade para movimentos suaves e controle em tempo real.",
    icon: algoritmoIcon,
  },
  {
    titulo: "Módulos de IA Embarcados",
    texto: "Inteligência embarcada para decisões autônomas com alta performance.",
    icon: modulosIcon,
  },
  {
    titulo: "Reconhecimento de voz",
    texto: "Interação natural e intuitiva através de comandos de voz inteligentes.",
    icon: reconhecimentoIcon,
  },
  {
    titulo: "Visão computacional",
    texto: "Câmeras e IA trabalhando juntas para identificar obstáculos e ambientes em tempo real.",
    icon: visaoIcon,
  },
  {
    titulo: "Interface web responsiva",
    texto: "Acesse, monitore e controle de qualquer lugar com uma interface moderna.",
    icon: interfaceIcon,
  },
];

export default function SobreGuincho() {
  // id do hotspot ativo (hover no desktop / clique no mobile)
  const [activeHotspot, setActiveHotspot] = useState(null);

  return (
    <>
      <Header />

      <div className={styles.pageWrapper}>
        <div className={styles.decoracoes}>
          <img src={decoracao1} className={styles.decoracao1} alt="" />
          <img src={decoracao1} className={styles.decoracao2} alt="" />
          <img src={decoracao2} className={styles.decoracao3} alt="" />
          <img src={decoracao3} className={styles.decoracao4} alt="" />
        </div>

        {/* ── HERO ── */}
        <div className={styles.heroContainer}>
          {/* 1ª Tela: Vídeo e Alerta Inicial */}
          <section className={styles.videoSection}>
            <video
              className={styles.videoElement}
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={heroVideo} type="video/mp4" />
            </video>

            <div className={styles.scrollAlert}>
              <p>Role para descobrir</p>
              <div className={styles.mouseIcon}>
                <div className={styles.wheel}></div>
              </div>
            </div>
          </section>

          {/* 2ª Tela: Texto Centralizado e Transição Suave */}
          <section className={styles.textSection}>
            <div className={styles.heroText}>
              <h1>
                <span className={styles.linha1}>O futuro da mobilidade</span>
                <span className={styles.linha2}>assistida</span>
              </h1>
              <p>
                Tecnologia, engenharia e inovação integradas em um guincho
                inteligente criado para transformar mobilidade e cuidado
              </p>
              <div className={styles.heroButtons}>
                <a href="/parceiros" className={`${styles.btn} ${styles.primary}`}>
                  Quero ser parceiro
                </a>
                <a href="/parceiros" className={`${styles.btn} ${styles.secondary}`}>
                  Fale com a gente
                </a>
              </div>
            </div>

            {/* Indução para continuar scrollando */}
            <div className={styles.continueScrolling}>
              <span>Continue explorando</span>
              <div className={styles.arrowDown}></div>
            </div>
          </section>
        </div>

        {/* ── FEATURES / PILARES ── */}
        <section className={styles.features}>
          {/* Título 1 */}
          <div className={styles.sectionHeader}>
            <div className={styles.headerDeco}></div>
            <div className={styles.headerInner}>
              <h2>Porque conhecer a Ever Rise?</h2>
              <p>Tecnologia que transforma mobilidade em autonomia.</p>
            </div>
          </div>

          {/* Cards */}
          <div className={styles.cards}>
            {features.map((feature) => (
              <div className={styles.card} key={feature.title}>
                <div className={styles.icon}>
                  <img src={feature.icon} alt="" aria-hidden="true" />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </div>
            ))}
          </div>

          {/* Título 2 */}
          <div className={styles.sectionHeader}>
            <div className={styles.headerDeco}></div>
            <div className={styles.headerInner}>
              <h2>Cada detalhe pensado com precisão</h2>
              <p>
                Explore os componentes internos e descubra como engenharia,
                hardware e estrutura trabalham juntos
              </p>
            </div>
          </div>
        </section>

        {/* ── GUINCHO INTERATIVO ── */}
        <section className={styles.guinchoInterativo}>
          <div className={styles.sectionHeader}>
            <div className={styles.headerDeco}></div>
            <div className={styles.headerInner}>
              <h2>Conheça cada parte do guincho</h2>
              <p>Passe o mouse ou toque nos pontos para descobrir os detalhes</p>
            </div>
          </div>

          <div className={styles.guinchoImageWrapper}>
            <img
              src={secaoImg}
              alt="Guincho inteligente - visão detalhada"
              className={styles.guinchoImage}
              draggable={false}
            />

            {hotspotsGuincho.map((hotspot) => {
              // Decide de qual lado a tooltip deve abrir para nunca
              // vazar para fora da imagem.
              const vertical = hotspot.y > 55 ? "top" : "bottom";
              const horizontal =
                hotspot.x > 60 ? "left" : hotspot.x < 40 ? "right" : "center";
              const isActive = activeHotspot === hotspot.id;

              return (
                <div
                  key={hotspot.id}
                  className={styles.hotspotWrapper}
                  style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
                  onMouseEnter={() => setActiveHotspot(hotspot.id)}
                  onMouseLeave={() => setActiveHotspot(null)}
                >
                  <button
                    type="button"
                    className={`${styles.hotspotPoint} ${
                      isActive ? styles.hotspotPointActive : ""
                    }`}
                    onClick={() =>
                      setActiveHotspot(isActive ? null : hotspot.id)
                    }
                    aria-label={`Ver detalhes: ${hotspot.title}`}
                    aria-expanded={isActive}
                  >
                    <span className={styles.hotspotPulse}></span>
                    <span className={styles.hotspotPlus}>+</span>
                  </button>

                  {isActive && (
                    <div
                      className={`${styles.hotspotTooltip} ${
                        styles[`pos-${vertical}-${horizontal}`]
                      }`}
                      role="tooltip"
                    >
                      <h4>{hotspot.title}</h4>
                      <p>{hotspot.description}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Backdrop: some no desktop, escurece e fecha no toque no mobile */}
          {activeHotspot !== null && (
            <div
              className={styles.hotspotBackdrop}
              onClick={() => setActiveHotspot(null)}
              aria-hidden="true"
            ></div>
          )}
        </section>

        {/* ── HARDWARE COMPONENTES ── */}
        <section className={styles.hardwareSection}>
          <div className={styles.hardwareHeader}>
            <div className={styles.sectionHeader}>
              <div className={styles.headerDeco}></div>
              <div className={styles.headerInner}>
                <h2>Tecnologia embarcada de alta performance</h2>
              </div>
            </div>
          </div>

          <div className={styles.hardwareGrid}>
            <svg
              className={styles.linhasConectoras}
              viewBox="0 0 1200 800"
              preserveAspectRatio="none"
            >
              <path d="M 600,400 C 400,400 350,150 200,150" className={styles.linhaAnimada} stroke="#FD742C" />
              <path d="M 600,400 C 400,400 400,400 200,400" className={styles.linhaAnimada} stroke="#FD742C" />
              <path d="M 600,400 C 400,400 350,650 200,650" className={styles.linhaAnimada} stroke="#FD742C" />

              <path d="M 600,400 C 800,400 850,150 1000,150" className={styles.linhaRoxaAnimada} stroke="#4D00B5" />
              <path d="M 600,400 C 800,400 800,400 1000,400" className={styles.linhaRoxaAnimada} stroke="#4D00B5" />
              <path d="M 600,400 C 800,400 850,650 1000,650" className={styles.linhaRoxaAnimada} stroke="#4D00B5" />
            </svg>

            {/* Linha 1 */}
            <div className={`${styles.cardWrapper} ${styles.posTopLeft}`}>
              <div className={styles.cardHardware}>
                <div className={styles.contentHardware}>
                  <h1>{hardwareCardsTop[0].title}</h1>
                  <p>{hardwareCardsTop[0].text}</p>
                </div>
                <img className={styles.espImage} src={hardwareCardsTop[0].image} alt={hardwareCardsTop[0].title} />
              </div>
            </div>

            <div className={`${styles.cardWrapper} ${styles.posTopRight}`}>
              <div className={styles.cardHardware}>
                <div className={styles.contentHardware}>
                  <h1>{hardwareCardsTop[1].title}</h1>
                  <p>{hardwareCardsTop[1].text}</p>
                </div>
                <img className={styles.espImage} src={hardwareCardsTop[1].image} alt={hardwareCardsTop[1].title} />
              </div>
            </div>

            {/* Linha 2 */}
            <div className={`${styles.cardWrapper} ${styles.posMiddleLeft}`}>
              <div className={styles.cardHardware}>
                <div className={styles.contentHardware}>
                  <h1>{hardwareCardsMiddle[0].title}</h1>
                  <p>{hardwareCardsMiddle[0].text}</p>
                </div>
                <img className={styles.espImage} src={hardwareCardsMiddle[0].image} alt={hardwareCardsMiddle[0].title} />
              </div>
            </div>

            {/* Logo Central */}
            <div className={styles.logoWrapper}>
              <img className={styles.logoHardware} src={logoHardware} alt="EverRise logo" />
            </div>

            <div className={`${styles.cardWrapper} ${styles.posMiddleRight}`}>
              <div className={styles.cardHardware}>
                <div className={styles.contentHardware}>
                  <h1>{hardwareCardsMiddle[1].title}</h1>
                  <p>{hardwareCardsMiddle[1].text}</p>
                </div>
                <img className={styles.espImage} src={hardwareCardsMiddle[1].image} alt={hardwareCardsMiddle[1].title} />
              </div>
            </div>

            {/* Linha 3 */}
            <div className={`${styles.cardWrapper} ${styles.posBottomLeft}`}>
              <div className={styles.cardHardware}>
                <div className={styles.contentHardware}>
                  <h1>{hardwareCardsBottom[0].title}</h1>
                  <p>{hardwareCardsBottom[0].text}</p>
                </div>
                <img className={styles.espImage} src={hardwareCardsBottom[0].image} alt={hardwareCardsBottom[0].title} />
              </div>
            </div>

            <div className={`${styles.cardWrapper} ${styles.posBottomRight}`}>
              <div className={styles.cardHardware}>
                <div className={styles.contentHardware}>
                  <h1>{hardwareCardsBottom[1].title}</h1>
                  <p>{hardwareCardsBottom[1].text}</p>
                </div>
                <img className={styles.espImage} src={hardwareCardsBottom[1].image} alt={hardwareCardsBottom[1].title} />
              </div>
            </div>
          </div>
        </section>

        {/* ── ESPECIFICAÇÕES ── */}
        <section className={styles.especificacoes}>
          <div className={styles.containerEspecificacoes}>
            <div className={styles.sectionHeader}>
              <div className={styles.headerDeco}></div>
              <div className={styles.headerInner}>
                <h2>Especificações</h2>
                <p>Excelência em Engenharia para o Cuidado e Dignidade.</p>
              </div>
            </div>

            <div className={styles.especificacoesGrid}>
              {especificacoesCards.map((card) => (
                <article className={styles.especificacoesCard} key={card.title}>
                  <div className={styles.iconWrapper}>
                    <img src={card.image} alt={`Ícone de ${card.title}`} />
                  </div>
                  <h3>{card.title}</h3>
                  <ul>
                    {card.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── TECH / MÓDULOS ── */}
        <section className={styles.techSection}>
          <div className={styles.containerModulo}>
            <div className={styles.sectionHeader}>
              <div className={styles.headerDeco}></div>
              <div className={`${styles.headerInner} ${styles.headerInnerLight}`}>
                <h2>
                  Tecnologia que move o{" "}
                  <span className={styles.highlightWord}>futuro</span>
                </h2>
                <p>
                  Integração de hardware inteligente, inteligencia artificial e
                  software avançado pra entregar performance, segurança e
                  autonomia em cada movimento.
                </p>
              </div>
            </div>

            <div className={styles.modulosGrid}>
              {modulos.map((modulo) => (
                <div className={styles.cardModulo} key={modulo.titulo}>
                  <div className={styles.iconModulo}>
                    <img src={modulo.icon} alt="" aria-hidden="true" />
                  </div>
                  <h3 className={styles.tituloModulo}>{modulo.titulo}</h3>
                  <div className={styles.linhaModulo}></div>
                  <p className={styles.textoModulo}>{modulo.texto}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTATO + FOOTER (mesclados) ── */}
        <div className={styles.contatoFooterGroup}>
          <section className={styles.everriseContact}>
            <div className={styles.container}>
              <div className={styles.contentSide}>
                <h2 className={styles.title}>
                  Excelência que você sente,{" "}
                  <span className={styles.highlight}>confiança</span> que você vê
                </h2>
                <p className={styles.subtitle}>
                  EverRise movendo vidas com segurança, tecnologia e propósito
                </p>

                <div className={styles.ctaBox}>
                  <h3>Fale com a EverRise</h3>
                  <p>Estamos prontos para falar com você</p>
                  <ul className={styles.contactList}>
                    <li>
                      <div className={styles.contactIconWrapper}>
                        <img src={telefoneIcon} alt="" aria-hidden="true" />
                      </div>
                      <span className={styles.text}>(11) 00000-0000</span>
                    </li>
                    <li>
                      <div className={styles.contactIconWrapper}>
                        <img src={emailIcon} alt="" aria-hidden="true" />
                      </div>
                      <span className={styles.text}>
                        everrisorganizacional@gmail.com
                      </span>
                    </li>
                    <li>
                      <div className={styles.contactIconWrapper}>
                        <img src={instagramIcon} alt="" aria-hidden="true" />
                      </div>
                      <span className={styles.text}>@everrise.oficial</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className={styles.imageSide}>
                <img src={contatoImg} alt="Contato EverRise" />
              </div>
            </div>
          </section>

          {/* Wrapper que sobrepõe o Footer por cima do final da seção de
              contato, fazendo a foto e o conteúdo "entrarem" no footer. */}
          <div className={styles.footerWrapper}>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
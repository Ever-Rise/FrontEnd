import React from "react";
import styles from "./styles.module.css";
import { Footer, Header } from "../../components";

// Imagens Hero
import heroImagem from "../../assets/images/SobreGuincho/hero-imagem.png";

// Seção Guincho (imagem principal com labels)
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
  return (
    <>
      <Header />

      {/* ── HERO ── */}
      <section className={styles.hero}>
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

        <div className={styles.heroImage}>
          <img src={heroImagem} alt="Guincho inteligente" />
        </div>
      </section>

      {/* ── FEATURES / PILARES ── */}
      <section className={styles.features}>

        {/* Título 1 */}
        <div className={styles.sectionTitle}>
          <div className={styles.titleDecoration}></div>
          <div className={styles.titleContent}>
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
        <div className={styles.sectionTitle}>
          <div className={styles.titleSquare}></div>
          <div className={styles.titleWrapper}>
            <h2>Cada detalhe pensado com precisão</h2>
            <p>
              Explore os componentes internos e descubra como engenharia,
              hardware e estrutura trabalham juntos
            </p>
          </div>
        </div>
      </section>

      {/* ── IMAGEM GUINCHO ── */}
      <div className={styles.imagem}>
        <img src={secaoImg} alt="Guincho inteligente - detalhes" />
      </div>

      {/* ── HARDWARE COMPONENTES ── */}
      <section className={styles.hardwareSection}>

        <svg
          className={styles.linhasConectoras}
          viewBox="0 0 1200 800"
          preserveAspectRatio="none"
        >
          <path
            d="M 600,400 C 200,400 200,200 200,10"
            fill="none"
            stroke="#FD742C"
            strokeWidth="4"
          />
          <path
            d="M 600,400 C 450,400 450,400 250,400"
            fill="none"
            stroke="#FD742C"
            strokeWidth="4"
          />
          <path
            d="M 600,400 C 450,400 450,650 250,650"
            fill="none"
            stroke="#FD742C"
            strokeWidth="4"
          />
          <path
            d="M 600,400 C 750,400 750,150 950,150"
            fill="none"
            stroke="#4D00B5"
            strokeWidth="4"
          />
          <path
            d="M 600,400 C 750,400 750,400 950,400"
            fill="none"
            stroke="#4D00B5"
            strokeWidth="4"
          />
          <path
            d="M 600,400 C 750,400 750,650 950,650"
            fill="none"
            stroke="#4D00B5"
            strokeWidth="4"
          />
        </svg>

        <header className={styles.hardwareHeader}>
          <div className={styles.decorationHardware}></div>
          <h2>Tecnologia embarcada de alta performance</h2>
        </header>

        {/* Linha 1 */}
        <div className={styles.cardLinha1}>
          {hardwareCardsTop.map((card) => (
            <div className={styles.cardHardware} key={card.title}>
              <div className={styles.contentHardware}>
                <h1>{card.title}</h1>
                <p>{card.text}</p>
              </div>
              <img className={styles.espImage} src={card.image} alt={card.title} />
            </div>
          ))}
        </div>

        {/* Linha 2 */}
        <div className={styles.cardLinha2}>
          <div className={styles.cardHardware}>
            <div className={styles.contentHardware}>
              <h1>{hardwareCardsMiddle[0].title}</h1>
              <p>{hardwareCardsMiddle[0].text}</p>
            </div>
            <img
              className={styles.espImage}
              src={hardwareCardsMiddle[0].image}
              alt={hardwareCardsMiddle[0].title}
            />
          </div>

          <img className={styles.logoHardware} src={logoHardware} alt="EverRise logo" />

          <div className={styles.cardHardware}>
            <div className={styles.contentHardware}>
              <h1>{hardwareCardsMiddle[1].title}</h1>
              <p>{hardwareCardsMiddle[1].text}</p>
            </div>
            <img
              className={styles.espImage}
              src={hardwareCardsMiddle[1].image}
              alt={hardwareCardsMiddle[1].title}
            />
          </div>
        </div>

        {/* Linha 3 */}
        <div className={styles.cardLinha3}>
          {hardwareCardsBottom.map((card) => (
            <div className={styles.cardHardware} key={card.title}>
              <div className={styles.contentHardware}>
                <h1>{card.title}</h1>
                <p>{card.text}</p>
              </div>
              <img className={styles.espImage} src={card.image} alt={card.title} />
            </div>
          ))}
        </div>
      </section>

      {/* ── ESPECIFICAÇÕES ── */}
      <section className={styles.especificacoes}>
        <div className={styles.containerEspecificacoes}>
          <div className={styles.tituloDecoration}></div>

          <div className={styles.tituloEspecificacoesContent}>
            <h2>Especificações</h2>
            <p>Excelência em Engenharia para o Cuidado e Dignidade.</p>
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
          <div className={styles.tituloModuloDecoration}></div>

          <div className={styles.tituloModuloContent}>
            <h2>
              Tecnologia que move o <span>futuro</span>
            </h2>
            <p>
              Integração de hardware inteligente, inteligencia artificial e
              software avançado pra entregar performance, segurança e autonomia
              em cada movimento.
            </p>
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

      {/* ── CONTATO ── */}
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

      <Footer />
    </>
  );
}

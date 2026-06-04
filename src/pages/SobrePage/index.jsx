import React from "react";
import styles from "./styles.module.css";
import { Footer, Header } from "../../components";

// Imagens da Equipe
import fotoAnderson from "../../assets/images/SobreNos/foto_anderson.svg";
import fotoJoao from "../../assets/images/SobreNos/Foto_Joao.svg";
import fotoNalbert from "../../assets/images/SobreNos/foto_nalbert.svg";
import fotoMariaEduarda from "../../assets/images/SobreNos/foto_maria_eduarda.svg";
import fotoLeticia from "../../assets/images/SobreNos/foto_leticia.svg";
import fotoKaue from "../../assets/images/SobreNos/foto_kaue.svg";
import fotoJoaoVitor from "../../assets/images/SobreNos/foto_joao_vitor.svg";
import fotoRafaella from "../../assets/images/SobreNos/foto_rafaella.svg";

// Imagens Gerais
import fotoRafaelipe from "../../assets/images/SobreNos/fotorafaelipe.jpeg";
import missaoImg from "../../assets/images/SobreNos/missao.svg";
import visaoImg from "../../assets/images/SobreNos/visao.svg";
import valoresImg from "../../assets/images/SobreNos/valores.svg";

// Imagens do Carrossel
import foto1 from "../../assets/images/SobreNos/foto1.jpeg";
import foto2 from "../../assets/images/SobreNos/foto2.jpeg";
import foto3 from "../../assets/images/SobreNos/foto3.jpeg";
import foto4 from "../../assets/images/SobreNos/foto4.jpeg";
import foto6 from "../../assets/images/SobreNos/foto6.jpeg";
import foto7 from "../../assets/images/SobreNos/foto7.jpeg";

// Ícones ODS
import ods3 from "../../assets/images/SobreNos/ODS3.svg";
import ods9 from "../../assets/images/SobreNos/ODS9.svg";
import ods12 from "../../assets/images/SobreNos/ODS12.svg";
import ods17 from "../../assets/images/SobreNos/ODS17.svg";

// Ícones Redes Sociais
import instagramSvg from "../../assets/icons/SobreNos/instagram.svg";
import linkedinSvg from "../../assets/icons/SobreNos/linkedin.svg";
import githubSvg from "../../assets/icons/SobreNos/github.svg";

export default function SobreNos() {
  const equipe = [
    { nome: "Anderson Reis", cargo: "PO e Full Stack", foto: fotoAnderson, linkedin: "https://www.linkedin.com/in/joao2007pedro/", twitter: "#", instagram: "#" },
    { nome: "João Pedro",    cargo: "Full Stack",      foto: fotoJoao,     linkedin: "#", twitter: "#", instagram: "#" },
    { nome: "Nalbert Henri", cargo: "Full Stack",      foto: fotoNalbert,  linkedin: "https://linkedin.com/in/seu-usuario", twitter: "#", instagram: "#" },
    { nome: "Maria Eduarda", cargo: "Full Stack",      foto: fotoMariaEduarda, linkedin: "https://linkedin.com/in/seu-usuario", twitter: "#", instagram: "#" },
    { nome: "Leticia Andrade", cargo: "Full Stack",    foto: fotoLeticia,  linkedin: "https://linkedin.com/in/seu-usuario", twitter: "#", instagram: "#" },
    { nome: "Kaue Rodrigues",  cargo: "Full Stack",    foto: fotoKaue,     linkedin: "https://linkedin.com/in/seu-usuario", twitter: "#", instagram: "#" },
    { nome: "João Victor",     cargo: "Full Stack",    foto: fotoJoaoVitor,linkedin: "https://linkedin.com/in/seu-usuario", twitter: "#", instagram: "#" },
    { nome: "Rafaela Cintra",  cargo: "Full Stack",    foto: fotoRafaella, linkedin: "https://linkedin.com/in/seu-usuario", twitter: "#", instagram: "#" },
  ];

  const imagensCarrossel = [foto1, foto2, foto3, foto4, foto6, foto7];

  return (
    <>
      <Header />

      {/* Hero */}
      <div className={styles.hero}>
        <div className={styles.overlay}>
          <h1>Origem do Projeto</h1>
          <h3>Uma jornada nascida da necessidade real — </h3>
          <h3>transformada em propósito, inovação e impacto.</h3>
        </div>
      </div>

      {/* Seção 2 — Depoimento */}
      <div className={styles.secao2}>
        <div className={styles.conteudo}>
          <section className={styles.texto}>
            <h1 className={styles.titulo}>Tudo começou dentro <br /> de casa</h1>
            <h3 className={`${styles.depoimento} ${styles.dp2}`}>
              &ensp;"Acompanhei de perto os desafios do <br />
              &ensp;meu irmão, diagnosticado com <br />
              &ensp;Distrofia Muscular de Duchenne. Vi sua<br />
              &ensp;autonomia diminuir — e tarefas <br />
              &ensp;simples tornarem-se batalhas diárias."
            </h3>
            <h3 className={styles.depoimento}>
              "Aquilo que deveria ser rotina exigia <br />
              esforço desproporcional. Percebi que <br />
              o problema não era único. E que <br />
              ninguém estava resolvendo da forma <br />
              certa."
            </h3>
          </section>

          <section className={styles.imagem}>
            <img
              src={fotoRafaelipe}
              alt="Rafaela Cintra e Felipe"
              style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "6px" }}
            />
          </section>
        </div>
      </div>

      {/* Seção 3 — Carrossel */}
      <div className={styles.secao3}>
        <div className={styles.carousel}>
          <div className={styles.track}>
            {[...imagensCarrossel, ...imagensCarrossel].map((imgSrc, index) => (
              <div className={styles.card} key={index}>
                <img src={imgSrc} alt="carousel" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Seção Cards MVV */}
      <div className={styles.secaoCard}>
        <div className={styles.tituloMvv}>
          <h1 className={styles.m}>Missão</h1>
          <h1 className={styles.vi}>,&nbsp;Visão</h1>
          <h1 className={styles.va}>&nbsp;e Valores</h1>
        </div>

        <div className={styles.cardsContainer}>
          {/* Missão */}
          <div className={styles.cardWrapper}>
            <img src={missaoImg} className={styles.characterImg} alt="Personagem Missão" />
            <div className={styles.cardMvv}>
              <div className={styles.cardContent}>
                <h2>Missão</h2>
                <p>
                  Auxiliar pessoas com baixa mobilidade, trazendo conforto e
                  segurança através da inovação e tecnologia — com empatia no
                  centro de tudo.
                </p>
              </div>
            </div>
          </div>

          {/* Visão */}
          <div className={styles.cardWrapper}>
            <img src={visaoImg} className={styles.characterImg} alt="Personagem Visão" />
            <div className={styles.cardMvv}>
              <div className={styles.cardContent}>
                <h2>Visão</h2>
                <p>
                  Desenvolver dispositivos de mobilidade assistida com excelência
                  — tornando-nos referência nacional com foco em autonomia,
                  segurança e acessibilidade.
                </p>
              </div>
            </div>
          </div>

          {/* Valores */}
          <div className={styles.cardWrapper}>
            <img src={valoresImg} className={styles.characterImg} alt="Personagem Valores" />
            <div className={styles.cardMvv}>
              <div className={styles.cardContent}>
                <h2>Valores</h2>
                <div className={styles.tagsContainer}>
                  <span className={styles.tag}>Responsabilidade</span>
                  <span className={styles.tag}>Ética</span>
                  <span className={styles.tag}>Inovação</span>
                  <span className={styles.tag}>Inclusão</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Seção ODS */}
      <div className={styles.secaoOds}>
        <section className={styles.conteudoOds}>
          <div className={styles.tituloOds}>
            Ods que faz parte da EverRise
          </div>
          <div className={styles.cardsOds}>
            <img src={ods3}  alt="ODS 3"  />
            <img src={ods9}  alt="ODS 9"  />
            <img src={ods12} alt="ODS 12" />
            <img src={ods17} alt="ODS 17" />
          </div>
        </section>
      </div>

      {/* Seção Equipe */}
      <div className={styles.secaoEquipe}>
        <section className={styles.conteudoEquipe}>
          <div className={styles.tituloEquipe}>
            Quem faz parte da Ever Rise
          </div>

          <div className={styles.equipeContainer}>
            {equipe.map((membro, index) => (
              <div className={styles.cardEquipe} key={index}>
                <div className={styles.fotoContainer}>
                  <img src={membro.foto} alt={membro.nome} />
                </div>
                <div className={styles.badge}>{membro.cargo}</div>
                <h3 className={styles.nome}>{membro.nome}</h3>
                <p className={styles.descricao}>
                  Visionary entrepreneur with a passion for innovation and successful startup ventures.
                </p>
                <div className={styles.redesSociais}>
                  <a href={membro.linkedin} target="_blank" rel="noreferrer" className={styles.socialLink}>
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href={membro.twitter} target="_blank" rel="noreferrer" className={styles.socialLink}>
                    <i className="fab fa-x-twitter"></i>
                  </a>
                  <a href={membro.instagram} target="_blank" rel="noreferrer" className={styles.socialLink}>
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Seção Redes Sociais */}
      <div className={styles.secaoRedes}>
        <section className={styles.conteudoRedes}>
          <div className={styles.tituloRedes}>
            <h1>Acompanhe a <span>Ever Rise.</span></h1>
            <h3>
              Siga nossas redes e acompanhe nossa jornada, bastidores, <br />
              propósitos, conquistas e impacto real na vida das pessoas.
            </h3>
          </div>

          <div className={styles.sociaisContainer}>
            <a
              href="https://instagram.com/Everrise.Oficial"
              target="_blank"
              rel="noreferrer"
              className={`${styles.cardSocial} ${styles.instagram}`}
            >
              <div className={styles.iconWrapper}>
                <img src={instagramSvg} alt="Instagram" className={styles.socialIcon} />
              </div>
              <h3 className={styles.redesNome}>Instagram</h3>
              <p className={styles.usuario}>@Everrise.Oficial</p>
              <span className={styles.chamada}>ACOMPANHE OS BASTIDORES &rarr;</span>
            </a>

            <a
              href="https://linkedin.com/company/Everrise"
              target="_blank"
              rel="noreferrer"
              className={`${styles.cardSocial} ${styles.linkedin}`}
            >
              <div className={styles.iconWrapper}>
                <img src={linkedinSvg} alt="LinkedIn" className={styles.socialIcon} />
              </div>
              <h3 className={styles.redesNome}>LinkedIn</h3>
              <p className={styles.usuario}>@Everrise</p>
              <span className={styles.chamada}>CONHEÇA A NOSSA EMPRESA &rarr;</span>
            </a>

            <a
              href="https://github.com/Everrise"
              target="_blank"
              rel="noreferrer"
              className={`${styles.cardSocial} ${styles.github}`}
            >
              <div className={styles.iconWrapper}>
                <img src={githubSvg} alt="GitHub" className={styles.socialIcon} />
              </div>
              <h3 className={styles.redesNome}>GitHub</h3>
              <p className={styles.usuario}>@Everrise</p>
              <span className={styles.chamada}>VEJA NOSSO REPOSITÓRIO &rarr;</span>
            </a>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
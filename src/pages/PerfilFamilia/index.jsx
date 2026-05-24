import React from "react";
import styles from "./style.module.css";

import familyHero from "../../assets/images/PerfilFamilia/foto-familia.png";
import iconVerificado from "../../assets/icons/PerfilFamilia/icon-verificado.svg";
import iconSeta from "../../assets/icons/PerfilFamilia/icon-seta.svg";
import iconRelatorios from "../../assets/icons/PerfilFamilia/icon-relatorios.svg";
import iconProxSessoes from "../../assets/icons/PerfilFamilia/icon-prox-sessoes.svg";
import iconNovaSessao from "../../assets/icons/PerfilFamilia/icon-nova-sessao.svg";
import iconMonitor from "../../assets/icons/PerfilFamilia/icon-monitor.svg";
import iconFamilia from "../../assets/icons/PerfilFamilia/icon-familia.svg";
import iconDica from "../../assets/icons/PerfilFamilia/icon-dica.svg";
import iconConfiguracoes from "../../assets/icons/PerfilFamilia/icon-configuracoes.svg";
import iconChatbot from "../../assets/icons/PerfilFamilia/icon-chatbot.svg";
import iconBateria from "../../assets/icons/PerfilFamilia/icon-bateria.svg";
import iconBand from "../../assets/icons/PerfilFamilia/icon-band.svg";
import iconAdicionarMembro from "../../assets/icons/PerfilFamilia/icon-adicionar-membro.svg";

const familyMembers = [
  {
    name: "Antônio Almeida",
    role: "Paciente",
    tagClass: styles.patientTag,
    button: "Ver Plano de Cuidados",
    progress: "75%",
    progressClass: styles.progressStrong,
    avatar: "AA",
    avatarClass: styles.avatarWarm,
  },
  {
    name: "Beatriz Costa",
    role: "Responsável",
    tagClass: styles.responsibleTag,
    button: "Ver Histórico",
    avatar: "BC",
    avatarClass: styles.avatarSoft,
  },
  {
    name: "Dr. Ricardo Lopes",
    role: "Cuidador",
    tagClass: styles.caregiverTag,
    button: "Mensagem",
    avatar: "RL",
    avatarClass: styles.avatarMint,
  },
];

const quickActions = [
  {
    icon: iconNovaSessao,
    title: "Nova Sessão",
    text: "Agende uma nova consulta agora.",
  },
  {
    icon: iconRelatorios,
    title: "Relatórios Detalhados",
    text: "Visualize a evolução clínica completa.",
  },
  {
    icon: iconChatbot,
    title: "Falar com Chatbot",
    text: "Tire dúvidas rápidas com nossa IA.",
  },
  {
    icon: iconConfiguracoes,
    title: "Configurações",
    text: "Gerencie privacidade e notificações.",
  },
];

const sessions = [
  {
    day: "SET 12",
    title: "Fisioterapia Motora",
    time: "14:30 - Dr. Ricardo",
    status: "AGENDADO",
  },
  {
    day: "SET 14",
    title: "Consulta Online",
    time: "09:00 - Dra. Elena",
    status: "CONFIRMAR",
  },
];

const devices = [
  {
    icon: iconBand,
    name: "EverBand v2",
    status: "Sincronizado há 2 min",
    value: "82%",
  },
  {
    icon: iconMonitor,
    name: "Monitor de Cama",
    status: "Ativo e Conectado",
    value: "Online",
  },
];

export default function PerfilFamilia() {
  return (
    <div className={styles.page}>
      <header className={styles.navbar}>
        <div className={styles.navContent}>
          <div className={styles.navLeft}>
            <a href="/perfil-familia" className={styles.logo}>
              Ever Rise
            </a>
          </div>

          <div className={styles.navRight}>
            <button type="button" className={styles.iconButton} aria-label="Notificações">
              <span className={styles.notificationDot} />
            </button>

            <button type="button" className={styles.iconButton} aria-label="Configurações">
              <img src={iconConfiguracoes} alt="" aria-hidden="true" />
            </button>

            <div className={styles.profile}>
              <div className={styles.profileText}>
                <p>Juliana Almeida</p>
              </div>

              <div className={styles.profileAvatar}>JA</div>
            </div>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroMedia}>
            <img src={familyHero} alt="Família reunida no sofá" className={styles.heroImage} />
          </div>

          <div className={styles.heroCopy}>
            <h2 className={styles.heroTitle}>Olá, Juliana 👋</h2>
            <p className={styles.heroText}>
              Bem-vinda novamente ao painel de cuidados da sua família.
              Tudo está sob controle por aqui.
            </p>
          </div>
        </section>

        <section className={styles.summaryCard}>
          <div className={styles.familyHeader}>
            <div className={styles.familyInfo}>
              <div className={styles.familyIconWrap}>
                <img src={iconFamilia} alt="" aria-hidden="true" />
              </div>

              <div className={styles.familyMeta}>
                <div className={styles.familyTitleRow}>
                  <h3>Família Almeida Costa</h3>
                  <span className={styles.verifiedBadge}>
                    <img src={iconVerificado} alt="" aria-hidden="true" />
                    Verificado
                  </span>
                </div>

                <p> 4 membros ativos  •  Plano Premium Health</p>
              </div>
            </div>

            <button type="button" className={styles.primaryButton}>
              Editar Perfil
            </button>
          </div>
        </section>

        <div className={styles.contentGrid}>
          <div className={styles.leftColumn}>
            <section className={styles.membersSection}>
              <div className={styles.sectionHeader}>
                <h3>Membros da Família</h3>

                <button type="button" className={styles.addMemberButton}>
                  <img src={iconAdicionarMembro} alt="" aria-hidden="true" />
                  <span>Adicionar membro</span>
                </button>
              </div>

              <div className={styles.membersGrid}>
                {familyMembers.map((member) => (
                  <article key={member.name} className={styles.memberCard}>
                    <div className={styles.memberVisual}>
                      <div className={`${styles.memberAvatar} ${member.avatarClass}`}>
                        {member.avatar}
                      </div>

                      <span className={member.tagClass}>{member.role}</span>
                    </div>

                    <div className={styles.memberContent}>
                      <div className={styles.memberNameRow}>
                        <h4>{member.name}</h4>
                        {member.progress ? (
                          <span className={styles.memberProgress}>{member.progress}</span>
                        ) : null}
                      </div>

                      {member.progress ? (
                        <div className={styles.memberProgressBar}>
                          <span className={member.progressClass} />
                        </div>
                      ) : null}

                      <button type="button" className={styles.secondaryButton}>
                        {member.button}
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className={styles.quickActions}>
              {quickActions.map((action) => (
                <button key={action.title} type="button" className={styles.actionCard}>
                  <span className={styles.actionIcon}>
                    <img src={action.icon} alt="" aria-hidden="true" />
                  </span>

                  <div className={styles.actionText}>
                    <h4>{action.title}</h4>
                    <p>{action.text}</p>
                  </div>

                  <img src={iconSeta} alt="" aria-hidden="true" className={styles.actionArrow} />
                </button>
              ))}
            </section>
          </div>

          <aside className={styles.rightColumn}>
            <section className={styles.sideCard}>
              <div className={styles.sideCardHeader}>
                <div>
                  <p className={styles.sideLabel}>
                    <img src={iconProxSessoes} alt="" aria-hidden="true" />
                    Próximas Sessões
                  </p>
                </div>

                <a href="/relatorio" className={styles.sideLink}>
                  Ver Calendário Completo
                </a>
              </div>

              <div className={styles.sessionsList}>
                {sessions.map((session) => (
                  <article key={`${session.day}-${session.title}`} className={styles.sessionItem}>
                    <div className={styles.sessionDay}>{session.day}</div>

                    <div className={styles.sessionContent}>
                      <strong>{session.title}</strong>
                      <span>{session.time}</span>
                    </div>

                    <span className={styles.sessionStatus}>{session.status}</span>
                  </article>
                ))}
              </div>
            </section>

            <section className={styles.sideCard}>
              <div className={styles.sideCardHeader}>
                <div>
                  <p className={styles.sideLabel}>
                    <img src={iconMonitor} alt="" aria-hidden="true" />
                    Status dos Dispositivos
                  </p>
                </div>
              </div>

              <div className={styles.devicesList}>
                {devices.map((device) => (
                  <div key={device.name} className={styles.deviceItem}>
                    <div className={styles.deviceIconWrap}>
                      <img src={device.icon} alt="" aria-hidden="true" />
                    </div>

                    <div className={styles.deviceInfo}>
                      <div className={styles.deviceLine}>
                        <strong>{device.name}</strong>
                        <span>{device.value}</span>
                      </div>

                      <p>{device.status}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className={`${styles.sideCard} ${styles.tipCard}`}>
              <p className={styles.sideLabel}>
                <img src={iconDica} alt="" aria-hidden="true" />
                Dica de Bem-estar
              </p>

              <h3>Pequenas pausas podem reduzir o estresse do dia.</h3>

              <p>
                Experimente reservar 5 minutos entre os atendimentos para respirar e reorganizar a rotina.
              </p>
            </section>
          </aside>
        </div>

      </main>
    </div>
  );
}
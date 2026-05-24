import React from "react";
import styles from "./style.module.css";

import profileImage from "../../assets/images/PerfilAdmin/Marco.png";
import teammateOne from "../../assets/images/PerfilAdmin/Anna.png";
import iconIA from "../../assets/icons/PerfilAdmin/icon-IA.svg";
import iconAcoesUrgentes from "../../assets/icons/PerfilAdmin/icon-acoes-urgentes.svg";
import iconCalibracao from "../../assets/icons/PerfilAdmin/icon-calibracao.svg";
import iconConfiguracao from "../../assets/icons/PerfilAdmin/icon-configuracao.svg";
import iconEsp32 from "../../assets/icons/PerfilAdmin/icon-Esp32.svg";
import iconEstrela from "../../assets/icons/PerfilAdmin/icon-estrela.svg";
import iconNotificacao from "../../assets/icons/PerfilAdmin/icon-notificacao.svg";
import iconPi from "../../assets/icons/PerfilAdmin/icon-Pi.svg";
import iconRelatorio from "../../assets/icons/PerfilAdmin/icon-relatorio.svg";
import iconSensor from "../../assets/icons/PerfilAdmin/icon-sensor.svg";
import iconSessoesHoje from "../../assets/icons/PerfilAdmin/icon-sessoes-hoje.svg";
import iconSeta from "../../assets/icons/PerfilAdmin/icon-seta.svg";
import iconOperadores from "../../assets/icons/PerfilAdmin/icon-operadores.svg";
import iconEquipamentos from "../../assets/icons/PerfilAdmin/icon-equipamentos.svg";
import iconAgenda from "../../assets/icons/PerfilAdmin/icon-agenda.svg";
import iconPainel from "../../assets/icons/PerfilAdmin/icon-painel.svg";
import iconConfiguracaoPreto from "../../assets/icons/PerfilAdmin/icon-configuracao-preto.svg";
import iconIAPreto from "../../assets/icons/PerfilAdmin/icon-IA-preto.svg";

const stats = [
  { icon: iconSessoesHoje, label: "Operadores Ativos", value: "24", accent: styles.statAccentBlue },
  { icon: iconEsp32, label: "Equipamentos Online", value: "18", suffix: "+ 12%", accent: styles.statAccentGreen },
  { icon: iconSensor, label: "Sessões Hoje", value: "142", suffix: "||", accent: styles.statAccentViolet },
  { icon: iconAcoesUrgentes, label: "Alertas Críticos", value: "03", accent: styles.statAccentRed },
  { icon: iconRelatorio, label: "Relatórios Gerados", value: "89", suffix: "META: 100", accent: styles.statAccentGray },
  { icon: iconEstrela, label: "Taxa Operacional", value: "94%", suffix: "↗", accent: styles.statAccentBlueSoft },
];

const operators = [
  {
    name: "Dra. Anna Silva",
    role: "Fisioterapeuta Sênior",
    avatar: teammateOne,
    status: "ONLINE",
    level: "Nível 8.2",
  },
  {
    name: "Dr. Marco Aurélio",
    role: "Técnico em Robótica",
    avatar: profileImage,
    status: "EM SESSÃO",
    level: "Nível 7.5",
  },
];

const liveSensors = [
  { icon: iconEsp32, name: "ESP32-CORE-A1", meta: "TEMP: 34°C", value: "90% SINAL", status: "ESTÁVEL" },
  { icon: iconPi, name: "PI-SERVER-CLINIC", meta: "UPTIME: 242D", value: "82% CPU", status: "LATÊNCIA: 4MS" },
];

const alerts = [
  { title: "Sensor Offline: Sala 02", text: "Conexão perdida há 4 minutos.", accent: styles.alertDanger },
  { title: "Conflito de Agenda", text: "2 sessões marcadas para 14:00.", accent: styles.alertWarning },
];

const agenda = [
  { time: "08:00 - 09:00", name: "Maria Almeida", detail: "Sessão #4 • Pós-AVC", active: true },
  { time: "10:30 - 11:30", name: "João Silva", detail: "Avaliação Inicial" },
  { time: "14:00 - 15:00", name: "Beatriz Costa", detail: "Fortalecimento Lombar" },
];

const activities = [
  { icon: iconCalibracao, title: "Sincronização Cloud finalizada para 12 pacientes.", time: "Há 15 min" },
  { icon: iconConfiguracao, title: "Alta clínica processada para Ricardo Dias.", time: "Há 1 hora" },
];

export default function PerfilAdmin() {
  return (
    <div className={styles.page}>
      <header className={styles.topbar}>
        <div className={styles.brandBlock}>
          <a href="/perfil-admin" className={styles.brand}>
            Ever Rise - Painel Geral
          </a>

          <nav className={styles.topNav} aria-label="Navegação administrativa">
            <a href="/dashboard" className={styles.activeLink}>Dashboard</a>
            <a href="/relatorio" className={styles.navLink}>Análise</a>
            <a href="/controle" className={styles.navLink}>Inventário</a>
          </nav>
        </div>

        <div className={styles.topActions}>
          <div className={styles.greeting}>
            <strong>Bom dia, Rafael 👋</strong>
          </div>

          <button type="button" className={styles.iconButton} aria-label="Notificações">
            <img src={iconNotificacao} alt="" aria-hidden="true" />
          </button>

          <button type="button" className={styles.iconButton} aria-label="Configurações">
            <img src={iconConfiguracao} alt="" aria-hidden="true" />
          </button>

          <img src={profileImage} alt="Perfil do admin" className={styles.avatarSmall} />
        </div>
      </header>

      <section className={styles.statsGrid}>
        {stats.map((item) => (
          <article key={item.label} className={styles.statCard}>
            <div className={`${styles.statIcon} ${item.accent}`}>
              <img src={item.icon} alt="" aria-hidden="true" />
            </div>

            <div>
              <p className={styles.statLabel}>{item.label}</p>
              <div className={styles.statRow}>
                <strong className={styles.statValue}>{item.value}</strong>
                {item.suffix ? <span className={styles.statSuffix}>{item.suffix}</span> : null}
              </div>
            </div>
          </article>
        ))}
      </section>

      <main className={styles.contentGrid}>
        <div className={styles.leftColumn}>
          <section className={styles.card}>
            <div className={styles.cardHeader}>
              <div>
                <h2>Desempenho da Clínica</h2>
                <p className={styles.cardSubtitle}>Monitoramento em tempo real de fluxos e sessões</p>
              </div>

              <div className={styles.pillGroup}>
                <button type="button" className={styles.pillGhost}>Diário</button>
                <button type="button" className={styles.pillActive}>Semanal</button>
              </div>
            </div>

            <div className={styles.chartLarge} aria-hidden="true">
              <div style={{ height: "26%" }} />
              <div style={{ height: "34%" }} />
              <div className={styles.chartBarPrimary} style={{ height: "58%" }} />
              <div style={{ height: "44%" }} />
              <div style={{ height: "40%" }} />
              <div className={styles.chartBarSecondary} style={{ height: "72%" }} />
            </div>

            <div className={styles.cardMetrics}>
              <div><span>Novos Usuários</span><strong>+18%</strong></div>
              <div><span>Tempo Médio</span><strong>42 min</strong></div>
              <div><span>Retenção</span><strong>91.4%</strong></div>
            </div>
          </section>

          <div className={styles.midGrid}>
            <section className={styles.card}>
              <div className={styles.cardHeader}>
                <h2>Timeline ao Vivo</h2>
              </div>

              <div className={styles.timelineList}>
                <div className={styles.timelineEvent}>
                  <div className={styles.timelineMarker} />
                  <div>
                    <strong>Nova Sessão Iniciada</strong>
                    <p>Paciente: Maria S. • Equip: Laser-04</p>
                    <span>Agora mesmo</span>
                  </div>
                </div>

                <div className={styles.timelineEvent}>
                  <div className={styles.timelineMarkerAlt} />
                  <div>
                    <strong>Relatório Gerado</strong>
                    <p>Faturamento Mensal disponível</p>
                    <span>12 min atrás</span>
                  </div>
                </div>

                <div className={styles.timelineEvent}>
                  <div className={styles.timelineMarkerWarning} />
                  <div>
                    <strong>Calibração Pendente</strong>
                    <p>Unidade de Pulso Bio-12</p>
                    <span>1 hora atrás</span>
                  </div>
                </div>
              </div>
            </section>

            <section className={styles.card}>
              <div className={styles.cardHeader}>
                <h2>Operadores da Unidade</h2>
                <a href="/controle" className={styles.viewAll}>Ver todos <img src={iconSeta} alt="" aria-hidden="true" /></a>
              </div>

              <div className={styles.operatorsList}>
                {operators.map((operator) => (
                  <article key={operator.name} className={styles.operatorCard}>
                    <img src={operator.avatar} alt={operator.name} className={styles.operatorAvatar} />
                    <div className={styles.operatorInfo}>
                      <h3>{operator.name}</h3>
                      <p>{operator.role}</p>
                      <div className={styles.operatorMeta}>
                        <span>{operator.level}</span>
                      </div>
                    </div>
                    <span className={operator.status === "ONLINE" ? styles.operatorStatusOnline : styles.operatorStatusBusy}>
                      {operator.status}
                    </span>
                  </article>
                ))}
              </div>
            </section>
          </div>

        </div>

        <aside className={styles.rightColumn}>
          <section className={styles.insightCard}>
            <div className={styles.insightTitle}>
              <img src={iconIA} alt="" aria-hidden="true" />
              <span>FIN IA CLINICAL INSIGHT</span>
            </div>

            <p>
              "Rafael, detectamos uma correlação de 15% na melhora da Maria Almeida após o ajuste do protocolo de torque."
            </p>

            <button type="button" className={styles.insightButton}>Ver Relatório Completo</button>
          </section>

          <section className={styles.card}>
            <div className={styles.cardHeader}>
              <h2>Agenda</h2>
              <a href="/controle" className={styles.viewAll}>Ver tudo</a>
            </div>

            <div className={styles.timelineList}>
              {agenda.map((item) => (
                <div key={`${item.time}-${item.name}`} className={styles.timelineEventCompact}>
                  <div className={item.active ? styles.timelineMarker : styles.timelineMarkerAlt} />
                  <div>
                    <span>{item.time}</span>
                    <strong>{item.name}</strong>
                    <p>{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.card}>
            <div className={styles.cardHeader}>
              <h2>Atividades</h2>
            </div>

            <div className={styles.activityList}>
              {activities.map((activity) => (
                <div key={activity.title} className={styles.activityItem}>
                  <div className={styles.activityIcon}><img src={activity.icon} alt="" aria-hidden="true" /></div>
                  <div>
                    <strong>{activity.title}</strong>
                    <p>{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </aside>
      </main>

      

      <section className={styles.bottomGrid}>
        <section className={styles.card}>
          <div className={styles.cardHeader}>
            <h2>Rede de Equipamentos</h2>
          </div>

          <div className={styles.deviceList}>
            {liveSensors.map((device) => (
              <div key={device.name} className={styles.deviceItem}>
                <div className={styles.deviceIconWrap}><img src={device.icon} alt="" aria-hidden="true" /></div>
                <div className={styles.deviceContent}>
                  <div className={styles.deviceHeader}>
                    <strong>{device.name}</strong>
                    <span>{device.value}</span>
                  </div>
                  <div className={styles.deviceFooter}>
                    <span>{device.meta}</span>
                    <span>STATUS: {device.status}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.insightMiniCard}>
          <div className={styles.insightMiniTitle}>
            <img src={iconIA} alt="" aria-hidden="true" />
            <span>FIN IA PREDICT</span>
          </div>

          <h3>Previsão de Crescimento +12.4%</h3>
          <p>
            Com base no volume de agendamentos de quarta-feira, prevemos um aumento da demanda.
          </p>

          <button type="button" className={styles.insightButton}>Ver Insight Completo</button>
        </section>

        <section className={styles.card}>
          <div className={styles.cardHeader}>
            <h2>Ações Urgentes</h2>
            <img src={iconAcoesUrgentes} alt="" aria-hidden="true" className={styles.urgentIcon} />
          </div>

          <div className={styles.alertList}>
            {alerts.map((alert) => (
              <div key={alert.title} className={styles.urgentItem}>
                <div className={alert.accent} />
                <div>
                  <strong>{alert.title}</strong>
                  <p>{alert.text}</p>
                </div>
              </div>
            ))}
          </div>

          <button type="button" className={styles.ghostButton}>Ignorar Todos</button>
        </section>
      </section>
      
      <section className={styles.agendaWideSection}>
        <section className={styles.card}>
          <div className={styles.cardHeader}>
            <h2>Agenda Semanal</h2>
            <div className={styles.legend}>
              <span><i /> Avaliação</span>
              <span><b /> Sessão</span>
            </div>
          </div>

          <div className={styles.weekGrid}>
            {['12 SEG', '13 TER', 'HOJE', '15 QUI', '16 SEX', '17 SAB', '18 DOM'].map((day, index) => (
              <div key={day} className={`${styles.weekDay} ${index === 2 ? styles.weekDayActive : ''}`}>
                <span>{day}</span>
                {index === 0 && <div className={styles.slot}>08:00 • João V.</div>}
                {index === 0 && <div className={styles.slot}>09:30 • Maria L.</div>}
                {index === 1 && <div className={styles.slotMuted}>10:00 • Dr. Pedro</div>}
                {index === 2 && <div className={styles.slotActive}>AGORA • Clínica X</div>}
                {index === 2 && <div className={styles.slot}>16:00 • Ana C.</div>}
                {index === 2 && <div className={styles.slot}>17:30 • Carlos E.</div>}
                {index === 4 && <div className={styles.slotMuted}>08:00 • Roberto</div>}
              </div>
            ))}
          </div>
        </section>
      </section>

      <nav className={styles.bottomNav} aria-label="Navegação inferior administrativa">
        <button type="button" className={styles.bottomItem}>
          <img src={iconOperadores} alt="" aria-hidden="true" />
          <span>Operadores</span>
        </button>

        <button type="button" className={styles.bottomItem}>
          <img src={iconEquipamentos} alt="" aria-hidden="true" />
          <span>Equipamentos</span>
        </button>

        <button type="button" className={styles.activeNav}>
          <img src={iconPainel} alt="" aria-hidden="true" />
          <span>Painel</span>
        </button>

        <button type="button" className={styles.bottomItem}>
          <img src={iconAgenda} alt="" aria-hidden="true" />
          <span>Agenda</span>
        </button>

        <button type="button" className={styles.bottomItem}>
          <img src={iconIAPreto} alt="" aria-hidden="true" />
          <span>IA</span>
        </button>

        <button type="button" className={styles.bottomItem}>
          <img src={iconConfiguracaoPreto} alt="" aria-hidden="true" />
          <span>Config</span>
        </button>
      </nav>
    </div>
  );
}
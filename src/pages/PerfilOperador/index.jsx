import React from "react";
import styles from "./style.module.css";

import profileImage from "../../assets/images/PerfilOperador/foto-perfil.png";
import iconAlerta from "../../assets/icons/PerfilOperador/icon-alerta.svg";
import iconAtivos from "../../assets/icons/PerfilOperador/icon-ativos.svg";
import iconBioSensor from "../../assets/icons/PerfilOperador/icon-bio-sensor.svg";
import iconCoracao from "../../assets/icons/PerfilOperador/icon-coracao.svg";
import iconCorreto from "../../assets/icons/PerfilOperador/icon-correto.svg";
import iconDispositivos from "../../assets/icons/PerfilOperador/icon-dispositivos.svg";
import iconEsp32 from "../../assets/icons/PerfilOperador/icon-esp32.svg";
import iconIa from "../../assets/icons/PerfilOperador/icon-ia.svg";
import iconNotificacao from "../../assets/icons/PerfilOperador/icon-notificacao.svg";
import iconPaciente from "../../assets/icons/PerfilOperador/icon-paciente.svg";
import iconRPiGate from "../../assets/icons/PerfilOperador/icon-r-pi-gate.svg";
import iconSensores from "../../assets/icons/PerfilOperador/icon-sensores.svg";
import iconSessoes from "../../assets/icons/PerfilOperador/icon-sessoes.svg";
import iconSincronizacao from "../../assets/icons/PerfilOperador/icon-sincronizacao.svg";

const liveSensors = [
  {
    icon: iconEsp32,
    name: "ESP32-Hub_01",
    status: "CONECTADO",
    statusClass: styles.sensorSuccess,
  },
  {
    icon: iconBioSensor,
    name: "Bio-Sensor_04",
    status: "92%",
    statusClass: styles.sensorSuccess,
  },
  {
    icon: iconRPiGate,
    name: "R-Pi_Gate_02",
    status: "Instável",
    statusClass: styles.sensorWarning,
  },
];

const alerts = [
  {
    title: "Manutenção Necessária",
    text: "Sensor de torque #12 desalinhado na Unidade 04.",
    accentClass: styles.alertDanger,
  },
  {
    title: "Sinal Fraco",
    text: "Monitor cardíaco de João está com interferência.",
    accentClass: styles.alertWarning,
  },
];

const agenda = [
  {
    time: "09:00 - 10:00",
    name: "Maria Almeida",
    detail: "Sessão #4 • Pós-AVC",
    active: true,
  },
  {
    time: "10:30 - 11:30",
    name: "João Silva",
    detail: "Avaliação Inicial",
  },
  {
    time: "14:00 - 15:00",
    name: "Beatriz Costa",
    detail: "Fortalecimento Lombar",
  },
];

const activities = [
  {
    icon: iconSincronizacao,
    title: "Sincronização Cloud finalizada para 12 pacientes.",
    time: "Há 15 min",
  },
  {
    icon: iconCorreto,
    title: "Alta clínica processada para Ricardo Dias.",
    time: "Há 1 hora",
  },
];

export default function DashboardOperador() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.profileSection}>
          <div className={styles.avatarWrapper}>
            <img
              src={profileImage}
              alt="Rafael"
              className={styles.avatar}
            />

            <span className={styles.onlineDot} />
          </div>

          <div className={styles.profileCopy}>
            <h1 className={styles.title}>Olá, Rafael 👋</h1>

            <p className={styles.subtitle}>
              Fisioterapeuta Sênior • Unidade Central
            </p>

            <div className={styles.badges}>
              <span className={styles.badge}>12 sessões programadas hoje</span>
              <span className={styles.badgeSuccess}>Selo Especialista Premium</span>
            </div>
          </div>
        </div>

        <div className={styles.headerActions}>
          <button type="button" className={styles.iconButton} aria-label="Notificações">
            <img src={iconNotificacao} alt="" aria-hidden="true" />
          </button>

          <button type="button" className={styles.primaryButton}>
            Iniciar Nova Sessão
          </button>
        </div>
      </header>

      <section className={styles.statsGrid}>
        <article className={styles.statCard}>
          <div className={styles.statIconWrap}>
            <img src={iconPaciente} alt="" aria-hidden="true" />
          </div>

          <div>
            <p className={styles.statLabel}>Pacientes</p>
            <h2 className={styles.statValue}>142</h2>
          </div>
        </article>

        <article className={styles.statCard}>
          <div className={styles.statIconWrap}>
            <img src={iconSessoes} alt="" aria-hidden="true" />
          </div>

          <div>
            <p className={styles.statLabel}>Sessões</p>
            <h2 className={styles.statValue}>12</h2>
          </div>
        </article>

        <article className={styles.statCard}>
          <div className={`${styles.statIconWrap} ${styles.statIconDanger}`}> 
            <img src={iconAlerta} alt="" aria-hidden="true" />
          </div>

          <div>
            <p className={styles.statLabel}>Alertas</p>
            <h2 className={styles.statValueDanger}>03</h2>
          </div>
        </article>

        <article className={styles.statCard}>
          <div className={styles.statIconWrap}>
            <img src={iconDispositivos} alt="" aria-hidden="true" />
          </div>

          <div>
            <p className={styles.statLabel}>Dispositivos</p>
            <h2 className={styles.statValue}>98%</h2>
          </div>
        </article>
      </section>

      <main className={styles.mainGrid}>
        <div className={styles.leftColumn}>
          <section className={styles.card}>
            <div className={styles.cardHeader}>
              <h2>Sessões ao Vivo</h2>
              <span className={styles.liveBadge}>
                <span className={styles.liveDot} /> MONITORANDO AGORA
              </span>
            </div>

            <div className={styles.liveSession}>
              <div className={styles.liveUser}>
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80"
                  alt="Paciente"
                  className={styles.liveAvatar}
                />

                <div>
                  <h3>Maria Almeida</h3>
                  <p>Protocolo: Recuperação Pós-AVC</p>
                </div>
              </div>

              <div className={styles.liveMetrics}>
                <div className={styles.metricItem}>
                  <img src={iconCoracao} alt="" aria-hidden="true" />
                  <span>78 BPM</span>
                </div>

                <div className={styles.metricItem}>
                  <img src={iconAtivos} alt="" aria-hidden="true" />
                  <span>12 Ativos</span>
                </div>

                <div className={styles.progressArea}>
                  <span>65%</span>
                  <div className={styles.progressBar}>
                    <div className={styles.progress} />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className={styles.doubleGrid}>
            <section className={styles.card}>
              <div className={styles.cardHeader}>
                <h2>Sensores</h2>
                <img src={iconSensores} alt="" aria-hidden="true" className={styles.cardCornerIcon} />
              </div>

              <div className={styles.sensorList}>
                {liveSensors.map((sensor) => (
                  <div key={sensor.name} className={sensor.statusClass}>
                    <div className={styles.sensorLabel}>
                      <img src={sensor.icon} alt="" aria-hidden="true" />
                      <span>{sensor.name}</span>
                    </div>

                    <span className={styles.sensorValue}>{sensor.status}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className={styles.card}>
              <div className={styles.cardHeader}>
                <h2>Alertas</h2>
                <span className={styles.alertCount}>3</span>
              </div>

              <div className={styles.alertList}>
                {alerts.map((alert) => (
                  <div key={alert.title} className={styles.alertItem}>
                    <div className={alert.accentClass} />
                    <div>
                      <h4>{alert.title}</h4>
                      <p>{alert.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <section className={styles.card}>
            <div className={styles.cardHeader}>
              <div>
                <h2>Análise de Performance</h2>
                <p className={styles.smallText}>Produtividade semanal do operador</p>
              </div>

              <div className={styles.tabs}>
                <button type="button" className={styles.activeTab}>Semanal</button>
                <button type="button" className={styles.tab}>Mensal</button>
              </div>
            </div>

            <div className={styles.chart} aria-hidden="true">
              <div className={styles.chartBar} style={{ height: "78px" }} />
              <div className={styles.chartBar} style={{ height: "116px" }} />
              <div className={styles.chartBarActive} style={{ height: "170px" }} />
              <div className={styles.chartBar} style={{ height: "90px" }} />
              <div className={styles.chartBar} style={{ height: "128px" }} />
              <div className={styles.chartBar} style={{ height: "64px" }} />
            </div>
          </section>
        </div>

        <div className={styles.rightColumn}>
          <section className={styles.aiCard}>
            <div className={styles.aiTitleRow}>
              <img src={iconIa} alt="" aria-hidden="true" />
              <span>FIN IA CLINICAL INSIGHT</span>
            </div>

            <p className={styles.aiText}>
              "Rafael, detectamos uma correlação de 15% na melhora de Maria Almeida após o ajuste do protocolo de torque. Recomendamos manter a intensidade por mais 2 sessões."
            </p>

            <button type="button" className={styles.aiButton}>
              Ver Relatório Completo
            </button>
          </section>

          <section className={styles.card}>
            <div className={styles.cardHeader}>
              <h2>Agenda</h2>
              <button type="button" className={styles.linkButton}>Ver Tudo</button>
            </div>

            <div className={styles.timeline}>
              {agenda.map((item) => (
                <div key={`${item.time}-${item.name}`} className={styles.timelineItem}>
                  <div className={item.active ? styles.timelineDot : styles.timelineDotInactive} />

                  <div>
                    <span>{item.time}</span>
                    <h4>{item.name}</h4>
                    <p>{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.card}>
            <h2 className={styles.activitiesTitle}>Atividades</h2>

            <div className={styles.activities}>
              {activities.map((activity) => (
                <div key={activity.title} className={styles.activity}>
                  <div className={styles.activityIcon}>
                    <img src={activity.icon} alt="" aria-hidden="true" />
                  </div>

                  <div>
                    <h4>{activity.title}</h4>
                    <p>{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

    </div>
  );
}
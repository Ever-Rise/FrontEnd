import { useNavigate } from "react-router-dom";
import HeaderDashboard from "../../components/layout/Header-Dashboard";
import styles from "./style.module.css";
import iconPesquisa from "../../assets/icons/GerenciarPaciente/icon-pesquisar.svg";
import iconPaciente from "../../assets/icons/GerenciarPaciente/icon-paciente.svg";
import iconNovoPaciente from "../../assets/icons/GerenciarPaciente/icon-novo-paciente.svg";
import iconSessaoAgora from "../../assets/icons/GerenciarPaciente/icon-sessao-agora.svg";
import iconSessoesMes from "../../assets/icons/GerenciarPaciente/icon-sessoes-mes.svg";
import iconAlerta from "../../assets/icons/GerenciarPaciente/icon-alerta.svg";
import iconAtencao from "../../assets/icons/GerenciarPaciente/icon-atencao.svg";
import iconConcluido from "../../assets/icons/GerenciarPaciente/icon-concluido.svg";
import iconGrafico from "../../assets/icons/GerenciarPaciente/icon-grafico.svg";
import iconOlho from "../../assets/icons/GerenciarPaciente/icon-olho.svg";
import iconTresPontinhos from "../../assets/icons/GerenciarPaciente/icon-tres-pontinhos.svg";
import iconRevisar from "../../assets/icons/GerenciarPaciente/icon-revisar.svg";

export default function PatientManagement() {
  const navigate = useNavigate();

  const patients = [
    {
      name: "Ricardo Medeiros",
      age: "42 anos",
      id: "#2948",
      lastSession: "Hoje, 09:30",
      status: "Estável",
      statusClass: styles.successBadge,
      progress: 78,
      progressClass: styles.progressGreen,
      actionIcon: iconOlho,
      actionLabel: "Visualizar paciente",
    },
    {
      name: "Ana Júlia Costa",
      age: "27 anos",
      id: "#3011",
      lastSession: "Em andamento...",
      status: "Em sessão",
      statusClass: styles.infoBadge,
      progress: 35,
      progressClass: styles.progressBlue,
      actionIcon: iconGrafico,
      actionLabel: "Ver evolução",
    },
    {
      name: "Heitor Vasconcelos",
      age: "68 anos",
      id: "#2844",
      lastSession: "2 dias atrás",
      status: "Alerta",
      statusClass: styles.alertBadge,
      progress: 52,
      progressClass: styles.progressRed,
      actionIcon: iconRevisar,
      actionLabel: "Revisar paciente",
    },
    {
      name: "Fernanda Lima",
      age: "34 anos",
      id: "#3105",
      lastSession: "Ontem, 16:00",
      status: "Recuperação",
      statusClass: styles.recoveryBadge,
      progress: 91,
      progressClass: styles.progressPurple,
      actionIcon: iconOlho,
      actionLabel: "Visualizar paciente",
    },
  ];

  return (
    <div className={styles.page}>
      <div className={styles.shell}>
        <HeaderDashboard title="Gerenciamento de Pacientes" />

        <main className={styles.container}>
          <section className={styles.hero}>
            <div>
              <h2>Gerenciamento de Pacientes</h2>
              <p>
                Acompanhe sessões, evolução e status clínico em tempo real com
                precisão analítica.
              </p>
            </div>

            <button type="button" className={styles.primaryButton} onClick={() => navigate("/novo-paciente")}>
              <img src={iconNovoPaciente} alt="" aria-hidden="true" />
              Novo Paciente
            </button>
          </section>

          <section className={styles.kpiGrid}>
          <article className={styles.card}>
            <div className={styles.cardTop}>
              <span className={styles.metricIcon}>
                <img src={iconPaciente} alt="" aria-hidden="true" />
              </span>
              <small className={styles.metricChip}>+4%</small>
            </div>

            <h3>124</h3>
            <p>Total de pacientes</p>

            <div className={styles.progressTrack}>
              <div className={styles.progressFillPrimary} style={{ width: "78%" }} />
            </div>
          </article>

          <article className={styles.card}>
            <div className={styles.cardTop}>
              <span className={styles.metricIconAlt}>
                <img src={iconSessaoAgora} alt="" aria-hidden="true" />
              </span>
            </div>

            <h3>12</h3>
            <p>Em sessão agora</p>

            <div className={styles.avatarRow} aria-hidden="true">
              <span />
              <span />
              <span />
              <span className={styles.avatarMore}>+8</span>
            </div>
          </article>

          <article className={`${styles.card} ${styles.alertCard}`}>
            <div className={styles.cardTop}>
              <span className={styles.metricIconAlert}>
                <img src={iconAtencao} alt="" aria-hidden="true" />
              </span>
            </div>

            <h3>03</h3>
            <p>Alertas ativos</p>

            <div className={styles.alertCopy}>
              <img src={iconAlerta} alt="" aria-hidden="true" />
              Requer atenção imediata
            </div>
          </article>

          <article className={styles.card}>
            <div className={styles.cardTop}>
              <span className={styles.metricIconStat}>
                <img src={iconConcluido} alt="" aria-hidden="true" />
              </span>
            </div>

            <h3>856</h3>
            <p>Sessões este mês</p>

            <div className={styles.monthMeta}>
              <span>META MENSAL</span>
              <strong>85%</strong>
            </div>

            <div className={styles.progressTrackLight}>
              <div className={styles.progressFillPurple} style={{ width: "85%" }} />
            </div>
          </article>
          </section>

          <section className={styles.filters}>
            <div className={styles.inputWrapper}>
              <img src={iconPesquisa} alt="" aria-hidden="true" />
              <input type="text" placeholder="Pesquisar pacientes por nome, CPF ou ID..." />
            </div>

            <div className={styles.selects}>
              <select>
                <option>Status: Todos</option>
                <option>Estável</option>
                <option>Em sessão</option>
                <option>Alerta</option>
              </select>

              <select>
                <option>Tipo: Pós-Operatório</option>
                <option>Fisioterapia Preventiva</option>
                <option>Reabilitação Esportiva</option>
              </select>

              <button type="button" className={styles.filterButton} aria-label="Filtrar">
                <span className={styles.filterGlyph} />
              </button>
            </div>
          </section>

          <section className={styles.list}>
            {patients.map((patient) => (
              <article key={patient.id} className={styles.row}>
                <div className={styles.patient}>
                  <div className={styles.initials} aria-hidden="true" />
                  <div className={styles.patientInfo}>
                    <strong>{patient.name}</strong>
                    <p>
                      {patient.age} • ID: {patient.id}
                    </p>
                  </div>
                </div>

                <div className={styles.metaColumn}>
                  <span>ÚLTIMA SESSÃO</span>
                  <strong>{patient.lastSession}</strong>
                </div>

                <div className={styles.metaColumn}>
                  <span>STATUS</span>
                  <span className={patient.statusClass}>{patient.status}</span>
                </div>

                <div className={styles.progressColumn}>
                  <span>RECUPERAÇÃO</span>
                  <div className={styles.progressRow}>
                    <div className={styles.tableProgress}>
                      <div
                        className={patient.progressClass}
                        style={{ width: `${patient.progress}%` }}
                      />
                    </div>
                    <strong>{patient.progress}%</strong>
                  </div>
                </div>

                <div className={styles.rowActions}>
                  <button type="button" className={styles.rowActionPrimary} aria-label={patient.actionLabel}>
                    <img src={patient.actionIcon} alt="" aria-hidden="true" />
                  </button>
                  <button type="button" className={styles.rowActionSecondary} aria-label="Mais opções">
                    <img src={iconTresPontinhos} alt="" aria-hidden="true" />
                  </button>
                </div>
              </article>
            ))}

            <div className={styles.loadMoreWrap}>
              <button type="button" className={styles.loadMoreButton}>
                Carregar mais pacientes
              </button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
import styles from "./style.module.css";
import Footer from "../../components/layout/Footer";
import HeaderDashboard from "../../components/layout/Header-Dashboard";
import iconRelatorio from "../../assets/icons/Relatorio/icon-relatorio.png";
import iconExcel from "../../assets/icons/Relatorio/icon-excel.png";
import iconPdf from "../../assets/icons/Relatorio/icon-pdf.png";
import iconSessoes from "../../assets/icons/Relatorio/icon-sessoes.png";
import iconRecuperacao from "../../assets/icons/Relatorio/icon-recuperacao.png";
import iconDistancia from "../../assets/icons/Relatorio/icon-distancia.png";
import iconEvolucao from "../../assets/icons/Relatorio/icon-evolucao.png";
import iconSetaEsquerda from "../../assets/icons/Relatorio/icon-seta-esquerda.png";
import iconSetaDireita from "../../assets/icons/Relatorio/icon-seta-direita.png";

export default function ReportsDashboard() {
  const monthlySessions = [42, 55, 68, 61, 84, 70];

  const reports = [
    {
      title: "Análise de Mobilidade e Quadris",
      id: "ID-2024-001",
      patient: "João Silva",
      date: "12 Jun 2024",
      responsible: "Dra. Helena Costa",
      type: "Biomecânico",
      status: "Concluído",
      statusClass: styles.success,
    },
    {
      title: "Evolução Pós-Operatória",
      id: "ID-2024-002",
      patient: "Maria Oliveira",
      date: "10 Jun 2024",
      responsible: "Dr. Roberto Lima",
      type: "Clínico",
      status: "Em revisão",
      statusClass: styles.pending,
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.backdropPrimary} />
      <div className={styles.backdropSecondary} />

      <HeaderDashboard title="Relatórios" brandIcon={iconRelatorio} brandAlt="Ícone de relatórios" />

      <main className={styles.main}>
        <section className={styles.titleSection}>
          <div className={styles.titleCopy}>
            <span className={styles.sectionLabel}>Painel analítico</span>
            <h2>Relatórios</h2>
            <p>Acompanhe métricas clínicas e desempenho das sessões</p>
          </div>

          <div className={styles.actions}>
            <button className={styles.secondaryButton}>
              <img className={styles.actionIcon} src={iconExcel} alt="" aria-hidden="true" />
              Exportar Excel
            </button>

            <button className={styles.primaryButton}>
              <img className={styles.actionIcon} src={iconPdf} alt="" aria-hidden="true" />
              Exportar PDF
            </button>
          </div>
        </section>

        <section className={styles.filters}>
          <div className={styles.filterItem}>
            <label>Período</label>
            <select>
              <option>Últimos 30 dias</option>
              <option>Este mês</option>
              <option>Personalizado</option>
            </select>
          </div>

          <div className={styles.filterItem}>
            <label>Paciente</label>
            <select>
              <option>Todos os pacientes</option>
              <option>João Silva</option>
              <option>Maria Oliveira</option>
            </select>
          </div>

          <div className={styles.filterItem}>
            <label>Clínica</label>
            <select>
              <option>Unidade Central</option>
              <option>Unidade Sul</option>
            </select>
          </div>

          <div className={styles.filterItem}>
            <label>Status</label>
            <select>
              <option>Concluído</option>
              <option>Em revisão</option>
              <option>Pendente</option>
            </select>
          </div>

          <div className={styles.filterItem}>
            <label>Tipo de relatório</label>
            <select>
              <option>Desempenho clínico</option>
              <option>Biomecânico</option>
              <option>Operacional</option>
            </select>
          </div>

          <button className={styles.generateButton}>
            Gerar relatório
          </button>
        </section>

        <section className={styles.cards}>
          <article className={styles.card}>
            <div className={styles.cardHeader}>
              <span>Total de sessões</span>
              <span className={styles.cardIcon}>
                <img className={styles.metricIcon} src={iconSessoes} alt="" aria-hidden="true" />
              </span>
            </div>
            <h3>1.204</h3>
            <p>
              <strong>+12%</strong> comparado ao mês anterior
            </p>
          </article>

          <article className={styles.card}>
            <div className={styles.cardHeader}>
              <span>Tempo de recuperação</span>
              <span className={styles.cardIcon}>
                <img className={styles.metricIcon} src={iconRecuperacao} alt="" aria-hidden="true" />
              </span>
            </div>
            <h3>850h</h3>

            <div className={styles.progressBar}>
              <div className={styles.progress}></div>
            </div>

            <p>60% da meta atingida</p>
          </article>

          <article className={styles.card}>
            <div className={styles.cardHeader}>
              <span>Distância total</span>
              <span className={styles.cardIcon}>
                <img className={styles.metricIcon} src={iconDistancia} alt="" aria-hidden="true" />
              </span>
            </div>
            <h3>450 km</h3>
            <div className={styles.sparkBars}>
              {monthlySessions.map((height, index) => (
                <span key={index} style={{ height: `${height}%` }} />
              ))}
            </div>
            <p>Atividades de fisioterapia motora</p>
          </article>

          <article className={styles.card}>
            <div className={styles.cardHeader}>
              <span>Taxa de evolução</span>
              <span className={styles.cardIcon}>
                <img className={styles.metricIcon} src={iconEvolucao} alt="" aria-hidden="true" />
              </span>
            </div>
            <h3 className={styles.accentValue}>78%</h3>
            <div className={styles.progressBarGreen}>
              <div className={styles.progressGreen}></div>
            </div>
            <p>Progresso médio consolidado</p>
          </article>
        </section>

        <section className={styles.charts}>
          <article className={styles.chartCardLarge}>
            <div className={styles.chartCardHeader}>
              <div>
                <h3>Evolução de Sessões</h3>
                <p>Volume de atendimentos realizados nos últimos 6 meses</p>
              </div>

              <button className={styles.menuButton} aria-label="Mais opções">
                <span aria-hidden="true">⋮</span>
              </button>
            </div>

            <div className={styles.barChart}>
              {monthlySessions.map((height, index) => (
                <div key={index} className={styles.barItem}>
                  <div className={styles.bar} style={{ height: `${height}%` }} />
                  <span className={styles.barLabel}>
                    {['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN'][index]}
                  </span>
                </div>
              ))}
            </div>
          </article>

          <article className={styles.chartCardSmall}>
            <div className={styles.chartCardHeader}>
              <div>
                <h3>Distribuição</h3>
                <p>Status das terapias</p>
              </div>
            </div>

            <div className={styles.donutWrapper}>
              <div className={styles.donut}>
                <div className={styles.donutInner}>
                  <strong>72%</strong>
                  <span>ATIVOS</span>
                </div>
              </div>
            </div>

            <ul className={styles.legendList}>
              <li>
                <span className={styles.legendDotBlue} /> Em Recuperação
                <strong>72%</strong>
              </li>
              <li>
                <span className={styles.legendDotGreen} /> Concluídos
                <strong>18%</strong>
              </li>
              <li>
                <span className={styles.legendDotRed} /> Suspensos
                <strong>10%</strong>
              </li>
            </ul>
          </article>
        </section>

        <section className={styles.tableSection}>
          <div className={styles.tableHeader}>
            <div>
              <h3>Relatórios Recentes</h3>
              <p>Últimos relatórios emitidos pela equipe</p>
            </div>

            <div className={styles.tableSearch}>
              <input type="search" placeholder="Buscar relatório..." />
            </div>
          </div>

          <div className={styles.tableScroll}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>NOME DO RELATÓRIO</th>
                  <th>PACIENTE</th>
                  <th>DATA</th>
                  <th>RESPONSÁVEL</th>
                  <th>TIPO</th>
                  <th>STATUS</th>
                  <th>AÇÕES</th>
                </tr>
              </thead>

              <tbody>
                {reports.map((report) => (
                  <tr key={report.id}>
                    <td>
                      <div className={styles.reportCell}>
                        <strong>{report.title}</strong>
                        <span>{report.id}</span>
                      </div>
                    </td>
                    <td>{report.patient}</td>
                    <td>{report.date}</td>
                    <td>{report.responsible}</td>
                    <td>
                      <span className={styles.typeBadge}>{report.type}</span>
                    </td>
                    <td>
                      <span className={report.statusClass}>{report.status}</span>
                    </td>
                    <td>
                      <div className={styles.actionGroup}>
                        <button className={styles.tableActionButton}>Ver</button>
                        <button className={styles.tableActionButton}>Baixar</button>
                        <button className={styles.tableActionButton}>Enviar</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className={styles.tableFooter}>
            <div className={styles.paginationHint}>Mostrando 1-2 de 24 relatórios</div>

            <div className={styles.pagination}>
              <button className={styles.paginationButton} aria-label="Anterior">
                <img className={styles.paginationIcon} src={iconSetaEsquerda} alt="" aria-hidden="true" />
              </button>
              <button className={styles.paginationActive}>1</button>
              <button className={styles.paginationButton}>2</button>
              <button className={styles.paginationButton}>3</button>
              <button className={styles.paginationButton} aria-label="Próxima">
                <img className={styles.paginationIcon} src={iconSetaDireita} alt="" aria-hidden="true" />
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
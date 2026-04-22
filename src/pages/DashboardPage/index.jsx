import React, { useEffect } from "react";
import { useGuincho } from "../../hooks/useGuincho";
import { useTelemetry } from "../../hooks/useTelemetry";
import {
  formatBattery,
  formatDateTime,
  formatEquipmentStatus,
} from "../../utils/formatters";
import { EQUIPMENT_STATES } from "../../utils/constants";
import styles from "./styles.module.css";

const DashboardPage = () => {
  const { status, battery, connectionQuality, fetchGuincho, listenTelemetry } =
    useGuincho();

  const { fsrReading, obstacleDetected, anomalyAlert, lastUpdated, connect } =
    useTelemetry();

  useEffect(() => {
    fetchGuincho();
    listenTelemetry();
    connect();
  }, [fetchGuincho, listenTelemetry, connect]);

  const isEmergency = status === EQUIPMENT_STATES.EMERGENCIA;

  return (
    <main className={styles.wrapper} role="main">
      <header className={styles.header}>
        <h1 className={styles.title}>Painel Operacional do Guincho</h1>
        <p className={styles.subtitle}>
          Monitoramento ao vivo de bateria, telemetria, obstaculos e estado do
          equipamento.
        </p>
      </header>

      <section className={styles.dashboardGrid} role="region">
        <article className={styles.infoCard}>
          <span className={styles.label}>Estado Atual</span>
          <strong className={styles.strong}>
            {formatEquipmentStatus(status)}
          </strong>
        </article>

        <article className={styles.infoCard}>
          <span className={styles.label}>Bateria</span>
          <strong className={styles.strong}>{formatBattery(battery)}</strong>
        </article>

        <article className={styles.infoCard}>
          <span className={styles.label}>Qualidade de Conexao</span>
          <strong className={styles.strong}>
            {Number(connectionQuality || 0)}%
          </strong>
        </article>

        <article className={styles.infoCard}>
          <span className={styles.label}>Leitura FSR (carga)</span>
          <strong className={styles.strong}>
            {Number(fsrReading || 0).toFixed(1)} N
          </strong>
        </article>

        <article className={styles.infoCard}>
          <span className={styles.label}>Deteccao de Obstaculo</span>
          <strong className={styles.strong}>
            {obstacleDetected ? "Obstaculo detectado" : "Area livre"}
          </strong>
        </article>

        <article className={styles.infoCard}>
          <span className={styles.label}>Ultima Atualizacao</span>
          <strong className={styles.strong}>
            {formatDateTime(lastUpdated)}
          </strong>
        </article>
      </section>

      {anomalyAlert ? (
        <div className={styles.alertTag} role="status">
          Alerta de anomalia:{" "}
          {anomalyAlert.message || "Variacao fora do padrao"}
        </div>
      ) : null}

      {isEmergency ? (
        <div
          className={styles.emergencyOverlay}
          role="alertdialog"
          aria-modal="true"
          aria-label="Emergencia do equipamento"
          data-emergency="true"
        >
          <div className={styles.emergencyContent}>
            <h2>EMERGENCIA DETECTADA</h2>
            <p>
              Interrompa imediatamente a operacao e acione a equipe tecnica no
              local.
            </p>
            <button className={styles.emergencyButton} type="button">
              PARADA DE EMERGENCIA
            </button>
          </div>
        </div>
      ) : null}
    </main>
  );
};

export default DashboardPage;

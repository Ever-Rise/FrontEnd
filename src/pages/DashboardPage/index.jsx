import React, { useEffect } from 'react';
import { useGuincho } from '../../hooks/useGuincho';
import { useTelemetry } from '../../hooks/useTelemetry';
import { formatBattery, formatDateTime, formatEquipmentStatus } from '../../utils/formatters';
import { EQUIPMENT_STATES } from '../../utils/constants';
import {
  AlertTag,
  DashboardGrid,
  EmergencyButton,
  EmergencyContent,
  EmergencyOverlay,
  Header,
  InfoCard,
  Label,
  Strong,
  Subtitle,
  Title,
  Wrapper,
} from './styles';

const DashboardPage = () => {
  const {
    status,
    battery,
    connectionQuality,
    fetchGuincho,
    listenTelemetry,
  } = useGuincho();

  const {
    fsrReading,
    obstacleDetected,
    anomalyAlert,
    lastUpdated,
    connect,
  } = useTelemetry();

  useEffect(() => {
    fetchGuincho();
    listenTelemetry();
    connect();
  }, [fetchGuincho, listenTelemetry, connect]);

  const isEmergency = status === EQUIPMENT_STATES.EMERGENCIA;

  return (
    <Wrapper>
      <Header>
        <Title>Painel Operacional do Guincho</Title>
        <Subtitle>Monitoramento ao vivo de bateria, telemetria, obstaculos e estado do equipamento.</Subtitle>
      </Header>

      <DashboardGrid>
        <InfoCard>
          <Label>Estado Atual</Label>
          <Strong>{formatEquipmentStatus(status)}</Strong>
        </InfoCard>

        <InfoCard>
          <Label>Bateria</Label>
          <Strong>{formatBattery(battery)}</Strong>
        </InfoCard>

        <InfoCard>
          <Label>Qualidade de Conexao</Label>
          <Strong>{Number(connectionQuality || 0)}%</Strong>
        </InfoCard>

        <InfoCard>
          <Label>Leitura FSR (carga)</Label>
          <Strong>{Number(fsrReading || 0).toFixed(1)} N</Strong>
        </InfoCard>

        <InfoCard>
          <Label>Deteccao de Obstaculo</Label>
          <Strong>{obstacleDetected ? 'Obstaculo detectado' : 'Area livre'}</Strong>
        </InfoCard>

        <InfoCard>
          <Label>Ultima Atualizacao</Label>
          <Strong>{formatDateTime(lastUpdated)}</Strong>
        </InfoCard>
      </DashboardGrid>

      {anomalyAlert ? <AlertTag role='status'>Alerta de anomalia: {anomalyAlert.message || 'Variacao fora do padrao'}</AlertTag> : null}

      {isEmergency ? (
        <EmergencyOverlay role='alertdialog' aria-modal='true' aria-label='Emergencia do equipamento'>
          <EmergencyContent>
            <h2>EMERGENCIA DETECTADA</h2>
            <p>Interrompa imediatamente a operacao e acione a equipe tecnica no local.</p>
            <EmergencyButton type='button'>PARADA DE EMERGENCIA</EmergencyButton>
          </EmergencyContent>
        </EmergencyOverlay>
      ) : null}
    </Wrapper>
  );
};

export default DashboardPage;

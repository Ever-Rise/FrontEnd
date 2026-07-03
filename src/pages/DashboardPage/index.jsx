import React from "react";
import styles from "./styles.module.css";
import Header from "../../components/layout/Header";
import bateria from "../../assets/icons/DashboardPage/Bateria.png";
import inclinacao from "../../assets/icons/DashboardPage/inclinação.png";
import wifi from "../../assets/icons/DashboardPage/wifi.png";
import status from "../../assets/icons/DashboardPage/status.png";
import ponta from "../../assets/icons/DashboardPage/ponta.png";
import Graficos from "./Graficos";

const DashboardPage = () => {
    const hasSessionData = false;

    return (
        <main className={styles.container}>
            <Header />

            <section className={styles.visao_geral}>
                <div className={styles.cabecalho}>
                    <div>
                        <p className={styles.eyebrow}>Primeiro acesso</p>
                        <h1>Visão Geral do Sistema</h1>
                    </div>
                    <div className={styles.monitoramento}>
                        <h2>Monitoramento em Tempo Real</h2>
                        <p className={styles.statusBadge}>• AGUARDANDO PRIMEIRA SESSÃO</p>
                    </div>
                </div>

                <div className={styles.cards}>
                    <div className={styles.card}>
                        <div className={styles.cardHeader}>
                            <h3>BATERIA</h3>
                            <img src={bateria} alt="Ícone de bateria" />
                        </div>
                        <p className={styles.info}>--%</p>
                        <div className={styles.carregamento}>
                            <div className={styles.nivelVazio}></div>
                        </div>
                        <div className={styles.duracao}>
                            <p className={styles.tempo}>Sem leitura registrada</p>
                            <p className={styles.capacidadeNeutra}>PENDENTE</p>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.cardHeader}>
                            <h3>CONEXÃO</h3>
                            <img src={wifi} alt="Ícone de conexão" />
                        </div>
                        <p className={styles.info}>--</p>
                        <p className={styles.redeNeutra}>• Dispositivo não conectado</p>
                        <p className={styles.qualidade}>Conecte o guincho para iniciar o monitoramento.</p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.cardHeader}>
                            <h3>STATUS</h3>
                            <img src={status} alt="Ícone de status" />
                        </div>
                        <p className={styles.info}>Inicial</p>
                        <p className={styles.comando}>Nenhuma sessão criada ainda</p>
                        <p className={styles.modoNeutro}>MODO: CONFIGURAÇÃO</p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.cardHeader}>
                            <h3>INCLINAÇÃO</h3>
                            <img src={inclinacao} alt="Ícone de inclinação" />
                        </div>
                        <p className={styles.info}>--</p>
                        <p className={styles.graus}>Aguardando calibração do equipamento.</p>
                    </div>
                </div>

                <div className={styles.acoes}>
                    <button className={styles.controle}>
                        <img src={ponta} alt="Ícone de controle" />
                        <span className={styles.texto_botao}>INICIAR CONTROLE</span>
                    </button>
                    <button className={styles.sessao}>INICIAR SESSÃO</button>
                </div>
            </section>

            <section className={styles.alertas}>
                <div className={styles.alertas_header}>
                    <h2 className={styles.titulo_alertas}>Sem dados recentes</h2>
                    <button type="button" className={styles.alerta}>• 0 ALERTAS ATIVOS</button>
                    <button type="button" className={styles.ver_alertas}>VER ALERTAS</button>
                </div>
                <div className={styles.alerta_status}>
                    <span className={styles.bolinha}></span>
                    <p className={styles.sem_alertas}>Status: aguardando a primeira sessão para gerar histórico e alertas.</p>
                </div>
            </section>

            <section className={styles.graficos}>
                <Graficos hasData={hasSessionData} />
            </section>

            <section className={styles.ultima_sessao}>
                <div className={styles.sessao_card}>
                    <div className={styles.sessao_topo}>
                        <div>
                            <p className={styles.sessao_label}>ÚLTIMA SESSÃO</p>
                            <h2 className={styles.sessao_titulo}>Nenhuma sessão registrada</h2>
                        </div>
                        <span className={styles.sessao_icone}>--</span>
                    </div>

                    <div className={styles.emptySession}>
                        <p>Assim que a primeira sessão for finalizada, o resumo aparecerá aqui com duração, distância, operador e observações.</p>
                    </div>

                    <button className={styles.sessao_btn}>INICIAR PRIMEIRA SESSÃO</button>
                </div>
            </section>
        </main>
    );
};

export default DashboardPage;

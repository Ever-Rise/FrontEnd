import React from "react";
import styles from "./styles.module.css";
import bateria from "../../assets/icons/DashboardPage/Bateria.png";
import inclinacao from "../../assets/icons/DashboardPage/inclinação.png";
import wifi from "../../assets/icons/DashboardPage/wifi.png";
import status from "../../assets/icons/DashboardPage/status.png";
import ponta from "../../assets/icons/DashboardPage/ponta.png";
import Graficos from "./Graficos";

const DashboardPage = () => {
    return (
        <main className={styles.container}>
            <section className={styles.visao_geral}>
                <div className={styles.cabecalho}>
                    <h1>Visão Geral do Sistema</h1>
                    <div className={styles.monitoramento}>
                        <h2>Monitoramento em Tempo Real</h2>
                        <p className={styles.status}> • SYSTEM HEALTH NOMINAL</p>
                    </div>
                </div>

                <div className={styles.cards}>
                    <div className={styles.card}>
                        <div className={styles.bateria}>
                            <h3>BATERIA</h3>
                            <img src={bateria} alt="Ícone de bateria" />
                        </div>
                        <p className={styles.info}>78%</p>
                        <div className={styles.carregamento}>
                            <div className={styles.nivel}></div>
                        </div>
                        <div className={styles.duracao}>
                            <p className={styles.tempo}>4h 30min restantes</p>
                            <p className={styles.capacidade}>NORMAL</p>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.bateria}>
                            <h3>CONEXÃO</h3>
                            <img src={wifi} alt="Ícone de conexão" />
                        </div>
                        <p className={styles.info}>WI-FI</p>
                        <p className={styles.rede}> • Ótima - 45ms</p>
                        <p className={styles.qualidade}>Qualidade: Excelente</p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.bateria}>
                            <h3>STATUS</h3>
                            <img src={status} alt="Ícone de status" />
                        </div>
                        <p className={styles.info}>Pronto</p>
                        <p className={styles.comando}>Sistema aguardando comando</p>
                        <p className={styles.modo}>MODO: ESTACIONÁRIO</p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.bateria}>
                            <h3>INCLINAÇÃO</h3>
                            <img src={inclinacao} alt="Ícone de inclinação" />
                        </div>
                        <p className={styles.info}>12,5</p>
                        <p className={styles.graus}>Graus relativos ao solo</p>
                    </div>
                </div>

                <div className={styles.acoes}>
                    <button className={styles.controle}>
                        <img src={ponta} alt="Ícone de controle" />
                        <p className={styles.texto_botao}>INICIAR CONTROLE</p>
                    </button>
                    <button className={styles.sessao}>INICIAR SESSÃO</button>
                </div>
            </section>

            <section className={styles.alertas}>
                <div className={styles.alertas_header}>
                    <h2 className={styles.titulo_alertas}>Normal</h2>
                    <button type="button" className={styles.alerta}>• 0 ALERTAS ATIVOS</button>
                    <button type="button" className={styles.ver_alertas}>VER ALERTAS</button>
                </div>
                <div className={styles.alerta_status}>
                    <span className={styles.bolinha}></span>
                    <p className={styles.sem_alertas}>Status: Ativo. Nenhuma anomalia detectada nas últimas 24 horas.</p>
                </div>
            </section>

            <section className={styles.graficos}>
                <Graficos />
            </section>

            {/* ÚLTIMA SESSÃO */}
            <section className={styles.ultima_sessao}>
                <div className={styles.sessao_card}>

                    <div className={styles.sessao_topo}>
                        <div>
                            <p className={styles.sessao_label}>ÚLTIMA SESSÃO</p>
                            <h2 className={styles.sessao_titulo}>Hoje · 14h32</h2>
                        </div>
                        <span className={styles.sessao_icone}>🕐</span>
                    </div>

                    <div className={styles.sessao_linha}>
                        <p className={styles.sessao_chave}>Duração</p>
                        <p className={styles.sessao_valor}>45 min</p>
                    </div>
                    <div className={styles.sessao_linha}>
                        <p className={styles.sessao_chave}>Distância percorrida</p>
                        <p className={styles.sessao_valor}>1.240 m</p>
                    </div>
                    <div className={styles.sessao_linha}>
                        <p className={styles.sessao_chave}>Performance</p>
                        <p className={styles.sessao_valor_verde}>Normal</p>
                    </div>
                    <div className={styles.sessao_linha}>
                        <p className={styles.sessao_chave}>Operador</p>
                        <p className={styles.sessao_valor}>JS-401</p>
                    </div>
                    <div className={styles.sessao_linha}>
                        <p className={styles.sessao_chave}>Status final</p>
                        <p className={styles.sessao_valor_azul}>Concluído com Sucesso</p>
                    </div>
                    <div className={styles.sessao_linha}>
                        <p className={styles.sessao_chave}>Observações</p>
                        <p className={styles.sessao_valor}>Calibragem de sensores realizada no início.</p>
                    </div>

                    <button className={styles.sessao_btn}>VER RELATÓRIO COMPLETO</button>

                </div>
            </section>

        </main>
    );
};

export default DashboardPage;
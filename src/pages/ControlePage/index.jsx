import React from 'react';
import styles from './styles.module.css';
import Perfil from '../../assets/icons/Controle/Perfil.svg'
import LuzVerde from '../../assets/icons/Controle/circulo_verde.svg'
import Cima from '../../assets/icons/Controle/cima.svg'
import Esquerdo from '../../assets/icons/Controle/esquerdo.svg'
import Mao from '../../assets/icons/Controle/mao.svg'
import Baixo from '../../assets/icons/Controle/baixo.svg'
import Direito from '../../assets/icons/Controle/direita.svg'
import Play from '../../assets/icons/Controle/play.svg'
import Retorno from '../../assets/icons/Controle/retorno.svg'
import Microfone from '../../assets/icons/Controle/microfone.svg'
import Grafico from '../../assets/icons/Controle/grafico.svg'
import Velocidade from '../../assets/icons/Controle/velocidade.svg'
import Inclinacao from '../../assets/icons/Controle/inclinacao.svg'
import Bateria from '../../assets/icons/Controle/bateria.svg'
import Monitoramento from '../../assets/icons/Controle/monitoramento.svg'
import Modo from '../../assets/icons/Controle/modo.svg'
import Relogio from '../../assets/icons/Controle/relogio.svg'
import Parada from '../../assets/icons/Controle/pare.svg'

const ControlePage = () => {
  return (
    <main className={styles.container} role="main" aria-label="Central de Controle">

      {/* Cabeçalho com navegação */}
      <header className={styles.section_controle}>
        <div className={styles.title}>
          <h1>Ever Rise</h1>
        </div>
        <nav className={styles.navegacao} aria-label="Menu principal">
          <ul>
            <li><a href="#">Dashboard</a></li>
            <li><a href="#">Controle Remoto</a></li>
            <li><a href="#">Manual</a></li>
          </ul>
        </nav>
        <figure className={styles.perfil}>
          <img src={Perfil} alt="Foto de perfil do usuário" />
        </figure>
      </header>

      {/* Painel de controle direcional */}
      <section className={styles.section_operacao} aria-labelledby="titulo-painel">
        <div className={styles.primeiro_titulo}>
          <h2 id="titulo-painel">Painel de Controle</h2>
          <p className={styles.p_painel}>
            <img src={LuzVerde} alt="" aria-hidden="true" />
            <span>Dispositivo Conectado</span>
          </p>
        </div>
        <p className={styles.p_pri_tiluto}>Operação ativa em Tempo Real</p>

        <div
          className={styles.controle_direcional}
          role="group"
          aria-label="Controle direcional"
        >
          <button className={styles.cima} aria-label="Mover para cima">
            <img src={Cima} alt="" aria-hidden="true" />
          </button>
          <div className={styles.controle_horizontal}>
            <button className={styles.esquerdo} aria-label="Mover para esquerda">
              <img src={Esquerdo} alt="" aria-hidden="true" />
            </button>
            <button className={styles.stop_button} aria-label="Parar movimento">
              <img src={Mao} alt="" aria-hidden="true" />
              STOP
            </button>
            <button className={styles.direita} aria-label="Mover para direita">
              <img src={Direito} alt="" aria-hidden="true" />
            </button>
          </div>
          <button className={styles.baixo} aria-label="Mover para baixo">
            <img src={Baixo} alt="" aria-hidden="true" />
          </button>
        </div>

        <div className={styles.botoes_operacao} role="group" aria-label="Ações de operação">
          <button className={styles.iniciar_button}>
            <img src={Play} alt="" aria-hidden="true" />
            INICIAR CICLO
          </button>
          <button className={styles.recalibrar_button}>
            <img src={Retorno} alt="" aria-hidden="true" />
            RECALIBRAR
          </button>
        </div>
      </section>

      {/* Comando de voz */}
      <section className={styles.section_comando_voz} aria-labelledby="titulo-voz">
        <div className={styles.div_comando_voz}>
          <h2 className={styles.titulo_voz}>Comando de Voz</h2>
          <img src={Microfone} alt="Microfone ativo" className={styles.img_mic} />
        </div>
        <img src={Grafico} alt="Gráfico de onda de voz" className={styles.img_grafico} />
        <p className={styles.q_grafico}>"Elevar cabeceira em 15 graus"</p>
        <button className={styles.botao_ouvindo} aria-live="polite" aria-label="Ouvindo comando de voz">
          OUVINDO...
        </button>
      </section>

      {/* Telemetria */}
      <section className={styles.section_telemetria} aria-labelledby="titulo-telemetria">
        <h2 id="titulo-telemetria">Telemetria de Precisão</h2>
        <div className={styles.botoes_telemetria} role="list">
          <article className={styles.botao_velocidade} role="listitem">
            <img src={Velocidade} alt="" aria-hidden="true" />
            <h3>Velocidade</h3>
            <p className={styles.p_velocidade}>0.4 m/s</p>
          </article>
          <article className={styles.botao_velocidade} role="listitem">
            <img src={Inclinacao} alt="" aria-hidden="true" />
            <h3>Inclinação</h3>
            <p className={styles.p_inclinacao}>12.5°</p>
          </article>
          <article className={styles.botao_velocidade} role="listitem">
            <img src={Bateria} alt="" aria-hidden="true" />
            <h3>Bateria</h3>
            <p className={styles.p_bateria}>92%</p>
          </article>
        </div>
      </section>

      {/* Status do dispositivo */}
      <aside className={styles.status_dispositivo} aria-label="Status do dispositivo">
        <section className={styles.section_monitoramento} aria-labelledby="titulo-monitoramento">
          <figure className={styles.div_img_monitoramento}>
            <img src={Monitoramento} alt="" aria-hidden="true" />
          </figure>
          <div className={styles.div_monitoramento}>
            <h2 id="titulo-monitoramento" className={styles.moni}>MONITORAMENTO</h2>
            <p className={styles.p_moni}>Estável</p>
          </div>
        </section>

        <section className={styles.section_modo} aria-labelledby="titulo-modo">
          <figure className={styles.div_img_modo}>
            <img src={Modo} alt="" aria-hidden="true" />
          </figure>
          <div className={styles.div_modo}>
            <h2 id="titulo-modo" className={styles.modo}>MODO</h2>
            <p className={styles.p_modo}>Assistido</p>
          </div>
        </section>

        <section className={styles.section_tempo} aria-labelledby="titulo-tempo">
          <figure className={styles.div_img_tempo}>
            <img src={Relogio} alt="" aria-hidden="true" />
          </figure>
          <div className={styles.div_tempo}>
            <h2 id="titulo-tempo" className={styles.tempo}>TEMPO DE SESSÃO</h2>
            <time className={styles.p_tempo} dateTime="PT14M22S">14:22</time>
          </div>
        </section>
      </aside>

      {/* Parada de emergência */}
      <footer className={styles.pare}>
        <button
          className={styles.button_pare}
          aria-label="Parada de emergência — interrompe todos os movimentos"
          type="button"
        >
          <img src={Parada} alt="" aria-hidden="true" />
          PARADA DE EMERGÊNCIA
        </button>
      </footer>

    </main>
  );
};

export default ControlePage;
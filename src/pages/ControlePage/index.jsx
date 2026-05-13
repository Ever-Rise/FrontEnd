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

const PAGE_NAME = 'Central de Controle';


const ControlePage = () => {
  return (
    <main className={styles.container} role='main'>
      <section className={styles.section_controle}>
        <div className={styles.title}>
          <h1>Ever Rise</h1>
        </div>
        <div className={styles.navegacao}>
          <ul>
            <li><link rel="stylesheet" href="#" />Dashboard</li>
            <li><link rel="stylesheet" href="#" />Controle Remoto</li>
            <li><link rel="stylesheet" href="#" />Manual</li>
          </ul>
        </div>
        <div className={styles.perfil}>
          <img src={Perfil} alt="Foto Perfil" />
        </div>
      </section>

      <section className={styles.section_operacao}>
        <div  className={styles.primeiro_titulo}>
          <h3>Painel de Controle</h3>
          <label for="Dispositivo"><img src={LuzVerde} alt="Luz verde" />Dispositivo Conectado</label>
        </div>
        <p>Operação ativa em Tempo Real</p>
          <div className={styles.controle_direcional}>
            <button className={styles.cima}><img src={Cima} alt="Cima" /></button>
            <div className={styles.controle_horizontal}>
              <button className={styles.esquerdo}><img src={Esquerdo} alt="Esquerdo" /></button>
              <button className={styles.stop_button}><img src={Mao} alt="Stop" />STOP</button>
              <button className={styles.direita}><img src={Direito} alt="Direito" /></button>
            </div>
            <button className={styles.baixo}><img src={Baixo} alt="Baixo" /></button>
          </div>
        <div className={styles.botoes_operacao}>
          <button className={styles.iniciar_button}><img src={Play} alt="play" />INICIAR CICLO</button>
          <button className={styles.recalibrar_button}><img src={Retorno} alt="retorno" />RECALIBRAR</button>
        </div>
      </section>
    </main>
  );
};

export default ControlePage;


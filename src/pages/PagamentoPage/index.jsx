import React from 'react';
import styles from './styles.module.css';
import confirm from '../../assets/icons/PagamentoPage/confirm.svg';
import caminhao from '../../assets/icons/PagamentoPage/caminhao.svg'
import email from '../../assets/icons/PagamentoPage/email.png'

const PAGE_NAME = 'Manual do Equipamento';

const ManualPage = () => {
  return (
    <main className={styles.container} role='main'>
        <div className={styles.content} >

            <div className={styles.confirmation}>
                <img src={confirm} alt='Confirmação de pagamento' />
            </div>

            <h1 className={styles.title}>Compra realizada com sucesso!</h1>

            <p className={styles.description}>Seu  pedido foi corfirmado e já está em <br />processamento.</p>

            <div className={styles.fundo}>
                <div className={styles.info}>
                    <div className={styles.pedido}>
                        <h2 className={styles.pd}>PEDIDO</h2>
                        <p className={styles.cod}>#123456</p>
                    </div>

                    <div className={styles.produto}>
                        <h2 className={styles.pd}>PRODUTO</h2>
                        <p className={styles.guincho}>Guincho Ever Rise</p>
                    </div>   

                </div>

                <hr />

                <div className={styles.entrega}>
                    <h2 className={styles.endereco}>ENDEREÇO DE ENTREGA</h2>
                    <p className={styles.rua}>Av. Paulista, 1000 - São Paulo, SP</p>
                </div>
                
                <hr />

                <div className={styles.entrega}>

                    <div>
                        <h2 className={styles.previsao}>PREVISÃO DE ENTRGA</h2>
                    </div>

                    <div className={styles.carrinho}>
                        <img src={caminhao} alt="caminhao" className={styles.caminhao} />
                        <p className={styles.dias}>2-5 Dias úteis</p>
                    </div>

                </div>

            </div>

            <div className={styles.gmail}>
                <img src={email} alt="" className={styles.foto}/>
                <p className={styles.atualizacoes}>Você receberá atualizações por e-mail</p>
            </div>

            <div className={styles.buttons}>
                <button className={styles.fundoButton}>
                    <p className={styles.button1}>Acompanhar pedido</p>
                </button>

                <button
                     className={styles.button2}>Voltar ao site
                </button>
            </div>


            

        </div>
    </main>
  );
};

export default ManualPage;


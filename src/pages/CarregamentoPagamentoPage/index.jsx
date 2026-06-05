import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./index.module.css";
import Seguranca from "../../assets/icons/CarregamentoPage/Segurança.svg";

const CarregamentoPagamentoPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/pagamento');
        }, 5000);

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <main className={styles.container} role="main">
            {/* Elementos de Background identicos ao do Checkout */}
            <div className={styles.waveTop} />
            <div className={styles.waveBottom} />

            <div className={styles.content}>
                <div className={styles.iconWrapper}>
                    <svg
                        className={styles.spinRing}
                        width="80"
                        height="80"
                        viewBox="0 0 80 80"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx="40" cy="40" r="34" stroke="#F0F5FB" strokeWidth="4" />
                        <path
                            d="M40 6 A34 34 0 0 1 74 40"
                            stroke="#4D00B5" /* Roxo do projeto */
                            strokeWidth="4"
                            strokeLinecap="round"
                        />
                    </svg>

                    <svg
                        className={styles.syncIcon}
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M1 4v6h6" stroke="#FEB42D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M23 20v-6h-6" stroke="#FEB42D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path
                            d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10M23 14l-4.64 4.36A9 9 0 0 1 3.51 15"
                            stroke="#FEB42D" /* Laranja do projeto */
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>

                <h2 className={styles.title}>Processando seu pagamento</h2>

                <p className={styles.description}>
                    Isso pode levar alguns segundos.
                    <br /> Não feche esta página.
                </p>

                <div className={styles.loader}>
                    <div className={styles.progress}></div>
                </div>

                <div className={styles.seguranca}>
                    <img src={Seguranca} alt="Ícone de segurança" />
                    <p className={styles.segurancaTexto}>Ambiente 100% Seguro</p>
                </div>
            </div>
        </main>
    );
};

export default CarregamentoPagamentoPage;
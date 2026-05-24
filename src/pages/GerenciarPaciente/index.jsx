import React from "react";
import styles from "./style.module.css";

const GerenciarPaciente = () => {
	return (
		<main className={styles.container}>
			<section className={styles.card}>
				<p className={styles.label}>Gestão de pacientes</p>
				<h1>Gerenciar Paciente</h1>
				<p className={styles.description}>
					Tela privada para consultar, editar e acompanhar pacientes.
				</p>
			</section>
		</main>
	);
};

export default GerenciarPaciente;

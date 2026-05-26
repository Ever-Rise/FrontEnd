import styles from "./style.module.css";
import iconNotificacao from "../../../assets/icons/Header-Dashboard/icon-notificacao.png";
import iconConfiguracoes from "../../../assets/icons/Header-Dashboard/icon-configuracoes.png";

const DEFAULT_AVATAR =
	"https://lh3.googleusercontent.com/aida-public/AB6AXuDbhq1nMWIycqtSqrfhgTBcuP1gWErV36j56IrJe-mjUW73d79kGzoqYlaX49RLwWYjS0M9Ky_Zd2STbykO467F7E9CV8UUeIchWqBKxlwpwG6AsCs6KUot7mz4SaHyzbQEjzmVl8e1HDX8RePsWx4qbEO4GKw6oAFv5J3_b5SuG6debP7mECcx4Mz9a8OLUs3bCmGAabdoOjVJiOD_DsNwX305I8G4urHyGRTf8MNxwzXH-MwYLhiTJv8cL0Rxz8CPR5QW75Y5vLlg";

export default function HeaderDashboard({
	title = "Relatórios",
	brandIcon,
	brandAlt = "Ícone do módulo",
	avatarSrc = DEFAULT_AVATAR,
	avatarAlt = "Perfil do usuário",
	onNotificationClick,
	onSettingsClick,
}) {
	return (
		<header className={styles.header}>
			<div className={styles.brand}>
				{brandIcon ? (
					<img className={styles.brandIcon} src={brandIcon} alt={brandAlt} />
				) : (
					<div className={styles.brandMark}>E</div>
				)}
				<div className={styles.titleWrap}>
					<h1>{title}</h1>
				</div>
			</div>

			<div className={styles.actions}>
				<button
					type="button"
					className={styles.iconButton}
					aria-label="Abrir notificações"
					onClick={onNotificationClick}
				>
					<img
						className={styles.iconImage}
						src={iconNotificacao}
						alt=""
						aria-hidden="true"
					/>
				</button>

				<button
					type="button"
					className={styles.iconButton}
					aria-label="Abrir configurações"
					onClick={onSettingsClick}
				>
					<img
						className={styles.iconImage}
						src={iconConfiguracoes}
						alt=""
						aria-hidden="true"
					/>
				</button>

				<img className={styles.avatar} src={avatarSrc} alt={avatarAlt} />
			</div>
		</header>
	);
}

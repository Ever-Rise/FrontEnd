import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const plans = [
    {
        name: "Essencial",
        price: "R$97,00",
        note: "/mês por usuário",
        features: [
            "Rastreamento básico",
            "Até 3 operadores",
            "Suporte por e-mail",
            "Relatórios mensais",
        ],
        action: "Começar agora",
        to: "/register",
        accent: false,
    },
    {
        name: "Profissional",
        price: "R$197,00",
        note: "/mês por usuário",
        features: [
            "Rastreamento em tempo real",
            "Operadores ilimitados",
            "Suporte prioritário 24/7",
            "Relatórios e alertas",
            "Integração via API",
        ],
        action: "Começar agora",
        to: "/register",
        accent: true,
    },
    {
        name: "Enterprise",
        price: "Custom",
        note: "sob consulta",
        features: [
            "Tudo do Profissional",
            "Onboarding dedicado",
            "SLA garantido",
            "White-label disponível",
        ],
        action: "Falar com vendas",
        to: "/vendas",
        accent: false,
    },
];

const PlansSection = () => {
    return (
        <section className={styles.section} aria-labelledby="plans-title">
            <div className={styles.container}>
                <p className={styles.kicker}>Planos</p>
                <h2 id="plans-title" className={styles.title}>
                    Escolha o plano ideal
                </h2>
                <p className={styles.description}>
                    Sem surpresas. Sem letras miúdas. Cancele quando quiser.
                </p>

                <div className={styles.grid}>
                    {plans.map((plan) => (
                        <article
                            key={plan.name}
                            className={`${styles.card} ${plan.accent ? styles.cardAccent : ""}`}
                        >
                            <p className={styles.planName}>{plan.name}</p>
                            <p className={styles.planNote}>{plan.note}</p>
                            <p className={styles.price}>{plan.price}</p>

                            <ul className={styles.features}>
                                {plan.features.map((feature) => (
                                    <li
                                        key={feature}
                                        className={styles.featureItem}
                                    >
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <Link to={plan.to} className={styles.action}>
                                {plan.action}
                            </Link>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PlansSection;

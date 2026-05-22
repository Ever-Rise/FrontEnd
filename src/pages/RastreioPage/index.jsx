import React from "react";
import styles from "./index.module.css";
import Header from "../../components/layout/Header";

const ORDER = {
    id: "#ER-2024-9982",
    breadcrumb: "Rastreamento Logístico Hospitalar",
    timeline: [
        {
            status: "done",
            label: "Pedido Enviado",
            title: "Centro de Distribuição\nEver Rise",
            meta: "Drivers: SR12 — Expresso Aéreo AX4402",
        },
        {
            status: "done",
            label: "Pedido Confirmado",
            title: "Pagamento Verificado",
            meta: "01/05/2024 20:43 Verificação\nautomatizada do sistema",
        },
        {
            status: "pending",
            label: "Em Trânsito",
            title: "Aguardando entrega",
            meta: "Previsão: 12/05/2024",
        },
    ],
    driver: {
        initials: "MS",
        label: "Entregador Responsável",
        name: "Marcello Silva",
    },
    address: {
        line1: "Av. Paulista, 1200 – Bela Vista",
        line2: "São Paulo, SP – 01310-100",
    },
    payment: {
        name: "Transferência Corporativa",
        sub: "ID da transação: #TX-4921-001",
        total: "R$ 14.500,00",
    },
    items: [
        {
            icon: "🏗️",
            name: "Guincho de transferência",
            lote: "SV-8826-001",
            qty: "01 unidade",
            price: "R$ 7.250,00",
        },
    ],
};

function CheckIcon() {
    return (
        <svg width="10" height="10" viewBox="0 0 9 9" fill="none">
            <path
                d="M1.5 4.5L3.5 6.5L7.5 2.5"
                stroke="#4ade80"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default function OrderTracking() {
    return (
        <>
            <Header />
            <div className={styles.page} style={{ paddingTop: "76px" }}>
                <div className={styles.inner}>
                    <p className={styles.breadcrumb}>{ORDER.breadcrumb}</p>
                    <div className={styles.pageHeaderRow}>
                        <h1 className={styles.pageTitle}>Pedido {ORDER.id}</h1>
                        <div className={styles.headerBtns}>
                            <button className={`${styles.hbtn} ${styles.blue}`}>
                                ↓ Nota Fiscal PDF
                            </button>
                            <button
                                className={`${styles.hbtn} ${styles.outline}`}
                            >
                                ↗ Compartilhar Atualizações
                            </button>
                        </div>
                    </div>

                    <div className={styles.outerCard}>
                        <div className={styles.mainGrid}>
                            {/* TIMELINE */}
                            <div className={styles.tlCard}>
                                <p className={styles.sectionLabel}>
                                    ↔ Histórico de Transporte
                                </p>
                                <div className={styles.tlList}>
                                    {ORDER.timeline.map((item, idx) => (
                                        <div
                                            key={idx}
                                            className={styles.tlItem}
                                        >
                                            <div
                                                className={`${styles.tlIcon} ${item.status === "done" ? styles.done : styles.pending}`}
                                            >
                                                {item.status === "done" && (
                                                    <CheckIcon />
                                                )}
                                            </div>
                                            <div className={styles.tlBody}>
                                                <p className={styles.tlLabel}>
                                                    {item.label}
                                                </p>
                                                <p
                                                    className={`${styles.tlTitle} ${item.status === "pending" ? styles.muted : ""}`}
                                                >
                                                    {item.title
                                                        .split("\n")
                                                        .map((line, i, arr) => (
                                                            <span key={i}>
                                                                {line}
                                                                {i <
                                                                    arr.length -
                                                                        1 && (
                                                                    <br />
                                                                )}
                                                            </span>
                                                        ))}
                                                </p>
                                                <p className={styles.tlMeta}>
                                                    {item.meta
                                                        .split("\n")
                                                        .map((line, i, arr) => (
                                                            <span key={i}>
                                                                {line}
                                                                {i <
                                                                    arr.length -
                                                                        1 && (
                                                                    <br />
                                                                )}
                                                            </span>
                                                        ))}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className={styles.driverRow}>
                                    <div className={styles.driverLeft}>
                                        <div className={styles.driverThumb}>
                                            {ORDER.driver.initials}
                                        </div>
                                        <div>
                                            <p className={styles.driverLbl}>
                                                {ORDER.driver.label}
                                            </p>
                                            <p className={styles.driverName}>
                                                {ORDER.driver.name}
                                            </p>
                                        </div>
                                    </div>
                                    <div className={styles.driverCall}>📞</div>
                                </div>
                            </div>

                            {/* RIGHT */}
                            <div className={styles.rightCol}>
                                <div className={styles.mapWrap}>
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.122782716492!2d-46.6917602!3d-23.528085899999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef8775663b04f%3A0x923835e9005f8309!2sSenac%20Lapa%20Tito!5e0!3m2!1spt-BR!2sbr!4v1778537052167!5m2!1spt-BR!2sbr"
                                        className={styles.mapIframe}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Senac Lapa Tito"
                                    />
                                </div>

                                <div className={styles.infoRow}>
                                    <div className={styles.infoCard}>
                                        <div className={styles.infoHdr}>
                                            <div className={styles.infoIco}>
                                                📍
                                            </div>
                                            <p className={styles.infoHdrLabel}>
                                                Endereço de Entrega
                                            </p>
                                        </div>
                                        <p className={styles.addrLine}>
                                            {ORDER.address.line1}
                                        </p>
                                        <p className={styles.addrLine}>
                                            {ORDER.address.line2}
                                        </p>
                                    </div>

                                    <div className={styles.infoCard}>
                                        <div className={styles.infoHdr}>
                                            <div className={styles.infoIco}>
                                                💳
                                            </div>
                                            <p className={styles.infoHdrLabel}>
                                                Método de Pagamento
                                            </p>
                                        </div>
                                        <div className={styles.payMethod}>
                                            <div className={styles.payIco}>
                                                🏦
                                            </div>
                                            <div>
                                                <p className={styles.payName}>
                                                    {ORDER.payment.name}
                                                </p>
                                                <p className={styles.paySub}>
                                                    {ORDER.payment.sub}
                                                </p>
                                            </div>
                                        </div>
                                        <div className={styles.payTotalRow}>
                                            <span
                                                className={styles.payTotalLbl}
                                            >
                                                Valor Total:
                                            </span>
                                            <span
                                                className={styles.payTotalVal}
                                            >
                                                {ORDER.payment.total}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.tableCard}>
                        <p className={styles.tableTitle}>Conteúdo do Pedido</p>
                        <table className={styles.items}>
                            <thead>
                                <tr>
                                    <th>Equipamentos &amp; Especificações</th>
                                    <th>Lote</th>
                                    <th>Quantidade</th>
                                    <th>Preço Unitário</th>
                                </tr>
                            </thead>
                            <tbody>
                                {ORDER.items.map((item, idx) => (
                                    <tr key={idx}>
                                        <td>
                                            <div className={styles.itemCell}>
                                                <div
                                                    className={
                                                        styles.itemIconBox
                                                    }
                                                >
                                                    {item.icon}
                                                </div>
                                                {item.name}
                                            </div>
                                        </td>
                                        <td>
                                            <span className={styles.loteBadge}>
                                                {item.lote}
                                            </span>
                                        </td>
                                        <td>{item.qty}</td>
                                        <td>{item.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

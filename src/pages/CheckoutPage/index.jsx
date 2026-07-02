import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./styles.module.css";
import Header from "../../components/layout/Header";

const CheckoutPage = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const plano = location.state?.plano ?? {
        name: "Guincho de Transferência Ever Rise",
        price: "R$ 14.850,00",
    };

    const [delivery, setDelivery] = React.useState("standard");
    const [paymentTab, setPaymentTab] = React.useState("card");
    const [formData, setFormData] = React.useState({
        nome: "",
        email: "",
        cpf: "",
        telefone: "",
        endereco: "",
        cep: "",
        numero: "",
        complemento: "",
        cardNumber: "",
        validade: "",
        cvv: "",
    });

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Dados do formulário:", { ...formData, delivery, paymentTab, plano });
        navigate("/carregamento-pagamento", { state: { plano } });
    };

    return (
        <main className={styles.container} role="main" style={{ paddingTop: "76px" }}>
            {/* Elementos de Background desenhados nativamente com CSS */}
            <div className={styles.waveTop} />
            <div className={styles.waveBottom} />

            <div className={styles.content}>
                <Header />
            </div>

            <section className={styles.page}>
                <div className={styles.layout}>
                    <form className={styles.left} id="checkout-form" onSubmit={handleSubmit}>
                        {/* Informações Pessoais */}
                        <h2 className={styles.sectionTitle}>Informações Pessoais</h2>

                        <div className={styles.formField}>
                            <label className={styles.label} htmlFor="nome">Nome Completo</label>
                            <input id="nome" className={styles.input} placeholder="Ex: Carlos Silva" value={formData.nome} onChange={handleInputChange} required />
                        </div>

                        <div className={styles.formField}>
                            <label className={styles.label} htmlFor="email">Email</label>
                            <input id="email" type="email" className={styles.input} placeholder="seu@email.com" value={formData.email} onChange={handleInputChange} required />
                        </div>

                        <div className={styles.formRow}>
                            <div className={styles.formField}>
                                <label className={styles.label} htmlFor="cpf">CPF</label>
                                <input id="cpf" className={styles.input} placeholder="000-000-000-00" value={formData.cpf} onChange={handleInputChange} required />
                            </div>
                            <div className={styles.formField}>
                                <label className={styles.label} htmlFor="telefone">Telefone</label>
                                <input id="telefone" type="tel" className={styles.input} placeholder="(11) 99999-9999" value={formData.telefone} onChange={handleInputChange} required />
                            </div>
                        </div>

                        {/* Endereço de Entrega */}
                        <h2 className={styles.sectionTitleSpaced}>Endereço de Entrega</h2>

                        <div className={styles.formField}>
                            <label className={styles.label} htmlFor="endereco">Endereço de Entrega</label>
                            <input id="endereco" className={styles.input} placeholder="Rua, avenida" value={formData.endereco} onChange={handleInputChange} required />
                        </div>

                        <div className={styles.formRow}>
                            <div className={styles.formField}>
                                <label className={styles.label} htmlFor="cep">CEP</label>
                                <input id="cep" className={styles.input} placeholder="000-00000" value={formData.cep} onChange={handleInputChange} required />
                            </div>
                            <div className={styles.formField}>
                                <label className={styles.label} htmlFor="numero">Número</label>
                                <input id="numero" type="number" className={styles.input} placeholder="0" value={formData.numero} onChange={handleInputChange} required />
                            </div>
                        </div>

                        <div className={styles.formField}>
                            <label className={styles.label} htmlFor="complemento">Complemento</label>
                            <input id="complemento" className={styles.input} placeholder="bloco" value={formData.complemento} onChange={handleInputChange} />
                        </div>

                        {/* Forma de Entrega */}
                        <h2 className={styles.sectionTitleSpaced}>Forma de Entrega</h2>

                        <div className={styles.deliveryOptions}>
                            <label className={`${styles.deliveryOption} ${delivery === "standard" ? styles.selected : ""}`}>
                                <input type="radio" name="delivery" value="standard" checked={delivery === "standard"} onChange={(e) => setDelivery(e.target.value)} style={{ display: "none" }} />
                                <div className={styles.deliveryOptionHeader}>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <rect x="1" y="3" width="15" height="13" />
                                        <path d="M16 8h4l3 3v5h-7V8z" />
                                        <circle cx="5.5" cy="18.5" r="2.5" />
                                        <circle cx="18.5" cy="18.5" r="2.5" />
                                    </svg>
                                    Standard
                                </div>
                                <div className={styles.deliveryMeta}>5-8 dias úteis</div>
                                <div className={`${styles.deliveryPrice} ${styles.deliveryPriceFree}`}>Grátis</div>
                            </label>

                            <label className={`${styles.deliveryOption} ${delivery === "express" ? styles.selected : ""}`}>
                                <input type="radio" name="delivery" value="express" checked={delivery === "express"} onChange={(e) => setDelivery(e.target.value)} style={{ display: "none" }} />
                                <div className={styles.deliveryOptionHeader}>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                                    </svg>
                                    Express
                                </div>
                                <div className={styles.deliveryMeta}>1-2 dias úteis</div>
                                <div className={styles.deliveryPrice}>R$ 45,00</div>
                            </label>
                        </div>

                        {/* Pagamento */}
                        <h2 className={styles.sectionTitleSpaced}>Pagamento</h2>

                        <div className={styles.paymentTabs}>
                            <button type="button" className={`${styles.paymentTab} ${paymentTab === "card" ? styles.active : ""}`} onClick={() => setPaymentTab("card")}>
                                💳 Cartão de Crédito
                            </button>
                            <button type="button" className={`${styles.paymentTab} ${paymentTab === "pix" ? styles.active : ""}`} onClick={() => setPaymentTab("pix")}>
                                ⚡ PIX
                            </button>
                            <button type="button" className={`${styles.paymentTab} ${paymentTab === "boleto" ? styles.active : ""}`} onClick={() => setPaymentTab("boleto")}>
                                🧾 Boleto
                            </button>
                        </div>

                        {paymentTab === "card" && (
                            <>
                                <div className={styles.formField}>
                                    <label className={styles.label} htmlFor="cardNumber">Número do Cartão</label>
                                    <input id="cardNumber" className={styles.input} placeholder="0000 0000 0000 0000" value={formData.cardNumber} onChange={handleInputChange} required />
                                </div>
                                <div className={styles.formRow}>
                                    <div className={styles.formField}>
                                        <label className={styles.label} htmlFor="validade">Validade</label>
                                        <input id="validade" className={styles.input} placeholder="MM/AA" value={formData.validade} onChange={handleInputChange} required />
                                    </div>
                                    <div className={styles.formField}>
                                        <label className={styles.label} htmlFor="cvv">CVV</label>
                                        <input id="cvv" className={styles.input} placeholder="123" value={formData.cvv} onChange={handleInputChange} required />
                                    </div>
                                </div>
                            </>
                        )}

                        {paymentTab === "pix" && (
                            <div className={styles.formField}>
                                <p style={{ color: "rgba(0,0,0,0.45)", fontSize: 14, lineHeight: 1.6 }}>
                                    Após confirmar, você receberá o QR Code para pagamento via PIX.
                                </p>
                            </div>
                        )}

                        {paymentTab === "boleto" && (
                            <div className={styles.formField}>
                                <p style={{ color: "rgba(0,0,0,0.45)", fontSize: 14, lineHeight: 1.6 }}>
                                    O boleto será gerado após a confirmação. Prazo de 3 dias úteis para compensação.
                                </p>
                            </div>
                        )}
                    </form>

                    <aside className={styles.right}>
                        <section className={styles.orderCard}>
                            <div className={styles.productRow}>
                                <div className={styles.productThumb}>🏗️</div>
                                <div className={styles.productInfo}>
                                    <div className={styles.productName}>
                                        {plano.name} {plano.nameSuffix ?? ""}
                                    </div>
                                    <div className={styles.inStock}>Em estoque</div>
                                </div>
                            </div>

                            <div className={styles.summaryRows}>
                                <div className={styles.summaryRow}>
                                    <span>Subtotal</span>
                                    <span className={styles.summaryRowValue}>{plano.price}</span>
                                </div>
                                <div className={styles.summaryRow}>
                                    <span>Frete</span>
                                    <span className={styles.summaryRowFree}>Grátis</span>
                                </div>
                                <div className={styles.summaryRow}>
                                    <span>Impostos</span>
                                    <span className={styles.summaryRowInc}>Inclusos</span>
                                </div>
                                <div className={styles.divider} />
                                <div className={styles.totalRow}>
                                    <span>Total</span>
                                    <span className={styles.totalValue}>{plano.price}</span>
                                </div>
                            </div>

                            <button type="submit" form="checkout-form" className={styles.checkoutBtn}>
                                Finalizar Pagamento
                            </button>
                        </section>

                        <section className={styles.supportCard}>
                            <div className={styles.supportIcon}>🛡️</div>
                            <div>
                                <div className={styles.supportTitle}>Suporte Técnico Prioritário</div>
                                <div className={styles.supportText}>
                                    Ao finalizar este pedido, você recebe 1 ano de suporte dedicado 24/7 para sua instituição.
                                </div>
                            </div>
                        </section>
                    </aside>
                </div>
            </section>
        </main>
    );
};

export default CheckoutPage;
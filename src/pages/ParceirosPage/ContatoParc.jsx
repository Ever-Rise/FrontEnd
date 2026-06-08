import { useState } from "react";
import './ContatoParc.css'
import { Footer, Header } from "../../components";


const LogoIcon = () => (
  <svg viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0" y="8" width="4" height="16" rx="2" fill="#f59e0b"/>
    <rect x="7" y="4" width="4" height="20" rx="2" fill="#5b21b6"/>
    <rect x="14" y="0" width="4" height="24" rx="2" fill="#5b21b6"/>
    <rect x="21" y="4" width="4" height="20" rx="2" fill="#5b21b6"/>
    <rect x="28" y="8" width="4" height="16" rx="2" fill="#f59e0b"/>
  </svg>
);

const steps = [
  { id: 1, label: "Informações\nda empresa" },
  { id: 2, label: "Contato\nprincipal" },
  { id: 3, label: "Sobre sua\nempresa" },
  { id: 4, label: "Finalização" },
];

const segmentos = ["Tecnologia", "Educação", "Saúde", "Financeiro", "Varejo", "Serviços", "Indústria", "Outro"];
const tamanhos = ["Microempresa (1–9)", "Pequena (10–49)", "Média (50–249)", "Grande (250+)"];
const comoConheceu = ["Google / Busca orgânica", "LinkedIn", "Indicação", "Evento", "Redes sociais", "Outro"];
const regioes = ["Norte", "Nordeste", "Centro-Oeste", "Sudeste", "Sul", "Todo o Brasil", "Internacional"];

export default function BluenotesParceiros() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    // Step 1
    nomeEmpresa: "", cnpj: "", segmento: "", tamanho: "", site: "", descricao: "",
    // Step 2
    nomeContato: "", cargo: "", email: "", telefone: "", linkedin: "",
    // Step 3
    comoConheceu: "", motivacao: "", solucoes: "", regioes: "",
    // Step 4
    aceite: false,
  });

  const set = (k) => (e) => {
    const val = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setForm((f) => ({ ...f, [k]: val }));
  };

  const next = () => setStep((s) => Math.min(s + 1, 4));
  const back = () => setStep((s) => Math.max(s - 1, 1));

  const cnpjMask = (v) => {
    v = v.replace(/\D/g, "").slice(0, 14);
    if (v.length > 12) v = v.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, "$1.$2.$3/$4-$5");
    else if (v.length > 8) v = v.replace(/^(\d{2})(\d{3})(\d{3})(\d+)$/, "$1.$2.$3/$4");
    else if (v.length > 5) v = v.replace(/^(\d{2})(\d{3})(\d+)$/, "$1.$2.$3");
    else if (v.length > 2) v = v.replace(/^(\d{2})(\d+)$/, "$1.$2");
    return v;
  };

  const phoneMask = (v) => {
    v = v.replace(/\D/g, "").slice(0, 11);
    if (v.length > 6) v = v.replace(/^(\d{2})(\d{5})(\d+)$/, "($1) $2-$3");
    else if (v.length > 2) v = v.replace(/^(\d{2})(\d+)$/, "($1) $2");
    return v;
  };

  return (
    <>
      <div className="page">
        {/* NAV */}
        {/* <Header /> */}

        {/* MAIN */}
        <div className="main">
          {/* LEFT */}
          <div className="left">
            <p className="eyebrow">Torne-se um parceiro</p>
            <h1 className="headline">
              Vamos crescer
              <span className="headline-accent"> juntos.</span>
            </h1>
            <p className="subtext">
              Preencha o formulário abaixo e nossa equipe<br />
              entrará em contato para darmos início à parceria.
            </p>

            {/* STEPPER */}
            <div className="stepper">
              {steps.map((s, i) => (
                <div key={s.id} className="step-item">
                  {i < steps.length - 1 && (
                    <div className={`step-connector${step > s.id ? " done" : ""}`} />
                  )}
                  <div className={`step-circle${step === s.id ? " active" : step > s.id ? " done" : ""}`}>
                    {step > s.id ? (
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M2 7L5.5 10.5L12 3.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ) : s.id}
                  </div>
                  <div className={`step-label${step === s.id ? " active" : step > s.id ? " done" : ""}`}>
                    {s.label.split("\n").map((l,i)=><span key={i}>{l}<br/></span>)}
                  </div>
                </div>
              ))}
            </div>

            {/* FORM CONTENT */}
            {!submitted ? (
              <>
                {step === 1 && (
                  <div className="form-section">
                    <h2>Informações da empresa</h2>
                    <div className="field-grid">
                      <div className="field">
                        <label>Nome da empresa</label>
                        <input value={form.nomeEmpresa} onChange={set("nomeEmpresa")} placeholder="Digite o nome da empresa" />
                      </div>
                      <div className="field">
                        <label>CNPJ</label>
                        <input value={form.cnpj} onChange={e => setForm(f=>({...f,cnpj:cnpjMask(e.target.value)}))} placeholder="00.000.000/0000-00" />
                      </div>
                    </div>
                    <div className="field-grid">
                      <div className="field">
                        <label>Segmento de atuação</label>
                        <div className="field-select-wrap">
                          <select value={form.segmento} onChange={set("segmento")}>
                            <option value="">Selecione o segmento</option>
                            {segmentos.map(s=><option key={s}>{s}</option>)}
                          </select>
                        </div>
                      </div>
                      <div className="field">
                        <label>Tamanho da empresa</label>
                        <div className="field-select-wrap">
                          <select value={form.tamanho} onChange={set("tamanho")}>
                            <option value="">Selecione o tamanho</option>
                            {tamanhos.map(t=><option key={t}>{t}</option>)}
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="field field-full">
                      <label>Site da empresa (opcional)</label>
                      <input value={form.site} onChange={set("site")} placeholder="https://www.suaempresa.com.br" />
                    </div>
                    <div className="field field-full">
                      <label>Descrição da empresa</label>
                      <textarea value={form.descricao} onChange={set("descricao")} placeholder="Conte um pouco sobre sua empresa, seus produtos ou serviços e o que fazem de especial." maxLength={500} />
                      <div className="char-count">{form.descricao.length}/500</div>
                    </div>
                    <div className="form-actions single">
                      <button className="btn-next" onClick={next}>
                        Próximo passo
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </button>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="form-section">
                    <h2>Contato principal</h2>
                    <p className="form-desc">Informe os dados da pessoa de contato responsável pela parceria.</p>
                    <div className="field-grid">
                      <div className="field">
                        <label>Nome completo</label>
                        <input value={form.nomeContato} onChange={set("nomeContato")} placeholder="Digite o nome completo" />
                      </div>
                      <div className="field">
                        <label>Cargo</label>
                        <input value={form.cargo} onChange={set("cargo")} placeholder="Digite o cargo" />
                      </div>
                    </div>
                    <div className="field-grid">
                      <div className="field">
                        <label>E-mail corporativo</label>
                        <input type="email" value={form.email} onChange={set("email")} placeholder="seu.email@empresa.com.br" />
                      </div>
                      <div className="field">
                        <label>Telefone / WhatsApp</label>
                        <input value={form.telefone} onChange={e => setForm(f=>({...f,telefone:phoneMask(e.target.value)}))} placeholder="(00) 00000-0000" />
                      </div>
                    </div>
                    <div className="field field-full">
                      <label>LinkedIn (opcional)</label>
                      <input value={form.linkedin} onChange={set("linkedin")} placeholder="https://www.linkedin.com/in/seuperfil" />
                    </div>
                    <div className="form-actions">
                      <button className="btn-back" onClick={back}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M13 8H3M7 12l-4-4 4-4" stroke="#5b21b6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        Voltar
                      </button>
                      <button className="btn-next" onClick={next}>
                        Próximo passo
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </button>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="form-section">
                    <h2>Sobre sua empresa</h2>
                    <p className="form-desc">Conte mais sobre o seu negócio e como ele se conecta com a Bluenotes.</p>
                    <div className="field field-full">
                      <label>Como você conheceu a Bluenotes?</label>
                      <div className="field-select-wrap">
                        <select value={form.comoConheceu} onChange={set("comoConheceu")}>
                          <option value="">Selecione uma opção</option>
                          {comoConheceu.map(c=><option key={c}>{c}</option>)}
                        </select>
                      </div>
                    </div>
                    <div className="field field-full">
                      <label>Por que deseja se tornar um parceiro?</label>
                      <textarea value={form.motivacao} onChange={set("motivacao")} placeholder="Conte-nos seus objetivos e o que te motivou a buscar essa parceria." maxLength={500} />
                      <div className="char-count">{form.motivacao.length}/500</div>
                    </div>
                    <div className="field field-full">
                      <label>Quais soluções ou serviços você oferece?</label>
                      <textarea value={form.solucoes} onChange={set("solucoes")} placeholder="Descreva as soluções, produtos ou serviços que sua empresa oferece." maxLength={500} />
                      <div className="char-count">{form.solucoes.length}/500</div>
                    </div>
                    <div className="field field-full">
                      <label>Quais regiões sua empresa atua?</label>
                      <div className="field-select-wrap">
                        <select value={form.regioes} onChange={set("regioes")}>
                          <option value="">Selecione as regiões de atuação</option>
                          {regioes.map(r=><option key={r}>{r}</option>)}
                        </select>
                      </div>
                    </div>
                    <div className="form-actions">
                      <button className="btn-back" onClick={back}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M13 8H3M7 12l-4-4 4-4" stroke="#5b21b6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        Voltar
                      </button>
                      <button className="btn-next" onClick={next}>
                        Próximo passo
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </button>
                    </div>
                  </div>
                )}

                {step === 4 && (
                  <div className="form-section">
                    <h2>Finalização</h2>
                    <p className="form-desc">Revise as informações e envie sua solicitação de parceria.</p>
                    <div className="info-card">
                      <div className="info-card-icon purple">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                          <path d="M4 4h14v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" stroke="#5b21b6" strokeWidth="1.8"/>
                          <path d="M8 10h6M8 13h4" stroke="#5b21b6" strokeWidth="1.8" strokeLinecap="round"/>
                          <path d="M8 7h6" stroke="#5b21b6" strokeWidth="1.8" strokeLinecap="round"/>
                        </svg>
                      </div>
                      <div>
                        <h4>Resumo da solicitação</h4>
                        <p>Confira se todas as informações estão corretas. Nossa equipe irá analisar sua solicitação e entrar em contato em até 3 dias úteis.</p>
                      </div>
                    </div>
                    <div className="info-card">
                      <div className="info-card-icon yellow">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                          <rect x="3" y="4" width="16" height="13" rx="2" stroke="#f59e0b" strokeWidth="1.8"/>
                          <path d="M3 8l8 5 8-5" stroke="#f59e0b" strokeWidth="1.8" strokeLinecap="round"/>
                        </svg>
                      </div>
                      <div>
                        <h4>Próximos passos</h4>
                        <p>Após o envio, você receberá um e-mail de confirmação. Em breve, entraremos em contato para alinharmos os próximos passos da parceria.</p>
                      </div>
                    </div>
                    <div className="checkbox-row">
                      <input type="checkbox" id="aceite" checked={form.aceite} onChange={set("aceite")} />
                      <label htmlFor="aceite">
                        Confirmo que todas as informações fornecidas são verdadeiras e autorizo a Bluenotes a entrar em contato através dos dados informados.
                      </label>
                    </div>
                    <div className="form-actions">
                      <button className="btn-back" onClick={back}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M13 8H3M7 12l-4-4 4-4" stroke="#5b21b6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        Voltar
                      </button>
                      <button className="btn-next btn-send" onClick={() => form.aceite && setSubmitted(true)} style={{opacity: form.aceite ? 1 : .5}}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M14 2L7 9M14 2L9 14l-2-5-5-2 12-5z" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        Enviar solicitação
                      </button>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="success-wrap">
                <div className="success-icon">
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <path d="M7 18L14 25L29 10" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h2>Solicitação enviada com sucesso! 🎉</h2>
                <p>Nossa equipe entrará em contato em até 3 dias úteis.<br/>Verifique seu e-mail para a confirmação.</p>
              </div>
            )}
          </div>

          {/* SIDEBAR */}
          <div className="sidebar">
            <div className="sidebar-card">
              <h3>Por que se tornar um parceiro Bluenotes?</h3>
              {[
                { icon: "violet", label: "Cresça com a gente", desc: "Tenha acesso a oportunidades exclusivas e aumente sua receita.", svg: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="9" cy="7" r="3" stroke="#5b21b6" strokeWidth="1.8"/><circle cx="15" cy="9" r="2.5" stroke="#5b21b6" strokeWidth="1.8"/><path d="M2 18c0-3.314 3.134-6 7-6s7 2.686 7 6" stroke="#5b21b6" strokeWidth="1.8" strokeLinecap="round"/><path d="M15 13c2.21.67 4 2.686 4 5" stroke="#5b21b6" strokeWidth="1.8" strokeLinecap="round"/></svg> },
                { icon: "yellow", label: "Benefícios exclusivos", desc: "Descontos, comissões e condições especiais para parceiros.", svg: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M11 2l2.4 7.2H21l-6.2 4.5 2.4 7.3L11 16.5l-6.2 4.5 2.4-7.3L1 9.2h7.6L11 2z" stroke="#f59e0b" strokeWidth="1.8" strokeLinejoin="round"/></svg> },
                { icon: "orange", label: "Suporte dedicado", desc: "Conte com nosso time para te ajudar em cada etapa.", svg: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M11 3a8 8 0 100 16A8 8 0 0011 3z" stroke="#ea580c" strokeWidth="1.8"/><path d="M8 13s1.5 2 3 2 3-2 3-2" stroke="#ea580c" strokeWidth="1.8" strokeLinecap="round"/><circle cx="8.5" cy="9.5" r="1" fill="#ea580c"/><circle cx="13.5" cy="9.5" r="1" fill="#ea580c"/></svg> },
                { icon: "dark", label: "Tecnologia de ponta", desc: "Ofereça o que há de melhor em soluções inovadoras para seus clientes.", svg: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><rect x="3" y="5" width="16" height="11" rx="2" stroke="#fff" strokeWidth="1.8"/><path d="M8 19h6M11 16v3" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"/><path d="M7 9l2 2 4-4" stroke="#f59e0b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg> },
              ].map(b => (
                <div key={b.label} className="benefit-item">
                  <div className={`benefit-icon ${b.icon}`}>{b.svg}</div>
                  <div className="benefit-text">
                    <h4>{b.label}</h4>
                    <p>{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="doubts-card">
              <h4>Dúvidas?</h4>
              <p>Fale com nosso time de parcerias e tire suas dúvidas.</p>
              <button className="btn-contact">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><rect x="1" y="3" width="13" height="9" rx="1.5" stroke="#5b21b6" strokeWidth="1.5"/><path d="M1 5l6.5 4L14 5" stroke="#5b21b6" strokeWidth="1.5" strokeLinecap="round"/></svg>
                Contato para parcerias
              </button>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <footer className="footer">
          <div className="footer-logo">
            <LogoIcon />
            Bluenotes
          </div>
          <span className="footer-copy">© 2024 Bluenotes. Todos os direitos reservados.</span>
          <div className="footer-social">
            {/* LinkedIn */}
            <a href="#"><svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor"><path d="M2 2h4v14H2zM4 0a2 2 0 110 4A2 2 0 014 0zM8 6h3.5v2h.1C12 7 13.2 6 15 6c3.3 0 4 2.2 4 5v5h-4v-4.5c0-1.1-.02-2.5-1.5-2.5-1.5 0-1.7 1.2-1.7 2.4V16H8V6z" transform="scale(0.9)"/></svg></a>
            {/* Instagram */}
            <a href="#"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>
            {/* YouTube */}
            <a href="#"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg></a>
          </div>
        </footer>
      </div>
    </>
  );
}
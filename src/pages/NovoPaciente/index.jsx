import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderDashboard from "../../components/layout/Header-Dashboard";
import iconBadge from "../../assets/icons/NovoPaciente/icon-badge.svg";
import iconBotaoSalvar from "../../assets/icons/NovoPaciente/icon-botao-salvar.svg";
import iconCPF from "../../assets/icons/NovoPaciente/icon-cpf.svg";
import iconCondicoes from "../../assets/icons/NovoPaciente/icon-condicoes.svg";
import iconData from "../../assets/icons/NovoPaciente/icon-data.svg";
import iconDadosPessoais from "../../assets/icons/NovoPaciente/icon-dados-pessoais.svg";
import iconDocumentacao from "../../assets/icons/NovoPaciente/icon-documentacao.svg";
import iconEmail from "../../assets/icons/NovoPaciente/icon-email.svg";
import iconInformacoesClinicas from "../../assets/icons/NovoPaciente/icon-informacoes-clinicas.svg";
import iconNome from "../../assets/icons/NovoPaciente/icon-nome.svg";
import iconObservacoes from "../../assets/icons/NovoPaciente/icon-observacoes.svg";
import iconTelefone from "../../assets/icons/NovoPaciente/icon-telefone.svg";
import iconUpload from "../../assets/icons/NovoPaciente/icon-upload.svg";
import iconVoltar from "../../assets/icons/NovoPaciente/icon-voltar.svg";
import styles from "./style.module.css";

export default function NewPatient() {
  const navigate = useNavigate();
  const [gender, setGender] = useState("Feminino");
  const [status, setStatus] = useState("Aguardando Triagem");

  const genders = ["Feminino", "Masculino", "Outro", "Não Informar"];

  const statusList = ["Aguardando Triagem", "Em Espera"];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <HeaderDashboard
          title="Novo Paciente"
        />

        <div className={styles.pageHeader}>
          <button type="button" className={styles.backButton} onClick={() => navigate("/gerenciar-paciente")}>
            <img src={iconVoltar} alt="" aria-hidden="true" />
            Voltar
          </button>

          <button type="button" className={styles.heroIcon} aria-label="Cadastro de paciente">
            <img src={iconBadge} alt="" aria-hidden="true" />
          </button>
        </div>

        <div className={styles.titleBlock}>
          <h1>Novo Paciente</h1>
          <p>Cadastre um novo paciente na plataforma Ever Rise.</p>
        </div>

        <form className={styles.card} onSubmit={handleSubmit}>
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionIcon}>
                <img src={iconDadosPessoais} alt="" aria-hidden="true" />
              </span>
              <h2>Dados Pessoais</h2>
            </div>

            <div className={styles.grid}>
              <div className={styles.fieldWide}>
                <label htmlFor="nome">Nome Completo</label>
                <div className={styles.inputWrap}>
                  <img src={iconNome} alt="" aria-hidden="true" />
                  <input id="nome" type="text" placeholder="Ex: Maria Oliveira Santos" />
                </div>
              </div>

              <div className={styles.fieldWide}>
                <label htmlFor="email">E-mail</label>
                <div className={styles.inputWrap}>
                  <img src={iconEmail} alt="" aria-hidden="true" />
                  <input id="email" type="email" placeholder="maria.oliveira@email.com" />
                </div>
              </div>

              <div>
                <label htmlFor="cpf">CPF</label>
                <div className={styles.inputWrap}>
                  <img src={iconCPF} alt="" aria-hidden="true" />
                  <input id="cpf" type="text" placeholder="000.000.000-00" />
                </div>
              </div>

              <div>
                <label htmlFor="nascimento">Data de Nascimento</label>
                <div className={styles.inputWrap}>
                  <img src={iconData} alt="" aria-hidden="true" />
                  <input id="nascimento" type="text" placeholder="mm/dd/yyyy" />
                </div>
              </div>

              <div>
                <label htmlFor="telefone">Telefone</label>
                <div className={styles.inputWrap}>
                  <img src={iconTelefone} alt="" aria-hidden="true" />
                  <input id="telefone" type="tel" placeholder="(11) 99999-9999" />
                </div>
              </div>

              <div className={styles.fullWidth}>
                <label>Sexo</label>
                <div className={styles.pillGroup}>
                  {genders.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setGender(item)}
                      className={gender === item ? styles.pillActive : styles.pill}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <div className={styles.divider} />

          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionIcon}>
                <img src={iconInformacoesClinicas} alt="" aria-hidden="true" />
              </span>
              <h2>Informações Clínicas</h2>
            </div>

            <div className={styles.gridClinical}>
              <div className={styles.fieldWide}>
                <label htmlFor="clinica">Clínica Vinculada</label>
                <div className={styles.inputWrap}>
                  <img src={iconBadge} alt="" aria-hidden="true" />
                  <select id="clinica" defaultValue="Unidade Central Ever Rise">
                    <option>Unidade Central Ever Rise</option>
                    <option>Unidade Norte Ever Rise</option>
                    <option>Unidade Sul Ever Rise</option>
                  </select>
                </div>
              </div>

              <div>
                <label>Status Inicial</label>
                <div className={styles.statusGroup}>
                  {statusList.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setStatus(item)}
                      className={status === item ? styles.statusActive : styles.status}
                    >
                      <span className={styles.dot} />
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <div className={styles.fullWidth}>
                <label htmlFor="condicoes">Condições Pré-existentes</label>
                <div className={styles.textareaWrap}>
                  <img src={iconCondicoes} alt="" aria-hidden="true" />
                  <textarea
                    id="condicoes"
                    rows="3"
                    placeholder="Descreva diagnósticos, alergias ou cirurgias prévias..."
                  />
                </div>
              </div>

              <div className={styles.fullWidth}>
                <label htmlFor="observacoes">Observações Gerais</label>
                <div className={styles.textareaWrap}>
                  <img src={iconObservacoes} alt="" aria-hidden="true" />
                  <textarea
                    id="observacoes"
                    rows="2"
                    placeholder="Notas adicionais sobre o perfil do paciente..."
                  />
                </div>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionIcon}>
                <img src={iconDocumentacao} alt="" aria-hidden="true" />
              </span>
              <h2>Documentação Auxiliar</h2>
            </div>

            <div className={styles.uploadArea}>
              <div className={styles.uploadBubble}>
                <img src={iconUpload} alt="" aria-hidden="true" />
              </div>
              <h3>Arraste arquivos ou clique para enviar</h3>
              <p>PDF, JPG, PNG (máx 10MB)</p>
            </div>
          </section>

          <div className={styles.footerActions}>
            <button type="button" className={styles.cancelButton}>
              Cancelar
            </button>

            <button type="submit" className={styles.saveButton}>
              <img src={iconBotaoSalvar} alt="" aria-hidden="true" />
              Salvar Paciente
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
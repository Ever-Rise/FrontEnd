import { useState } from "react";
import {
  AreaChart, Area,
  LineChart, Line,
  XAxis, YAxis,
  CartesianGrid, Tooltip,
  ResponsiveContainer,
} from "recharts";
import styles from "./Graficos.module.css";

const desempenhoData = [
  { mes: "Jan", velocidade: 2.1, temperatura: 30, pressao: 1.8 },
  { mes: "Fev", velocidade: 3.8, temperatura: 45, pressao: 2.5 },
  { mes: "Mar", velocidade: 5.2, temperatura: 38, pressao: 3.1 },
  { mes: "Abr", velocidade: 2.4, temperatura: 52, pressao: 1.5 },
  { mes: "Mai", velocidade: 4.6, temperatura: 41, pressao: 2.8 },
];

const energiaData = [
  { hora: "13:00", watts: 120 },
  { hora: "14:00", watts: 180 },
  { hora: "15:00", watts: 95 },
  { hora: "16:00", watts: 210 },
  { hora: "17:00", watts: 160 },
  { hora: "18:00", watts: 140 },
];

const opcoes = ["Velocidade (m/s)", "Temperatura (°C)", "Pressão (bar)"];
const chaveOpcao = {
  "Velocidade (m/s)": "velocidade",
  "Temperatura (°C)": "temperatura",
  "Pressão (bar)": "pressao",
};

const TooltipCustom = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className={styles.tooltip}>
        <p className={styles.tooltip_label}>{label}</p>
        <p className={styles.tooltip_valor}>{payload[0].value}</p>
      </div>
    );
  }
  return null;
};

const PontoCustom = (props) => {
  const { cx, cy, index } = props;
  if (![0, 2, 3].includes(index)) return null;
  return <circle cx={cx} cy={cy} r={5} fill="#0f1623" stroke="#fff" strokeWidth={2} />;
};

export default function Graficos() {
  const [opcaoSelecionada, setOpcaoSelecionada] = useState("Velocidade (m/s)");
  const [dropdownAberto, setDropdownAberto] = useState(false);
  const chaveAtual = chaveOpcao[opcaoSelecionada];

  return (
    <div className={styles.container}>

      {/* GRÁFICO 1 - DESEMPENHO */}
      <div className={styles.card}>
        <div className={styles.card_header}>
          <h3 className={styles.card_titulo}>Desempenho</h3>

          <div className={styles.dropdown_wrapper}>
            <button
              className={styles.dropdown_btn}
              onClick={() => setDropdownAberto(!dropdownAberto)}
            >
              {opcaoSelecionada} <span>▼</span>
            </button>

            {dropdownAberto && (
              <div className={styles.dropdown_menu}>
                {opcoes.map(op => (
                  <div
                    key={op}
                    className={`${styles.dropdown_item} ${op === opcaoSelecionada ? styles.dropdown_item_ativo : ""}`}
                    onClick={() => { setOpcaoSelecionada(op); setDropdownAberto(false); }}
                  >
                    {op}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <ResponsiveContainer width="100%" height={380}>
          <LineChart data={desempenhoData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
            <XAxis dataKey="mes" tick={{ fontSize: 16, fill: "#000000" }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 16, fill: "#000000" }} axisLine={false} tickLine={false} />
            <Tooltip content={<TooltipCustom />} />
            <Line
              type="monotone"
              dataKey={chaveAtual}
              stroke="#9b8fe8"
              strokeWidth={2.5}
              dot={<PontoCustom />}
              activeDot={{ r: 6, fill: "#9b8fe8", stroke: "#fff", strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* GRÁFICO 2 - USO DE ENERGIA */}
      <div className={styles.card}>
        <div className={styles.card_header}>
          <h3 className={styles.card_titulo}>Uso de Energia</h3>
        </div>

        <ResponsiveContainer width="100%" height={380}>
          <AreaChart data={energiaData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="gradienteEnergia" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#9b8fe8" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#9b8fe8" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
            <XAxis dataKey="hora" tick={{ fontSize: 16, fill: "#000000" }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 16, fill: "#000000" }} axisLine={false} tickLine={false} />
            <Tooltip content={<TooltipCustom />} />
            <Area
              type="monotone"
              dataKey="watts"
              stroke="#9b8fe8"
              strokeWidth={2.5}
              fill="url(#gradienteEnergia)"
              dot={false}
              activeDot={{ r: 6, fill: "#9b8fe8", stroke: "#fff", strokeWidth: 2 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}
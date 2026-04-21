import{d as U,u as W,a as Q,f as V,s as H,l as J,c as K,E as i,y as n,r as X,j as t}from"./index-kd5TcCjy.js";const Y=()=>{const e=U.c(9),o=W(),a=Q(Z);let s,r,l;e[0]!==o?(s=()=>o(V()),r=F=>o(H(F)),l=()=>o(J()),e[0]=o,e[1]=s,e[2]=r,e[3]=l):(s=e[1],r=e[2],l=e[3]);let c;return e[4]!==a||e[5]!==s||e[6]!==r||e[7]!==l?(c={...a,fetchGuincho:s,sendCommand:r,listenTelemetry:l},e[4]=a,e[5]=s,e[6]=r,e[7]=l,e[8]=c):c=e[8],c};function Z(e){return e.guincho}const ee=()=>{const e=U.c(5),o=W(),a=Q(te);let s;e[0]!==o?(s=()=>o(K()),e[0]=o,e[1]=s):s=e[1];let r;return e[2]!==s||e[3]!==a?(r={...a,connect:s},e[2]=s,e[3]=a,e[4]=r):r=e[4],r};function te(e){return e.telemetry}const re=e=>`${Number(e??0).toFixed(0)}%`,oe=e=>e?new Intl.DateTimeFormat("pt-BR",{dateStyle:"short",timeStyle:"medium"}).format(new Date(e)):"-",se=e=>({[i.DESLIGADO]:"Desligado",[i.PRONTO]:"Pronto",[i.EM_MOVIMENTO]:"Em movimento",[i.PAUSADO]:"Pausado",[i.ERRO]:"Erro",[i.EMERGENCIA]:"Emergencia"})[e]||"Desconhecido",ne=n.main.attrs({role:"main"})`
  margin: 0 auto;
  max-width: 1200px;
  padding: 2rem 1rem 4rem;
`,ae=n.header`
  margin-bottom: 1.5rem;
`,le=n.h1`
  color: ${({theme:e})=>e.colors.balticBlue};
  font-family: ${({theme:e})=>e.fonts.display};
  font-size: clamp(1.4rem, 3vw, 2.1rem);
`,ie=n.p`
  color: ${({theme:e})=>e.colors.graphite};
`,ce=n.section.attrs({role:"region"})`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
`,S=n.article`
  background: #fff;
  border: 1px solid ${({theme:e})=>e.colors.alabaster};
  border-radius: 0.9rem;
  box-shadow: ${({theme:e})=>e.shadows.card};
  padding: 1rem;
`,R=n.span`
  color: ${({theme:e})=>e.colors.graphite};
  font-size: 0.85rem;
`,_=n.strong`
  color: ${({theme:e})=>e.colors.balticBlue};
  display: block;
  font-family: ${({theme:e})=>e.fonts.display};
  font-size: 1.25rem;
  margin-top: 0.3rem;
`,me=n.div.attrs({role:"status"})`
  margin-top: 1rem;
  padding: 0.8rem 1rem;
  border-radius: 0.7rem;
  background: #fff7ef;
  color: ${({theme:e})=>e.colors.graphite};
  border-left: 4px solid ${({theme:e})=>e.colors.balticBlue};
`,de=n.div.attrs({"data-emergency":"true"})`
  /* LINT WARNING: --color-emergency (#FF8200) somente para elementos de emergencia */
  align-items: center;
  background: linear-gradient(135deg, ${({theme:e})=>e.colors.emergency}, #ff9f3d);
  display: flex;
  inset: 0;
  justify-content: center;
  padding: 1rem;
  position: fixed;
  z-index: 9999;
`,fe=n.div`
  background: rgba(0, 0, 0, 0.68);
  border-radius: 1rem;
  color: #fff;
  max-width: 640px;
  padding: 2rem;
  text-align: center;

  h2 {
    font-size: clamp(1.5rem, 4vw, 2.4rem);
    margin-bottom: 0.7rem;
  }
`,ue=n.button.attrs({type:"button"})`
  /* LINT WARNING: --color-emergency (#FF8200) somente para elementos de emergencia */
  background: ${({theme:e})=>e.colors.emergency};
  border: 2px solid #fff;
  border-radius: 0.75rem;
  color: #fff;
  cursor: pointer;
  font-family: ${({theme:e})=>e.fonts.display};
  font-size: 1.1rem;
  font-weight: 800;
  margin-top: 1.2rem;
  padding: 0.9rem 1.2rem;
`,pe=()=>{const e=U.c(47),{status:o,battery:a,connectionQuality:s,fetchGuincho:r,listenTelemetry:l}=Y(),{fsrReading:c,obstacleDetected:F,anomalyAlert:$,lastUpdated:P,connect:D}=ee();let N,T;e[0]!==D||e[1]!==r||e[2]!==l?(N=()=>{r(),l(),D()},T=[r,l,D],e[0]=D,e[1]=r,e[2]=l,e[3]=N,e[4]=T):(N=e[3],T=e[4]),X.useEffect(N,T);const k=o===i.EMERGENCIA;let I;e[5]===Symbol.for("react.memo_cache_sentinel")?(I=t.jsxs(ae,{children:[t.jsx(le,{children:"Painel Operacional do Guincho"}),t.jsx(ie,{children:"Monitoramento ao vivo de bateria, telemetria, obstaculos e estado do equipamento."})]}),e[5]=I):I=e[5];let G;e[6]===Symbol.for("react.memo_cache_sentinel")?(G=t.jsx(R,{children:"Estado Atual"}),e[6]=G):G=e[6];let m;e[7]!==o?(m=se(o),e[7]=o,e[8]=m):m=e[8];let d;e[9]!==m?(d=t.jsxs(S,{children:[G,t.jsx(_,{children:m})]}),e[9]=m,e[10]=d):d=e[10];let O;e[11]===Symbol.for("react.memo_cache_sentinel")?(O=t.jsx(R,{children:"Bateria"}),e[11]=O):O=e[11];let f;e[12]!==a?(f=re(a),e[12]=a,e[13]=f):f=e[13];let u;e[14]!==f?(u=t.jsxs(S,{children:[O,t.jsx(_,{children:f})]}),e[14]=f,e[15]=u):u=e[15];let C;e[16]===Symbol.for("react.memo_cache_sentinel")?(C=t.jsx(R,{children:"Qualidade de Conexao"}),e[16]=C):C=e[16];const z=Number(s||0);let h;e[17]!==z?(h=t.jsxs(S,{children:[C,t.jsxs(_,{children:[z,"%"]})]}),e[17]=z,e[18]=h):h=e[18];let v;e[19]===Symbol.for("react.memo_cache_sentinel")?(v=t.jsx(R,{children:"Leitura FSR (carga)"}),e[19]=v):v=e[19];const B=Number(c||0);let p;e[20]!==B?(p=B.toFixed(1),e[20]=B,e[21]=p):p=e[21];let g;e[22]!==p?(g=t.jsxs(S,{children:[v,t.jsxs(_,{children:[p," N"]})]}),e[22]=p,e[23]=g):g=e[23];let w;e[24]===Symbol.for("react.memo_cache_sentinel")?(w=t.jsx(R,{children:"Deteccao de Obstaculo"}),e[24]=w):w=e[24];const L=F?"Obstaculo detectado":"Area livre";let x;e[25]!==L?(x=t.jsxs(S,{children:[w,t.jsx(_,{children:L})]}),e[25]=L,e[26]=x):x=e[26];let M;e[27]===Symbol.for("react.memo_cache_sentinel")?(M=t.jsx(R,{children:"Ultima Atualizacao"}),e[27]=M):M=e[27];let b;e[28]!==P?(b=oe(P),e[28]=P,e[29]=b):b=e[29];let y;e[30]!==b?(y=t.jsxs(S,{children:[M,t.jsx(_,{children:b})]}),e[30]=b,e[31]=y):y=e[31];let E;e[32]!==h||e[33]!==g||e[34]!==x||e[35]!==y||e[36]!==d||e[37]!==u?(E=t.jsxs(ce,{children:[d,u,h,g,x,y]}),e[32]=h,e[33]=g,e[34]=x,e[35]=y,e[36]=d,e[37]=u,e[38]=E):E=e[38];let j;e[39]!==$?(j=$?t.jsxs(me,{role:"status",children:["Alerta de anomalia: ",$.message||"Variacao fora do padrao"]}):null,e[39]=$,e[40]=j):j=e[40];let A;e[41]!==k?(A=k?t.jsx(de,{role:"alertdialog","aria-modal":"true","aria-label":"Emergencia do equipamento",children:t.jsxs(fe,{children:[t.jsx("h2",{children:"EMERGENCIA DETECTADA"}),t.jsx("p",{children:"Interrompa imediatamente a operacao e acione a equipe tecnica no local."}),t.jsx(ue,{type:"button",children:"PARADA DE EMERGENCIA"})]})}):null,e[41]=k,e[42]=A):A=e[42];let q;return e[43]!==E||e[44]!==j||e[45]!==A?(q=t.jsxs(ne,{children:[I,E,j,A]}),e[43]=E,e[44]=j,e[45]=A,e[46]=q):q=e[46],q};export{pe as default};

import React from 'react';
import styles from './styles.module.css';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import { FormProvider } from 'react-hook-form';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import GitHub from '../../assets/icons/SobreNos/github.svg';
import LinkedIn from '../../assets/icons/SobreNos/linkedln.svg';
import Instagram from '../../assets/icons/SobreNos/Instagram.svg';
import Link from '../../assets/icons/SobreNos/link.svg';
import insta from '../../assets/icons/SobreNos/insta.svg';
import FotoAnderson from '../../assets/images/SobreNos/foto_anderson.svg';
import FotoJoao from '../../assets/images/SobreNos/Foto_Joao_Pedro.svg';
import FotoNalbert from '../../assets/images/SobreNos/foto_nalbert.svg';
import FotoDuda from '../../assets/images/SobreNos/foto_maria_eduarda.svg';
import FotoLeticia from '../../assets/images/SobreNos/foto_leticia.svg';
import FotoKaue from '../../assets/images/SobreNos/foto_kaue.svg';
import FotoJoaoVictor from '../../assets/images/SobreNos/foto_joao_vitor.svg';
import FotoRafa from '../../assets/images/SobreNos/foto_rafaella.svg';
import ODS3 from '../../assets/images/SobreNos/ODS3.svg';
import ODS9 from '../../assets/images/SobreNos/ODS9.svg';
import ODS12 from '../../assets/images/SobreNos/ODS12.svg';
import ODS17 from '../../assets/images/SobreNos/ODS17.svg';
import FotoLipe from '../../assets/images/SobreNos/fotorafaelipe.jpeg';
import MVV from '../../assets/images/SobreNos/imagem_MVV.svg';
import Foto1 from '../../assets/images/SobreNos/foto1.jpeg';
import Foto2 from '../../assets/images/SobreNos/foto2.jpeg';
import Foto3 from '../../assets/images/SobreNos/foto3.jpeg';
import Foto4 from '../../assets/images/SobreNos/foto4.jpeg';
import Foto5 from '../../assets/images/SobreNos/foto6.jpeg';
import Foto6 from '../../assets/images/SobreNos/foto7.jpeg';

const fotos = [
  { id: 1, src: Foto1, alt: 'Foto 1' },
  { id: 2, src: Foto2, alt: 'Foto 2' },
  { id: 3, src: Foto3, alt: 'Foto 3' },
  { id: 4, src: Foto4, alt: 'Foto 4' },
  { id: 5, src: Foto5, alt: 'Foto 5' },
  { id: 6, src: Foto6, alt: 'Foto 6' }
];

const SobrePage = () => {
  return (
    <main>
      {/* Header */}
      <section className={styles.header}>
        <Header/>
        <div className={styles.headerTexto}>
          <h1 className={styles.header_h1}>Origem do Projeto</h1>
          <p className={styles.header_p}>Uma jornada nascida da necessidade <br/> real - transformadaem propósito, <br/>inovação e impacto</p>
        </div>
      </section>
   
      {/* História */}
      <section className={styles.section_historia}>
        <div className={styles.div_historia}>
          <h2 className={styles.h2_historia}>Tudo começou dentro de <span className={styles.casa}>casa</span></h2>
          <p className={styles.p_historia}>“Acompanhei de perto os desafios do meu irmão, diagnosticado com Distrofia Muscular de Duchenne. Vi sua autonomia diminuir — e tarefas simples tornarem-se batalhas diárias.”</p>
          <p className={styles.p_historia}>“Aquilo que deveria ser rotina exigia esforço desproporcional. Percebi que o problema não era único. E que ninguém estava resolvendo da forma certa.”</p>
        </div>
        <div className={styles.div_img_historia}>
          <img src={FotoLipe} alt="Imagem rafa e lipe" className={styles.image_historia} />
          <div className={styles.legenda}>— Felipe Roldão e Rafaella Cintra</div>
        </div>
      </section>

      {/* Carrossel de fotos */}
    <section className={styles.carrossel}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        slidesPerView={3}        
        spaceBetween={16}        
        style={{ width: '95%', height: '420px' }}
  >
        {fotos.map((foto) => (
        <SwiperSlide key={foto.id}>
          <img
            src={foto.src}
            alt="fotos"
            style={{ 
              width: '100%',
              height: '420px',       
              objectFit: 'cover',
              borderRadius: '12px',
        }}
          />
        </SwiperSlide>
      ))}
      </Swiper>
    </section>
      
      {/* Missão, Visão e Valores */}
      <section className={styles.section_mvv}>
        <h1 className={styles.h1_mvv}>Missão, <span className={styles.span_h11}>Visão</span> e <span className={styles.span_h12}>Valores</span></h1>
        <p className={styles.p_mvv}>Os pilares que guiam cada decisão, cada produto, cada pessoa que atendemos.</p>
      </section>
      <section className={styles.section_mvv_content}>
        <div className={styles.div_mvv}>
          <img src={MVV} alt="imagem missão" className={styles.img_mvv}/>
          <h4 className={styles.h4_mvv}>Missão</h4>
          <p className={styles.p1_mvv}>Auxiliar pessoas com baixa mobilidade, trazendo conforto e segurança através da inovação e tecnologia — com empatia no centro de tudo.</p>
        </div>
        <div className={styles.div_mvv}>
          <img src={MVV} alt="imagem visão" className={styles.img_mvv}/>
          <h4 className={styles.h4_mvv}>Visão</h4>
          <p className={styles.p1_mvv}>Desenvolver dispositivos de mobilidade assistida com excelência — tornando-nos  referência nacional com foco em autonomia, segurança e acessibilidade.</p>
        </div>
        <div className={styles.div_mvv}>
          <img src={MVV} alt="imagem valores" className={styles.img_mvv}/>
          <h4 className={styles.h4_mvv}>Valores</h4>
          <p className={styles.p1_mvv}>
            <span>Responsabilidade</span> <span>Ética</span> <br/>
            <span>Inovação</span> <span>Inclusão</span> <br/>
            <span>Empatia</span>
          </p>
        </div>
      </section>

          {/* Os ODS */}
      <h1 className={styles.h1_ods}>Ods que fazem parte da <span className={styles.span_ods}>Ever Rise</span></h1>
      <section className={styles.section_ods}>
        <img src={ODS3} alt="imagem ods 3" className={styles.img_ods3}/>
        <img src={ODS9} alt="imagem ods 9" className={styles.img_ods9}/>
        <img src={ODS12} alt="imagem ods 12" className={styles.img_ods12}/>
        <img src={ODS17} alt="imagem ods 17" className={styles.img_ods17}/>
      </section>

      {/* Quem fazem parte */}
      <h1>Qum faz parte da Ever Rise</h1>      
      <section>

      <div>
        <div>
          <img src={FotoAnderson} alt="imagem anderson"/>
          <p><span>PO e Full Stack</span></p>
          <h4>Anderson Reis</h4>
          <p>Visionary entrepreneur with a passion for <br/> innovation and successful startup ventures. </p>
          <div>
            <img src={LinkedIn} alt="icon linkedin"/>
            <img src={GitHub} alt="icon github"/>
            <img src={Instagram} alt="icon instagram"/>
          </div>
        </div>

        <div>
          <img src={FotoJoao} alt="imagem joao"/>
          <p><span>SM e Full Stack</span></p>
          <h4>João Silva</h4>
          <p>Visionary entrepreneur with a passion for <br/> innovation and successful startup ventures. </p>
          <div>
            <img src={LinkedIn} alt="icon linkedin"/>
            <img src={GitHub} alt="icon github"/>
            <img src={Instagram} alt="icon instagram"/>
          </div>
        </div>

        <div>
          <img src={FotoNalbert} alt="imagem nalbert"/>
          <p><span>Full Stack</span></p>
          <h4>Nalbert Henri</h4>
          <p>Visionary entrepreneur with a passion for <br/> innovation and successful startup ventures. </p>
          <div>
            <img src={LinkedIn} alt="icon linkedin"/>
            <img src={GitHub} alt="icon github"/>
            <img src={Instagram} alt="icon instagram"/>
          </div>
        </div>
      </div>

      <div>
        <div>
          <img src={FotoDuda} alt="imagem duda"/>
          <p><span>Designer, Marketing e Front End</span></p>
          <h4>Maria Eduarda</h4>
          <p>Visionary entrepreneur with a passion for <br/> innovation and successful startup ventures. </p>
          <div>
            <img src={LinkedIn} alt="icon linkedin"/>
            <img src={GitHub} alt="icon github"/>
            <img src={Instagram} alt="icon instagram"/>
          </div>
        </div>

        <div>
          <img src={FotoLeticia} alt="imagem leticia"/>
          <p><span>Designer e Front End</span></p>
          <h4>Leticia Andrade</h4>
          <p>Visionary entrepreneur with a passion for <br/> innovation and successful startup ventures. </p>
          <div>
            <img src={LinkedIn} alt="icon linkedin"/>
            <img src={GitHub} alt="icon github"/>
            <img src={Instagram} alt="icon instagram"/>
          </div>
        </div>

        <div>
          <img src={FotoKaue} alt="imagem kaue"/>
          <p><span>Front End, Marketing e Financeiro</span></p>
          <h4>Kaue Rodrigues</h4>
          <p>Visionary entrepreneur with a passion for <br/> innovation and successful startup ventures. </p>
          <div>
            <img src={LinkedIn} alt="icon linkedin"/>
            <img src={GitHub} alt="icon github"/>
            <img src={Instagram} alt="icon instagram"/>
          </div>
        </div>
      </div>

      <div>
        <div>
          <img src={FotoJoaoVictor} alt="imagem joao victor"/>
          <p><span>Full Stack e Hardware</span></p>
          <h4>João Victor</h4>
          <p>Visionary entrepreneur with a passion for <br/> innovation and successful startup ventures. </p>
          <div>
            <img src={LinkedIn} alt="icon linkedin"/>
            <img src={GitHub} alt="icon github"/>
            <img src={Instagram} alt="icon instagram"/>
          </div>
        </div>

        <div>
          <img src={FotoRafa} alt="imagem rafa"/>
          <p><span>Full Stack e Hardware</span></p>
          <h4>Rafaella Cintra</h4>
          <p>Visionary entrepreneur with a passion for <br/> innovation and successful startup ventures. </p>
          <div>
            <img src={LinkedIn} alt="icon linkedin"/>
            <img src={GitHub} alt="icon github"/>
            <img src={Instagram} alt="icon instagram"/>
          </div>
        </div>
      </div>
      </section>

    </main>
  );
};

export default SobrePage;
// AboutPage.jsx

'use client';
import React from 'react';
import styles from './styles.module.css';

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Sobre o Nosso Projeto</h1>
        <p className={styles.subtitle}>
          Descubra mais sobre as Linguagens do Amor e os Tipos de Temperamento.
        </p>
      </header>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>As Cinco Linguagens do Amor</h2>
        <p className={styles.text}>
          As linguagens do amor foram criadas pelo Dr. Gary Chapman, e são uma
          maneira de entender como as pessoas expressam e recebem amor. Elas são:
        </p>
        <ul className={styles.list}>
          <li><strong>Palavras de Afirmação:</strong> Elogios e palavras de incentivo são fundamentais para quem tem essa linguagem predominante.</li>
          <li><strong>Tempo de Qualidade:</strong> Dedicar tempo para estar com alguém, sem distrações, é a melhor forma de demonstrar afeto.</li>
          <li><strong>Receber Presentes:</strong> Presentear é visto como uma expressão de amor e carinho, independentemente do valor material.</li>
          <li><strong>Atos de Serviço:</strong> Fazer algo pelo outro, como ajudar nas tarefas diárias, é a melhor forma de expressar amor.</li>
          <li><strong>Toque Físico:</strong> Abraços, beijos e carícias são essenciais para quem tem o toque como linguagem principal.</li>
        </ul>
        <p className={styles.text}>
          Entender a sua linguagem do amor e a de quem você ama pode melhorar
          significativamente seus relacionamentos, pois você aprenderá a se comunicar de uma maneira que faz sentido para ambos.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Os Quatro Temperamentos</h2>
        <p className={styles.text}>
          O conceito dos quatro temperamentos tem origem na Grécia Antiga e foi popularizado pelo médico Hipócrates. Eles descrevem quatro tipos de personalidade:
        </p>
        <ul className={styles.list}>
          <li><strong>Colérico:</strong> Pessoas extrovertidas, enérgicas, determinadas e muitas vezes líderes naturais. Têm facilidade em tomar decisões rápidas e enfrentar desafios.</li>
          <li><strong>Melancólico:</strong> Introvertidos, reflexivos e perfeccionistas. São sensíveis, cuidadosos e preferem ambientes organizados e planejados.</li>
          <li><strong>Sanguíneo:</strong> Extrovertidos, otimistas e sociáveis. Gostam de estar cercados de pessoas, são animados e espontâneos.</li>
          <li><strong>Fleumático:</strong> Tranquilos, pacíficos e equilibrados. Preferem evitar conflitos e valorizam a harmonia nos relacionamentos.</li>
        </ul>
        <p className={styles.text}>
          Conhecer o seu temperamento e o das pessoas ao seu redor ajuda a entender comportamentos, preferências e formas de reação, facilitando a convivência e comunicação.
        </p>
      </section>

      <footer className={styles.footer}>
        <h3 className={styles.footerTitle}>Nosso Propósito</h3>
        <p className={styles.text}>
          O objetivo deste projeto é ajudar você a se conhecer melhor e entender
          melhor as pessoas ao seu redor. Ao participar dos nossos quizzes, você
          terá a oportunidade de explorar suas características pessoais e
          aprimorar seus relacionamentos. Aproveite a jornada de
          autoconhecimento!
        </p>
      </footer>
    </div>
  );
};

export default AboutPage;

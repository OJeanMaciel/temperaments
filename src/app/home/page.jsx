"use client";
import React from "react";
import styles from "./styles.module.css";
import Card from "@/components/Cards/cards";
import Banner from "../../assets/banner.png";
import Image from "next/image";
import Divider from "@/components/Divider/divider";

export default function HomePage() {
  const handleTemperamentQuiz = () => {
    window.location.href = "/quiz?type=temperament";
  };

  const handleLoveLanguageQuiz = () => {
    window.location.href = "/quiz?type=loveLanguage";
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Descubra mais sobre você com nossos quizzes exclusivos!</h1>
        <p>
          Explore nosso site e mergulhe em uma jornada de autoconhecimento com
          nossos dois testes interativos. Eles foram desenvolvidos para ajudar
          você a entender melhor sua personalidade e a forma como se relaciona
          com os outros.
        </p>
        <p>
          <strong>Teste de Temperamentos:</strong> Descubra qual dos quatro
          temperamentos clássicos – colérico, melancólico, sanguíneo ou
          fleumático – é predominante em sua personalidade. Com este quiz, você
          poderá identificar suas características mais profundas, suas
          tendências naturais e como você interage com o mundo ao seu redor.
          Entenda se você é mais determinado e energético como um colérico,
          criativo e introspectivo como um melancólico, otimista e sociável como
          um sanguíneo, ou tranquilo e pacífico como um fleumático. Com essas
          informações, você terá uma visão mais clara sobre como suas reações e
          comportamentos influenciam sua vida cotidiana.
        </p>
        <p>
          <strong>Teste das Linguagens do Amor:</strong> Cada pessoa tem uma
          maneira única de expressar e receber amor. Com este quiz, descubra
          qual das cinco linguagens do amor – palavras de afirmação, tempo de
          qualidade, presentes, atos de serviço ou toque físico – ressoa mais
          com você. Aprenda como suas preferências impactam seus relacionamentos
          e como você pode se conectar de forma mais significativa com aqueles
          que ama. Seja através de palavras gentis, gestos atenciosos, tempo
          dedicado, presentes simbólicos ou um abraço caloroso, entender a sua
          linguagem do amor pode transformar suas relações.
        </p>
        <p>
          Nosso objetivo é proporcionar a você uma experiência de
          autoconhecimento rica e prática, que possa ser aplicada no seu dia a
          dia para melhorar suas interações pessoais e emocionais. Experimente
          nossos quizzes, descubra mais sobre si mesmo e compartilhe suas
          descobertas com amigos e familiares. Aproveite esta oportunidade para
          se divertir e se conhecer melhor!
        </p>
        <h2 className={styles.callToAction}>
          Participe dos nossos quizzes agora e inicie uma jornada de
          autoconhecimento e crescimento pessoal!
        </h2>
      </header>
      <Divider />
      <section className={styles.quizzes}>
        <h2>Nossos Quizzes</h2>
        <div className={styles.bannerContainer}>
          <Image className={styles.banner} src={Banner} alt="Banner" layout="responsive" />
          <div className={styles.bannerText}>
            <p>Explore em nossos Quizzes</p>
          </div>
        </div>
        <br /><br />
        <div className={styles.quizList}>
          <Card
            title="Teste de Temperamentos"
            description="Descubra qual dos quatro temperamentos (colérico, melancólico, sanguíneo ou fleumático) é predominante em você."
            onClick={handleTemperamentQuiz}
          />
          <Card
            title="Teste das Linguagens do Amor"
            description="Conheça a forma como você prefere expressar e receber amor, baseado nas cinco linguagens do amor."
            onClick={handleLoveLanguageQuiz}
          />
        </div>
      </section>
    </div>
  );
}

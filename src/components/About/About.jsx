import React from "react";
import styles from "./About.module.scss";
import Image from "next/image";
import Equipe from "../About/Equipe.png";
import ButtonBackToTop from "../ButtonBackToTop/ButtonBackToTop";
import Texto from "../Texto/Texto";

export default function About() {
  return (
    <>
      <div id="about">
        <Texto texto="Quem somos?" />
      </div>
      <div className={styles.about}>
        <Image
          data-aos="fade-up"
          data-aos-duration="1000"
          priority
          width={560}
          height={540}
          src={Equipe}
          alt="Equipe"
          className={styles.about__imagem}
        ></Image>
        <nav className={styles.about__textos}>
          <p data-aos="fade-up" data-aos-duration="1000">
            Nossa história começa em 2015, com a paixão pela confeitaria. Ao
            longo dos anos, desenvolvemos receitas únicas e deliciosas que
            encantam nossos clientes. Cada doce é feito com{" "}
            <strong>amor e dedicação</strong>, resultando em sabores e texturas
            incríveis.
          </p>
          <p data-aos="fade-up" data-aos-duration="1000">
            Somos uma equipe apaixonada por criar doces artesanais e saborosos,
            feitos com ingredientes de alta qualidade e muito cuidado.
            Acreditamos que doces devem ser uma experiência{" "}
            <strong>única e memorável</strong>, capazes de proporcionar momentos
            de prazer e felicidade.
          </p>
          <p data-aos="fade-up" data-aos-duration="1000">
            Cada doce que criamos é uma obra de arte, e estamos sempre buscando
            a perfeição em cada detalhe. Se você está procurando por doces
            gourmets de alta qualidade e sabor inigualável,{" "}
            <strong>você está no lugar certo</strong>. Experimente nossos doces
            e deixe-se levar por essa experiência única e deliciosa!
          </p>
        </nav>
      </div>
      <ButtonBackToTop />
    </>
  );
}

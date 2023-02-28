import React from "react";
import styles from "./About.module.scss";
import Image from "next/image";
import Equipe from '../About/Equipe.png'

export default function About() {
  return (
    <div id="about" className={styles.about}>
      <Image priority width={560} height={540} src={Equipe} alt="Equipe" className={styles.about__imagem}></Image>
      <nav className={styles.about__textos}>
        <p>
          Nossa história começa em 2015, com a paixão pela confeitaria. Ao longo dos
          anos, desenvolvemos receitas únicas e deliciosas que encantam nossos
          clientes. Cada doce é feito com <strong>amor e dedicação</strong>, resultando em
          sabores e texturas incríveis.
        </p>
        <p>
          Somos uma equipe apaixonada por criar doces artesanais e saborosos,
          feitos com ingredientes de alta qualidade e muito cuidado. Acreditamos
          que doces devem ser uma experiência <strong>única e memorável</strong>, capazes de
          proporcionar momentos de prazer e felicidade.
        </p>
        <p>
          Cada doce que criamos é uma obra de arte, e estamos sempre buscando a
          perfeição em cada detalhe. Se você está procurando por doces gourmets
          de alta qualidade e sabor inigualável, <strong>você está no lugar certo</strong>.
          Experimente nossos doces e deixe-se levar por essa experiência única e
          deliciosa!
        </p>
      </nav>
    </div>
  );
}

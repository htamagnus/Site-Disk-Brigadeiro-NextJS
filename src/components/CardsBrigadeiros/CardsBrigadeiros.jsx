import React from "react";
import styles from "./CardsBrigadeiros.module.scss";
import { dadosTradicionais } from "./DadosDoces/dadosTradicionais";
import { dadosBelgas } from "./DadosDoces/dadosBelgas";
import { dadosCaramelizados } from "./DadosDoces/dadosCaramelizados";
import { dadosFinos } from "./DadosDoces/dadosFinos";
import Image from "next/image";
import Texto from "../Texto/Texto";

export default function CardsBrigadeiros() {
  return (
    <>
    <div className={styles.cards}>
      {dadosTradicionais.map((data) => (
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className={styles.cards__card}
          key={data.title}
        >
          <Image priority src={data.image} alt={data.alt} className={styles.cards__imagem}/>
          <h3 className={styles.cards__titulo}>{data.title}</h3>
          <p className={styles.cards__paragrafo}>{data.text}</p>
        </div>
      ))}
    </div>

    <Texto texto="Brigadeiros Belgas" />

    <div className={styles.cards}>
      {dadosBelgas.map((data) => (
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className={styles.cards__card}
          key={data.title}
        >
          <Image src={data.image} alt={data.alt} className={styles.cards__imagem}/>
          <h3 className={styles.cards__titulo}>{data.title}</h3>
          <p className={styles.cards__paragrafo}>{data.text}</p>
        </div>
      ))}
    </div>

    <Texto texto="Doces Caramelizados" />

    <div className={styles.cards}>
      {dadosCaramelizados.map((data) => (
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className={styles.cards__card}
          key={data.title}
        >
          <Image src={data.image} alt={data.alt} className={styles.cards__imagem}/>
          <h3 className={styles.cards__titulo}>{data.title}</h3>
          <p className={styles.cards__paragrafo}>{data.text}</p>
        </div>
      ))}

    </div>

    <Texto texto="Doces Finos e Trufas" />

    <div className={styles.cards}>
      {dadosFinos.map((data) => (
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className={styles.cards__card}
          key={data.title}
        >
          <Image src={data.image} alt={data.alt} className={styles.cards__imagem}/>
          <h3 className={styles.cards__titulo}>{data.title}</h3>
          <p className={styles.cards__paragrafo}>{data.text}</p>
        </div>
      ))}

    </div>

    </>
  );
}

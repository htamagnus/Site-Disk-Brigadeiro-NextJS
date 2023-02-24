import React from "react";
import styles from "./CardsBrigadeiros.module.scss";
import { dadosBrigadeiros } from "./dadosBrigadeiros";
import Image from "next/image";

export default function CardsBrigadeiros() {
  return (
    <div className={styles.cards}>
      {dadosBrigadeiros.map((data) => (
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
  );
}

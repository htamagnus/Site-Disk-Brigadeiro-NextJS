import React from "react";
import ImagemBanner from "./ImagemBanner.png";
import LogoDiskBrigadeiro from "./LogoDiskBrigadeiro.png";
import styles from "./Banner.module.scss";
import Image from "next/image";

export default function Banner() {
  return (
    <div      
      className={styles.banner}
      style={{
        backgroundImage: `url(${ImagemBanner.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: 470,
        width: "100%",
      }}
    >
      <Image 
      className={styles.banner__logo}
      src={LogoDiskBrigadeiro} 
      width ={300}
      sizes="(max-width: 480px) 100px"
      alt="Logo Disk Brigadeiro, em formato de um brigadeiro, na cor rosa claro, com as iniciais da marca DB centralizadas, e um telefone para simbolizar o disk da marca" />
      <h1 className={styles.banner__titulo}>Disk Brigadeiro</h1>
      <p className={styles.banner__paragrafo}>Confira nosso catálogo de doces preparado especialmente para você</p>
    </div>
  );
}

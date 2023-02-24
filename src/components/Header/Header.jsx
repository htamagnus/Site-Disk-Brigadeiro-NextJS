import React from "react";
import styles from "./Header.module.scss";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";

export default function Header() {
  const dadosHeader = [
    {
      title: "Combos",
    },
    {
      title: "Presenteáveis",
    },
    {
      title: "Brigadeiros",
    },
    {
      title: "Sobre",
    },
    {
      title: "Localização",
    },
  ];
  return (
    <header className={styles.cabecalho}>
      {dadosHeader.map((data) => (
        <ul key={data.title} className={styles.cabecalho__lista}>
          <li>{data.title}</li>
        </ul>
      ))}
        <a href="">
          <BsInstagram size={24} style={{ color: "#EBE3D0" }} />
        </a>
        <a href="">
          <BsWhatsapp size={24} style={{ color: "#EBE3D0" }} />
        </a>
    </header>
  );
}

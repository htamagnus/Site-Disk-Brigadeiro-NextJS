import React from "react";
import styles from "./Header.module.scss";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi"

export default function Header() {
  return (
    <header className={styles.cabecalho}>
      <div className={styles.cabecalho__botaomobile}><GiHamburgerMenu size={32}/></div>
      <nav className={styles.cabecalho__nav}>
        <ul className={styles.cabecalho__lista}>
          <li className={styles.cabecalho__item}>Combos</li>
          <li className={styles.cabecalho__item}>Presenteáveis</li>
          <li className={styles.cabecalho__item}>Tradicionais</li>
          <li className={styles.cabecalho__item}>Belgas</li>
          <li className={styles.cabecalho__item}>Caramelizados</li>
          <li className={styles.cabecalho__item}>Doces Finos</li>
          <li className={styles.cabecalho__links}>
            <a href="https://www.instagram.com/brigadeirodisk/" target="_blank">
              <BsInstagram size={24} style={{ color: "#EBE3D0" }} />
            </a>
          </li>
          <li className={styles.cabecalho__links}>
            <a href="https://wa.me/555185143463" target="_blank">
              <BsWhatsapp size={24} style={{ color: "#EBE3D0" }} />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

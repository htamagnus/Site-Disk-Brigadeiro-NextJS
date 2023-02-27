import React, { useRef, useState } from "react";
import styles from "./Header.module.scss";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header() {
  const dropDownRef = useRef(null);
  const [isActive, setIsActive] = useState(true);
  const onClick = () => setIsActive(!isActive);

  return (
    <header className={styles.cabecalho}>
      <button onClick={onClick} className={styles.cabecalho__botaomobile}>
        <GiHamburgerMenu size={32} />
      </button>
      <nav ref={dropDownRef} className={`menu ${isActive ? styles.menu : ""}`}>
        <ul className={styles.cabecalho__lista}>
          <li className={styles.cabecalho__item}>
            <a className={styles.cabecalho__links} href="">
              Combos
            </a>
          </li>
          <li className={styles.cabecalho__item}>
            <a className={styles.cabecalho__links} href="">
              Presenteáveis
            </a>
          </li>
          <li className={styles.cabecalho__item}>
            <a className={styles.cabecalho__links} href="#belgas">
              Belgas
            </a>
          </li>
          <li className={styles.cabecalho__item}>
            <a className={styles.cabecalho__links} href="#caramelizados">
              Caramelizados
            </a>
          </li>
          <li className={styles.cabecalho__item}>
            <a className={styles.cabecalho__links} href="#finos">
              Doces Finos
            </a>
          </li>
        </ul>
        <ul className={styles.cabecalho__lista2}>
          <li className={styles.cabecalho__links}>
            <a href="https://www.instagram.com/brigadeirodisk/" target="_blank">
              <BsInstagram size={30} style={{ color: "#EBE3D0" }} />
            </a>
          </li>
          <li className={styles.cabecalho__links}>
            <a href="https://wa.me/555185143463" target="_blank">
              <BsWhatsapp size={30} style={{ color: "#EBE3D0" }} />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

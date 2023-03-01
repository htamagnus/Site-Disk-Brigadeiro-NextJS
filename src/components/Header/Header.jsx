import React, { useRef, useState } from "react";
import styles from "./Header.module.scss";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header() {
  const dropDownRef = useRef(null);
  const [isActive, setIsActive] = useState(true);
  const onClick = () => setIsActive(!isActive);

  return (
    <header id="#topo" className={styles.cabecalho}>
      <button onClick={onClick} className={styles.cabecalho__botaomobile}>
        <GiHamburgerMenu size={32} />
      </button>
      <nav ref={dropDownRef} className={`menu ${isActive ? styles.menu : ""}`}>
        <ul className={styles.cabecalho__lista}>
          <li className={styles.cabecalho__item}>
            <a className={styles.cabecalho__links} href="#presenteaveis">
              Presenteáveis
            </a>
          </li>
          <li className={styles.cabecalho__item}>
            <a className={styles.cabecalho__links} href="">
              Combos
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
          <li className={styles.cabecalho__item}>
            <a className={styles.cabecalho__links} href="#finos">
              Alfajores e Brownies
            </a>
          </li>
          <li className={styles.cabecalho__item}>
            <a className={styles.cabecalho__links} href="#about">
              Sobre
            </a>
          </li>
        </ul>
      </nav>
      <div>
        <div className={styles.cabecalho__redes}>
          <a href="https://www.instagram.com/brigadeirodisk/" target="_blank">
            <BsInstagram size={28} style={{ color: "#EBE3D0" }} />
          </a>
          <a href="https://wa.me/555185143463" target="_blank">
            <BsWhatsapp size={28} style={{ color: "#EBE3D0" }} />
          </a>
        </div>
      </div>
    </header>
  );
}

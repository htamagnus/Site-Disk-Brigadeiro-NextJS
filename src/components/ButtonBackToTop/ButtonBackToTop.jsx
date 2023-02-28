import React from 'react'
import styles from './ButtonBackToTop.module.scss'
import { BsArrowUpCircle } from "react-icons/bs";

export default function ButtonBackToTop() {
    function subirTopo() {
        window.scrollTo(0, 0);
    }
  return (
    <div className={styles.voltar}>
    <button
      onClick={subirTopo}
      className={styles.voltar__botao}
    >
      <BsArrowUpCircle size={32} />
      <a className={styles.voltar__texto} href="#topo"></a>
    </button>
  </div>
  )
}

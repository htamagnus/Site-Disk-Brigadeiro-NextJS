import styles from "./Texto.module.scss";

export default function Texto(props) {
  return (
    <>
      <p className={styles.texto}>{props.texto}</p>
      
    </>
  );
}

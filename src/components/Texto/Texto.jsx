import styles from "./Texto.module.scss";

export default function Texto(props) {
  return (
    <div>
      <p className={styles.texto}>{props.texto}</p>
    </div>
  );
}

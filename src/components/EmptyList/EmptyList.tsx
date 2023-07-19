import styles from "./styles.module.css";
import ClipboardIcon from "../../assets/Clipboard.svg";

export function EmptyList() {
  return (
    <div className={styles.container}>
      <img className={styles.clipboardIcon} src={ClipboardIcon} />
      <div className={styles.text1}>Você ainda não tem tarefas cadastradas</div>
      <div className={styles.text2}>
        Crie tarefas e organize seus itens a fazer
      </div>
    </div>
  );
}

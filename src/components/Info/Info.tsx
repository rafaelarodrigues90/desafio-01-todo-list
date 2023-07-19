import styles from "./styles.module.css";

interface InfoProps {
  totalTasks: number;
  completedTasks: number;
}

export function Info({ totalTasks, completedTasks }: InfoProps) {
  return (
    <div className={styles.container}>
      <div className={styles.counterContainer}>
        <div className={styles.totalTasks}>Tarefas criadas</div>
        <div className={styles.counter}>{totalTasks}</div>
      </div>

      <div className={styles.counterContainer}>
        <div className={styles.completedTasks}>Concluídas</div>
        <div className={styles.counter}>
          {!totalTasks ? totalTasks : `${completedTasks} de ${totalTasks}`}
        </div>
      </div>
    </div>
  );
}

import styles from "./styles.module.css";

interface InfoProps {
  totalTasks: number;
  completedTasks: number;
}

export function Info({ totalTasks, completedTasks }: InfoProps) {
  return (
    <div className={styles.container}>
      <strong className={styles.tarefas}>Tarefas criadas: {totalTasks}</strong>
      <strong className={styles.concluidas}>
        Concluídas: {completedTasks}
      </strong>
    </div>
  );
}

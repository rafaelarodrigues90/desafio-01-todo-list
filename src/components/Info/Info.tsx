import styles from './styles.module.css';

export function Info () {
    return (
        <div className={styles.container}>
            // TODO: contadores
            <strong className={styles.tarefas}>Tarefas criadas</strong>
            <strong className={styles.concluidas}>Concluídas</strong>
        </div> 
    )
}
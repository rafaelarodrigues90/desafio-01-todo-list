import styles from './styles.module.css';

export function Info () {
    return (
        // TODO: contadores
        <div className={styles.container}>
            <strong className={styles.tarefas}>Tarefas criadas</strong>
            <strong className={styles.concluidas}>Concluídas</strong>
        </div> 
    )
}
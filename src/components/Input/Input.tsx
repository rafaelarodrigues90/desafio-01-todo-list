import styles from './styles.module.css'
import PlusIcon from '../../assets/plusIcon.svg';

export function Input() {
    return(
        <div className={styles.container}>
            <div className={styles.inputContainer}>
                <input className={styles.input} placeholder='Adicione uma nova tarefa' />
                <button className={styles.button}>
                    <strong className={styles.buttonText}>Criar</strong>
                    <img src={PlusIcon} />
                </button>
            </div>
        </div>
    )
}
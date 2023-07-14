import { Info } from '../Info/Info';
import styles from './styles.module.css';

export function TodoList () {
    return (
        <div className={styles.container}>
            <div className={styles.taskContainer}>
                <Info />
                
                // TODO: tasks container
            </div>
        </div>
    )
}
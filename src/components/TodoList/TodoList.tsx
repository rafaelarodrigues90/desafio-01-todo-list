import { Info } from '../Info/Info';
import styles from './styles.module.css';

export function TodoList () {
    return (
        // TODO: tasks container
        <div className={styles.container}>
            <div className={styles.taskContainer}>
                <Info />
                
            </div>
        </div>
    )
}
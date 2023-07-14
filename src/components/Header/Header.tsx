import styles from './styles.module.css'
import RocketLogo from '../../assets/rocket.svg'

export function Header() {
 return (
    <div className={styles.header}>
        <div className={styles.divTitle}>
            <img className={styles.rocket} src={RocketLogo} />
            <strong className={styles.title1}>
                to
            </strong>
            <strong className={styles.title2}>
                do
            </strong>
        </div>
    </div>
 )
}

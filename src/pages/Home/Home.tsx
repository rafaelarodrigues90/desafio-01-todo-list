import styles from './styles.module.css'
import { Header } from '../../components/Header/Header'
import { Input } from '../../components/Input/Input'
import { TodoList } from '../../components/TodoList/TodoList'

export function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Input />
      <TodoList />
    </div>
  )
}

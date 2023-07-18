import { useState } from "react";
import styles from "./styles.module.css";
import PlusIcon from "../../assets/plusIcon.svg";

interface InputProps {
  onAddTask: (task: string) => void;
}

export function Input({ onAddTask }: InputProps) {
  const [newTask, setNewTask] = useState<string>("");

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      onAddTask(newTask);
      setNewTask("");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <input
          className={styles.input}
          placeholder="Adicione uma nova tarefa"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button className={styles.button} onClick={handleAddTask}>
          <strong className={styles.buttonText}>Criar</strong>
          <img src={PlusIcon} alt="Plus Icon" />
        </button>
      </div>
    </div>
  );
}

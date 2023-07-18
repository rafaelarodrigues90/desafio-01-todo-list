import { useState } from "react";
import { Todo } from "../../models";
import { Info } from "../Info/Info";
import styles from "./styles.module.css";
import TrashIcon from "../../assets/trashIcon.svg";
import RadioButton from "../../assets/radioButton.svg";
import RadioButtonChecked from "../../assets/radioButtonChecked.svg";

interface TodoListProps {
  tasks: Todo[];
  setTasks: (tasks: Todo[]) => void;
}

export function TodoList({ tasks, setTasks }: TodoListProps) {
  const [completedCount, setCompletedCount] = useState<number>(0);

  const handleCompleteTask = (taskId: number) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    setCompletedCount(updatedTasks.filter((task) => task.completed).length);
  };

  const handleRemoveTask = (taskId: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    setCompletedCount(updatedTasks.filter((task) => task.completed).length);
  };

  return (
    <div className={styles.container}>
      <div className={styles.todoListContainer}>
        <Info totalTasks={tasks.length} completedTasks={completedCount} />

        {tasks.map((task) => (
          <div key={task.id} className={styles.taskContainer}>
            <span
              className={styles.radioButton}
              onClick={() => handleCompleteTask(task.id)}
            >
              {task.completed ? (
                <img src={RadioButtonChecked} />
              ) : (
                <img src={RadioButton} />
              )}
            </span>
            <div
              className={task.completed ? styles.taskCompleted : styles.task}
            >
              {task.description}
            </div>
            <span
              className={styles.trashButton}
              onClick={() => handleRemoveTask(task.id)}
            >
              <img className={styles.trashIcon} src={TrashIcon} />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

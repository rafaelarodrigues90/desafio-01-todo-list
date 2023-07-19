import { useState } from "react";
import { Todo } from "../../models";
import { Info } from "../Info/Info";
import styles from "./styles.module.css";
import TrashIcon from "../../assets/trashIcon.svg";
import TrashIconHover from "../../assets/trashIconHover.svg";
import RadioButton from "../../assets/radioButton.svg";
import RadioButtonChecked from "../../assets/radioButtonChecked.svg";
import RadioButtonHover from "../../assets/radioButtonHover.svg";
import { EmptyList } from "../EmptyList/EmptyList";

interface TodoListProps {
  tasks: Todo[];
  setTasks: (tasks: Todo[]) => void;
}

export function TodoList({ tasks, setTasks }: TodoListProps) {
  const [completedCount, setCompletedCount] = useState<number>(0);
  const [hoveredButtonId, setHoveredButtonId] = useState<number | null>(null);
  const [hoveredTrashId, setHoveredTrashId] = useState<number | null>(null);

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

        {!tasks.length ? (
          <EmptyList />
        ) : (
          tasks.map((task) => (
            <div key={task.id} className={styles.taskContainer}>
              <span
                className={styles.radioButton}
                onClick={() => handleCompleteTask(task.id)}
                onMouseEnter={() => setHoveredButtonId(task.id)}
                onMouseLeave={() => setHoveredButtonId(null)}
              >
                {task.completed ? (
                  <img src={RadioButtonChecked} />
                ) : (
                  <img
                    src={
                      hoveredButtonId === task.id
                        ? RadioButtonHover
                        : RadioButton
                    }
                  />
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
                onMouseEnter={() => setHoveredTrashId(task.id)}
                onMouseLeave={() => setHoveredTrashId(null)}
              >
                <img
                  className={styles.trashIcon}
                  src={hoveredTrashId === task.id ? TrashIconHover : TrashIcon}
                />
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

import { Header } from "../../components/Header/Header";
import { Input } from "../../components/Input/Input";
import { TodoList } from "../../components/TodoList/TodoList";
import { Todo } from "../../models";
import { useState } from "react";

export function Home() {
  const [tasks, setTasks] = useState<Todo[]>([]);
  const [completedCount, setCompletedCount] = useState<number>(0);

  const addTask = (newTask: string) => {
    const newTodo: Todo = {
      id: tasks.length + 1,
      description: newTask,
      completed: false,
    };
    setTasks([...tasks, newTodo]);
    setCompletedCount(completedCount + 1);
  };

  return (
    <>
      <Header />
      <Input onAddTask={addTask} />
      <TodoList tasks={tasks} setTasks={setTasks} />
    </>
  );
}

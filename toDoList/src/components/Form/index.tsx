import { useState } from "react";
import styles from "./style.module.css";
import { Input } from "../Input";
import { Button } from "../Button";
import { PlusIcon, DeleteIcon } from "lucide-react";

interface TodoItem {
  id: number;
  value: string;
}

let count = 1;

export function Form() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState<TodoItem[]>([]);

  const handleAdd = () => {
    if (!newTask.trim()) return;

    setTasks((prev) => [
      ...prev,
      { id: count++, value: newTask },
    ]);

    setNewTask("");
  };

  const handleEdit = (id: number, value: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, value } : task
      )
    );
  };

  const handleDelete = (id: number) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <div className={styles.form}>
      {/* Criar tarefa */}
      <div className={styles.create}>
        <Input
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Digite a tarefa"
        />
        <Button onClick={handleAdd} icon={<PlusIcon />} />
      </div>

      {/* Lista */}
      <div className={styles.list}>
        {tasks.map((task) => (
          <div key={task.id} className={styles.item}>
            <Input
              value={task.value}
              onChange={(e) =>
                handleEdit(task.id, e.target.value)
              }
            />
            <Button
              onClick={() => handleDelete(task.id)}
              icon={<DeleteIcon />}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

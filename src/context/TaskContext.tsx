import { createContext, useContext, useState, ReactNode } from "react";
import type { Task } from "../types/tasks";

interface TaskContextType {
  tasks: Task[];
  addTask: (task: Task) => void;
  deleteTask: (id: number) => void;
  updateTask: (id: number, text: string) => void;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: Task) => {
    setTasks(prev => [...prev, task]);
  };

  const deleteTask = (id: number) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  const updateTask = (id: number, text: string) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, text } : task
      )
    );
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask, updateTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTasks must be used inside TaskProvider");
  }
  return context;
};

import { useState } from "react";
import { useTasks } from "../context/TaskContext";


const TaskForm = () => {
  const [text, setText] = useState("");
  const { addTask } = useTasks();

const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!text.trim()) return;


    addTask({
        id: Date.now(),
        text,
        completed: false,
    });

    setText("");
};

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;

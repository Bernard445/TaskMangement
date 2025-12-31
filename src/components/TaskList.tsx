import { useState } from "react";
import { useTasks } from "../context/TaskContext";

const TaskList = () => {
  const { tasks, deleteTask, updateTask } = useTasks();
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editText, setEditText] = useState("");

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          {editingId === task.id ? (
            <>
              <input
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
              <button
                onClick={() => {
                  updateTask(task.id, editText);
                  setEditingId(null);
                }}
              >
                Save
              </button>
            </>
          ) : (
            <>
              {task.text}
              <button
                onClick={() => {
                  setEditingId(task.id);
                  setEditText(task.text);
                }}
              >
                Edit
              </button>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;

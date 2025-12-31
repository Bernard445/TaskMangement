import { useAuth0 } from "@auth0/auth0-react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import AuthButtons from "./components/AuthButtons";

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <div>
      <h1>Task Manager</h1>
      <AuthButtons />

      {isAuthenticated ? (
        <>
          <TaskForm />
          <TaskList />
        </>
      ) : (
        <p>Please log in to manage tasks.</p>
      )}
    </div>
  );
}

export default App;

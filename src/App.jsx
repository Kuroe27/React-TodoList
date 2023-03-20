import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TaskStatus from "./components/TaskStatus";
import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTask] = useState([]);
  const [searchTasks, setSearchTasks] = useState("");
  useEffect(() => {
    const getTasks = async () => {
      const taskFromServer = await fetchTasks();
      setTask(taskFromServer);
    };
    getTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    return data;
  };
  //add task
  const addTask = async (task) => {
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });
    const data = await res.json();
    setTask([...tasks, data]);
  };
  //delete task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });
    setTask(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = async (id) => {
    const taskToToggle = tasks.find((task) => task.id === id);
    const updatedTask = { ...taskToToggle, reminder: !taskToToggle.reminder };
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(updatedTask),
    });
    const data = await res.json();
    setTask(tasks.map((task) => (task.id === id ? data : task)));
  };

  const filteredTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(searchTasks.toLowerCase())
  );
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header
                  onAdd={addTask}
                  searchText={searchTasks}
                  onSearch={setSearchTasks}
                />
                <Tasks
                  tasks={filteredTasks}
                  onDelete={deleteTask}
                  onToggle={toggleReminder}
                />
              </>
            }
          />
          <Route path="/task/:id" element={<TaskStatus />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "./Header";
import Tasks from "./Tasks";
const TaskStatus = (onToggle) => {
  const [task, setTask] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchTask = async () => {
      const res = await fetch(`http://localhost:5000/tasks/${id}`);
      const data = await res.json();
      setTask(data);
    };
    fetchTask();
  }, [id]);

  const handleBackClick = () => {
    navigate(-1);
  };
  const handleToggleClick = (e) => {
    e.stopPropagation();
    setChecked(!checked);
    onToggle(task.id);
  };
  return (
    <>
      <Header />
      <button onClick={handleBackClick}>Go Back</button>
      <Tasks tasks={[task]} />
    </>
  );
};

export default TaskStatus;

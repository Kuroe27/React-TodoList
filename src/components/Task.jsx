import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Task = ({ task, onDelete, onToggle }) => {
  const navigate = useNavigate();

  const handleTaskClick = () => {
    navigate(`/task/${task.id}`);
  };

  const handleDeleteClick = (e) => {
    e.stopPropagation();
    onDelete(task.id);
  };

  const handleToggleClick = (e) => {
    e.stopPropagation();
    onToggle(task.id);
  };

  return (
    <div
      className={`task ${task.reminder ? "remider" : ""}`}
      onClick={handleTaskClick}
    >
      <p>
        <>
          <input type="checkbox" onClick={handleToggleClick} />
          {task.text}
        </>
        <FaTimes onClick={handleDeleteClick} />{" "}
      </p>
    </div>
  );
};

export default Task;

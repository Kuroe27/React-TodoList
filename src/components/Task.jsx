import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Task = ({ task, onDelete, onToggle }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/task/${task.id}`);
  };

  return (
    <div
      className={`task ${task.reminder ? "remider" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
      onClick={handleClick}
    >
      <p>
        {task.text}
        <FaTimes onClick={() => onDelete(task.id)} />{" "}
      </p>
    </div>
  );
};

export default Task;

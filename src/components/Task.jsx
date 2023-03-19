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
      <div
        className="postText"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          className="check"
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <input
            type="checkbox"
            onChange={() => onToggle(task.id)}
            checked={task.reminder}
            style={{ marginRight: "1rem", width: "1.2rem" }}
          />

          {task.text}
        </div>
        <FaTimes onClick={handleDeleteClick} />{" "}
      </div>
    </div>
  );
};

export default Task;

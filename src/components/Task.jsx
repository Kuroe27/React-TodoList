import { FaTimes } from "react-icons/fa";
const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`task ${task.reminder ? "remider" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <p>
        {task.text}
        <FaTimes onClick={() => onDelete(task.id)} />{" "}
      </p>
    </div>
  );
};

export default Task;

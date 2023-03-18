import { useState } from "react";
import { useLocation } from "react-router-dom";

const Header = ({ onAdd }) => {
  const location = useLocation();
  const [text, setText] = useState("");
  const [showAddTask, setTask] = useState(false);
  const onClick = (e) => {
    e.preventDefault();
    onAdd({ text });
  };
  return (
    <div className="header">
      <div className="headerTitle">
        <h1>Todo-list</h1>
        {location.pathname === "/" && <button onClick={onClick}>Add</button>}
      </div>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
};

export default Header;

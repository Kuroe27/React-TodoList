import React, { useReducer, useState } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "add":
      const newId = state.todos.length + 1;
      return {
        todos: [
          ...state.todos,
          { id: state.counter, text: action.text, onEdit: false },
        ],
        counter: state.counter + 1,
      };
    case "del":
      return {
        todos: state.todos.filter((t) => t.id !== action.id),
        counter: state.counter,
      };
  }
}
const App = () => {
  const [{ todos }, dispatch] = useReducer(reducer, {
    todos: [],
    counter: 1,
  });

  const [text, setText] = useState("");

  return (
    <div className="flex flex-col justify-center items-center border-2 border-black p-2  w-1/2 m-auto mt-6">
      <form
        className=" flex w-full"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: "add", text });
          setText("");
        }}
      >
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border-2 border-black w-full mr-2"
        />
        <button className="py-3 px-8 bg-slate-900 text-white">Add</button>
      </form>
      <ul>
        {todos.map((t) => (
          <div className="flex text-2xl " key={t.id}>
            <p>{t.id}</p>

            <li>
              <input type="text" className="text-center" value={t.text} />
            </li>
            <button
              className="ml-2"
              onClick={() => dispatch({ type: "del", id: t.id })}
            >
              Del
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default App;

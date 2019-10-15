import React from "react";
import { Store } from "./store/Store";

function App() {
  const { state, dispatch } = React.useContext(Store);

  const fetchDataAction = async () => {
    const url = "https://jsonplaceholder.typicode.com/todos";
    const data = await fetch(url);
    const dataJSON = await data.json();
    return dispatch({
      type: "FETCH_DATA",
      payload: dataJSON
    });
  };

  React.useEffect(() => {
    state.length === 0 && fetchDataAction();
  });

  const handleClick = index => {
    return dispatch({ type: "TOGGLE_COMPLETE", payload: index });
  };

  const createStyle = isCompleted =>
    isCompleted ? { textDecoration: "line-through" } : null;

  return (
    <>
      <h1>TO-DO:</h1>
      <ul className="todos">
        {state.map((todo, index) => (
          <li
            key={index}
            style={createStyle(todo.completed)}
            onClick={() => {
              handleClick(index);
            }}
          >
            {todo.title}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;

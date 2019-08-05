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

  const createStyle = isCompleted =>
    isCompleted ? { textDecoration: "line-through" } : null;

  return (
    <>
      <h1>TODOs</h1>
      <ul>
        {state.map(todo => (
          <li key={todo.id} style={createStyle(todo.completed)}>
            {todo.title}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;

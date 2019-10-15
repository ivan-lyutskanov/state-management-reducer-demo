import React from "react";

const initialState = [];

export const Store = React.createContext(initialState);

function reducer(state, action) {
  switch (action.type) {
    case "FETCH_DATA":
      return [...state, ...action.payload];
    case "TOGGLE_COMPLETE":
      const todo = state[action.payload];
      todo.completed = !todo.completed;
      return [...state, todo];
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <Store.Provider value={{ state, dispatch }}>
      {props.children}
    </Store.Provider>
  );
}

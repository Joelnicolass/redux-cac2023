import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "./redux/slices/counter.slice";
import { fetchUsers } from "./redux/slices/user.slice";

const App = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  const { isLoading, users, error } = useSelector((state) => state.user);

  return (
    <div>
      <div>{JSON.stringify(users)}</div>

      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -
      </button>
      <span>{count}</span>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        +
      </button>

      <button
        onClick={() => {
          dispatch(incrementByAmount(5));
        }}
      >
        +5
      </button>

      <button
        onClick={() => {
          dispatch(fetchUsers());
        }}
      >
        Obtener Usuarios
      </button>
    </div>
  );
};

export default App;

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, selectCount } from "./redux/counterSlice";

const Counter = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Add, store } from "../redux";
import { decrement, increment } from "../redux/Slice/CounterSlice.ts";

const ReduxCounter = () => {
  const dispatch = useDispatch();
  // const count = useSelector((state) => state.count);
  // console.log(store.getState());
  const count = useSelector((state) => state.counter.value);

  return (
    <div>
      <div>Counter: {count}</div>
      <button onClick={() => dispatch(decrement())}>minus</button>
      <button onClick={() => dispatch(increment())}>add</button>
    </div>
  );
};

export default ReduxCounter;

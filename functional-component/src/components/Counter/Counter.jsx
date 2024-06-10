import React, { useState } from "react";

const Counter = ({ handleAdd, handleMinus, counter }) => {
  return (
    <div>
      <div>Counter: {counter}</div>
      <button onClick={handleMinus}>-</button>
      <button onClick={handleAdd}>+</button>
    </div>
  );
};

export const CounterContainer = () => {
  const [counter, setCounter] = useState(0);
  return (
    <Counter
      handleMinus={() => setCounter((prev) => prev - 1)}
      handleAdd={() => setCounter((prev) => prev + 1)}
      counter={counter}
    />
  );
};

export default Counter;

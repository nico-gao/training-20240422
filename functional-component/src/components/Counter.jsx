import React, { useState, useRef, useMemo, useCallback, memo } from "react";

// React.memo -  equivelant of pureComponent, it's a hoc
// useCallback(cache a function)
// useMemo(cache a value)

const Counter = (props) => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(0);

  const expensiveCalculation = useCallback(() => {
    let result = count;
    console.log("calculating...");
    for (let i = 0; i < 1000000; i++) {
      result++;
    }
    console.log(result);
    return result;
  }, [count]);

  // const expensiveCalculation = useMemo(() => {
  //   let result = count;
  //   console.log("calculating...");
  //   for (let i = 0; i < 1000000; i++) {
  //     result++;
  //   }
  //   console.log(result);
  //   return result;
  // }, [count]);

  const fnRef = useRef(expensiveCalculation);
  console.log(fnRef.current === expensiveCalculation);

  const handleAdd = useCallback(() => {
    setValue((prev) => prev + 1);
  }, []);

  return (
    <div>
      <div>Counter: {count}</div>
      <button onClick={() => setCount((prev) => prev + 1)}>add</button>
      <button
        onClick={() => {
          expensiveCalculation();
        }}
      >
        calculate
      </button>
      <A value={value} handleAdd={handleAdd} />
    </div>
  );
};

// component rerender: state, props, parent, context
const A = memo(({ value, handleAdd }) => {
  console.log("component A rerender");
  return <div>Component A: {value}</div>;
});

export default Counter;

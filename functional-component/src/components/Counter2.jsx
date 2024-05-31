import React, { createContext, useContext, useReducer, useState } from "react";

// context api
// to pass data throught the component tree, to centralize the states

const CounterContext = createContext();

// console.log(CounterContext);

// action : {type: "XXX"}
function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return {
        count: state.count + 1,
      };
    case "MINUS":
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
}

const Counter2 = () => {
  // const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const { count } = state;
  return (
    // <CounterContext.Provider value={{ count, setCount }}>
    <div>
      Counter2 {count}
      <button onClick={() => dispatch({ type: "ADD" })}>add</button>
      <button onClick={() => dispatch({ type: "MINUS" })}>minus</button>
      <A />
    </div>
    // </CounterContext.Provider>
  );
};

const A = () => {
  return (
    <div>
      <div>A</div>
      <B />
    </div>
  );
};

const B = () => {
  return (
    <div>
      <div>B</div>
      {/* <C /> */}
    </div>
  );
};

// const C = () => {
//   const { count, setCount } = useContext(CounterContext);

//   console.log(count);
//   return (
//     <div>
//       <div>{count}</div>
//       <button onClick={() => setCount((prev) => prev + 1)}>add</button>
//       <div>C</div>
//     </div>
//     // <CounterContext.Consumer>
//     //   {({ count, setCount }) => (
//     //     <div>
//     //       <div>{count}</div>
//     //       <button onClick={() => setCount((prev) => prev + 1)}>add</button>
//     //       <div>C</div>
//     //     </div>
//     //   )}
//     // </CounterContext.Consumer>
//   );
// };
export default Counter2;

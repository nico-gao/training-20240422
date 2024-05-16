import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Counter from "./components/Counter";
/* 
  1. composable: component(reused, customized), custom hooks(reuse logic)
  2. jsx: compiler 
  3. cross platform compatibility: browser, mobile, react native
  4. strong community


  mvc: react is the view

  react: 
    naming convention
    state management;
    data binding;
    event handling;
    props;
    list rendering;

*/

// const a = [1, 2, 3];
// const [apple, car] = a;

// const b = {
//     one: 1,
//     two: 2,
//     three: 3,
// };
// //default value will be taken if the value is undefined

// const { one, three: four } = b;
// console.log("test", four);

function App() {
    // replace the name of the variable returned from useState
    /*  const [counter, setCounter] = useState(1);
    

    const handleIncrement = () => {
        //counter = counter + 1: wrong!
        setCounter(counter + 1);
    }; */

    return (
        <div>
            {/* <div>{counter}</div>
            <button onClick={handleIncrement}>increment</button> */}
            <Counter />
        </div>
    );
}

export default App;

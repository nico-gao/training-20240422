/* 
    node: runtime environment, node-api(express.js)
    node.js: runtime environment, programming language in node env
    javascript: programming language(browser), web-api
    ecmascript: es5, es6(const, let, arrow function, destructuring, promise, class, rest, spread),
*/
//bundling
//module system: common.js(require, module.export), esmodule(import export default), not supported by browser, node support common.js by default
//download the source code manually
//cdn: content delivery network
//vd: tree object
//HOC hell
//compiler: translate high level language code to machine code
//transpiler: transform syntax sugar to javascript code
//babel:
//bundler:webpack, turbopack
//  minimization, uglify

//code(jsx, es6) => babel => code(es5, without jsx) => webpack => code(bundle into single file)

import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";

// const App = () => {
//     return (
//         <div>
//             <b>hello</b>
//         </div>
//     ); /* React.createElement(
//         "div",
//         { id: "test" },
//         React.createElement("b", null, "hello")
//     ); */
//     /*
//     <div>
//         <b>hello</b>
//     </div>; */
// };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

"use strict";

var _App = _interopRequireDefault(require("./App"));
var _react = _interopRequireDefault(require("react"));
var _client = _interopRequireDefault(require("react-dom/client"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
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

//code(jsx, es6) => babel => code(es5, without jsx) => webpack => code(bundle into single file)

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

var root = _client["default"].createRoot(document.getElementById("root"));
root.render( /*#__PURE__*/_react["default"].createElement(_App["default"], null));
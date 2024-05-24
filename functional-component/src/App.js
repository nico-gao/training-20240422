import logo from "./logo.svg";
import "./App.css";
import {
  ClassApp,
  ClassComponentWithCounter,
  FunctionalComponentWithCounter,
  FunctionalApp,
} from "./components/FunctionalApp";

function App() {
  return (
    <div className="App">
      <Context>
        <FunctionalApp />
        <ClassApp />
        {/* <ClassComponentWithCounter foo={"foo"} />
      <FunctionalComponentWithCounter /> */}
      </Context>
    </div>
  );
}

export default App;

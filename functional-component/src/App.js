import logo from "./logo.svg";
import "./App.css";
import {
  ClassApp,
  ClassComponentWithCounter,
  FunctionalComponentWithCounter,
  FunctionalApp,
} from "./components/FunctionalApp";
import Counter from "./components/Counter";
import Counter2 from "./components/Counter2";
import CarApp from "./components/CarApp/CarApp";
import CarProvider from "./components/CarApp/CarContext";
import ReduxCarApp from "./components/CarApp/ReduxCarApp";

function App() {
  return (
    <div className="App">
      <ReduxCarApp />
      {/* <CarProvider>
        <CarApp />
      </CarProvider> */}
      {/* <Counter2 /> */}
      {/* <Counter /> */}
      {/* <FunctionalApp />
      <ClassApp /> */}
      {/* <ClassComponentWithCounter foo={"foo"} />
      <FunctionalComponentWithCounter /> */}
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import {
  ClassApp,
  ClassComponentWithCounter,
  FunctionalComponentWithCounter,
  FunctionalApp,
} from "./components/FunctionalApp";
import Counter, { CounterContainer } from "./components/Counter/Counter";
import Counter2 from "./components/Counter2";
import CarApp from "./components/CarApp/CarApp";
import CarProvider from "./components/CarApp/CarContext";
import ReduxCarApp from "./components/CarApp/ReduxCarApp";
import ReduxCounter from "./components/ReduxCounter";
import TodoList from "./components/RouterComponents/TodoList";
import Home from "./components/RouterComponents/Home";
import MyLink from "./components/Router/MyLink";
import MyRoute from "./components/Router/MyRoute";
import MyRoutes from "./components/Router/MyRoutes";

/**
 *
 * Link - a link/anchor tag for a path
 * Route - render the element corresponding to the path
 * Routes - find the route that matches the current path
 * BrowserRouter - store the current path, provide the routing context
 *
 * history - no reload, use relative pathname, no domain/host name
 * pushState
 * replaceState
 * forward
 * back
 * go
 *
 * location - will cause reload, use full url
 * assign
 * replace
 * reload
 *
 * why we need router
 * spa, navigation won't cause reload
 * to use url to access a specific page
 * to have access to the history feature
 */

function App() {
  return (
    <div className="App">
      {/* <nav>
        <ul>
          <li>
            <MyLink to={"/"}>Home</MyLink>
          </li>
          <li>
            <MyLink to={"/todolist"}>TodoList</MyLink>
          </li>
        </ul>
      </nav>
      <MyRoutes>
        <MyRoute path="/" element={<Home />} />
        <MyRoute path="/todolist" element={<TodoList />} />
      </MyRoutes> */}
      <CounterContainer />
      {/* <ReduxCarApp /> */}
      {/* <ReduxCounter /> */}
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

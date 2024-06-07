import React, { useContext } from "react";
import { RouterContext } from "./MyBrowserRouter";

const MyRoutes = ({ children }) => {
  const { location } = useContext(RouterContext);
  let element;
  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child)) {
      if (child.props.path === location) {
        element = child;
      }
    }
  });

  return element;
};

export default MyRoutes;

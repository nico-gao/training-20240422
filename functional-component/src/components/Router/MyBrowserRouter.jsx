import React, { createContext, useEffect, useState } from "react";

export const RouterContext = createContext(null);

const MyBrowserRouter = ({ children }) => {
  const [location, setLocation] = useState(window.location.pathname);

  useEffect(() => {
    const popstateHandler = () => {
      setLocation(window.location.pathname);
    };
    window.addEventListener("popstate", popstateHandler);

    return () => {
      window.removeEventListener("popstate", popstateHandler);
    };
  }, []);

  const navigate = (to) => {
    console.log("navigate", to);
    window.history.pushState({}, "", to);
    setLocation(to);
  };

  return (
    <RouterContext.Provider value={{ location, navigate }}>
      {children}
    </RouterContext.Provider>
  );
};

export default MyBrowserRouter;

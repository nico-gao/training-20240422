import React, { useContext } from "react";
import { RouterContext } from "./MyBrowserRouter";

const MyLink = ({ to, children }) => {
  const { navigate } = useContext(RouterContext);
  const onClickHandler = (e) => {
    e.preventDefault();
    navigate(to);
  };
  return <a onClick={onClickHandler}>{children}</a>;
};

export default MyLink;

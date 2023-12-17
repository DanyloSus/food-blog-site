import React from "react";
import Header from "./header";

import classes from "./layout.module.css";

const Layout = (props) => {
  return (
    <>
      <Header />
      <main className={classes.Main}>{props.children}</main>
    </>
  );
};

export default Layout;

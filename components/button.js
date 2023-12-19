import React from "react";
import Link from "next/link";

import classes from "./button.module.css";

const Button = (props) => {
  return props.href ? (
    <Link href={props.href} style={{ width: "100%", display: "flex" }}>
      <button
        style={props.right ? { marginLeft: "auto" } : { margin: "0 auto" }}
        className={classes.Button}
      >
        {props.text}
      </button>
    </Link>
  ) : (
    <button
      type="submit"
      style={props.right ? { marginLeft: "auto" } : { margin: "0 auto" }}
      className={classes.Button}
      disabled={props.disabled}
    >
      {props.text}
    </button>
  );
};

export default Button;

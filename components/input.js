import React from "react";
import { ErrorMessage, Field } from "formik";

import classes from "./input.module.css";

const Input = (props) => {
  return (
    <div className={classes.Input}>
      <div className={classes.Input__Texts}>
        <label htmlFor={props.name}>{props.label}</label>
        <label className={classes.Input__Error}>
          <ErrorMessage name={props.name} />
        </label>
      </div>
      {props.isArea ? (
        <Field
          as="textarea"
          id={props.name}
          name={props.name}
          rows="5"
          className={classes.Input__TextField}
        />
      ) : (
        <Field
          id={props.name}
          name={props.name}
          className={classes.Input__TextField}
        />
      )}
    </div>
  );
};

export default Input;

import React from "react";
import { ErrorMessage, Form, Formik, Field } from "formik";
import * as Yup from "yup";

import classes from "@/styles/contact-me-page.module.css";
import Input from "@/components/input";
import Button from "@/components/button";

const ContactMePage = () => {
  return (
    <div className={classes.ContactPage}>
      <h1 className={classes.ContactPage__Header}>Contact Me</h1>
      <Formik
        initialValues={{
          firstName: null,
          lastName: null,
          email: null,
          text: null,
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .min(3, "Must be 3 characters or more")
            .max(50, "Must be 50 characters or less")
            .required("Required"),
          lastName: Yup.string()
            .min(3, "Must be 3 characters or more")
            .max(50, "Must be 50 characters or less")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          text: Yup.string().required("Required"),
        })}
        onSubmit={(values) => {
          console.log(JSON.stringify(values, null, 2));
        }}
      >
        <Form className={classes.ContactPage__Form}>
          <div style={{ display: "flex", gap: "12px", width: "100%" }}>
            <Input name="firstName" label="First Name" />
            <Input name="lastName" label="Last Name" />
          </div>
          <Input name="email" label="Your Email" />
          <Input name="text" label="Your Fedback" isArea />
          <Button text="Send Feedback" right />
        </Form>
      </Formik>
    </div>
  );
};

export default ContactMePage;

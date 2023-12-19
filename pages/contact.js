import React, { useState } from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";

import classes from "@/styles/contact-me-page.module.css";
import Input from "@/components/input";
import Button from "@/components/button";

const ContactMePage = () => {
  const [isSending, setIsSending] = useState(false);

  const router = useRouter();

  function submitFormHandler(values) {
    const contactInfo = {
      id: new Date().toISOString(),
      ...values,
    };

    setIsSending(true);

    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({ contact: contactInfo }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(router.push("/"));
  }

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
        onSubmit={submitFormHandler}
      >
        <Form className={classes.ContactPage__Form}>
          <div style={{ display: "flex", gap: "12px", width: "100%" }}>
            <Input name="firstName" label="First Name" />
            <Input name="lastName" label="Last Name" />
          </div>
          <Input name="email" label="Your Email" />
          <Input name="text" label="Your Fedback" isArea />
          <Button text="Send Feedback" right disabled={isSending} />
        </Form>
      </Formik>
    </div>
  );
};

export default ContactMePage;

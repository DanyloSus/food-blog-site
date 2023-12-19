import { Form, Formik } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";
import Input from "@/components/input";
import Button from "@/components/button";
import { useRouter } from "next/router";

const CreateRecepie = () => {
  const [isSending, setIsSending] = useState(false);

  const router = useRouter();

  function submitFormHandler(values) {
    const blogInfo = {
      id: new Date().toISOString(),
      ...values,
    };

    setIsSending(true);

    fetch("/api/recepies/create", {
      method: "POST",
      body: JSON.stringify({ blog: blogInfo }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(router.push("/recepies"));
  }

  return (
    <div>
      <h1>Create Your recipe</h1>
      <Formik
        initialValues={{ name: null, text: null, imageURL: null }}
        validationSchema={Yup.object({
          name: Yup.string().required("Required"),
          text: Yup.string().required("Required"),
          imageURL: Yup.string().required("Required"),
        })}
        onSubmit={submitFormHandler}
      >
        <Form>
          <Input name="name" label="Name" />
          <Input name="imageURL" label="Image URL" />
          <Input name="text" label="Text of Your recipe" isArea />
          <Button text="Submit" right disabled={isSending} />
        </Form>
      </Formik>
    </div>
  );
};

export default CreateRecepie;

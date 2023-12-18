import { Form, Formik } from "formik";
import * as Yup from "yup";
import React from "react";
import Input from "@/components/input";
import Button from "@/components/button";

const CreateRecepie = () => {
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
        onSubmit={(value) => console.log(value)}
      >
        <Form>
          <Input name="name" label="Name" />
          <Input name="text" label="Text of Your recipe" />
          <Input name="imageURL" label="imageURL" />
          <Button text="Submit" right />
        </Form>
      </Formik>
    </div>
  );
};

export default CreateRecepie;

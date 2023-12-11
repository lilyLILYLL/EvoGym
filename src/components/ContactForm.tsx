import { TextField } from "./TextField";
import { Formik } from "formik";
import { ValidateContactForm, ContactFormModel } from "../shared/validation";
import { ToastNotification } from "./ToastNotification";
import React from "react";

export const ContactForm = () => {
  const [isNotificationOpen, setIsNotoficationOpen] = React.useState(false);

  const handleSubmitting = (values: ContactFormModel) => {
    console.log(values);
  };
  return (
    <div className="flex flex-col  md:w-1/2 gap-6 ">
      <Formik
        initialValues={{ name: "", email: "", message: "" }}
        validationSchema={ValidateContactForm}
        onSubmit={(values, { resetForm }) => {
          setIsNotoficationOpen((prev) => !prev);
          handleSubmitting(values);
          resetForm();
        }}
      >
        {(formik) => (
          <>
            {/* NAME */}
            <TextField
              type="text"
              placeholder="NAME"
              errorMessage={formik.touched.name ? formik.errors.name : ""}
              onChange={formik.handleChange("name")}
              value={formik.values.name}
            />

            {/* EMAIL */}
            <TextField
              type="email"
              placeholder="EMAIL"
              errorMessage={formik.touched.email ? formik.errors.email : ""}
              onChange={formik.handleChange("email")}
              value={formik.values.email}
            />

            {/* MESSAGE */}
            <TextField
              placeholder="MESSAGE"
              textarea
              onChange={formik.handleChange("message")}
              value={formik.values.message}
            />

            {/* SUBMIT BUTTON */}
            <input
              onClick={() => formik.handleSubmit()}
              type="submit"
              value={"Submit"}
              className="inline px-8 py-3 my-4 rounded-lg cursor-pointer w-fit h-fit bg-secondary-500 hover: hover:bg-primary-500 hover:text-white"
            />
          </>
        )}
      </Formik>
      <ToastNotification
        isShown={isNotificationOpen}
        setIsShown={() => setIsNotoficationOpen((prev) => !prev)}
      />
    </div>
  );
};

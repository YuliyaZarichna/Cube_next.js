import { Formik, Form, Field, ErrorMessage } from "formik";
import classes from "./Form.module.scss";
import { useState, useEffect } from "react";

const contactForm = () => {
  const [response, setResponse] = useState({
    type: "",
    message: "",
  });
  const validateEmail = (value) => {
    console.log("validate email", value);
    let errorMessage;
    if (!value) {
      errorMessage = "Email address is required";
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
      errorMessage = "Invalid email address";
    }
    return errorMessage;
  };

  const isRequired = (value) => {
    let errorMessage;
    if (value.length <= 0) {
      errorMessage = "This field is required";
    }
    return errorMessage;
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    console.log(arguments);
    values = {
      ...values,
      replyTo: `@${values.email}`,
      honeypot: "",
      accessKey: "7b46b0ab-c207-4700-90e6-2a9fb245f6d5",
    };
    values = { ...values, replyTo: `@${values.email}` };
    console.log("sudmitted");
    /* setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      resetForm({});
      setSubmitting(false);
    }, 400); */

    try {
      const res = await fetch("https://api.staticforms.xyz/submit", {
        method: "POST",
        body: JSON.stringify(values),
        headers: { "Content-Type": "application/json" },
      });

      const json = await res.json();
      if (json.success) {
        setResponse({
          type: "Success",
          message: "Thank you for reaching out to me.",
        });
        resetForm({});
        setSubmitting(false);
      } else {
        setResponse({
          type: "Error",
          message: json.message,
        });
        setSubmitting(false);
      }
    } catch (e) {
      console.log("Ups:", e);
      toggleOpen();

      setResponse({
        type: "error",
        message:
          "An error occured while submitting the form, please try again.",
      });
    }
  };

  return (
    <div className={classes.MainFormDiv}>
      {/*   <h2>Contact me!</h2>  */}
      <Formik
        initialValues={{ name: "", email: "", subject: "", message: "" }}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className={classes.ContactForm}>
            <div className={classes.ContactRow}>
              <Field
                className={classes.ContactField}
                name="name"
                type="text"
                placeholder="Name"
                validate={isRequired}
              />
              <ErrorMessage
                name="name"
                component="div"
                className={classes.ErrorMessage}
              />
            </div>
            <div className={classes.ContactRow}>
              <Field
                className={classes.ContactField}
                name="email"
                type="email"
                placeholder="Email"
                validate={validateEmail}
              />
              <ErrorMessage
                name="email"
                component="div"
                className={classes.ErrorMessage}
              />
            </div>
            <div className={classes.ContactRow}>
              <Field
                className={classes.ContactField}
                name="subject"
                type="text"
                placeholder="Subject"
                validate={isRequired}
              />
              <ErrorMessage
                name="subject"
                component="div"
                className={classes.ErrorMessage}
              />
            </div>
            <div style={{ height: "150px" }} className={classes.ContactRow}>
              <Field
                className={classes.TextArea}
                name="message"
                type="text"
                placeholder="Message"
                validate={isRequired}
                as="textarea"
              />
              <ErrorMessage
                name="message"
                component="div"
                className={classes.ErrorMessage}
              />
            </div>
            <button
              className={classes.SubmitButton}
              type="submit"
              disabled={isSubmitting}
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default contactForm;

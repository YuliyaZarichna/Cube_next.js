import { Formik, Form, Field, ErrorMessage } from "formik";
import classes from "./Form.module.scss";
const contactForm = () => {
  const validate = (value) => {
    console.log("value", value);
    let errorMessage;
    if (!value.email) {
      errorMessage = "Email address is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value.email)) {
      errorMessage = "Invalid email address";
    }
    return errorMessage;
  };

  const isRequired = (value) => {
    console.log("value", value);
    let errorMessage;
    if (value.length <= 0) {
      errorMessage = "This field is required";
    }
    return errorMessage;
  };

  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  return (
    <div className={classes.MainFormDiv}>
      <h2>Contact me!</h2>

      <Formik
        initialValues={{ name: "", email: "", subject: "", message: "" }}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className={classes.ContactForm}>
            <Field
              className={classes.ContactField}
              name="name"
              type="text"
              placeholder="Name"
              validate={isRequired}
            />
            <ErrorMessage name="name" component="div" />
            <Field
              className={classes.ContactField}
              name="email"
              type="email"
              placeholder="Email"
              validate={validate}
            />
            <ErrorMessage name="email" component="div" />
            <Field
              className={classes.ContactField}
              name="subject"
              type="text"
              placeholder="Subject"
              validate={isRequired}
            />
            <ErrorMessage name="subject" component="div" />
            <Field
              className={classes.ContactField}
              name="message"
              type="text"
              placeholder="Message"
              validate={isRequired}
            />
            <ErrorMessage name="message" component="div" />
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

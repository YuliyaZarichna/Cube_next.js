import { Formik, Form, Field, ErrorMessage } from "formik";
import classes from "./Form.module.scss";
const contactForm = () => {
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

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    console.log("sudmitted");
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      resetForm({});
      setSubmitting(false);
    }, 400);
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

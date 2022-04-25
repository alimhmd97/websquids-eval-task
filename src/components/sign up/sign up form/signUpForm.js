import { Formik, Form } from "formik";
import { TextField } from "./TextField";
import * as Yup from "yup";
import logo from "../../../assets/IHistopathology-Logo.png";
import styles from "./signUpForm.module.css";
import { auth } from "../../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useHistory } from "react-router-dom";

function SignUpForm() {
  const history = useHistory();
  const submitHandler = async (values) => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      history.push("/");
    } catch (error) {
      alert(error.message);
    }
  };

  const validate = Yup.object({
    Name: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),

    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 charaters")
      .required("Password is required"),
  });

  return (
    <Formik
      initialValues={{
        Name: "",
        email: "",
        password: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        submitHandler(values);
      }}>
      {(formik) => (
        <div className='col-7'>
          <div className={styles.logo_wrapper}>
            <img src={logo} alt='' />
          </div>
          <p className=' fw-bolder fs-5 my-3'>Sign Up and Start Learning!</p>
          <Form>
            <TextField
              label='First Name'
              name='Name'
              type='text'
              placeholder='&#x10f0c0; Name'
            />
            <TextField
              label='Email'
              name='email'
              type='email'
              placeholder='&#xf007;email'
            />
            <TextField
              label='password'
              name='password'
              type='password'
              placeholder='   &#xf6ae; password'
            />
            <button
              className={`btn  mt-3 w-100 mt-3 ${styles.sign_up_btn}`}
              type='submit'>
              Sign Up
            </button>
          </Form>
          <p> already have an account? Login</p>
          <p className={styles.sign_up_options}>or create account with</p>
          <button className={styles.Gmail}>G+</button>{" "}
          <button className={styles.FB}>f</button>
          <button className={styles.Linked}>in</button>
        </div>
      )}
    </Formik>
  );
}
export { SignUpForm };

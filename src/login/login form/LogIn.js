import { Formik, Form } from "formik";
import { TextField } from "./TextField";
import * as Yup from "yup";
import logo from "../../assets/IHistopathology-Logo.png";
import styles from "./loginForm.module.css";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function LogInForm() {
  let navigate = useNavigate();
  const submitHandler = async (values) => {
    try {
      await signInWithEmailAndPassword(auth, values.email, values.password);
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  const validate = Yup.object({
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
              Login
            </button>
          </Form>
          <p>
            {" "}
            Dont have an account ? <Link to={"/SignUp"}>SignUp</Link>
          </p>
          <p className={styles.sign_up_options}>or create account with</p>
          <button className={styles.Gmail}>G+</button>{" "}
          {/* <Link to={"https://websquids-auth.firebaseapp.com/__/auth/handler"}> */}{" "}
          <button className={styles.FB}>f</button>
          {/* </Link> */}
          <button className={styles.Linked}>in</button>
        </div>
      )}
    </Formik>
  );
}
export { LogInForm };

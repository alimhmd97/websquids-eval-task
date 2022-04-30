import { Aside } from "../ui/aside";
import { SignUpForm } from "./sign up form/signUpForm";
import styles from "./signUp.module.css";
function SignUp() {
  return (
    <div className={`row ${styles.sign_up_wrapper}`}>
      <aside className='col-4 d-none d-lg-block p-0'>
        <Aside />
      </aside>
      <main className='col-lg-8 col-12 p-0       row d-flex justify-content-center .align-items-center'>
        <SignUpForm className='col-6' />
      </main>
    </div>
  );
}

export { SignUp };

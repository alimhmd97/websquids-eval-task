import { Aside } from "../components/ui/aside";
import { LogInForm } from "./login form/LogIn";
import styles from "./login.module.css";
function Login() {
  return (
    <div className={`row ${styles.login_wrapper}`}>
      <aside className='col-4 d-none d-lg-block p-0'>
        <Aside />
      </aside>
      <main className='col-lg-8 col-12 p-0       row d-flex justify-content-center .align-items-center'>
        <LogInForm className='col-6' />
      </main>
    </div>
  );
}

export { Login };

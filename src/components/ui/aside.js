import styles from "./aside.module.css";
import logo from "../../assets/IHistopathology-Logo-White.png";
function Aside() {
  return (
    <div className={`fw-bold ${styles.asside}`}>
      <p className={styles.welcome_msg}>WELCOME BACK!</p>
      <div className={styles.logo}>
        {" "}
        <img src={logo} alt='' className={styles.logo_img} />
      </div>
    </div>
  );
}

export { Aside };

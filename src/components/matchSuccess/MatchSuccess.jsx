import { NavLink } from "react-router";
import success from "../../assets/images/success.svg";
import styles from "./MatchSuccess.module.css";

function MatchSuccess() {
  return (
    <div className={styles.wrapper}>
      <img className={styles.success} src={success} alt="Match created" />
      <p className={styles.text}>Match created!</p>
      <NavLink to='/' className={styles.button}>Ok</NavLink>
    </div>
  );
}

export { MatchSuccess };

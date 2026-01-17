import { NavLink } from "react-router";
import home from "../../assets/images/home.svg";
import matches from "../../assets/images/cup.svg";
import createMatch from "../../assets/images/plus.svg";
import styles from "./Menu.module.css";

function Menu() {
  return (
    <div className={styles.mobile__menu}>
      <nav className={styles.container}>
        <NavLink to="/">
          <img className={styles.mobile__icon} src={matches} alt="mathces" />
        </NavLink>
        <div className={styles.mobile__line}></div>
        <NavLink to="/">
          <img
            className={styles.mobile__icon}
            src={createMatch}
            alt="create match"
          />
        </NavLink>
        <div className={styles.mobile__line}></div>
        <NavLink to="/">
          <img className={styles.mobile__icon} src={home} alt="home" />
        </NavLink>
      </nav>
    </div>
  );
}

export { Menu };

import { useState } from "react";
import { NavLink } from "react-router";
import styles from "./Burger.module.css";

function Burger() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className={`${styles.burger} ${open ? styles.active : ""}`}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <span className={styles.burger__line} />
      </button>
      <div className={`${styles.menu} ${open ? styles.menu_open : ""}`}>
        <nav className={styles.menu__content}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="teams">Teams</NavLink>
          <NavLink to="mathces">Mathces</NavLink>
          <NavLink to="login">Login</NavLink>
          <NavLink to="registration">Register</NavLink>
        </nav>
      </div>
    </>
  );
}

export { Burger };

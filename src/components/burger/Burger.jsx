import { useState } from "react";
import { NavLink } from "react-router";
import telegram from "../../assets/images/Telegram.svg";
import github from "../../assets/images/Github.svg";
import instagram from "../../assets/images/Instagram.svg";
import linkedin from "../../assets/images/Linkedin.svg";
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
        <nav
          className={styles.menu__content}
          onClick={() => {
            setOpen(false);
          }}
        >
          <NavLink to="/">Home</NavLink>
          <NavLink to="teams">Teams</NavLink>
          <NavLink to="matches">Mathces</NavLink>
          <NavLink to="login">Login</NavLink>
          <NavLink to="registration">Register</NavLink>
        </nav>
        <div className={styles.socials}>
          <h1 className={styles.socials__title}>Contact me</h1>
          <div className={styles.icons__container}>
            <a href="#" target="_blank">
              <img
                className={styles.social__icon}
                src={telegram}
                alt="Telegram"
              />
            </a>
            <a href="#" target="_blank">
              <img
                className={styles.social__icon}
                src={github}
                alt="Telegram"
              />
            </a>
            <a href="#" target="_blank">
              <img
                className={styles.social__icon}
                src={instagram}
                alt="Instagram"
              />
            </a>
            <a className={styles.social__link} href="#" target="_blank">
              <img
                className={styles.social__icon}
                src={linkedin}
                alt="Linkedin"
              />
            </a>
          </div>
          <p className={styles.text}>Made by Plamenevskiy Nikita</p>
        </div>
      </div>
    </>
  );
}

export { Burger };

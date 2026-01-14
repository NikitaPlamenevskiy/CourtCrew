import telegram from "../../assets/images/Telegram.svg";
import github from "../../assets/images/Github.svg";
import instagram from "../../assets/images/Instagram.svg";
import linkedin from "../../assets/images/Linkedin.svg";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
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
            <img className={styles.social__icon} src={github} alt="Telegram" />
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
      </div>
      <p className={styles.text}>Made by Plamenevskiy Nikita</p>
    </footer>
  );
}

export { Footer };

import styles from "./Header.module.css";
import logo from "../assets/images/logo.svg";

function Header() {
  return (
    <>
      <header className={styles.header}>
        <img className={styles.header_logo} src={logo} alt="CourtCrew" />
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Teams</a>
            </li>
            <li>
              <a href="#">Matches</a>
            </li>
            <li>
              <a href="#">Profile</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">Log in</a>
            </li>
            <li>
              <a href="#">Register</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export { Header };

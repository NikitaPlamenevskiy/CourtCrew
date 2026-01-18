import { NavLink } from "react-router";
import { Burger } from "../burger/Burger";
import logo from "../../assets/images/logo_small.svg";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <img className={styles.header_logo} src={logo} alt="CourtCrew" />
      <nav className={styles.navigation}>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="teams">Teams</NavLink>
        <NavLink to="mathces">Mathces</NavLink>
      </nav>
      <Burger />
    </header>
  );
}

export { Header };

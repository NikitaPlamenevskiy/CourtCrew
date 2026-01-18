import { NavLink } from "react-router";
import { Burger } from "../burger/Burger";
import logo from "../../assets/images/logo.svg";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div
        style={{
          maxWidth: "1280px",
          display: "flex",
          justifyContent: "space-between",
          margin: "0 auto",
          alignItems: "center",
        }}
      >
        <img className={styles.header_logo} src={logo} alt="CourtCrew" />
        <nav>
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="teams">Teams</NavLink>
          <NavLink to="mathces">Mathces</NavLink>
        </nav>
        <Burger />
      </div>
    </header>
  );
}

export { Header };

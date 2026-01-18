import { Outlet } from "react-router";
import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";
import { Menu } from "../components/menu/Menu";
import styles from "./MainLayout.module.css";

function MainLayout() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Outlet />
      </div>
      <Menu />
      <Footer />
    </>
  );
}

export { MainLayout };

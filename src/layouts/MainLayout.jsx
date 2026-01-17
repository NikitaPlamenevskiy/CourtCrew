import { Outlet } from "react-router";
import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";
import { Menu } from "../components/menu/Menu";

function MainLayout() {
  return (
    <>
      <Header />
      <div
        style={{
          maxWidth: "1280px",
          margin: "0px auto",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        <Outlet />
      </div>
      <Menu />
      <Footer />
    </>
  );
}

export { MainLayout };

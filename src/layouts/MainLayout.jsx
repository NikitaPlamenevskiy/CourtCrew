import { Outlet } from "react-router";
import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";

function MainLayout() {
  return (
    <>
      <Header />
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export { MainLayout };

import { Outlet } from "react-router";
import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";

function MainLayout() {
  return (
    <>
      <Header />
      <div
        style={{
          maxWidth: "1220px",
          margin: "0px auto",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export { MainLayout };

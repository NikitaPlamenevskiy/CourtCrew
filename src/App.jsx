import { Header } from "./components/header/Header";
import { Matches } from "./components/mathces/Mathces";
import { Footer } from "./components/footer/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <Matches /> 
      </div>
      <Footer/>
    </>
  );
}

export default App;

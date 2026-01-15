import { BrowserRouter, Routes, Route } from "react-router";
import { MainLayout } from "./layouts/MainLayout";
import { Home } from "./components/home-page/Home";
import { Matches } from "./components/matches-page/Matches";
import { Teams } from "./components/teams-page/Teams";
import { NotFound } from "./components/notFound-page/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index={true} element={<Home />} />
          <Route path="mathces" element={<Matches />} />
          <Route path="teams" element={<Teams />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { Teams } from "./Pages/Teams/Teams";
import { MatchCreation } from "./Pages/MatchCreation/MatchCreation";
import { Home } from "./Pages/Home/Home";
import { NotFound } from "./Pages/NotFound/NotFound";
import { Matches } from "./Pages/Matches/Matches";
import { Match } from "./Pages/Match/Match";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index={true} element={<Home />} />
          <Route path="matches">
            <Route index={true} element={<Matches />} />
            <Route path=":id" element={<Match />} />
          </Route>
          <Route path="teams" element={<Teams />} />
          <Route path="create" element={<MatchCreation />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

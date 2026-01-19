import { BrowserRouter, Routes, Route } from "react-router";
import { MainLayout } from "./layouts/MainLayout";

import { Teams } from "./Pages/Teams/Teams";
import { MatchCreation } from "./Pages/MatchCreation/MatchCreation";
import { Home } from "./Pages/Home/Home";
import { NotFound } from "./Pages/NotFound/NotFound";
import { Matches } from "./Pages/Matches/Matches";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index={true} element={<Home />} />
          <Route path="mathces" element={<Matches />} />
          <Route path="teams" element={<Teams />} />
          <Route path="create" element={<MatchCreation />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

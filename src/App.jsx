import { supabase } from "./services/supabase/supabase";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { MainLayout } from "./layouts/MainLayout";
import { Teams } from "./Pages/Teams/Teams";
import { MatchCreation } from "./Pages/MatchCreation/MatchCreation";
import { Home } from "./Pages/Home/Home";
import { NotFound } from "./Pages/NotFound/NotFound";
import { Matches } from "./Pages/Matches/Matches";
import { Match } from "./Pages/Match/Match";

function App() {
  const [users, setUsers] = useState([]);
  const [matches, setMatches] = useState([]);

  console.log(users);
  console.log(matches);

  useEffect(() => {
  async function fetchData() {
    const [
      { data: users, error: usersError },
      { data: matches, error: matchesError },
    ] = await Promise.all([
      supabase.from("users").select(),
      supabase.from("matches").select(),
    ]);

    if (usersError || matchesError) {
      console.error(usersError || matchesError);
      return;
    }

    setUsers(users);
    setMatches(matches);
  }

  fetchData();
}, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index={true} element={<Home matches={matches} users={users}/>} />
          <Route path="matches" >
            <Route index={true} element={<Matches />} />
            <Route path=":id" element={<Match matches={matches}/>} />
          </Route>
          <Route path="teams" element={<Teams />} />
          <Route path="create" element={<MatchCreation users={users} />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

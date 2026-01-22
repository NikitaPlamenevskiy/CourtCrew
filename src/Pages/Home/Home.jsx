// import { supabase } from "../../services/supabase/supabase";
// import { useEffect, useState } from "react";
import { MatchesBlock } from "../../components/matchSlider/MathcesBlock";
import { PlayerBlock } from "../../components/playerCard/PlayerBlock";

function Home() {
  // const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   async function getUsers() {
  //     const { data } = await supabase.from("users").select();
  //     setUsers(data);
  //   }
  //   getUsers();
  // }, []);

  return (
    <>
      <MatchesBlock/>
      <PlayerBlock />
    </>
  );
}

export { Home };

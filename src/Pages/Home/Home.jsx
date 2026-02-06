import { MatchesBlock } from "../../components/matchSlider/MathcesBlock";
import { PlayerBlock } from "../../components/playerCard/PlayerBlock";

function Home({ matches, users, teams }) {
  return (
    <>
      <MatchesBlock matches={matches} teams={teams} />
      <PlayerBlock users={users} />
    </>
  );
}

export { Home };

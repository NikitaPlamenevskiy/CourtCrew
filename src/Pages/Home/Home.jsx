import { MatchesBlock } from "../../components/matchSlider/MathcesBlock";
import { PlayerBlock } from "../../components/playerCard/PlayerBlock";

function Home({ matches, teams }) {
  return (
    <>
      <MatchesBlock matches={matches} teams={teams} />
      <PlayerBlock />
    </>
  );
}

export { Home };

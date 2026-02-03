import { MatchesBlock } from "../../components/matchSlider/MathcesBlock";
import { PlayerBlock } from "../../components/playerCard/PlayerBlock";

function Home({ matches }) {
  return (
    <>
      <MatchesBlock matches={matches} />
      <PlayerBlock />
    </>
  );
}

export { Home };

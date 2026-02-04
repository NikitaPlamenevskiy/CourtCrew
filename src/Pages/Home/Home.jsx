import { MatchesBlock } from "../../components/matchSlider/MathcesBlock";
import { PlayerBlock } from "../../components/playerCard/PlayerBlock";

function Home({ matches, users }) {
  return (
    <>
      <MatchesBlock matches={matches} />
      <PlayerBlock users={users} />
    </>
  );
}

export { Home };

import { useParams } from "react-router-dom";
import { matches } from "../../data/matches";

function Match() {
  const params = useParams();
  console.log(params);
  const match = matches.find((match) => match.id === Number(params.id));
  return (
    <>
      <h1>{match.date}</h1>
      <h2>{match.teamOne}</h2>
       <h2>{match.teamTwo}</h2>
    </>
  );
}

export { Match };

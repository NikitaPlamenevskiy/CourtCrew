import { useNavigate } from "react-router-dom";
import { MatchCard } from "../matchCard/MatchCard";
import styles from "./MatchesBlock.module.css";

function MatchesBlock({matches}) {
  const navigate = useNavigate();

  return (
    <>
      <h1 className={styles.title}>Matches</h1>
      <div className={styles.cards_container}>
        {matches?.map((match) => {
          return (
            <MatchCard
              key={match.id}
              match={match}
              onClick={() => navigate(`/matches/${match.id}`)}
            />
          );
        })}
      </div>
    </>
  );
}

export { MatchesBlock };

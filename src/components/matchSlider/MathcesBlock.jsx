import { useNavigate } from "react-router-dom";
import { MatchCard } from "../matchCard/MatchCard";
import { MatchCardLoader } from "../matchCardLoader/MatchCardLoader";
import styles from "./MatchesBlock.module.css";

function MatchesBlock({ matches, teams }) {
  const navigate = useNavigate();

  return (
    <>
      <h1 className={styles.title}>Matches</h1>
      <div className={styles.cards_container}>
        {(matches && matches.length >= 1)
          ? matches.map((match) => {
              return (
                <MatchCard
                  key={match.id}
                  match={match}
                  teams={teams}
                  onClick={() => navigate(`/matches/${match.id}`)}
                />
              );
            })
          : Array.from({ length: 4 }).map((_, i) => (
              <MatchCardLoader key={i} />
            ))}
      </div>
    </>
  );
}

export { MatchesBlock };

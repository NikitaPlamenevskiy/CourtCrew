import { matches } from "../../data/matches";
import { MatchCard } from "../matchCard/MatchCard";
import styles from "./MatchesBlock.module.css";

function MatchesBlock() {
  return (
    <>
      <h1 className={styles.title}>Matches</h1>
      <div className={styles.cards_container}>
        {matches.map((match) => {
          return <MatchCard key={match.id} match={match} />;
        })}
      </div>
    </>
  );
}

export { MatchesBlock };

import { MatchCard } from "./MatchCard";
import styles from "./MatchesBlock.module.css";

function MatchesBlock() {
  return (
    <>
      <h1 className={styles.title}>Matches</h1>
      <div
        className={styles.cards_container}
      >
        <MatchCard />
        <MatchCard />
        <MatchCard />
        <MatchCard />
        <MatchCard />
      </div>
    </>
  );
}

export { MatchesBlock };

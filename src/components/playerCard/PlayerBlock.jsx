import { PlayerCard } from "./PlayerCard";
import styles from "./PlayerBlock.module.css";

function PlayerBlock() {
  return (
    <>
      <h1 className={styles.title}>Players</h1>
      <div className={styles.cards_container}>
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
      </div>
    </>
  );
}

export { PlayerBlock };

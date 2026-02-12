import { useContext } from "react";
import { UsersContext } from "../../contexts/UsersContext";
import { PlayerCard } from "./PlayerCard";
import styles from "./PlayerBlock.module.css";

function PlayerBlock() {
  const users = useContext(UsersContext);
  
  return (
    <>
      <h1 className={styles.title}>Players</h1>
      <div className={styles.cards_container}>
        {users.map((user) => {
          return <PlayerCard key={user.id} user={user} />;
        })}
      </div>
    </>
  );
}

export { PlayerBlock };

import { NavLink } from "react-router-dom";
import { MatchCard } from "../../components/matchCard/MatchCard";
import { matches } from "../../data/matches";
import styles from "./Matches.module.css";

function Matches() {
  return (
    <>
      <h1 className={styles.title}>Matches</h1>
      <div className={styles.wrapper}>
        {matches.map((match) => {
          return (
            <NavLink to={String(match.id)} key={match.id}>
              <MatchCard match={match} />
            </NavLink>
          );
        })}
      </div>
    </>
  );
}

export { Matches };

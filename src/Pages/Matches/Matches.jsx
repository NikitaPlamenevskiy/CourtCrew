import { NavLink } from "react-router-dom";
import { MatchCard } from "../../components/matchCard/MatchCard";
import styles from "./Matches.module.css";

function Matches({ matches, teams }) {
  return (
    <>
      <h1 className={styles.title}>Matches</h1>
      <div className={styles.wrapper}>
        {matches.map((match) => {
          return (
            <NavLink to={String(match.id)} key={match.id}>
              <MatchCard match={match} teams={teams} />
            </NavLink>
          );
        })}
      </div>
    </>
  );
}

export { Matches };

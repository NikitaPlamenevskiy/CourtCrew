import styles from "./MatchCard.module.css";
import team_1 from "../../assets/images/team_1.png";

const SCORE_COLORS = {
  win: "#00911B",
  lose: "#D74848",
  draw: "#ffffff",
};

const STATUS_COLORS = {
  Live: "#00911B",
  Awaiting: "#D7D748",
  Ended: "#D74848",
};

function MatchCard({ match, onClick }) {
  function defineColorStatus() {
    if (!match) return;
    const status = match.status;
    return STATUS_COLORS[status];
  }

  function defineScoreColor(teamOne, teamTwo) {
    if (teamOne > teamTwo) return SCORE_COLORS.win;
    if (teamOne < teamTwo) return SCORE_COLORS.lose;
    return SCORE_COLORS.draw;
  }

  return (
    <>
      <div className={styles.card} onClick={onClick}>
        <div className={styles.wrapper}>
          <div className={styles.wrapper}>
            <h1 className={styles.status}>{match.status}</h1>
            <div
              className={styles.status_color}
              style={{ backgroundColor: defineColorStatus() }}
            ></div>
          </div>
          <h2 className={styles.date}>{match.date}</h2>
          <div className={styles.wrapper}>
            <div className={styles.wrapper}>
              <img
                className={styles.team__img}
                src={team_1}
                alt={match.teamOne}
              />
              <h3 className={styles.team__name}>{match.teamOne}</h3>
            </div>
            <p
              className={styles.team__points}
              style={{
                color: defineScoreColor(match.teamOneScore, match.teamTwoScore),
              }}
            >
              {match.teamOneScore}
            </p>
            <span className={styles.line}></span>
            <div className={styles.wrapper}>
              <img
                className={styles.team__img}
                src={team_1}
                alt={match.teamTwo}
              />
              <h3 className={styles.team__name}>{match.teamTwo}</h3>
            </div>
            <p
              className={styles.team__points}
              style={{
                color: defineScoreColor(match.teamTwoScore, match.teamOneScore),
              }}
            >
              {match.teamTwoScore}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export { MatchCard };

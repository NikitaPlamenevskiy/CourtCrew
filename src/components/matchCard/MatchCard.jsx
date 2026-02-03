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
  const startDate = new Date(match.start_at);
  const status = startDate <= new Date() ? "Live" : "Awaiting";

  function defineColorStatus(status) {
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
            <h1 className={styles.status}>{status}</h1>
            <div
              className={styles.status_color}
              style={{ backgroundColor: defineColorStatus(status) }}
            ></div>
          </div>
          <h2 className={styles.date}>
            {startDate.toLocaleDateString("ru-RU")}
          </h2>
          <div className={styles.wrapper}>
            <div className={styles.wrapper}>
              <img
                className={styles.team__img}
                src={team_1}
                alt={match.team_one_id}
              />
              <h3 className={styles.team__name}>{match.team_one_id}</h3>
            </div>
            <p
              className={styles.team__points}
              style={{
                color: defineScoreColor(
                  match.team_one_score,
                  match.team_two_score,
                ),
              }}
            >
              {match.team_one_score === null ? 0 : match.team_one_score}
            </p>
            <span className={styles.line}></span>
            <div className={styles.wrapper}>
              <img
                className={styles.team__img}
                src={team_1}
                alt={match.team_two_id}
              />
              <h3 className={styles.team__name}>{match.team_two_id}</h3>
            </div>
            <p
              className={styles.team__points}
              style={{
                color: defineScoreColor(
                  match.team_two_score,
                  match.team_one_score,
                ),
              }}
            >
              {match.team_two_score === null ? 0 : match.team_two_score}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export { MatchCard };

import styles from "./NewsCard.module.css";
import team_1 from "../../assets/images/team_1.png";

function MatchCard() {
  return (
    <>
      <div className={styles.card}>
        <h1 className={styles.date}>13.01.2026 </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            gap: "10px",
            alignItems: "center",
            margin: "0px auto",
          }}
        >
          <div className={styles.team_container}>
            <img className={styles.img} src={team_1} alt="" />
            <h2 className={styles.team_name}>Team_1</h2>
          </div>
          <p>VS</p>
          <div className={styles.team_container}>
            <img className={styles.img} src={team_1} alt="" />
            <h2 className={styles.team_name}>Team_2</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export { MatchCard };

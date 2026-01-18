import plus from "../../assets/images/plus.svg";
import styles from "./MatchCreation.module.css";

function MatchCreation() {
  return (
    <>
      <h1 className={styles.title}>Match creation</h1>
      <form action="">
        <div className={styles.wrapper}>
          <div className={styles.inputBlock}>
            <label htmlFor="name">Match name</label>
            <input type="text" name="name" placeholder="Match name" />
          </div>
          <div className={styles.inputBlock}>
            <label htmlFor="date">Match date</label>
            <input type="date" name="date" value="2026-01-01"/>
          </div>

          <div className={styles.inputBlock}>
            <label htmlFor="team-one">Team one</label>
            <button className={styles.button}>
              <img src={plus} alt="Add" />
            </button>
          </div>
          <div className={styles.inputBlock}>
            <label htmlFor="team-one">Team one</label>
            <button className={styles.button}>
              <img src={plus} alt="Add" />
            </button>
          </div>

          <input type="submit" value="Create" />
        </div>
      </form>
    </>
  );
}

export { MatchCreation };

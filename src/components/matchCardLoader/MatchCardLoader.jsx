import styles from "./MatchCardLoader.module.css";

function MatchCardLoader() {
  return (
    <div className={styles.card}>
      <p className={styles.name}>Match</p>
      <div className={styles.wrapper}>
        <div className={styles.wrapper}>
          <h1 className={styles.status}></h1>
        </div>
        <h2 className={styles.date}></h2>
        <div className={styles.wrapper}>
          <div className={styles.wrapper}>
            <div className={styles.team__img}></div>
            <h3 className={styles.team__name}></h3>
          </div>
          <span className={styles.line}></span>
          <div className={styles.wrapper}>
            <div className={styles.team__img}></div>
            <h3 className={styles.team__name}></h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export { MatchCardLoader };

import styles from "./MatchCardLoader.module.css";

function MatchCardLoader() {
  return (
    <div className={styles.card}>
      <div className={styles.wrapper}>
        <div className={styles.wrapper}>
          <h1 className={styles.status}></h1>
          <div className={styles.status_color}></div>
        </div>
        <h2 className={styles.date}></h2>
        <div className={styles.wrapper}>
          <div className={styles.wrapper}>
            <img className={styles.team__img} />
            <h3 className={styles.team__name}></h3>
          </div>
          <p className={styles.team__points}>0</p>
          <span className={styles.line}></span>
          <div className={styles.wrapper}>
            <img
              className={styles.team__img}
            />
            <h3 className={styles.team__name}></h3>
          </div>
          <p className={styles.team__points}>0</p>
        </div>
      </div>
    </div>
  );
}

export { MatchCardLoader };

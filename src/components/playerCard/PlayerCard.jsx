import photo from "../../assets/images/playerCard.jpg";
import ball from "../../assets/images/ball.svg";
import styles from "./PlayerCard.module.css";

function PlayerCard() {
  return (
    <div className={styles.card}>
      <img className={styles.ball_tl} src={ball} alt="ball" />
      <img className={styles.ball_tr} src={ball} alt="ball" />
      <img className={styles.ball_bl} src={ball} alt="ball" />
      <img className={styles.ball_br} src={ball} alt="ball" />
      <div className={styles.card__info}>
        <div className={styles.card__number}>7</div>
        <img className={styles.card__photo} src={photo} alt="player photo" />
        <p className={styles.card__name}>Michael Jordan</p>
      </div>
    </div>
  );
}

export { PlayerCard };

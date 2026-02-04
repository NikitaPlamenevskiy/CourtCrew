// import photo from "../../assets/images/playerCard.jpg";
import ball from "../../assets/images/ball.svg";
import styles from "./PlayerCard.module.css";

function PlayerCard({ user }) {
  const avatarLink = `https://ayqpmgyhonlttpnaowyq.supabase.co/storage/v1/object/public/avatars/${user.id}.jpg`;
  return (
    <div className={styles.card}>
      <img className={styles.ball_tl} src={ball} alt="ball" />
      <img className={styles.ball_tr} src={ball} alt="ball" />
      <img className={styles.ball_bl} src={ball} alt="ball" />
      <img className={styles.ball_br} src={ball} alt="ball" />
      <div className={styles.card__info}>
        <p className={styles.card__number}>{user.playerNumber}</p>
        <img
          className={styles.card__photo}
          src={avatarLink}
          alt="player photo"
        />
        <p className={styles.card__name}>
          {user.name} {user.surname.length > 6
            ? user.surname.slice(0, 4) + "..."
            : user.surname}
        </p>
      </div>
    </div>
  );
}

export { PlayerCard };

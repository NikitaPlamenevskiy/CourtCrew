import { useParams } from "react-router-dom";
import { matches } from "../../data/matches";
import photo from "../../assets/images/playerCard.jpg";
import team_1 from "../../assets/images/team_1.png";
import styles from "./Match.module.css";

function Match() {
  const params = useParams();

  const match = matches.find((match) => match.id === Number(params.id));
  return (
    <>
      <h1 className={styles.title}>Match</h1>
      <div className={styles.content}>
        <div className={styles.wrapper}>
          <img className={styles.team__img} src={team_1} alt="TeamOne" />
          <h2 className={styles.team__name}>{match.teamOne}</h2>
        </div>
        <div className={styles.wrapper}>
          <p className={styles.status}>{match.status}</p>
          <p
            className={styles.score}
          >{`${match.teamOneScore} : ${match.teamTwoScore}`}</p>
        </div>
        <div className={styles.wrapper}>
          <img className={styles.team__img} src={team_1} alt="TeamOne" />
          <h2 className={styles.team__name}>{match.teamTwo}</h2>
        </div>
        <span className={styles.line}></span>
        <h2 className={styles.header}>Stats</h2>
        <div className={styles.team}>
          <div className={styles.player__card}>
            <div>
              <img className={styles.player__img} src={photo} alt="user_name" />
              <p className={styles.player__name}>M.J.</p>
            </div>
            <span className={styles.line_card}></span>
            <p className={styles.player__score}>20</p>
          </div>
          <div className={styles.player__card}>
            <div>
              <img className={styles.player__img} src={photo} alt="user_name" />
              <p className={styles.player__name}>M.J.</p>
            </div>
            <span className={styles.line_card}></span>
            <p className={styles.player__score}>20</p>
          </div>
          <div className={styles.player__card}>
            <div>
              <img className={styles.player__img} src={photo} alt="user_name" />
              <p className={styles.player__name}>M.J.</p>
            </div>
            <span className={styles.line_card}></span>
            <p className={styles.player__score}>20</p>
          </div>
          <div className={styles.player__card}>
            <div>
              <img className={styles.player__img} src={photo} alt="user_name" />
              <p className={styles.player__name}>M.J.</p>
            </div>
            <span className={styles.line_card}></span>
            <p className={styles.player__score}>20</p>
          </div>
          <div className={styles.player__card}>
            <div>
              <img className={styles.player__img} src={photo} alt="user_name" />
              <p className={styles.player__name}>M.J.</p>
            </div>
            <span className={styles.line_card}></span>
            <p className={styles.player__score}>20</p>
          </div>
        </div>
        <div className={styles.team}>
          <div className={styles.player__card}>
            <div>
              <img className={styles.player__img} src={photo} alt="user_name" />
              <p className={styles.player__name}>M.J.</p>
            </div>
            <span className={styles.line_card}></span>
            <p className={styles.player__score}>20</p>
          </div>
          <div className={styles.player__card}>
            <div>
              <img className={styles.player__img} src={photo} alt="user_name" />
              <p className={styles.player__name}>M.J.</p>
            </div>
            <span className={styles.line_card}></span>
            <p className={styles.player__score}>20</p>
          </div>
          <div className={styles.player__card}>
            <div>
              <img className={styles.player__img} src={photo} alt="user_name" />
              <p className={styles.player__name}>M.J.</p>
            </div>
            <span className={styles.line_card}></span>
            <p className={styles.player__score}>20</p>
          </div>
          <div className={styles.player__card}>
            <div>
              <img className={styles.player__img} src={photo} alt="user_name" />
              <p className={styles.player__name}>M.J.</p>
            </div>
            <span className={styles.line_card}></span>
            <p className={styles.player__score}>20</p>
          </div>
          <div className={styles.player__card}>
            <div>
              <img className={styles.player__img} src={photo} alt="user_name" />
              <p className={styles.player__name}>M.J.</p>
            </div>
            <span className={styles.line_card}></span>
            <p className={styles.player__score}>20</p>
          </div>
        </div>
      </div>
    </>
  );
}

export { Match };

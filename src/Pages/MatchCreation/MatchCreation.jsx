import { useState } from "react";
import plus from "../../assets/images/plus.svg";
import photo from "../../assets/images/playerCard.jpg";
import styles from "./MatchCreation.module.css";

function MatchCreation({ users }) {
  const [open, setOpen] = useState(false);
  const [teamOne, setTeamOne] = useState([]);
  console.log(teamOne);

  function toggleModal(event) {
    event.preventDefault();
    setOpen((prev) => !prev);
  }

  function addPlayersToTeam(event) {
    setTeamOne((prev) => {
      if (event.target.checked) {
        return [...prev, Number(event.target.id)];
      } else {
        return prev.filter((playerId) => playerId !== Number(event.target.id));
      }
    });
  }

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
            <input type="date" name="date" />
          </div>
          <div
            className={`${styles.users__list} ${open ? `${styles.open}` : ""}`}
          >
            <h1>Team one</h1>
            <span>{teamOne.length} from 5</span>
            <div className={styles.userScroll}>
              {users.map((user) => {
                return (
                  <div className={styles.wrapper} key={user.id}>
                    <input
                      className={styles.checkbox}
                      type="checkbox"
                      id={user.id}
                      name="player"
                      checked={teamOne.includes(user.id)}
                      onChange={(event) => addPlayersToTeam(event)}
                    />
                    <img
                      className={styles.player__img}
                      src={photo}
                      alt={user.name}
                    />
                    <p className={styles.player__name}>
                      {user.name} {user.surname}
                    </p>
                  </div>
                );
              })}
            </div>
            <button
              type="button"
              className={styles.button}
              onClick={toggleModal}
            >
              Add
            </button>
          </div>
          <div className={styles.inputBlock}>
            <label htmlFor="team-one">Team one</label>
            <button
              className={styles.button}
              onClick={(event) => {
                toggleModal(event);
              }}
            >
              <img src={plus} alt="Add" />
            </button>
          </div>
          {/* <div
            className={`${styles.users__list} ${open ? `${styles.open}` : ""}`}
          >
            <h1>Team two</h1>
            <span>0 from 5</span>
            <div className={styles.userScroll}>
              {users.map((user) => {
                return (
                  <div className={styles.wrapper} key={user.id}>
                    <input
                      className={styles.checkbox}
                      type="checkbox"
                      name="player"
                    />
                    <img
                      className={styles.player__img}
                      src={photo}
                      alt={user.name}
                    />
                    <p className={styles.player__name}>
                      {user.name} {user.surname}
                    </p>
                  </div>
                );
              })}
            </div>
            <button
              type="button"
              className={styles.button}
              onClick={toggleModal}
            >
              Add
            </button>
          </div> */}
          <div className={styles.inputBlock}>
            <label htmlFor="team-two">Team two</label>
            <button
              className={styles.button}
              onClick={(event) => {
                toggleModal(event);
              }}
            >
              <img src={plus} alt="Add" />
            </button>
          </div>

          <input type="submit" value="Create" disabled />
        </div>
      </form>
    </>
  );
}

export { MatchCreation };

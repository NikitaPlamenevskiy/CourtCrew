import { useState } from "react";
import plus from "../../assets/images/plus.svg";
import photo from "../../assets/images/playerCard.jpg";
import styles from "./MatchCreation.module.css";

function MatchCreation({ users }) {
  const [openTeamOne, setOpenTeamOne] = useState(false);
  const [openTeamTwo, setOpenTeamTwo] = useState(false);
  const [teamOne, setTeamOne] = useState([]);
  const [teamTwo, setTeamTwo] = useState([]);

  const availableTeamOne = users.filter((user) => {
    return !teamTwo.some((player) => player.id === user.id);
  });

  const availableTeamTwo = users.filter((user) => {
    return !teamOne.some((player) => player.id === user.id);
  });

  function toggleModal(event, team) {
    if (team === "teamOne") {
      setOpenTeamOne((prev) => !prev);
    } else if (team === "teamTwo") {
      setOpenTeamTwo((prev) => !prev);
    }
  }

  function addPlayersToTeam(event, user) {
    setTeamOne((prev) => {
      if (event.target.checked) {
        return [...prev, user];
      } else {
        return prev.filter((player) => player.id !== user.id);
      }
    });
  }

  function addPlayersToTeamTwo(event, user) {
    setTeamTwo((prev) => {
      if (event.target.checked) {
        return [...prev, user];
      } else {
        return prev.filter((player) => player.id !== user.id);
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
            className={`${styles.users__list} ${openTeamOne ? `${styles.open}` : ""}`}
          >
            <h1>Team one</h1>
            <span>{teamOne.length} from 5</span>
            <div className={styles.userScroll}>
              {availableTeamOne.map((user) => {
                return (
                  <div className={styles.wrapper} key={user.id}>
                    <input
                      className={styles.checkbox}
                      type="checkbox"
                      name="player"
                      checked={teamOne.some((player) => player.id === user.id)}
                      onChange={(event) => addPlayersToTeam(event, user)}
                      disabled={
                        teamOne.length === 5 &&
                        !teamOne.some((player) => player.id === user.id)
                      }
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
              onClick={(event) => {
                toggleModal(event, "teamOne");
              }}
            >
              Close
            </button>
          </div>
          <div className={styles.inputBlock}>
            <label htmlFor="team-one">Team one</label>
            <button
              className={styles.button}
              onClick={(event) => {
                toggleModal(event, "teamOne");
              }}
            >
              <img src={plus} alt="Add" />
            </button>
          </div>
          <div
            className={`${styles.users__list} ${openTeamTwo ? `${styles.open}` : ""}`}
          >
            <h1>Team two</h1>
            <span>{teamTwo.length} from 5</span>
            <div className={styles.userScroll}>
              {availableTeamTwo.map((user) => {
                return (
                  <div className={styles.wrapper} key={user.id}>
                    <input
                      className={styles.checkbox}
                      type="checkbox"
                      name="player"
                      checked={teamTwo.some((player) => player.id === user.id)}
                      onChange={(event) => addPlayersToTeamTwo(event, user)}
                      disabled={
                        teamTwo.length === 5 &&
                        !teamTwo.some((player) => player.id === user.id)
                      }
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
              onClick={(event) => {
                toggleModal(event, "teamTwo");
              }}
            >
              Close
            </button>
          </div>
          <div className={styles.inputBlock}>
            <label htmlFor="team-two">Team two</label>
            <button
              className={styles.button}
              onClick={(event) => {
                toggleModal(event, "teamTwo");
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

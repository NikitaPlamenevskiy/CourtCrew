// TO DO 
// 1. Убрать форму в отдельеный компонент 
// 2. заменить styles на className в JSX


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
    event.preventDefault();
    if (team === "teamOne") {
      setOpenTeamOne((prev) => !prev);
    } else if (team === "teamTwo") {
      setOpenTeamTwo((prev) => !prev);
    }
  }

  function addPlayersToTeam(event, user, team) {
    if (team === "teamOne")
      setTeamOne((prev) => {
        if (event.target.checked) {
          return [...prev, user];
        } else {
          return prev.filter((player) => player.id !== user.id);
        }
      });

    if (team === "teamTwo") {
      setTeamTwo((prev) => {
        if (event.target.checked) {
          return [...prev, user];
        } else {
          return prev.filter((player) => player.id !== user.id);
        }
      });
    }
  }

  function submitForm(formData) {
    const matchName = formData.get("matchName");
    const matchDate = formData.get("matchDate");

    const date = new Date(matchDate).toString();

    const match = {
      matchName: matchName,
      matchDate: Date.parse(date),
      teamOne: teamOne,
      teamTwo: teamTwo,
    };

    console.log(match);
  }

  return (
    <>
      <h1 className={styles.title}>Match creation</h1>
      <form action={submitForm}>
        <div className={styles.wrapper}>
          <div className={styles.inputBlock}>
            <label>Match name</label>
            <input type="text" name="matchName" placeholder="Match name" />
          </div>
          <div className={styles.inputBlock}>
            <label>Match date</label>
            <input type="date" name="matchDate" />
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
                      onChange={(event) =>
                        addPlayersToTeam(event, user, "teamOne")
                      }
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
            <div
              style={{
                marginBottom: "10px",
                display: "flex",
                flexDirection: "row",
                gap: "22px",
                overflow: "scroll",
              }}
            >
              {teamOne.map((player) => {
                return (
                  <div key={player.id}>
                    <img
                      className={styles.player__img}
                      src={photo}
                      alt={player.name}
                    />
                    <p
                      style={{
                        fontSize: "18px",
                        fontWeight: "700",
                        margin: "0px",
                        textAlign: "center",
                      }}
                    >
                      {player.name.slice(0, 1)}.{player.surname.slice(0, 1)}.
                    </p>
                  </div>
                );
              })}
            </div>
            <button
              className={styles.button}
              onClick={(event) => {
                toggleModal(event, "teamOne");
              }}
            >
              {!teamOne.length ? <img src={plus} alt="Add" /> : "Edit"}
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
                      onChange={(event) =>
                        addPlayersToTeam(event, user, "teamTwo")
                      }
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
            <div
              style={{
                marginBottom: "10px",
                display: "flex",
                flexDirection: "row",
                gap: "22px",
                overflow: "scroll",
              }}
            >
              {teamTwo.map((player) => {
                return (
                  <div key={player.id}>
                    <img
                      className={styles.player__img}
                      src={photo}
                      alt={player.name}
                    />
                    <p
                      style={{
                        fontSize: "18px",
                        fontWeight: "700",
                        margin: "0px",
                        textAlign: "center",
                      }}
                    >
                      {player.name.slice(0, 1)}.{player.surname.slice(0, 1)}.
                    </p>
                  </div>
                );
              })}
            </div>
            <button
              className={styles.button}
              onClick={(event) => {
                toggleModal(event, "teamTwo");
              }}
            >
              {!teamTwo.length ? <img src={plus} alt="Add" /> : "Edit"}
            </button>
          </div>
          <input type="submit" value="Create" />
        </div>
      </form>
    </>
  );
}

export { MatchCreation };

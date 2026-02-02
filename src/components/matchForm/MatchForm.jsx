import { useState } from "react";
import plus from "../../assets/images/plus.svg";
import photo from "../../assets/images/playerCard.jpg";
import styles from "./MatchForm.module.css";

function MatchForm({
  teamOne,
  teamTwo,
  availableTeamOne,
  availableTeamTwo,
  addPlayersToTeam,
  submitForm,
}) {
  const today = new Date().toLocaleDateString("en-CA");

  const [openTeam, setOpenTeam] = useState({ teamOne: false, teamTwo: false });
  const [matchName, setMatchName] = useState("");
  const [date, setDate] = useState(today);
  const [error, setError] = useState({ textInput: false, dateInput: false });

  function getCurrentDate(event) {
    const selectedDate = new Date(event.target.value);

    if (selectedDate < new Date(today)) {
      setError((prev) => ({ ...prev, dateInput: true }));
    } else {
      setError((prev) => ({ ...prev, dateInput: false }));
      setDate(event.target.value);
    }
  }

  function toggleModal(event, team) {
    event.preventDefault();

    if (team === "teamOne") {
      setOpenTeam((prev) => ({ ...prev, teamOne: !prev.teamOne }));
    } else if (team === "teamTwo") {
      setOpenTeam((prev) => ({ ...prev, teamTwo: !prev.teamTwo }));
    }
  }

  function inputValidation(event) {
    setError((prev) => ({
      ...prev,
      textInput: event.target.value.trim() === "",
    }));
  }

  return (
    <>
      <form
        onSubmit={async (e) => {
          e.preventDefault();

          const formData = new FormData(e.target);
          await submitForm(formData);
        }}
      >
        <div className={styles.wrapper}>
          <div className={styles.inputBlock}>
            <label>Match name</label>
            <input
              type="text"
              name="matchName"
              placeholder="Match name"
              onChange={(event) => {
                setMatchName(event.target.value);
                inputValidation(event);
              }}
              value={matchName}
            />
            {error.textInput && (
              <span className={styles.error}>Setup match name</span>
            )}
          </div>
          <div className={styles.inputBlock}>
            <label>Match date</label>
            <input
              type="date"
              name="matchDate"
              onChange={getCurrentDate}
              value={date}
            />
            {error.dateInput && (
              <span className={styles.error}>
                Dates in the past are not allowed.
              </span>
            )}
          </div>
          <div
            className={`${styles.users__list} ${openTeam.teamOne ? `${styles.open}` : ""}`}
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
            <div className={styles.pciked__users}>
              {teamOne.map((player) => {
                return (
                  <div key={player.id}>
                    <img
                      className={styles.player__img}
                      src={photo}
                      alt={player.name}
                    />
                    <p className={styles.users__initials}>
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
            className={`${styles.users__list} ${openTeam.teamTwo ? `${styles.open}` : ""}`}
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
            <div className={styles.pciked__users}>
              {teamTwo.map((player) => {
                return (
                  <div key={player.id}>
                    <img
                      className={styles.player__img}
                      src={photo}
                      alt={player.name}
                    />
                    <p className={styles.users__initials}>
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
          <input
            type="submit"
            value="Create"
            disabled={matchName.trim() === "" || error.dateInput}
          />
        </div>
      </form>
    </>
  );
}

export { MatchForm };

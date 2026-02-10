import { useState } from "react";
import { TeamListPicker } from "../teamListPicker/TeamListPicker";
import plus from "../../assets/images/plus.svg";
import styles from "./MatchForm.module.css";
import { Input } from "../input/Input.jsx";

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
  const [error, setError] = useState({
    textInput: false,
    dateInput: false,
  });

  function toggleModal(event, team) {
    event.preventDefault();

    setOpenTeam((prev) => ({ ...prev, [team]: !prev[team] }));
  }

  function getCurrentDate(event) {
    const selectedDate = new Date(event.target.value);

    if (selectedDate < new Date(today)) {
      setError((prev) => ({ ...prev, dateInput: true }));
    } else {
      setError((prev) => ({ ...prev, dateInput: false }));
      setDate(event.target.value);
    }
  }

  const handleTextInput = (event) => {
    const value = event.target.value;
    setMatchName(value);
    inputValidation(value);
  };

  function inputValidation(value) {
    setError((prev) => ({
      ...prev,
      textInput: value.trim() === "",
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
            <Input
              type={"text"}
              name={"matchName"}
              label={"Match name"}
              placeholder={"Match name"}
              value={matchName}
              onChange={handleTextInput}
              error={error.textInput && "Setup match name"}
            />
          </div>
          <div className={styles.inputBlock}>
            <Input
              type={"date"}
              name={"matchDate"}
              label={"Match date"}
              value={date}
              onChange={getCurrentDate}
              error={error.dateInput && "Dates in the past are not allowed."}
            />
          </div>
          <TeamListPicker
            teamName={"teamOne"}
            team={teamOne}
            availableTeam={availableTeamOne}
            openTeam={openTeam}
            toggleModal={toggleModal}
            addPlayersToTeam={addPlayersToTeam}
          />
          <div className={styles.inputBlock}>
            <label htmlFor="team-one">Team one</label>
            <span>{teamOne.length} from 5</span>
            <div className={styles.pciked__users}>
              {teamOne.map((player) => {
                return (
                  <div key={player.id}>
                    <img
                      className={styles.player__img}
                      src={`https://ayqpmgyhonlttpnaowyq.supabase.co/storage/v1/object/public/avatars/${player.id}.jpg`}
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
          <TeamListPicker
            teamName={"teamTwo"}
            team={teamTwo}
            availableTeam={availableTeamTwo}
            openTeam={openTeam}
            toggleModal={toggleModal}
            addPlayersToTeam={addPlayersToTeam}
          />

          <div className={styles.inputBlock}>
            <label htmlFor="team-two">Team two</label>
            {teamTwo.length} from 5
            <div className={styles.pciked__users}>
              {teamTwo.map((player) => {
                return (
                  <div key={player.id}>
                    <img
                      className={styles.player__img}
                      src={`https://ayqpmgyhonlttpnaowyq.supabase.co/storage/v1/object/public/avatars/${player.id}.jpg`}
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
            disabled={
              matchName.trim() === "" ||
              error.dateInput ||
              teamOne.length < 5 ||
              teamTwo.length < 5
            }
          />
        </div>
      </form>
    </>
  );
}

export { MatchForm };

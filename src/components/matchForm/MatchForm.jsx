import { useState } from "react";
import { Input } from "../input/Input.jsx";
import { TeamPicker } from "../teamPicker/TeamPicker.jsx";
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
  const [error, setError] = useState({
    textInput: false,
    dateInput: false,
  });

  function toggleModal(event, team) {
    event.preventDefault();
    setOpenTeam((prev) => ({ ...prev, [team]: !prev[team] }));
  }

  const getCurrentDate = (event) => {
    const selectedDate = new Date(event.target.value);

    if (selectedDate < new Date(today)) {
      setError((prev) => ({ ...prev, dateInput: true }));
    } else {
      setError((prev) => ({ ...prev, dateInput: false }));
      setDate(event.target.value);
    }
  };

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
    <form
      className={styles.form}
      onSubmit={async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        await submitForm(formData);
      }}
    >
      <Input
        type={"text"}
        name={"matchName"}
        label={"Match name"}
        placeholder={"Match name"}
        value={matchName}
        onChange={handleTextInput}
        error={error.textInput && "Setup match name"}
      />
      <Input
        type={"date"}
        name={"matchDate"}
        label={"Match date"}
        value={date}
        onChange={getCurrentDate}
        error={error.dateInput && "Dates in the past are not allowed."}
      />
      <TeamPicker
        teamName={"teamOne"}
        team={teamOne}
        onClick={toggleModal}
        availableTeam={availableTeamOne}
        openTeam={openTeam}
        addPlayersToTeam={addPlayersToTeam}
      />
      <TeamPicker
        teamName={"teamTwo"}
        team={teamTwo}
        onClick={toggleModal}
        availableTeam={availableTeamTwo}
        openTeam={openTeam}
        addPlayersToTeam={addPlayersToTeam}
      />
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
    </form>
  );
}

export { MatchForm };

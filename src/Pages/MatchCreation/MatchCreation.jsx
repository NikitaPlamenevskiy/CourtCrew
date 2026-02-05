import { useState } from "react";
import { supabase } from "../../services/supabase/supabase";
import { MatchForm } from "../../components/matchForm/MatchForm";
import { MatchSuccess } from "../../components/matchSuccess/MatchSuccess";
import styles from "./MatchCreation.module.css";

function MatchCreation({ users }) {
  const [teamOne, setTeamOne] = useState([]);
  const [teamTwo, setTeamTwo] = useState([]);
  const [matchCreated, setMatchCreated] = useState(false);

  const availableTeamOne = users.filter((user) => {
    return !teamTwo.some((player) => player.id === user.id);
  });

  const availableTeamTwo = users.filter((user) => {
    return !teamOne.some((player) => player.id === user.id);
  });

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

  async function submitForm(formData) {
    const matchName = formData.get("matchName");
    const matchDate = formData.get("matchDate");

    const date = new Date(matchDate).toISOString();
    const teamOneIds = teamOne.map((player) => player.id);
    const teamTwoIds = teamTwo.map((player) => player.id);

    const { error } = await supabase.rpc("create_match", {
      match_name: matchName,
      team_one_name: "teamOne",
      team_two_name: "teamTwo",
      team_one_players: teamOneIds,
      team_two_players: teamTwoIds,
      match_start_at: date,
    });

    if (error) {
      console.log(error.message);
    } else {
      setTeamOne([]);
      setTeamTwo([]);
      setMatchCreated(true);
    }
  }

  return (
    <>
      <h1 className={styles.title}>Match creation</h1>
      {!matchCreated && (
        <MatchForm
          teamOne={teamOne}
          teamTwo={teamTwo}
          availableTeamOne={availableTeamOne}
          availableTeamTwo={availableTeamTwo}
          addPlayersToTeam={addPlayersToTeam}
          submitForm={submitForm}
        />
      )}
      {matchCreated && <MatchSuccess />}
    </>
  );
}

export { MatchCreation };

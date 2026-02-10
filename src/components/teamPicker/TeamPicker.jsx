import plus from "../../assets/images/plus.svg";
import { TeamListPicker } from "../teamListPicker/TeamListPicker";
import styles from "./TeamPicker.module.css";

function TeamPicker({
  team,
  teamName,
  onClick,
  availableTeam,
  openTeam,
  addPlayersToTeam,
}) {
  return (
    <>
      <div className={styles.container}>
        <h2>{teamName === "teamOne" ? "Team one" : "Team two"}</h2>
        <span>{team.length} from 5</span>
        <div className={styles.pciked__users}>
          {team.map((player) => {
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
            onClick(event, teamName);
          }}
        >
          {!team.length ? <img src={plus} alt="Add" /> : "Edit"}
        </button>
      </div>
      <TeamListPicker
        team={team}
        teamName={teamName}
        onClick={onClick}
        availableTeam={availableTeam}
        openTeam={openTeam}
        addPlayersToTeam={addPlayersToTeam}
      />
    </>
  );
}

export { TeamPicker };

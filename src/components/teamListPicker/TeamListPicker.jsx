import styles from "./TeamListPicker.module.css";

function TeamListPicker({
  openTeam,
  teamName,
  team,
  availableTeam,
  onClick,
  addPlayersToTeam,
}) {
  return (
    <div
      className={`${styles.users__list} ${openTeam[teamName] ? `${styles.open}` : ""}`}
    >
      <h1>{teamName === "teamOne" ? "Team one" : "Team two"}</h1>
      <span>{team.length} from 5</span>
      <div className={styles.userScroll}>
        {availableTeam.map((user) => {
          return (
            <div className={styles.wrapper} key={user.id}>
              <input
                className={styles.checkbox}
                type="checkbox"
                name="player"
                checked={team.some((player) => player.id === user.id)}
                onChange={(event) => addPlayersToTeam(event, user, teamName)}
                disabled={
                  team.length === 5 &&
                  !team.some((player) => player.id === user.id)
                }
              />
              <img
                className={styles.player__img}
                src={`https://ayqpmgyhonlttpnaowyq.supabase.co/storage/v1/object/public/avatars/${user.id}.jpg`}
                alt={user.name}
              />
              <p className={styles.player__name}>
                {user.name} <br />
                {user.surname}
              </p>
            </div>
          );
        })}
      </div>
      <button
        type="button"
        className={styles.button}
        onClick={(event) => {
            onClick(event, teamName);
          }}
      >
        Close
      </button>
    </div>
  );
}

export { TeamListPicker };

import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { supabase } from "../../services/supabase/supabase";
import { UsersContext } from "../../contexts/UsersContext";
import team_1 from "../../assets/images/team_1.png";
import styles from "./Match.module.css";

function Match({ matches, teams }) {
  const users = useContext(UsersContext);
  const params = useParams();

  const [teamPlayers, setTeamPlayers] = useState([]);

  const match = matches.find((match) => match.id === Number(params.id));

  const [teamOne, teamTwo] = [match?.team_one_id, match?.team_two_id].map(
    (id) => teams.find((team) => team.id === id),
  );

  const [teamOnePlayers, teamTwoPlayers] = [
    match?.team_one_id,
    match?.team_two_id,
  ].map((id) => teamPlayers.filter((players) => players.team_id === id));

  useEffect(() => {
    async function fetchData() {
      const [{ data: teamPlayers, error: teamPlayersError }] =
        await Promise.all([supabase.from("team_players").select()]);

      if (teamPlayersError) {
        console.error(teamPlayersError);
        return;
      }

      setTeamPlayers(teamPlayers);
    }

    fetchData();
  }, []);

  return (
    <>
      {!match && <h1>Loading...</h1>}
      {match && (
        <div>
          <h1 className={styles.title}>Match</h1>
          <div className={styles.content}>
            <div className={styles.wrapper}>
              <img className={styles.team__img} src={team_1} alt="TeamOne" />
              <h2 className={styles.team__name}>{teamOne?.name}</h2>
            </div>
            <div className={styles.wrapper}>
              <p className={styles.status}>{match.status}</p>
              <p
                className={styles.score}
              >{`${match.team_one_score} : ${match.team_two_score}`}</p>
            </div>
            <div className={styles.wrapper}>
              <img className={styles.team__img} src={team_1} alt="TeamTwo" />
              <h2 className={styles.team__name}>{teamTwo?.name}</h2>
            </div>
            <span className={styles.line}></span>
            <h2 className={styles.header}>Stats</h2>
            <div className={styles.team}>
              {teamOnePlayers.map((teamPlayer) => {
                const user = users.find(
                  (user) => user.id === teamPlayer.player_id,
                );
                if (!user) return;

                return (
                  <div className={styles.player__card}>
                    <div>
                      <img
                        className={styles.player__img}
                        src={`https://ayqpmgyhonlttpnaowyq.supabase.co/storage/v1/object/public/avatars/${user.id}.jpg`}
                        alt="user_name"
                      />
                      <p className={styles.player__name}>
                        {user.name.slice(0, 1)}.{user.surname.slice(0, 1)}.
                      </p>
                    </div>
                    <span className={styles.line_card}></span>
                    <p className={styles.player__score}>20</p>
                  </div>
                );
              })}
            </div>
            <div className={styles.team}>
              {teamTwoPlayers.map((teamPlayer) => {
                const user = users.find(
                  (user) => user.id === teamPlayer.player_id,
                );
                if (!user) return;

                return (
                  <div className={styles.player__card}>
                    <div>
                      <img
                        className={styles.player__img}
                        src={`https://ayqpmgyhonlttpnaowyq.supabase.co/storage/v1/object/public/avatars/${user.id}.jpg`}
                        alt="user_name"
                      />
                      <p className={styles.player__name}>
                        {user.name.slice(0, 1)}.{user.surname.slice(0, 1)}.
                      </p>
                    </div>
                    <span className={styles.line_card}></span>
                    <p className={styles.player__score}>20</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export { Match };

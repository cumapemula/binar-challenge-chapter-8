import { useEffect, useState } from "react";
import FormUpdate from "../Fragments/FormUpdate";
import ListUpdate from "../Fragments/ListUpdate";
import PlayerLayouts from "../Layouts/PlayerLayouts";

function UpdatePage() {
  const [players, setPlayers] = useState([]);
  const [player, setPlayer] = useState({
    id: 0,
    username: "",
    email: "",
    exp: 0,
    level: 0,
  });

  useEffect(() => {
    setPlayers(JSON.parse(localStorage.getItem("data")) || []);
  }, []);

  const resetState = () => {
    setPlayer({
      id: 0,
      username: "",
      email: "",
      exp: 0,
      level: 0,
    });
    return
  }

  const updatePlayer = (event) => {
    event.preventDefault();

    const isPlayerNoUpdate = players.filter((p) => p.id != player.id);
    localStorage.setItem("data", JSON.stringify([player, ...isPlayerNoUpdate]));
    resetState()
    setPlayers(JSON.parse(localStorage.getItem("data")));
    return
  };

  return (
    <>
      <PlayerLayouts></PlayerLayouts>
      <div className="flex flex-wrap flex-col gap-10 relative translate-y-20 pb-40">
        <ListUpdate>
          {players && players.map((player) => {
            return (
              <tr key={player.id}>
                <td>{player.username}</td>
                <td>{player.email}</td>
                <td>{player.exp}</td>
                <td>
                  <button
                    onClick={() => {
                      setPlayer({
                        id: player.id,
                        username: player.username,
                        email: player.email,
                        password: player.password,
                        exp: player.exp,
                        level: player.exp,
                      });
                    }}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            );
          })}
        </ListUpdate>
        <h1 className="text-3xl font-semibold text-slate-900 tracking-wide">Update Player</h1>
        <FormUpdate
          onSubmit={updatePlayer}
          valueUsername={player.username}
          onChangeUsername={(event) => {
            setPlayer((before) => {
              return {
                ...before,
                username: event.target.value,
              };
            });
          }}
          valueEmail={player.email}
          onChangeEmail={(event) => {
            setPlayer((before) => {
              return {
                ...before,
                email: event.target.value,
              };
            });
          }}
          valueExp={player.exp}
          onChangeExp={(event) => {
            setPlayer((before) => {
              return {
                ...before,
                exp: event.target.value,
                level: event.target.value,
              };
            });
          }}
        ></FormUpdate>
      </div>
    </>
  );
}

export default UpdatePage;

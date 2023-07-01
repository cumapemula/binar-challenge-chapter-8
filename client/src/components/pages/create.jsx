import { useEffect, useState } from "react";
import FormCreate from "../Fragments/FormCreate";
import ListPlayer from "../Fragments/ListPlayer";
import PlayerLayouts from "../Layouts/PlayerLayouts";

function CreatePage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [exp, setExp] = useState(0);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    setPlayers(JSON.parse(localStorage.getItem("data")) || []);
  }, []);

  const resetState = () => {
    setUsername("");
    setPassword("");
    setEmail("");
    setExp(0);
    return
  }

  const createPlayer = (event) => {
    event.preventDefault();

    if (players.length > 0) {
      localStorage.setItem(
        "data",
        JSON.stringify([
          ...players,
          {
            id: players.length + 1,
            username,
            email,
            password : "*****",
            exp,
            level: exp || 0,
          },
        ])
      );
      resetState()
      setPlayers(JSON.parse(localStorage.getItem("data")));
      return;
    }
    localStorage.setItem(
      "data",
      JSON.stringify([{ id: 1, username, email, password: "*****", exp, level: exp || 0, }])
    );
    resetState()
    setPlayers(JSON.parse(localStorage.getItem("data")));
    return;
  };

  return (
    <>
      <PlayerLayouts></PlayerLayouts>
      <div className="flex flex-col flex-wrap gap-10 relative translate-y-20 pb-40">
        <h1 className="text-3xl font-semibold text-slate-900 tracking-wide">Create Player</h1>
        <FormCreate
          onSubmit={createPlayer}
          valueUsername={username}
          onChangeUsername={(event) => {
            setUsername(() => event.target.value);
          }}
          valueEmail={email}
          onChangeEmail={(event) => {
            setEmail(() => event.target.value);
          }}
          valuePassword={password}
          onChangePassword={(event) => {
            setPassword(() => event.target.value);
          }}
          valueExp={exp}
          onChangeExp={(event) => {
            setExp(() => event.target.value);
          }}
        ></FormCreate>
        <ListPlayer>
          {players.map((player) => {
            return (
              <tr key={player.id}>
                <td>{player.username}</td>
                <td>{player.email}</td>
                <td>*****</td>
                <td>{player.exp}</td>
              </tr>
            );
          })}
        </ListPlayer>
      </div>
    </>
  );
}

export default CreatePage;

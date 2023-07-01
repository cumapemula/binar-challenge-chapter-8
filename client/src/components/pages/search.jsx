import { useState } from "react";
import FormSearch from "../Fragments/FormSearch";
import PlayerLayouts from "../Layouts/PlayerLayouts";
import Card from "../Elements/Card";

function SearchPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [level, setLevel] = useState("");
  const [exp, setExp] = useState(0);
  const [players, setPlayers] = useState({});

  const searchPlayer = (event) => {
    event.preventDefault();

    setPlayers(() => {
      return [
        {
          username,
          email,
          level,
          exp,
        },
      ];
    });
    console.log(players);
    return;
  };

  return (
    <>
      <PlayerLayouts></PlayerLayouts>
      <div className="flex flex-col flex-wrap gap-10 relative translate-y-20 pb-40">
        <h1 className="text-3xl font-semibold text-slate-900 tracking-wide">
          Search Player
        </h1>
        <FormSearch
          onSubmit={searchPlayer}
          valueUsername={username}
          onChangeUsername={(event) => {
            setUsername(() => event.target.value);
          }}
          valueEmail={email}
          onChangeEmail={(event) => {
            setEmail(() => event.target.value);
          }}
          valueLevel={level}
          onChangeLevel={(event) => {
            setLevel(() => event.target.value);
          }}
          valueExp={exp}
          onChangeExp={(event) => {
            setExp(() => event.target.value);
          }}
        ></FormSearch>
        {players.length > 0 && (
          <Card>
            <h1 className="card-title capitalize">username</h1>
            <p>{players[0].username}</p>
            <h1 className="card-title capitalize">email</h1>
            <p>{players[0].email}</p>
            <h1 className="card-title capitalize">level</h1>
            <p>{players[0].level}</p>
            <h1 className="card-title capitalize">exp</h1>
            <p>{players[0].exp}</p>
          </Card>
        )}
      </div>
    </>
  );
}

export default SearchPage;

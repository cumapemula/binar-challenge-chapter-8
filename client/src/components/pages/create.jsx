import { useEffect, useState } from "react";
import PlayerLayouts from "../Layouts/PlayerLayouts";
import List from "../Fragments/List";
import Form from "../Fragments/Form";
import { AlertError } from "../Elements/Alert";

let errorMessage = false;

function CreatePage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [exp, setExp] = useState(0);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    setPlayers(JSON.parse(localStorage.getItem("data")) || []);
    errorMessage = false;
  }, []);

  const resetState = () => {
    setUsername("");
    setPassword("");
    setEmail("");
    setExp(0);
    return;
  };

  const isExist = players.find((player) => {
    return player.username === username || player.email === email;
  });

  const createPlayer = (event) => {
    event.preventDefault();
    errorMessage = false;

    if (isExist) {
      resetState();
      errorMessage = true;
      return;
    }

    if (players.length > 0) {
      localStorage.setItem(
        "data",
        JSON.stringify([
          ...players,
          {
            id: players.length + 1,
            username,
            email,
            password: "*****",
            exp,
            level: exp || 0,
          },
        ])
      );
      setPlayers(JSON.parse(localStorage.getItem("data")));
      resetState();
      return false;
    }
    localStorage.setItem(
      "data",
      JSON.stringify([
        { id: 1, username, email, password: "*****", exp, level: exp || 0 },
      ])
    );
    setPlayers(JSON.parse(localStorage.getItem("data")));
    resetState();
    return;
  };

  return (
    <>
      <PlayerLayouts></PlayerLayouts>
      <div className="flex flex-col flex-wrap gap-10 relative translate-y-20 pb-40">
        <h1 className="text-3xl font-semibold text-slate-900 tracking-wide">
          Create Player
        </h1>
        {errorMessage == true ? (
          <div className="w-1/4 mx-auto capitalize">
            <AlertError>username / email already exists</AlertError>
          </div>
        ) : (
          <></>
        )}
        <Form onSubmit={createPlayer}>
          <Form.Label htmlFor="username">username</Form.Label>
          <Form.Input
            type="text"
            placeholder="username"
            name="username"
            id="username"
            value={username}
            onChange={(event) => {
              setUsername(() => event.target.value);
            }}
          />
          <Form.Label htmlFor="email">email</Form.Label>
          <Form.Input
            type="email"
            placeholder="email"
            name="email"
            id="email"
            value={email}
            onChange={(event) => {
              setEmail(() => event.target.value);
            }}
          />
          <Form.Label htmlFor="password">password</Form.Label>
          <Form.Input
            type="password"
            placeholder="password"
            name="password"
            id="password"
            value={password}
            onChange={(event) => {
              setPassword(() => event.target.value);
            }}
          />
          <Form.Label htmlFor="exp">experience</Form.Label>
          <Form.Input
            type="number"
            placeholder="exp"
            name="exp"
            id="exp"
            min="0"
            value={exp}
            onChange={(event) => {
              setExp(() => event.target.value);
            }}
          />
          <div>
            <Form.Button>Create</Form.Button>
          </div>
        </Form>
        <List>
          <List.Header>
            {players.length > 0 ? (
              <>
                <td>username</td>
                <td>email</td>
                <td>password</td>
                <td>experience</td>
              </>
            ) : (
              <></>
            )}
          </List.Header>
          <List.Body>
            {players.length > 0 &&
              players.map((player) => {
                return (
                  <tr key={player.id}>
                    <td>{player.username}</td>
                    <td>{player.email}</td>
                    <td>*****</td>
                    <td>{player.exp}</td>
                  </tr>
                );
              })}
          </List.Body>
        </List>
      </div>
    </>
  );
}

export default CreatePage;

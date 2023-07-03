import { useEffect, useState } from "react";
import PlayerLayouts from "../Layouts/PlayerLayouts";
import List from "../Fragments/List";
import Form from "../Fragments/Form";
import { AlertError } from "../Elements/Alert";

let errorMessage = false;

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
    errorMessage = false;
  }, []);

  const resetState = () => {
    setPlayer({
      id: 0,
      username: "",
      email: "",
      exp: 0,
      level: 0,
    });
    return;
  };

  const updatePlayer = (event) => {
    event.preventDefault();
    errorMessage = false;

    if (player.username == "" || player.email == "") {
      resetState();
      errorMessage = true;
      return;
    }

    const isPlayerNoUpdate = players.filter((p) => p.id != player.id);
    localStorage.setItem("data", JSON.stringify([player, ...isPlayerNoUpdate]));
    resetState();
    setPlayers(JSON.parse(localStorage.getItem("data")));
    return;
  };

  return (
    <>
      <PlayerLayouts></PlayerLayouts>
      {players.length == 0 ? (
        <p className="text-3xl capitalize translate-y-3/4 h-2/4">
          data tidak ditemukan
        </p>
      ) : (
        <>
          <div className="flex flex-wrap flex-col gap-10 relative translate-y-20 pb-40">
            <List>
              <List.Header>
                {players.length > 0 ? (
                  <>
                    <td>username</td>
                    <td>email</td>
                    <td>experience</td>
                  </>
                ) : (
                  <></>
                )}
              </List.Header>
              <List.Body>
                {players &&
                  players.map((player) => {
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
              </List.Body>
            </List>
            <h1 className="text-3xl font-semibold text-slate-900 tracking-wide">
              Update Player
            </h1>
            {errorMessage == true ? (
              <div className="w-1/4 mx-auto">
                <AlertError>
                  Form field cannot be empty <br />
                  Please click edit button
                </AlertError>
              </div>
            ) : (
              <></>
            )}
            <Form onSubmit={updatePlayer}>
              <Form.Label htmlFor="username">username</Form.Label>
              <Form.Input
                type="text"
                placeholder="username"
                name="username"
                id="username"
                readOnly
                required
                value={player.username}
                onChange={(event) => {
                  setPlayer((before) => {
                    return {
                      ...before,
                      username: event.target.value,
                    };
                  });
                }}
              />
              <Form.Label htmlFor="email">email</Form.Label>
              <Form.Input
                type="email"
                placeholder="email"
                name="email"
                id="email"
                readOnly
                required
                value={player.email}
                onChange={(event) => {
                  setPlayer((before) => {
                    return {
                      ...before,
                      email: event.target.value,
                    };
                  });
                }}
              />
              <Form.Label htmlFor="exp">experience</Form.Label>
              <Form.Input
                type="number"
                placeholder="exp"
                name="exp"
                id="exp"
                min="1"
                value={player.exp}
                onChange={(event) => {
                  setPlayer((before) => {
                    return {
                      ...before,
                      exp: event.target.value,
                    };
                  });
                }}
              />
              <div>
                <Form.Button>Update</Form.Button>
              </div>
            </Form>
          </div>
        </>
      )}
    </>
  );
}

export default UpdatePage;

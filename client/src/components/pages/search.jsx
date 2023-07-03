import { useState } from "react";
import PlayerLayouts from "../Layouts/PlayerLayouts";
import Card from "../Elements/Card";
import Form from "../Fragments/Form";
import Select from "../Elements/Select";
import InputForm from "../Elements/Input";

function SearchPage() {
  const [option, setOption] = useState("username");
  const [input, setInput] = useState("");
  const [player, setPlayer] = useState(undefined);

  const dummy = {
    username: "anonymous",
    email: "anonymous@anonymous",
    exp: 0,
    level: 0,
  };

  const searchPlayer = (event) => {
    event.preventDefault();

    const dummyKeys = Object.keys(dummy);
    const optionSelected = dummyKeys.filter((key) => key == option);
    setPlayer({ ...dummy, [optionSelected]: input });
  };

  return (
    <>
      <PlayerLayouts></PlayerLayouts>
      <div className="flex flex-wrap gap-10 relative translate-y-20 pb-40">
        <h1 className="text-3xl font-semibold text-slate-900 tracking-wide mx-auto">
          Search Player
        </h1>
        <Form onSubmit={searchPlayer}>
          <div className="flex flex-wrap">
            <Form.Select
              name="criteria"
              id="criteria"
              onChange={(event) => setOption(event.target.value)}
            >
              <Select.Option disabled>Please choose one</Select.Option>
              <Select.Option value="username">username</Select.Option>
              <Select.Option value="email">email</Select.Option>
              <Select.Option value="level">level</Select.Option>
              <Select.Option value="exp">exp</Select.Option>
            </Form.Select>
            <InputForm>
              <InputForm.Input
                type="search"
                id="search"
                placeholder="keywords"
                onChange={(event) => setInput(event.target.value)}
              ></InputForm.Input>
            </InputForm>
            <span className="relative -translate-y-5">
              <Form.Button>Search</Form.Button>
            </span>
          </div>
        </Form>
        {typeof player != "undefined" && (
          <Card>
            <Card.Image src="images/avatar.jpg" alt="Avatar"></Card.Image>
            <Card.Body>
              <h1 className="card-title capitalize">username</h1>
              <p>{player.username}</p>
              <h1 className="card-title capitalize">email</h1>
              <p>{player.email}</p>
              <h1 className="card-title capitalize">level</h1>
              <p>{player.level}</p>
              <h1 className="card-title capitalize">exp</h1>
              <p>{player.exp}</p>
            </Card.Body>
          </Card>
        )}
      </div>
    </>
  );
}

export default SearchPage;

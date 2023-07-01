import { useEffect, useState } from "react";
import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

function FormCreate(props) {
  const {
    onSubmit,
    onChangeUsername,
    valueUsername,
    onChangeEmail,
    valueEmail,
    onChangePassword,
    valuePassword,
    onChangeExp,
    valueExp,
  } = props;
  

  return (
    <div className="flex flex-wrap justify-center w-full">
      <form onSubmit={onSubmit}>
        <InputForm
          htmlFor="username"
          type="text"
          name="username"
          placeholder="username"
          id="username"
          value={valueUsername}
          onChange={onChangeUsername}
        >
          Username
        </InputForm>
        <InputForm
          htmlFor="email"
          type="email"
          name="email"
          placeholder="email"
          id="email"
          value={valueEmail}
          onChange={onChangeEmail}
        >
          Email
        </InputForm>
        <InputForm
          htmlFor="password"
          type="password"
          name="password"
          placeholder="password"
          id="password"
          value={valuePassword}
          onChange={onChangePassword}
        >
          Password
        </InputForm>
        <InputForm
          htmlFor="exp"
          type="number"
          name="exp"
          placeholder="exp"
          id="exp"
          min="0"
          value={valueExp}
          onChange={onChangeExp}
        >
          Experience
        </InputForm>
        <Button type="submit">Create</Button>
      </form>
    </div>
  );
}

export default FormCreate;

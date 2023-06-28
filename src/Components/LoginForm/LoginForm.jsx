import { useState } from "react";
import TextField from "../TextField/TextField";
import { fields } from "../TextField/fields";
import s from "./LoginForm.module.scss";

const LoginForm = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const hendleInputChange = (event) => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const hendleSubmit = (event) => {
    event.preventDefault();
    const dataUser = {
      email,
      password,
    };

    onSubmit(dataUser);

    resetForm();
  };

  const resetForm = () => {
    setEmail("");
    setPassword("");
  };
  return (
    <form onSubmit={hendleSubmit} className={s.loginForm}>
      <div className={s.form}>
        <TextField
          value={email}
          onChange={hendleInputChange}
          {...fields.email}
        />
        <TextField
          value={password}
          onChange={hendleInputChange}
          {...fields.password}
        />
      </div>
      <button type="submit" className={s.login}>
        Login
      </button>
    </form>
  );
};

export default LoginForm;

// TODO:01 Сделать Error Messages под логин и пароль

import { Input } from "Componens/common/Input";
import { useLogin } from "Hooks/api/useLogin";
import React, { FC, useState } from "react";

import styles from "Styles/pageStyles/login.module.css";
import { ILogin } from "Types/login";

export const LoginPage: FC = () => {
  const [data, setData] = useState<ILogin>({ email: "", password: "" });

  const { isDisabled, mutate } = useLogin();

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };

  const onSubmitLoginData: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    mutate(data);
  };

  return (
    <div className={styles["login"]}>
      <form className={styles["login_form"]} onSubmit={onSubmitLoginData}>
        <label>Войти</label>
        <div>
          <Input
            disabled={isDisabled}
            onChange={onChange}
            id="email"
            type={"email"}
          />
        </div>
        <div>
          <Input
            disabled={isDisabled}
            onChange={onChange}
            id="password"
            type={"password"}
          />
        </div>
        <button type="submit">Вход</button>
      </form>
    </div>
  );
};

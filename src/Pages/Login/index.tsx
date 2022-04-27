// TODO | Добавить кнопку регистрации

import { Button } from "Componens/common/Button";
import { Input } from "Componens/common/Input";
import { useLogin } from "Hooks/api/useLogin";
import React, { FC, useState } from "react";

import styles from "Styles/pageStyles/login.module.css";
import { ILogin } from "Types/login";

export const LoginPage: FC = () => {
  const [data, setData] = useState<ILogin>({ email: "", password: "" });

  const { isDisabled, mutate, errors } = useLogin();

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
        <div className={styles["login_title"]}>Войти</div>
        <div>
          <Input
            disabled={isDisabled}
            onChange={onChange}
            id="email"
            type={"email"}
            error={errors.find((e) => e.name === "email")}
            placeholder="Email"
            className={styles["login_input"]}
          />
        </div>
        <div>
          <Input
            disabled={isDisabled}
            onChange={onChange}
            id="password"
            placeholder="Password"
            type={"password"}
            className={styles["login_input"]}
            error={errors.find((e) => e.name === "password")}
          />
        </div>
        <Button type="submit" disabled={isDisabled}>
          Вход
        </Button>
      </form>
    </div>
  );
};

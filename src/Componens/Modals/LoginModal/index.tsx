import { Input } from "Componens/common";
import { Button } from "Componens/common/Button";
import { useLogin } from "Hooks/api/useLogin";
import { useAppDispatch } from "Hooks/redux";
import { FC, useState } from "react";
import { ILogin } from "Types/login";

import styles from "./index.module.css";

export const LoginModal: FC = () => {
  const [data, setData] = useState<ILogin>({ email: "", password: "" });

  const { isDisabled, mutate, errors } = useLogin();

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };

  const onSubmitLoginData: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    mutate(data);
  };

  const { setModalViewAction } = useAppDispatch();
  const onClickRegister = () => {
    setModalViewAction("register");
  };

  return (
    <form className={styles["login_form"]} onSubmit={onSubmitLoginData}>
      <div className={styles["login_title"]}>Войти</div>
      <div className={styles["block_inputs"]}>
        <Input
          disabled={isDisabled}
          onChange={onChange}
          id="email"
          type={"email"}
          error={errors.find((e) => e.name === "email")}
          placeholder="Введите адрес электронной почты"
        />
      </div>
      <div className={styles["block_inputs"]}>
        <Input
          disabled={isDisabled}
          onChange={onChange}
          id="password"
          placeholder="Введите пароль"
          type={"password"}
          className={styles["login_input"]}
          error={errors.find((e) => e.name === "password")}
        />
      </div>
      <div className={styles["fGPassword"]}>
        <span>Забыли Пароль ?</span>
      </div>
      <div className={styles["header_sign_in"]}>
        <div>
          <Button
            type="submit"
            disabled={isDisabled}
            variant="grey"
            className={styles["login_button"]}
          >
            Войти
          </Button>
        </div>
        <div>
          <Button
            type="button"
            disabled={isDisabled}
            variant="grey"
            className={styles["create_account"]}
            onClick={onClickRegister}
          >
            Создать аккаунт
          </Button>
        </div>
      </div>
    </form>
  );
};

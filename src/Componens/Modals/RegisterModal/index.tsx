import { Input } from "Componens/common";
import { Button } from "Componens/common/Button";
import { useLogin } from "Hooks/api/useLogin";
import { useAppDispatch } from "Hooks/redux";
import React, { FC } from "react";
import styles from "./index.module.css";
export const RegisterPage: FC = () => {
  const { setModalViewAction } = useAppDispatch();
  const onClickLogin = () => {
    setModalViewAction("login");
  };

  // const [data, setData] = React.useState<ILogin>({ email: "", password: "" })
  const { isDisabled, mutate, errors } = useLogin();
  return (
    <div className={styles["login"]}>
      <form
        className={styles["login_form"]}
      >
        <div className={styles["login_title"]}>Создать аккаунт</div>
        <div className={styles["user_img"]}></div>
        <div>
          <Input
            id="name"
            type={"name"}
            placeholder="Как к вам обращаться?"
          />
        </div>
        <div>
          <Input
            id="email"
            type={"email"}
            placeholder="Введите адрес электронной почты"
          />
        </div>
        <div>
          <Input
            id="password"
            type={"password"}
            placeholder="Придумайте пароль"
          />
        </div>
        <div className={styles["footer_register"]}>
          <Button
            type="submit"
            className={styles["create_button"]}
          >
            Создать аккаунт
          </Button>
          <Button
            onClick={onClickLogin}
            className={styles["loginBtn"]}
            type="button">
            Войти
          </Button>
        </div>
        <div className={styles["text_footer"]}>
          <a href="">Нажимая “Создать аккаунт” я  соглашаюсь  на обработку персональных данных</a>
        </div>
      </form>
    </div>
  );
};
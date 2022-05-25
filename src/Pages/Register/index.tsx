import { Input } from "Componens/common";
import { Button } from "Componens/common/Button";
import { useLogin } from "Hooks/api/useLogin";
import React, { FC } from "react";
import styles from "Styles/pageStyles/login.module.css";
import { ILogin } from "Types/login";

export const RegisterPage: FC = () => {
  // const [data, setData] = React.useState<ILogin>({ email: "", password: "" })
  const { isDisabled, mutate, errors } = useLogin();
   return (
    <div className={styles["login"]}>
    <form 
      className={styles["login_form"]}
    >
      <div className={styles["login_title"]}>Регистрация</div>
      <div>
        <Input
          id="email"
          type={"email"}
          placeholder="Email"
        />
      </div>
      <div>
        <Input
          id="password"
          placeholder="Password"
          type={"password"}
          className={styles["login_input"]}
        />
      </div>
      <Button 
        type="submit"
        className={styles["login_button"]}
      >
        Вход
      </Button>
    </form>
  </div>
  );
};
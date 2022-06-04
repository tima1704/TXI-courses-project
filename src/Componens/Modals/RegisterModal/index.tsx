import { Input } from "Componens/common";
import { Button } from "Componens/common/Button";
import { useLogin } from "Hooks/api/useLogin";
import React, { FC } from "react";
import styles from "./index.module.css";
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
          id="name"
          type={"name"}
          placeholder="Имя"
        />
      </div>
      <div>
        <Input
          id="name"
          type={"name"}
          placeholder="Фамилия"
        />
      </div>
      <div>
        <Input
          id="name"
          type={"name"}
          placeholder="Укажите в каком городе вы житете"
        />
      </div>
      <div>
        <Input
          id="number"
          type={"number"}
          placeholder="Номер телефона"
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
      <Button 
        type="submit"
        className={styles["login_button"]}
      >
        Создать аккаунт
      </Button>
    </form>
  </div>
  );
};
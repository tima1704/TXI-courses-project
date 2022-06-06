import { Input } from "Componens/common";
import { Button } from "Componens/common/Button";
import { useLogin } from "Hooks/api/useLogin";
import { useAppDispatch } from "Hooks/redux";
import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
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
  const onClickEdditAccount = () => {
    setModalViewAction("editProfile")
  };
  const { t } = useTranslation();
  return (
    <form className={styles["login_form"]} onSubmit={onSubmitLoginData}>
      <div className={styles["login_title"]}>
        {t("modals.loginModal.title")}
      </div>
      <div className={styles["block_inputs"]}>
        <Input
          disabled={isDisabled}
          onChange={onChange}
          id="email"
          type={"email"}
          error={errors.find((e) => e.name === "email")}
          placeholder={t("modals.loginModal.loginPlaceholder.email")}
        />
      </div>
      <div className={styles["block_inputs"]}>
        <Input
          disabled={isDisabled}
          onChange={onChange}
          id="password"
          placeholder={t("modals.loginModal.loginPlaceholder.password")}
          type={"password"}
          className={styles["login_input"]}
          error={errors.find((e) => e.name === "password")}
        />
      </div>
      <div className={styles["fGPassword"]}>
        <span onClick={onClickEdditAccount}>{t("modals.loginModal.ForgotPassword")}</span>
      </div>
      <div className={styles["header_sign_in"]}>
        <div>
          <Button
            type="submit"
            disabled={isDisabled}
            className={styles["login_button"]}
          >
            {t("modals.loginModal.signIn")}
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
            {t("modals.loginModal.createAccount")}
          </Button>
        </div>
      </div>
    </form>
  );
};

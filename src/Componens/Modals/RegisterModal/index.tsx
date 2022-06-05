import { Input } from "Componens/common";
import { Button } from "Componens/common/Button";
import { useLogin } from "Hooks/api/useLogin";
import { useAppDispatch } from "Hooks/redux";
import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import styles from "./index.module.css";
export const RegisterPage: FC = () => {
  const { setModalViewAction } = useAppDispatch();
  const onClickLogin = () => {
    setModalViewAction("login");
  };
  const { t } = useTranslation();
  return (
    <div className={styles["login"]}>
      <form
        className={styles["login_form"]}
      >
        <div className={styles["login_title"]}>{t("modals.registerModal.title")}</div>
        <div className={styles["user_img"]}></div>
        <div>
          <Input
            id="name"
            type={"name"}
            placeholder={t("modals.registerModal.inputPlaceholder.name")}
          />
        </div>
        <div>
          <Input
            id="email"
            type={"email"}
            placeholder={t("modals.registerModal.inputPlaceholder.email")}
          />
        </div>
        <div>
          <Input
            id="password"
            type={"password"}
            placeholder={t("modals.registerModal.inputPlaceholder.password")}
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
          <a href="">Нажимая “Создать аккаунт” я  соглашаюсь  на обработку <span>персональных данных</span></a>
        </div>
      </form>
    </div>
  );
};
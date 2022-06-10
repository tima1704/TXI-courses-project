import { Input } from "Componens/common";
import { Button } from "Componens/common/Button";
import { useRegistration } from "Hooks/api/useRegistration";
import { useAppDispatch } from "Hooks/redux";
import React, { FC, useState } from "react";
import { useTranslation } from "react-i18next";

import styles from "./index.module.css";

interface IRegData {
  file?: any;
  name: string;
  email: string;
  password: string;
}

export const RegisterPage: FC = () => {
  const { setModalViewAction } = useAppDispatch();
  const onClickLogin = () => {
    setModalViewAction("login");
  };
  const { t } = useTranslation();

  const [data, setData] = useState<IRegData>({
    name: "",
    email: "",
    password: "",
  });

  const { mutate, isDisabled, errors } = useRegistration();

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };

  const onChangeFile: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const file = e.target.files?.[0];
    setData({ ...data, file });
  };

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const formData = new FormData();

    const nameSurname = data.name.split(" ");
    formData.append("name", nameSurname[0]);
    if (nameSurname[1]) {
      formData.append("surname", nameSurname[1]);
    }
    formData.append("email", data.email);
    formData.append("password", data.password);
    if (data.file) {
      formData.append("file", data.file);
      formData.append("rotate", "0");
    }

    mutate(formData);
  };

  return (
    <div className={styles["login"]}>
      <form className={styles["login_form"]} onSubmit={onSubmit}>
        <div className={styles["login_title"]}>
          {t("modals.registerModal.title")}
        </div>
        <div className={styles["user_img"]}>
          < input
            type={"file"}
            id={"file"}
            onChange={onChangeFile}
            style={{ display: "none" }}
          />
        </div>
        <div>
          <Input
            className={styles["input_register"]}
            id="name"
            type={"name"}
            placeholder={t("modals.registerModal.inputPlaceholder.name")}
            onChange={onChange}
            error={errors.find((e) => e.name === "name")}
            disabled={isDisabled}
          />
        </div>
        <div>
          <Input
          className={styles["input_register"]}
            id="email"
            type={"email"}
            placeholder={t("modals.registerModal.inputPlaceholder.email")}
            onChange={onChange}
            error={errors.find((e) => e.name === "email")}
            disabled={isDisabled}
          />
        </div>
        <div>
          <Input
          className={styles["input_register"]}
            id="password"
            type={"password"}
            placeholder={t("modals.registerModal.inputPlaceholder.password")}
            onChange={onChange}
            error={errors.find((e) => e.name === "password")}
            disabled={isDisabled}
          />
        </div>
        <div className={styles["footer_register"]}>
          <Button
            type="submit"
            className={styles["create_button"]}
            disabled={isDisabled}
          >
            {t("modals.registerModal.createAccount")}
          </Button>
          <Button
            onClick={onClickLogin}
            className={styles["loginBtn"]}
            type="button">
            {t("modals.registerModal.signIn")}
          </Button>
        </div>
        <div className={styles["text_footer"]}>
          <a href="">{t("modals.registerModal.text.0")}<span>{t("modals.registerModal.text.1")}</span></a>
        </div>
      </form>
    </div>
  );
};
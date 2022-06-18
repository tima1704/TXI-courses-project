import { Input } from "Componens/common";
import { Button } from "Componens/common/Button";
import Config from "Configs";
import { useRegistration } from "Hooks/api/useRegistration";
import { useAppDispatch } from "Hooks/redux";
import React, { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { IValidError } from "Types/common";
import { ImageInput } from "./ImageInput";

import styles from "./index.module.css";
type Trotate = 0 | 1 | 2 | 3;

interface IRegData {
  file?: File;
  name: string;
  surname: string;
  email: string;
  password: string;
  rotate: Trotate;
}

export const RegisterPage: FC = () => {
  const { setModalViewAction } = useAppDispatch();
  const onClickLogin = () => {
    setModalViewAction("login");
  };
  const { t } = useTranslation();

  const [data, setData] = useState<IRegData>({
    name: "",
    surname: "",
    email: "",
    password: "",
    rotate: 0,
  });

  const { mutate, isDisabled, errors, setErrors } = useRegistration();

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };

  const onChangeFile: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const file = e.target.files?.[0];
    setData({ ...data, file });
  };

  const onChangeRotate = (rotate: Trotate) => {
    setData({ ...data, rotate });
  };

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const errorsValidation: IValidError[] = [];
    if (!data.file) {
      errorsValidation.push({
        name: "file",
        message: "errors.registrations.file",
      });
    }
    if (!data.name || data.name.length < 2) {
      errorsValidation.push({
        name: "name",
        message: "errors.registrations.name",
      });
    }
    if (!data.surname || data.surname.length < 3) {
      errorsValidation.push({
        name: "surname",
        message: "errors.registrations.surname",
      });
    }
    if (!data.password || data.password.length < 6) {
      errorsValidation.push({
        name: "password",
        message: "errors.registrations.password",
      });
    }
    if (!data.email || data.email.length < 3 || !data.email.includes("@")) {
      errorsValidation.push({
        name: "email",
        message: "errors.registrations.emailFrontValidate",
      });
    }

    if (errorsValidation.length > 0) {
      setErrors(errorsValidation);
      return;
    }

    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("surname", data.surname);
    formData.append("email", data.email);
    formData.append("password", data.password);
    if (data.file) {
      formData.append("file", data.file);
      formData.append("rotate", data.rotate.toString());
    }

    mutate({
      data: formData,
      email: data.email,
      name: `${data.name} ${data.surname}`,
    });
  };

  return (
    <div className={styles["login"]}>
      <form className={styles["login_form"]} onSubmit={onSubmit}>
        <div className={styles["login_title"]}>
          {t("modals.registerModal.title")}
        </div>
        <ImageInput
          onChangeFile={onChangeFile}
          value={data.file}
          rotate={data.rotate}
          onChangeRotate={onChangeRotate}
          error={errors.find((e) => e.name === "file")}
        />
        <Input
          className={styles["input_register"]}
          id="name"
          type={"name"}
          placeholder={t("modals.registerModal.inputPlaceholder.name")}
          onChange={onChange}
          error={errors.find((e) => e.name === "name")}
          disabled={isDisabled}
          value={data.name}
        />
        <Input
          className={styles["input_register"]}
          id="surname"
          type={"surname"}
          placeholder={t("modals.registerModal.inputPlaceholder.surname")}
          onChange={onChange}
          error={errors.find((e) => e.name === "surname")}
          disabled={isDisabled}
        />
        <Input
          className={styles["input_register"]}
          id="email"
          type={"email"}
          placeholder={t("modals.registerModal.inputPlaceholder.email")}
          onChange={onChange}
          error={errors.find((e) => e.name === "email")}
          disabled={isDisabled}
          value={data.email}
        />
        <Input
          className={styles["input_register"]}
          id="password"
          type={"password"}
          placeholder={t("modals.registerModal.inputPlaceholder.password")}
          onChange={onChange}
          error={errors.find((e) => e.name === "password")}
          disabled={isDisabled}
          value={data.password}
        />
        <div className={styles["footer_register"]}>
          <Button
            type="submit"
            className={styles["create_button"]}
            disabled={isDisabled}
          >
            {t("modals.registerModal.createAccount")}
          </Button>
          <Button
            variant="grey"
            onClick={onClickLogin}
            className={styles["loginBtn"]}
            type="button"
          >
            {t("modals.registerModal.signIn")}
          </Button>
        </div>
        <div className={styles["text_footer"]}>
          {t("modals.registerModal.text.0")}
          <a
            href={Config.policy.privacyPolic}
            target={"_blank"}
            rel="noreferrer"
          >
            <span>{t("modals.registerModal.text.1")}</span>
          </a>
          {` ${t("modals.registerModal.text.2")} `}
          <a
            href={Config.policy.userAgreement}
            target={"_blank"}
            rel="noreferrer"
          >
            <span>{t("modals.registerModal.text.3")}</span>
          </a>
        </div>
      </form>
    </div>
  );
};

import { Input } from "Componens/common";
import { Button } from "Componens/common/Button";
import { useResetPassword } from "Hooks/api/useLogin";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";

import styles from "./index.module.css";

const NewPasswordModal = () => {
  const { t } = useTranslation();

  const [data, setData] = useState({ password: "", confirmPassword: "" });

  const [searchParams, setSearchParams] = useSearchParams();
  const { mutate, isDisabled, errors } = useResetPassword(setSearchParams);

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    mutate({ ...data, idReset: searchParams.get("reset-password") });
  };

  return (
    <form className={styles["content_modal"]} onSubmit={onSubmit}>
      <div className={styles["title_modal"]}>
        <h3>{t("modals.newPassword.title")}</h3>
      </div>
      <div className={styles["body_modal"]}>
        <div>
          <Input
            id={"password"}
            type="password"
            placeholder={t("modals.newPassword.newPasswordInput.password")}
            disabled={isDisabled}
            onChange={onChange}
            error={errors.find((e) => e.name === "password")}
          />
        </div>
        <div>
          <Input
            id="confirmPassword"
            type={"password"}
            placeholder={t(
              "modals.newPassword.newPasswordInput.confirmPassword"
            )}
            disabled={isDisabled}
            onChange={onChange}
            error={errors.find((e) => e.name === "confirmPassword")}
          />
        </div>
      </div>
      <div className={styles["header_module"]}>
        <Button variant="grey" type={"submit"}>
          {t("modals.newPassword.apply")}
        </Button>
      </div>
    </form>
  );
};

export default NewPasswordModal;

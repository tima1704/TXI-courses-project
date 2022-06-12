import styles from "./index.module.css";
import { useTranslation } from "react-i18next";
import { Button } from "../../common/Button";
import { Input } from "Componens/common";
import { useResetPasswordSent } from "Hooks/api/useLogin";
import { useState } from "react";

const ForgotPasswordModal = () => {
  const { t } = useTranslation();

  const [data, setData] = useState<string>("");

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setData(e.target.value);
  };

  const { mutate, isDisabled, errors } = useResetPasswordSent();

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    mutate(data);
  };

  return (
    <form className={styles["Forgot_Modal"]} onSubmit={onSubmit}>
      <div className={styles["title_modal"]}>
        <h3>{t("modals.forgotPassword.title")}</h3>
        <div className={styles["text_modal"]}>
          <p>{t("modals.forgotPassword.info")}</p>
        </div>
      </div>
      <div className={styles["body_modal"]}>
        <Input
          disabled={isDisabled}
          onChange={onChange}
          type="email"
          placeholder={t("modals.forgotPassword.forgotPlaceHolder.email")}
          error={errors.find((e) => e.name === "email")}
          value={data}
        />
      </div>
      <div className={styles["footer_modal"]}>
        <Button type="submit" variant="grey" disabled={isDisabled}>
          {t("modals.forgotPassword.send")}
        </Button>
      </div>
    </form>
  );
};

export default ForgotPasswordModal;

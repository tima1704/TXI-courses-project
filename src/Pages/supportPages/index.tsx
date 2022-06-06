import classNames from "classnames";
import { Input } from "Componens/common";
import { Button } from "Componens/common/Button";
import { useSupport } from "Hooks/api/useSupport";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import styles from "./index.module.css";

const SupportPage: FC = () => {
  const { t } = useTranslation();
  const { errors, data, setData, isDisabled, mutate } = useSupport();

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (isDisabled) return;

    mutate(data);
  };

  return (
    <section className={classNames(styles["support"], "anim_opacity")}>
      <div className={styles["leftBlock__supportPage"]}>
        <div className={styles["content__leftSupport"]}>
          <div className={styles["title__leftSupport"]}>
            <h3>{t("supportPage.support")}</h3>
          </div>
          <span>{t("supportPage.emailSupport")}</span>
          <p>
            {t("supportPage.textSupport")}
          </p>
        </div>
      </div>
      <div className={styles["rightBlock__supportPage"]}>
        <div className={styles["content__rightSupport"]}>
          <div className={styles["title__right"]}>
            <h3>{t("supportPage.WhatIsYourQuestion")}</h3>
          </div>
          <div className={styles["contentFlex"]}>
            <form onSubmit={onSubmit}>
              <div className={styles["inputsBlock"]}>
                <div className={styles["form__content"]}>
                  <div className={styles["input__content"]}>
                    <span>{t("supportPage.inputsText.name")}</span>
                    <Input
                      type="text"
                      placeholder={t("supportPage.inputPlaceholder.name")}
                      onChange={onChange}
                      id={"name"}
                      value={data.name}
                      disabled={isDisabled}
                      error={errors.find((e) => e.name === "name")}
                    />
                  </div>
                  <div className={styles["input__content"]}>
                    <span>{t("supportPage.inputsText.numberOrder")}</span>
                    <Input
                      type="text"
                      placeholder={t("supportPage.inputPlaceholder.numberOrder")}
                      onChange={onChange}
                      id={"orderNumber"}
                      value={data.orderNumber}
                      disabled={isDisabled}
                      error={errors.find((e) => e.name === "orderNumber")}
                    />
                  </div>
                </div>
                <div className={styles["form__content"]}>
                  <div className={styles["input__content"]}>
                    <span>{t("supportPage.inputsText.phone")}</span>
                    <Input
                      type={"tel"}
                      placeholder={t("supportPage.inputPlaceholder.phone")}
                      onChange={onChange}
                      id={"phone"}
                      value={data.phone}
                      disabled={isDisabled}
                      error={errors.find((e) => e.name === "phone")}
                    />
                  </div>
                  <div className={styles["input__content"]}>
                    <span>{t("supportPage.inputsText.email")}</span>
                    <Input
                      type="email"
                      placeholder={t("supportPage.inputPlaceholder.email")}
                      onChange={onChange}
                      id={"email"}
                      value={data.email}
                      disabled={isDisabled}
                      error={errors.find((e) => e.name === "email")}
                    />
                  </div>
                </div>
              </div>
              <div className={styles["comment__input"]}>
                <span>{t("supportPage.inputsText.commentQuestion")}</span>
                <Input
                  type="text"
                  placeholder={t("supportPage.inputPlaceholder.commentQuestion")}
                  onChange={onChange}
                  id={"description"}
                  value={data.description}
                  disabled={isDisabled}
                  error={errors.find((e) => e.name === "description")}
                />
              </div>
              <div className={styles["form_button"]}>
                <Button type={"submit"} disabled={isDisabled}>
                  {t("supportPage.inputsText.send")}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportPage;

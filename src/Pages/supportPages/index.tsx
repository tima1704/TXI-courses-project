import classNames from "classnames";
import { Input } from "Componens/common";
import { Button } from "Componens/common/Button";
import { t } from "i18next";
import styles from "./index.module.css";

const supportPageFunc = () => {
  return (
    <section className={classNames(styles["support"], "anim_opacity")}>
      <div className={styles["leftBlock__supportPage"]}>
        <div className={styles["content__leftSupport"]}>
          <div className={styles["title__leftSupport"]}>
            <h3>Поддержка</h3>
          </div>
          <span>support@katiatxi.club</span>
          <p>
            Мы будем рады получить ваш отзыв или помочь вам с любыми вопросами о
            вашем заказе.
          </p>
        </div>
      </div>
      <div className={styles["rightBlock__supportPage"]}>
        <div className={styles["content__rightSupport"]}>
          <div className={styles["title__right"]}>
            <h3>{t("supportPage.WhatIsYourQuestion")}</h3>
          </div>
          <div className={styles["contentFlex"]}>
            <div>
              <div className={styles["inputsBlock"]}>
                <div className={styles["form__content"]}>
                  <div className={styles["input__content"]}>
                    <span>{t("supportPage.inputsText.name")}</span>
                    <Input type="text" placeholder={t("supportPage.inputPlaceholder.name")} />
                  </div>
                  <div className={styles["input__content"]}>
                    <span>{t("supportPage.inputsText.numberOrder")}</span>
                    <Input type="text" placeholder={t("supportPage.inputPlaceholder.numberOrder")} />
                  </div>
                </div>
                <div className={styles["form__content"]}>
                  <div className={styles["input__content"]}>
                    <span>{t("supportPage.inputsText.phone")}</span>
                    <Input type="number" placeholder={t("supportPage.inputPlaceholder.phone")} />
                  </div>
                  <div className={styles["input__content"]}>
                    <span>{t("supportPage.inputsText.email")}</span>
                    <Input type="email" placeholder={t("supportPage.inputPlaceholder.email")} />
                  </div>
                </div>
              </div>
              <div className={styles["comment__input"]}>
                <span>{t("supportPage.inputsText.commentQuestion")}</span>
                <Input type="text" placeholder={t("supportPage.inputPlaceholder.commentQuestion")} />
              </div>
              <div className={styles["form_button"]}>
                <Button>{t("supportPage.inputsText.send")}</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default supportPageFunc;

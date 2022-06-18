import { FC } from "react";
import { useTranslation } from "react-i18next";

import styles from "../index.module.css";

export const SendSupport: FC = () => {
  const { t } = useTranslation();
  return (
    <div className={styles["contentModal"]}>
      <div className={styles["title_modal"]}>
        <h3>{t("modals.sendSupport.title")}</h3>
      </div>
      <div className={styles["body_modal"]}>
        <p>{t("modals.sendSupport.text")}</p>
      </div>
    </div>
  );
};

import React from "react";
import { useTranslation } from "react-i18next";
import styles from "../index.module.css";
const ErrorCourseModal: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className={styles["contentModal"]}>
      <div className={styles["title_modal"]}>
        <h3>{t("modals.subscribedCource.title")}</h3>
      </div>
      <div className={styles["body_modal"]}>
        <p>
          {t("modals.subscribedCource.text.0")} <span>{t("modals.subscribedCource.text.1")}</span>
        </p>
      </div>
    </div>
  );
};

export default ErrorCourseModal;

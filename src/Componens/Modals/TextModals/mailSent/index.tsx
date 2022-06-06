import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from "../index.module.css";
const SentMailModal : React.FC = () => {
     const { t } = useTranslation();
     return (
          <div className={styles["contentModal"]}>
               <div className={styles["title_modal"]}>
                    <h3>{t("modals.setMail.title")}</h3>
               </div>
               <div className={styles["body_modal"]}>
                    <p>{t("modals.setMail.text")}</p>
               </div>
          </div>
     );
};

export default SentMailModal;
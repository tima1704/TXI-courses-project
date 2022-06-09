import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from "../index.module.css";
const CloudErrors : React.FC = () => {
     const { t } = useTranslation();
     return (
          <div className={styles["contentModal"]}>
               <div className={styles["title_modal"]}>
                    <h3>{t("modals.cloudErrors.title")}</h3>
               </div>
               <div className={styles["body_modal"]}>
                    <p>{t("modals.cloudErrors.text")}</p>
               </div>
          </div>
     );
};

export default CloudErrors;
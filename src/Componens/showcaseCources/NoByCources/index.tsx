import { URL_HOME } from "Constants/URL";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styles from "./index.module.css";

export const NoByCources = () => {
  const { t } = useTranslation();
  return (
    <div className={styles["wrapper"]}>
      <div className={styles["content"]}>
        <div className={styles["title"]}>{t("noByCource.noCource")}</div>
        <Link to={URL_HOME} className={styles["link"]}>
          {t("noByCource.RouteToCource")}
        </Link>
      </div>
    </div>
  );
};

import { Button } from "Componens/common/Button";
import { URL_HOME } from "Constants/URL";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styles from "./index.module.css";
import classNames from "classnames";
export const NoByCources = () => {
  const { t } = useTranslation();
  return (
    <div className={classNames(styles["wrapper"], "body")}>
      <div className={styles["content"]}>
        <div className={styles["title"]}>{t("noCourses.title")}</div>
        <Link to={URL_HOME} className={styles["link"]}>
          <Button>{t("noCourses.link")}</Button>
        </Link>
      </div>
    </div>
  );
};

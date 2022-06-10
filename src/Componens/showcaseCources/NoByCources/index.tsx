import { Button } from "Componens/common/Button";
import { URL_HOME } from "Constants/URL";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styles from "./index.module.css";
import classNames from "classnames";
import { LinkTo } from "Componens/common/Links";
export const NoByCources = () => {
  const { t } = useTranslation();
  return (
    <div className={classNames(styles["wrapper"], "body")}>
      <div className={styles["content"]}>
        <div className={styles["title"]}>{t("noCourses.title")}</div>
        <LinkTo link={URL_HOME} onClick={() => {}}>
          <Button className={styles["link"]}>{t("noCourses.link")}</Button>
        </LinkTo>
      </div>
    </div>
  );
};

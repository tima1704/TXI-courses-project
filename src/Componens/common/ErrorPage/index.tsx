import { URL_HOME } from "Constants/URL";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { LinkTo } from "../Links";
import styles from "./index.module.css";

export const ErrorPage: FC = () => {
  const { t } = useTranslation();
  return (
    <div className="anim_opacity">
      <div className={styles["error_page"]}>
        <h3>{t("errorPage.title")}</h3>
        <p>{t("errorPage.main.0")} <LinkTo link={URL_HOME} className={styles["home_url"]}>{t("errorPage.main.1")}</LinkTo></p>
      </div>
    </div>
  )
};

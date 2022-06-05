import classNames from "classnames";
import { Button } from "Componens/common/Button";
import { ACCESS_COOKIE } from "Constants/App";
import { FC, useState } from "react";
import { useTranslation } from "react-i18next";

import styles from "./index.module.css";

export const CookiesModal: FC = () => {
  const [acceptCookie, setAcceptCookie] = useState(
    localStorage.getItem(ACCESS_COOKIE) === "true"
  );

  const onClickAcceptCookie = () => {
    localStorage.setItem(ACCESS_COOKIE, "true");
    setAcceptCookie(true);
  };
  const { t } = useTranslation();
  return (
    <div className={styles["fixed__cookie"]}>
      <div className={styles["flex__block"]}></div>
      <div
        className={classNames(styles["cookieModal"], {
          [styles["none"]]: acceptCookie,
        })}
      >
        <div className={styles["textCookie"]}>
          {t("cookies.info")}
        </div>
        <Button onClick={onClickAcceptCookie} className={styles["btn"]}>
          {t("cookies.agree")}
        </Button>
      </div>
    </div>
  );
};

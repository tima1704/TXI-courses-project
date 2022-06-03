import classNames from "classnames";
import { Button } from "Componens/common/Button";
import { ACCESS_COOKIE } from "Constants/App";
import { FC, useState } from "react";

import styles from "./index.module.css";

export const CookiesModal: FC = () => {
  const [acceptCookie, setAcceptCookie] = useState(
    localStorage.getItem(ACCESS_COOKIE) === "true"
  );

  const onClickAcceptCookie = () => {
    localStorage.setItem(ACCESS_COOKIE, "true");
    setAcceptCookie(true);
  };

  return (
    <div className={styles["fixed__cookie"]}>
      <div className={styles["flex__block"]}></div>
      <div
        className={classNames(styles["cookieModal"], {
          [styles["none"]]: acceptCookie,
        })}
      >
        <div className={styles["textCookie"]}>
          Пользуясь нашим сайтом, вы соглашаетесь с тем, что мы используем cookies
          🍪
        </div>
        <Button onClick={onClickAcceptCookie} className={styles["btn"]}>
          Согласен
        </Button>
      </div>
    </div>
  );
};

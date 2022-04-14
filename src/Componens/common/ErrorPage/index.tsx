import { FC } from "react";

import c from "classnames";
import styles from "./index.module.css";

interface ErrorPageProps {
  errorCode: number | string;
  errorText?: string;
  errorFunction?: any;
}

export const ErrorPage: FC<ErrorPageProps> = ({
  errorCode,
  errorFunction,
  errorText,
}) => {
  switch (errorCode) {
    case 404:
      return (
        <div className={c("anim_opacity", styles["error_page"])}>
          <div className={styles["error"]}>
            <h2>404</h2>
            <p>Данная страница не найдена</p>
          </div>
        </div>
      );

    default:
      return (
        <div className={c("anim_opacity", styles["error_page"])}>
          <div className={styles["error"]}>
            <h2>{errorCode || 500}</h2>
            <p>{errorText || "Что-то пошло не так"}</p>
          </div>
        </div>
      );
  }
};

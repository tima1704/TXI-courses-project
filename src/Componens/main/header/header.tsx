import { FC } from "react";

import styles from "./index.module.css";

import classNames from "classnames";

export const Header: FC = () => {
  return (
    <header className={classNames(styles["header"], "container")}>
      <div className={styles["logo_menu"]}>
        Logo
        <div>menu</div>
      </div>
      <div className={styles["lang"]}>
        <div>RU</div>
      </div>
    </header>
  );
};
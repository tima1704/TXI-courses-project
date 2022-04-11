import { FC } from "react";

import styles from "./index.module.css";

import classNames from "classnames";

import Logo from "./logo.svg";

export const Header: FC = () => {
  return (
    <header className={classNames(styles["header"], "container")}>
      <div className={styles["logo_menu"]}>
        <img src={Logo} alt="Logo" className="scale" />
        <div className={styles["menu"]}>menu</div>
      </div>
      <div className={classNames(styles["lang"], "scale")}>
        <div>RU</div>
      </div>
    </header>
  );
};

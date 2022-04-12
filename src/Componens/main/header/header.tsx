import { FC } from "react";

import styles from "./index.module.css";

import classNames from "classnames";

import Logo from "./logo.svg";
import { useNavigate } from "react-router-dom";
import { URL_HOME } from "Constants/URL";

export const Header: FC = () => {
  const navigate = useNavigate();

  const onClickLogo = () => {
    navigate(URL_HOME, { replace: true });
  };

  return (
    <header className={classNames(styles["header"], "container")}>
      <div className={styles["logo_menu"]}>
        <img src={Logo} alt="Logo" className="scale" onClick={onClickLogo} />
        <div className={styles["menu"]}>menu</div>
      </div>
      <div className={classNames(styles["lang"], "scale")}>
        <div>RU</div>
      </div>
    </header>
  );
};

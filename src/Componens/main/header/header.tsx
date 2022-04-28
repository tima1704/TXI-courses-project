import { FC } from "react";

import styles from "./index.module.css";

import classNames from "classnames";

import Logo from "Svg/logo.svg";

import { Link, useNavigate } from "react-router-dom";
import { URL_HOME, URL_LOGIN, URL_USER_COURSE } from "Constants/URL";
import { useAppSelector } from "Hooks/redux";
import { Button } from "Componens/common/Button";
import { Icon } from "Componens/common/Icon";

export const Header: FC = () => {
  const navigate = useNavigate();

  const onClickLogo = () => {
    navigate(URL_HOME, { replace: true });
  };

  const { isAuth, user } = useAppSelector((state) => state.App);

  return (
    <header
      className={classNames(styles["header"], "container", "anim_opacity")}
    >
      <div className={styles["logo_menu"]}>
        <img src={Logo} alt="Logo" className="scale" onClick={onClickLogo} />
        <div className={styles["menu"]}>menu</div>
      </div>
      {isAuth ? (
        <Link to={URL_USER_COURSE}>
          <div className={styles["profile_img"]}>
            {user?.pic ? (
              <img src={process.env.REACT_APP_TXI_URL + user.pic} alt="" />
            ) : (
              user?.name[0]
            )}
          </div>
        </Link>
      ) : (
        <Button className={classNames(styles["profile"], "scale")}>
          <Link to={URL_LOGIN} className={styles["profile_link"]}>
            Sign in
          </Link>{" "}
          {" or "}{" "}
          <Link to={URL_LOGIN} className={styles["profile_link"]}>
            Register
          </Link>{" "}
          <Icon icon="enter" />
        </Button>
      )}
    </header>
  );
};

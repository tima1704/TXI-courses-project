import classNames from "classnames";
import { Button } from "Componens/common/Button";
import { Icon } from "Componens/common/Icon";
import { URL_HOME, URL_LOGIN } from "Constants/URL";
import { useAppSelector } from "Hooks/redux";
import { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "Svg/logo.svg";
import styles from "./index.module.css";

interface IMenu {
  openMenu: boolean;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Menu: FC<IMenu> = ({ openMenu, setOpenMenu }) => {
  const navigete = useNavigate();

  const onClickLogo = () => {
    navigete(URL_HOME);
    onClickCloseMenu();
  };

  const onClickCloseMenu = () => {
    setOpenMenu(false);
  };

  const { isAuth } = useAppSelector((state) => state.App);

  return (
    <div
      className={classNames(styles["menu"], {
        [styles["menu_open"]]: openMenu,
      })}
    >
      <div>
        <div>
          <img
            src={Logo}
            alt="Logo"
            className={styles["menu__logo"]}
            onClick={onClickLogo}
          />
        </div>
        <div className={styles["menu__nav"]}>
          <ul>
            <li
              className={classNames(
                styles["menu__nav_item"],
                styles["menu__nav_item_active"]
              )}
            >
              Катя <span className={styles["ch"]}>Чи</span>
            </li>
            <li className={styles["menu__nav_item"]}>Блог</li>
            <li className={styles["menu__nav_item"]}>Видео</li>
            <li className={styles["menu__nav_item"]}>Проекты</li>
            <li className={styles["menu__nav_item"]}>Покупки</li>
          </ul>
        </div>
        {!isAuth && (
          <div>
            <Button className={styles["btn_login"]}>
              <Icon icon="enter" />
              <Link to={URL_LOGIN} onClick={onClickCloseMenu}>
                Sign in
              </Link>{" "}
              or <Link to={URL_LOGIN}>Register</Link>
            </Button>
          </div>
        )}
      </div>
      <div className={styles["social"]}>
        <div><Icon icon={"youTube"} className={styles["MenuIcons"]}/></div>
        <div className={styles["social_row"]}>
          <div><Icon icon={"telegram"} className={styles["MenuIcons"]}/></div>
          <div><Icon icon={"instagram"} className={styles["MenuIcons"]}/></div>
        </div>
      </div>
    </div>
  );
};

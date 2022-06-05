import classNames from "classnames";
import { Button } from "Componens/common/Button";
import { Icon } from "Componens/common/Icon";
import Config from "Configs";
import { URL_SUPPORT } from "Constants/URL";
import { useAppDispatch, useAppSelector } from "Hooks/redux";
import { FC, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styles from "./index.module.css";
import { MenuUser } from "./menuUser";

interface IMenu {
  openMenu: boolean;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}
export const Menu: FC<IMenu> = ({ openMenu, setOpenMenu }) => {
  // const navigete = useNavigate();

  // const onClickLogo = () => {
  //   navigete(URL_HOME);
  //   onClickCloseMenu();
  // };

  const onClickCloseMenu = () => {
    setOpenMenu(false);
    setLangsOpen(false);
  };

  const { isAuth, regions, languageApp } = useAppSelector((state) => state.App);

  const { setLanguage } = useAppDispatch();

  const langName = useMemo(() => {
    return regions.find((item) => item.id === languageApp)?.title || "rus";
  }, [languageApp, regions]);

  const [langsOpen, setLangsOpen] = useState(false);

  const onClickOpenCloseLangs = () => setLangsOpen((p) => !p);

  const onClickSelectLang = (id: number) => {
    setLanguage(id);
    onClickCloseMenu();
  };
  const { t } = useTranslation();

  const { setModalViewAction } = useAppDispatch();

  return (
    <div
      className={classNames(styles["menu"], {
        [styles["menu_open"]]: openMenu,
      })}
    >
      <div className={styles["menu_top"]}>
        {langsOpen ? (
          <Icon icon={"arrowLeft"} onClick={onClickOpenCloseLangs} />
        ) : (
          <div />
        )}
        <Icon
          icon={"closeGrey"}
          className={"scale"}
          onClick={onClickCloseMenu}
        />
      </div>
      {!langsOpen ? (
        <div className={styles["content"]}>
          <ul className={styles["links"]}>
            <li>
              <a href={"https://katiatxi.club/ru/about/"}> {t("burger.mobmenu.main.0")}{t("burger.mobmenu.main.1")}</a>
            </li>
            <li>
              <a href={"https://katiatxi.club/ru/blog/"}>{t("burger.mobmenu.blog")}</a>
            </li>
            <li>
              <a href={"https://katiatxi.club/ru/video/"}>{t("burger.mobmenu.video")}</a>
            </li>
            <li>
              <a href={"https://courses.katiatxi.club/"}>{t("burger.mobmenu.education")}</a>
            </li>
            <li>
              <a href={"https://katiatxi.club/ru/projects/"}>{t("burger.mobmenu.projects")}</a>
            </li>
            <li>
              <a href={"https://wildhumansclub.com/"}>{t("burger.mobmenu.purchases")}</a>
            </li>
          </ul>
          {!isAuth ? (
            <div className={styles["authBlock"]}>
              <Button
                onClick={() => {
                  setModalViewAction("register");
                  onClickCloseMenu();
                }}
              >
                {t("common.signUp")}
              </Button>
              <Button
                className={styles["signIn"]}
                onClick={() => {
                  setModalViewAction("login");
                  onClickCloseMenu();
                }}
              >
                {t("common.signIn")}
              </Button>
            </div>
          ) : (
            <MenuUser onClickCloseMenu={onClickCloseMenu} />
          )}
          <div>
            <Link
              to={URL_SUPPORT}
              onClick={onClickCloseMenu}
              className={styles["link"]}
            >
              {t("supportPage.support")}
            </Link>
          </div>
          <div className={styles["lang"]} onClick={onClickOpenCloseLangs}>
            {langName} {">"}
          </div>
          <div className={classNames("decorLine", styles["decor"])} />
          <div className={styles["socialRow"]}>
            <a href={Config.socials.telegram}>
              <Icon icon={"telegram"} />
            </a>
            <a href={Config.socials.instagram}>
              <Icon icon={"instagram"} />
            </a>
            <a href={Config.socials.youTube}>
              <Icon icon={"youTube"} />
            </a>
          </div>
          <div className={styles["policy"]}>
            {t("footer.copyright")}
          </div>
        </div>
      ) : (
        <div className={styles["content"]}>
          <ul className={styles["langsList"]}>
            {regions.map((item) => (
              <li
                onClick={() => onClickSelectLang(item.id)}
                className={classNames({
                  [styles["activeLang"]]: item.id === languageApp,
                })}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

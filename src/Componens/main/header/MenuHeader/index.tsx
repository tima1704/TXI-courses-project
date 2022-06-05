import classNames from "classnames";
import { Icon } from "Componens/common/Icon";
import { URL_HOME } from "Constants/URL";
import { FC, useState } from "react";
import { Link } from "react-router-dom";

import styles from "./index.module.css";

export const MenuHeader: FC = () => {
  const [isToggle, setIsToggle] = useState(false);

  const onClickOpenCloseMenu = () => setIsToggle((p) => !p);

  const { t } = useTranslation();

  return (
    <div className={styles["menu__nav"]}>
      <ul className={classNames({ [styles["activeNav"]]: isToggle })}>
        <li
          className={classNames(
            styles["menu__nav_item"],
            styles["menu__nav_item_active"]
          )}
        >
          <a href={"https://katiatxi.club/ru/about/"}>
            {t("header.menu.main.0")}{" "}
            <span className={styles["ch"]}> {t("header.menu.main.1")}</span>
          </a>
        </li>
        <li className={styles["menu__nav_item"]}>
          <a href={"https://katiatxi.club/ru/blog/"}>{t("header.menu.blog")}</a>
        </li>
        <li className={styles["menu__nav_item"]}>
          <a href={"https://katiatxi.club/ru/video/"}>
            {t("header.menu.video")}
          </a>
        </li>
        <li className={styles["menu__nav_item"]}>
          <Link to={URL_HOME} className={styles["activeLink"]}>
            Обучение
          </Link>
        </li>
        <li className={styles["menu__nav_item"]}>
          <a href={"https://katiatxi.club/ru/projects/"}>
            {t("header.menu.projects")}
          </a>
        </li>
        <li className={styles["menu__nav_item"]}>
          <a href={"https://wildhumansclub.com/"}>
            {t("header.menu.purchases")}
          </a>
        </li>
      </ul>
      <span onClick={onClickOpenCloseMenu} className={styles["ArrowLeftSpan"]}>
        <Icon
          icon="arrowLeft"
          className={classNames(styles.arrowLeft, {
            [styles.activeArrow]: isToggle,
          })}
        />
      </span>
    </div>
  );
};

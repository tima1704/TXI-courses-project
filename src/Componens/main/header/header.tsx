import { FC, useContext, useMemo } from "react";
import React from "react";
import classNames from "classnames";
import Logo from "Svg/logo.svg";
import { Link } from "react-router-dom";
import { URL_HOME } from "Constants/URL";
import { useAppDispatch, useAppSelector } from "Hooks/redux";

import styles from "./index.module.css";
import { MenuHeader } from "./MenuHeader";
import { MenuAuth } from "./MenuAuth";
import { WidthContext } from "../widthWrapper";
import { Icon } from "Componens/common/Icon";

interface IHeader {
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Header: FC<IHeader> = ({ setOpenMenu }) => {
  const { regions, languageApp } = useAppSelector((state) => state.App);

  const { setLanguage } = useAppDispatch();

  const widthScreen = useContext(WidthContext);

  const langName = useMemo(() => {
    return regions.find((item) => item.id === languageApp)?.title || "rus";
  }, [languageApp, regions]);

  const onClickSelectLang = (id: number) => {
    setLanguage(id);
  };

  return (
    <header className={classNames("container", "anim_opacity")}>
      <div className={styles["header"]}>
        <div className={styles["logo_menu"]}>
          <div className={styles["ImgLogoMenu"]}>
            <Link to={URL_HOME}>
              <img src={Logo} alt="Logo" className="scale" />
            </Link>
          </div>
          {widthScreen > 900 && <MenuHeader />}
        </div>
        {widthScreen > 1200 ? (
          <div className={styles["userMenu"]}>
            <MenuAuth />
            <div className={styles["langs"]}>
              <div className={styles["lang"]}>{langName}</div>
              <div className={styles["langsDropWrapper"]}>
                <div className={styles["langsDrop"]}>
                  {regions.map((item) => (
                    <div
                    key={item.id}
                      className={classNames(styles["langsDropItems"], {
                        [styles["langsDropItemsActive"]]:
                          item.id === languageApp,
                      })}
                      onClick={() => onClickSelectLang(item.id)}
                    >
                      {item.title}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <Icon onClick={() => setOpenMenu((p) => !p)} icon={"menu"} />
        )}
      </div>
    </header>
  );
};

import classNames from "classnames";
import { Icon } from "Componens/common/Icon";
import { URL_SUPPORT, URL_HOME, URL_USER_COURSE } from "Constants/URL";
import { useAppDispatch, useAppSelector } from "Hooks/redux";
import { FC, useContext, useState } from "react";
import useCollapse from "react-collapsed";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { WidthContext } from "../widthWrapper";

import styles from "./index.module.css";

export const MenuCourses: FC = () => {
  const isAuth = useAppSelector((state) => state.App.isAuth);
  const { setModalViewAction } = useAppDispatch();

  const onClickOpenLoginPopUp = () => {
    setModalViewAction("login");
    onClickCollapse();
  };

  const { t } = useTranslation();

  const widthScreen = useContext(WidthContext);
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

  const onClickCollapse = () => {
    setExpanded((v) => !v);
  };

  return (
    <div className="container anim_opacity">
      {widthScreen > 550 ? (
        <div className={styles["menu"]}>
          <div className={styles["leftInfo"]}>
            <div className={styles["title"]}>{t("menuCourses.courseMenu.onlinecourse")}</div>

            <NavLink
              to={URL_HOME}
              className={({ isActive }) =>
                classNames(styles["menuItems"], styles["menuLink"], {
                  [styles["activeMenu"]]: isActive,
                })
              }
            >
              {t("menuCourses.courseMenu.allprograms")}
            </NavLink>
            {isAuth ? (
              <NavLink
                to={URL_USER_COURSE}
                className={({ isActive }) =>
                  classNames(styles["menuItems"], styles["menuLink"], {
                    [styles["activeMenu"]]: isActive,
                  })
                }
              >
                {t("menuCourses.courseMenu.yourcourses")}
              </NavLink>
            ) : (
              <span
                className={classNames(styles["menuItems"], styles["menuLink"])}
                onClick={onClickOpenLoginPopUp}
              >
                {t("menuCourses.courseMenu.yourcourses")}
              </span>
            )}
          </div>
          <NavLink
            to={URL_SUPPORT}
            className={({ isActive }) =>
              classNames(styles["menuItems"], {
                [styles["activeMenu"]]: isActive,
              })
            }
          >
            {t("supportPage.support")}
          </NavLink>
        </div>
      ) : (
        <div className={styles["menuM"]}>
          <div
            className={classNames(styles["labelM"], {
              [styles["openM"]]: isExpanded,
            })}
            {...getToggleProps({
              onClick: onClickCollapse,
            })}
          >
            <div>{t("menuCourses.courseMenu.onlineLearning")}</div>
            <Icon icon={"chevronDownWhite"} />
          </div>
          <div className={styles["contentM"]} {...getCollapseProps()}>
            <div className={styles["decorM"]} />
            <div className={styles["menuLinkM"]}>
              <NavLink
                to={URL_HOME}
                className={({ isActive }) =>
                  classNames(styles["navMenu"], {
                    [styles["activeM"]]: isActive,
                  })
                }
                onClick={onClickCollapse}
              >
                {t("menuCourses.courseMenu.allprograms")}
              </NavLink>
              {isAuth ? (
                <NavLink
                  to={URL_USER_COURSE}
                  className={({ isActive }) =>
                    classNames(styles["navMenu"], {
                      [styles["activeM"]]: isActive,
                    })
                  }
                  onClick={onClickCollapse}
                >
                  {t("menuCourses.courseMenu.mycourses")}
                </NavLink>
              ) : (
                <span
                  className={styles["navMenu"]}
                  onClick={onClickOpenLoginPopUp}
                >
                  {t("menuCourses.courseMenu.mycourses")}
                </span>
              )}
              <NavLink
                to={URL_SUPPORT}
                className={({ isActive }) =>
                  classNames(styles["navMenu"], {
                    [styles["activeM"]]: isActive,
                  })
                }
                onClick={onClickCollapse}
              >
                {t("supportPage.support")}
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

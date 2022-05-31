import classNames from "classnames";
import { Icon } from "Componens/common/Icon";
import { URL_CONTACT, URL_HOME, URL_USER_COURSE } from "Constants/URL";
import { useAppSelector } from "Hooks/redux";
import { FC, useContext, useState } from "react";
import useCollapse from "react-collapsed";
import { NavLink } from "react-router-dom";
import { WidthContext } from "../widthWrapper";

import styles from "./index.module.css";

export const MenuCourses: FC = () => {
  const isAuth = useAppSelector((state) => state.App.isAuth);

  const onClickOpenRegisterPopUp = () => {};

  const widthScreen = useContext(WidthContext);
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

  return (
    <div className="container">
      {widthScreen > 550 ? (
        <div className={styles["menu"]}>
          <div className={styles["leftInfo"]}>
            <div className={styles["title"]}>Онлайн обучение</div>

            <NavLink
              to={URL_HOME}
              className={({ isActive }) =>
                classNames(styles["menuItems"], styles["menuLink"], {
                  [styles["activeMenu"]]: isActive,
                })
              }
            >
              Все программы
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
                Ваши курсы
              </NavLink>
            ) : (
              <span
                className={classNames(styles["menuItems"], styles["menuLink"])}
                onClick={onClickOpenRegisterPopUp}
              >
                Ваши курсы
              </span>
            )}
          </div>
          <NavLink
            to={URL_CONTACT}
            className={({ isActive }) =>
              classNames(styles["menuItems"], {
                [styles["activeMenu"]]: isActive,
              })
            }
          >
            CONTACT US
          </NavLink>
        </div>
      ) : (
        <div className={styles["menuM"]}>
          <div
            className={classNames(styles["labelM"], {
              [styles["openM"]]: isExpanded,
            })}
            {...getToggleProps({
              onClick: () => setExpanded((prevExpanded) => !prevExpanded),
            })}
          >
            <div>Label</div>
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
              >
                Все курсы
              </NavLink>
              {isAuth ? (
                <NavLink
                  to={URL_USER_COURSE}
                  className={({ isActive }) =>
                    classNames(styles["navMenu"], {
                      [styles["activeM"]]: isActive,
                    })
                  }
                >
                  Мои курсы
                </NavLink>
              ) : (
                <span className={styles["navMenu"]}>Мои курсы</span>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

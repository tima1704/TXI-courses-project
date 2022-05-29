import classNames from "classnames";
import { URL_CONTACT, URL_HOME, URL_USER_COURSE } from "Constants/URL";
import { useAppSelector } from "Hooks/redux";
import { FC } from "react";
import { NavLink } from "react-router-dom";

import styles from "./index.module.css";

export const MenuCourses: FC = () => {
  const isAuth = useAppSelector((state) => state.App.isAuth);

  return (
    <div className="container">
      <div className={styles["menu"]}>
        <div className={styles["leftInfo"]}>
          <div className={styles["title"]}>Онлайн обучение</div>
          {isAuth && (
            <>
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
            </>
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
    </div>
  );
};

import { FC } from "react";
import { NavLink } from "react-router-dom";
import { LinksMenu } from "./constants";
import styles from "./index.module.css";
import classNames from "classnames";
import { t } from "i18next";
import { useAppDispatch, useAppSelector } from "Hooks/redux";

export const MenuCoursesModile: FC = () => {
  const isAuthApp = useAppSelector(s => s.App.isAuth)

  const {setModalViewAction} = useAppDispatch()
  const onClick = () => {
    setModalViewAction("login")
  }
  return (
    <div className={styles["wrapper"]}>
      <div className={styles["decorline"]} />
      <div className={styles["row"]}>
        {LinksMenu.map(({ link, title, isAuth, id }) => {
          if (link) {
            if(isAuth && !isAuthApp){
              return <span key={id} onClick={onClick} className={classNames(styles["linkItem"])}>{t(title)}</span>
            }
            return <NavLink key={id} className={({ isActive }) =>
            classNames(styles["linkItem"], {
              [styles["linkItemActive"]]: isActive,
            })
          } to={link}>{t(title)}</NavLink>
          }
          return <span key={id} className={classNames(styles["linkItem"], styles["linkItemDisable"])}>{t(title)}</span>
        })}
      </div>
    </div>
  )
};

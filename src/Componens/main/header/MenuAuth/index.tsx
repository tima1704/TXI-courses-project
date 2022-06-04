import { Button } from "Componens/common/Button";
import { Icon } from "Componens/common/Icon";
import { TOKEN } from "Constants/App";
import { URL_SUPPORT, URL_USER_COURSE } from "Constants/URL";
import { useAppDispatch, useAppSelector } from "Hooks/redux";
import { FC } from "react";
import { Link } from "react-router-dom";

import styles from "./index.module.css";

export const MenuAuth: FC = () => {
  const { isAuth, user } = useAppSelector((state) => state.App);
  const { setModalViewAction, checkAuth } = useAppDispatch();

  const onClickExit = () => {
    localStorage.removeItem(TOKEN);
    checkAuth();
  };

  return (
    <div>
      {!isAuth ? (
        <Button variant={"grey"} className={styles["button"]}>
          <div
            className={styles["button"]}
            onClick={() => setModalViewAction("login")}
          >
            <Icon icon={"enter"} className={styles["buttonIcon"]} />
            <span>Sign in</span>
          </div>
          or{" "}
          <span onClick={() => setModalViewAction("register")}>Register</span>
        </Button>
      ) : (
        <div className={styles["user"]}>
          <div className={styles["userRow"]}>
            <div>{user?.name}</div>
            <img
              src={(process.env.REACT_APP_TXI_URL as string) + user?.pic}
              alt={"avatar"}
              className={styles["userImg"]}
            />
          </div>
          <div className={styles["userDropWrapper"]}>
            <div className={styles["userDrop"]}>
              {/* <div>Аккаунт</div> */}
              <div className={styles["userItems"]}>
                <Link to={URL_USER_COURSE}>Мои курсы</Link>
              </div>
              <div className={styles["userItems"]}>
                <Link to={URL_SUPPORT}>Поддержка</Link>
              </div>
              <div className={styles["userItems"]} onClick={onClickExit}>
                Выйти
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

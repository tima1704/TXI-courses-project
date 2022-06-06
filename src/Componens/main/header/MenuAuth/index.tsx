import { Button } from "Componens/common/Button";
import { Icon } from "Componens/common/Icon";
import { TOKEN } from "Constants/App";
import { URL_SUPPORT, URL_TRANSACTIONS, URL_USER_COURSE } from "Constants/URL";
import { useAppDispatch, useAppSelector } from "Hooks/redux";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import styles from "./index.module.css";

export const MenuAuth: FC = () => {
  const { isAuth, user } = useAppSelector((state) => state.App);
  const { setModalViewAction, checkAuth } = useAppDispatch();

  const onClickExit = () => {
    localStorage.removeItem(TOKEN);
    checkAuth();
  };
  const { t } = useTranslation();

  return (
    <div>
      {!isAuth ? (
        <Button variant={"grey"} className={styles["button"]}>
          <div
            className={styles["button"]}
            onClick={() => setModalViewAction("login")}
          >
            <Icon icon={"enter"} className={styles["buttonIcon"]} />
            <span>{t("common.signIn")}</span>
          </div>
          {t("common.or")}{" "}
          <span onClick={() => setModalViewAction("register")}>
            {t("common.signUp")}
          </span>
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
                <Link to={URL_USER_COURSE}>
                  {t("header.menuAuth.mycourses")}
                </Link>
              </div>
              <div className={styles["userItems"]}>
                <Link to={URL_TRANSACTIONS}>
                  {t("header.menuAuth.transactions")}
                </Link>
              </div>
              <div className={styles["userItems"]}>
                <Link to={URL_SUPPORT}>{t("supportPage.support")}</Link>
              </div>
              <div className={styles["userItems"]} onClick={onClickExit}>
                {t("header.menuAuth.goOut")}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

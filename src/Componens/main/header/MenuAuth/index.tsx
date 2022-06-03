import { Button } from "Componens/common/Button";
import { Icon } from "Componens/common/Icon";
import { useAppDispatch, useAppSelector } from "Hooks/redux";
import { FC } from "react";

import styles from "./index.module.css";

export const MenuAuth: FC = () => {
  const { isAuth, user } = useAppSelector((state) => state.App);
  const { setModalViewAction } = useAppDispatch();

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
        <div>
          <div>{user?.name}</div>
          <img src={user?.pic} alt={"avatar"} />
        </div>
      )}
    </div>
  );
};

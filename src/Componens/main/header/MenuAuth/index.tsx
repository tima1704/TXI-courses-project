import { Button } from "Componens/common/Button";
import { Icon } from "Componens/common/Icon";
import { useAppSelector } from "Hooks/redux";
import { FC } from "react";

import styles from "./index.module.css";

export const MenuAuth: FC = () => {
  const { isAuth, user } = useAppSelector((state) => state.App);

  return (
    <div>
      {!isAuth ? (
        <Button variant={"grey"} className={styles["button"]}>
          <div className={styles["button"]}>
            <Icon icon={"enter"} className={styles["buttonIcon"]} />
            <span>Sign in</span>
          </div>
          or <span>Register</span>
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

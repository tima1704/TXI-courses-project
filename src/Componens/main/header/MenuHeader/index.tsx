import classNames from "classnames";
import { Icon } from "Componens/common/Icon";
import { FC, useState } from "react";

import styles from "./index.module.css";

export const MenuHeader: FC = () => {
  const [isToggle, setIsToggle] = useState(false);

  const onClickOpenCloseMenu = () => setIsToggle((p) => !p);

  return (
    <div className={styles["menu__nav"]}>
      <ul className={classNames({ [styles["activeNav"]]: isToggle })}>
        <li
          className={classNames(
            styles["menu__nav_item"],
            styles["menu__nav_item_active"]
          )}
        >
          Катя <span className={styles["ch"]}>Чи</span>
        </li>
        <li className={styles["menu__nav_item"]}>About Txi</li>
        <li className={styles["menu__nav_item"]}>Shopping</li>
        <li className={styles["menu__nav_item"]}>Blog</li>
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

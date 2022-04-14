import { FC } from "react";

import Logo from "./logo.svg";

import styles from "./index.module.css";

interface ILoadingProps {
  fullScreen?: boolean;
}

export const Loading: FC<ILoadingProps> = ({ fullScreen }) => {
  if (fullScreen) {
    return (
      <div className={styles["loader__wraper"]}>
        <div className="anim_opacity">
          <img src={Logo} alt="Logo" className={styles["loader"]} />
        </div>
      </div>
    );
  }

  return (
    <div className="anim_opacity">
      <img src={Logo} alt="Logo" className={styles["loader"]} />
    </div>
  );
};

import { FC } from "react";

import Logo from "Svg/logo.svg";

import c from "classnames";

import styles from "./index.module.css";

export const Footer: FC = () => {
  return (
    <footer className="container anim_opacity">
      <div className={styles["footer"]}>
        <div className={styles["footer__left"]}>
          <img
            src={Logo}
            alt="logo"
            className={c(styles["footer_logo"], "scale")}
          />
          {/* <div>
            <form>
              <input />
              <button></button>
            </form>
          </div> */}
        </div>
        <div className={styles["footer__right"]}>
          {/* <div>
            <a>
              <img />
            </a>
            <a>
              <img />
            </a>
            <a>
              <img />
            </a>
          </div> */}
          <div className={styles["footer__copy"]}>
            Copyright 2022 Katia Txi. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

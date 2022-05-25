import { FC } from "react";
import Logo from "Svg/logo.svg";
import c from "classnames";
import styles from "./index.module.css";
import { Icon } from "../../common/Icon";
import { Input } from "Componens/common";
import { Button } from "Componens/common/Button";

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
              <Input placeholder="Email" />
            </form>
          </div> */}
        </div>
        <div className={styles["footer__right"]}>
          <div className={styles['flexRight']}>
            <a>
              <Icon icon="youTube"/>
            </a>
            <a>
              <Icon icon="telegram"/>
            </a>
            <a>
              <Icon icon="instagram"/>
            </a>
          </div>
          <div className={styles["footer__copy"]}>
            Copyright 2022 Katia Txi. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

import { FC } from "react";
import Logo from "Svg/logo.svg";
import styles from "./index.module.css";
import { Icon } from "../../common/Icon";
import Config from "Configs";
import classNames from "classnames";
import { LinkTo } from "Componens/common/Links";
import { URL_HOME } from "Constants/URL";
export const Footer: FC = () => {
  return (
    <footer className={"container anim_opacity"}>
      <div className={styles["footer"]}>
        <div className={styles["footer_top"]}>
          <LinkTo link={URL_HOME}>
            <img
              src={Logo}
              className={classNames(styles["footer_logo"], "scale")}
              alt={"Logo"}
            />
          </LinkTo>
          <div className={styles["social_row"]}>
            <a href={Config.socials.telegram}>
              <Icon icon={"telegram"} className={"scale"} />
            </a>
            <a href={Config.socials.instagram}>
              <Icon icon={"instagram"} className={"scale"} />
            </a>
            <a href={Config.socials.youTube}>
              <Icon icon={"youTube"} className={"scale"} />
            </a>
          </div>
        </div>
        <div className={styles["footer_botton"]}>
          <div className={styles["payments_row"]}>
            <Icon icon={"visa"} className={"scale"} />
            <Icon icon={"mastercard"} className={"scale"} />
            <Icon icon={"cloud"} className={"scale"} />
          </div>
          <div className={styles["copy"]}>
            Copyright 2022 KT.
            <br /> All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

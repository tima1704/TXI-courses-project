import classNames from "classnames";
import { Button } from "Componens/common/Button";
import { Icon } from "Componens/common/Icon";
import { LinkTo } from "Componens/common/Links";
import { TOKEN } from "Constants/App";
import {
  URL_HOME,
  URL_SUPPORT,
  URL_TRANSACTIONS,
  URL_USER_COURSE,
} from "Constants/URL";
import { useAppDispatch, useAppSelector } from "Hooks/redux";
import { FC, useState } from "react";
import useCollapse from "react-collapsed";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import styles from "./index.module.css";

interface MenuUserProps {
  onClickCloseMenu: () => void;
}

export const MenuUser: FC<MenuUserProps> = ({ onClickCloseMenu }) => {
  const user = useAppSelector((state) => state.App.user);

  const { checkAuth } = useAppDispatch();
  const navigetion = useNavigate();

  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
  const onClickCollapse = () => {
    setExpanded((v) => !v);
  };

  const onClickExit = () => {
    localStorage.removeItem(TOKEN);
    checkAuth();
    onClickCloseMenu();
    navigetion(URL_HOME, { replace: true });
  };

  const { t } = useTranslation();

  return (
    <div className={styles["menuUser"]}>
      <div
        className={styles["menuUserTop"]}
        {...getToggleProps({
          onClick: onClickCollapse,
        })}
      >
        <img
          alt="avatar"
          src={(process.env.REACT_APP_TXI_URL as string) + user?.pic}
          className={styles["avatar"]}
        />
        <div className={styles["menuNameRow"]}>
          {user?.name}{" "}
          <Icon
            icon={"chevronDownWhite"}
            className={classNames(styles["icon"], {
              [styles["activeIcon"]]: isExpanded,
            })}
          />
        </div>
      </div>
      <div {...getCollapseProps()}>
        <div className={styles["decorLine"]} />
        <div className={styles["links"]}>
          {/* <div></div> */}
          <div>
            <LinkTo link={URL_USER_COURSE} onClick={onClickCloseMenu}>
              {t("header.menuAuth.mycourses")}
            </LinkTo>
          </div>
          <div>
            <LinkTo link={URL_TRANSACTIONS} onClick={onClickCloseMenu}>
              {t("header.menuAuth.transactions")}
            </LinkTo>
          </div>
          <div>
            <LinkTo link={URL_SUPPORT} onClick={onClickCloseMenu}>
              {t("supportPage.support")}
            </LinkTo>
          </div>
        </div>
        <div className={styles["buttonRow"]}>
          <Button onClick={onClickExit} className={styles["btn"]}>
            {t("header.menuAuth.goOut")}
          </Button>
        </div>
      </div>
    </div>
  );
};

import classNames from "classnames";
import { ErrorPage, Loading } from "Componens/common";
import { Icon } from "Componens/common/Icon";
import { CourcesListGrid } from "Componens/showcaseCources/courcesGrid";
import { NoByCources } from "Componens/showcaseCources/NoByCources";
import { TOKEN } from "Constants/App";
import { URL_HOME } from "Constants/URL";
import { useUserCourcesList } from "Hooks/api/useCourcesList";
import { useAppDispatch, useAppSelector } from "Hooks/redux";
import { FC } from "react";
import { Link, useNavigate } from "react-router-dom";

import styles from "Styles/pageStyles/courceList.module.css";

export const UserCourceList: FC = () => {
  const user = useAppSelector((state) => state.App.user);

  const { data: courcesList = [], isLoading, isError } = useUserCourcesList();
  const { checkAuth } = useAppDispatch();
  const navigate = useNavigate();

  const onClickExit = () => {
    localStorage.removeItem(TOKEN);
    navigate(URL_HOME);
    checkAuth();
  };

  if (isError) {
    return <ErrorPage />;
  }

  if (isLoading) {
    return <Loading fullScreen />;
  }

  return (
    <div className="anim_opacity">
      <h1 className={styles["title_row"]}>
        <div>
          <Link to={URL_HOME} className={styles["link"]}>
            Все курсы
          </Link>{" "}
          | Мои курсы
        </div>
        <div>
          <Icon
            icon="exit"
            onClick={onClickExit}
            className={classNames(styles["icon_exit"], "scale")}
          />
        </div>
      </h1>
      <div className={classNames(styles["my_cources"], "anim_opacity")}>
        Добрый день, {user?.name}
      </div>
      {courcesList.length === 0 ? (
        <NoByCources />
      ) : (
        <CourcesListGrid data={courcesList} user />
      )}
    </div>
  );
};

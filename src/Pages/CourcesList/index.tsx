import { ErrorPage } from "Componens/common/ErrorPage";
import { Loading } from "Componens/common/Loading";
import { CourcesListGrid } from "Componens/showcaseCources/courcesGrid";
import { URL_USER_COURSE } from "Constants/URL";
import { useCourcesList } from "Hooks/api/useCourcesList";
import { useAppSelector } from "Hooks/redux";
import { FC } from "react";
import { Link } from "react-router-dom";

import styles from "Styles/pageStyles/courceList.module.css";

export const CourcesListPage: FC = () => {
  const { courcesList = [], isLoading, isError } = useCourcesList();

  const isAuth = useAppSelector((state) => state.App.isAuth);

  if (isError) {
    <ErrorPage />;
  }

  return (
    <main>
      <h1 className="anim_opacity">
        Все курсы{" "}
        {isAuth && (
          <>
            |{" "}
            <Link to={URL_USER_COURSE} className={styles["link"]}>
              Мои курсы
            </Link>
          </>
        )}
      </h1>
      {isLoading ? (
        <Loading fullScreen />
      ) : (
        <CourcesListGrid data={courcesList} />
      )}
    </main>
  );
};
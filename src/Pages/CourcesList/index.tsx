import { ErrorPage } from "Componens/common/ErrorPage";
import { Loading } from "Componens/common/Loading";
import { CourcesListGrid } from "Componens/showcaseCources/courcesGrid";
import { useCourcesList } from "Hooks/api/useCourcesList";
import { useAppSelector } from "Hooks/redux";
import { FC } from "react";

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
            | <span>Мои курсы</span>
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

import { ErrorPage } from "Componens/common/ErrorPage";
import { Loading } from "Componens/common/Loading";
import { CourcesListGrid } from "Componens/showcaseCources/courcesGrid";
import { useCourcesList } from "Hooks/api/useCourcesList";
import { FC } from "react";

export const CourcesListPage: FC = () => {
  const { courcesList = [], isLoading, isError } = useCourcesList();

  if (isError) {
    return <ErrorPage errorCode={500} />;
  }

  return (
    <main>
      <h1 className="anim_opacity">Все курсы</h1>
      {isLoading ? (
        <Loading fullScreen />
      ) : (
        <CourcesListGrid data={courcesList} />
      )}
    </main>
  );
};

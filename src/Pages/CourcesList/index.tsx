import { ErrorPage } from "Componens/common/ErrorPage";
import { Loading } from "Componens/common/Loading";
import { CourcesListGrid } from "Componens/showcaseCources/courcesGrid";
import { useCourcesList } from "Hooks/api/useCourcesList";
import { FC } from "react";

export const CourcesListPage: FC = () => {
  const { courcesList = [], isLoading, isError } = useCourcesList();

  if (isError) {
    <ErrorPage />;
  }

  return (
    <main>
      {isLoading ? (
        <Loading fullScreen />
      ) : (
        <CourcesListGrid data={courcesList} />
      )}
    </main>
  );
};

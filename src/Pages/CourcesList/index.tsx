import { Loading } from "Componens/common/Loading";
import { CourcesListGrid } from "Componens/showcaseCources/courcesGrid";
import { useCourcesList } from "Hooks/api/useCourcesList";
import { FC } from "react";

export const CourcesListPage: FC = () => {
  const { courcesList = [], isLoading } = useCourcesList();

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

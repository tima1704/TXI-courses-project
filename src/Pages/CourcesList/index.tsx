import { CourcesListGrid } from "Componens/showcaseCources/courcesGrid";
import { useCourcesList } from "Hooks/useCourcesList";
import { FC } from "react";

export const CourcesListPage: FC = () => {
  const { courcesList = [], isLoading } = useCourcesList();

  return (
    <main>
      <h1>Все курсы</h1>
      {isLoading ? <div>LOADING</div> : <CourcesListGrid data={courcesList} />}
    </main>
  );
};

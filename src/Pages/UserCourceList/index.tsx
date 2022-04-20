import { ErrorPage, Loading } from "Componens/common";
import { CourcesListGrid } from "Componens/showcaseCources/courcesGrid";
import { useUserCourcesList } from "Hooks/api/useCourcesList";
import { useAppSelector } from "Hooks/redux";
import { FC } from "react";

export const UserCourceList: FC = () => {
  const user = useAppSelector((state) => state.App.user);

  const { data: courcesList = [], isLoading, isError } = useUserCourcesList();

  if (isError) {
    return <ErrorPage />;
  }

  if (isLoading) {
    return <Loading fullScreen />;
  }

  return (
    <div className="anim_opacity">
      <h1>Добрый день, {user?.name}</h1>
      <div>Мои курсы</div>
      {courcesList.length === 0 ? (
        "NO by cources"
      ) : (
        <CourcesListGrid data={courcesList} user />
      )}
    </div>
  );
};

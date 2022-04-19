import { ErrorPage, Loading } from "Componens/common";
import { CourcesListGrid } from "Componens/showcaseCources/courcesGrid";
import { useCourcesList } from "Hooks/api/useCourcesList";
import { useAppSelector } from "Hooks/redux";
import { FC } from "react";

export const UserCourceList: FC = () => {
  const user = useAppSelector((state) => state.App.user);

  const { courcesList = [], isLoading, isError } = useCourcesList(); // TODO | Заменить на юзер

  if (isError) {
    return <ErrorPage />;
  }

  if (isLoading) {
    return <Loading fullScreen />;
  }

  return (
    <div>
      <h1>Добрый день, {user?.name}</h1>
      <div>Мои курсы</div>
      <CourcesListGrid data={courcesList} user />
    </div>
  );
};

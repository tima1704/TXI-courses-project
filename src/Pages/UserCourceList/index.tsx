import { ErrorPage, Loading } from "Componens/common";
import { CourcesListGrid } from "Componens/showcaseCources/courcesGrid";
import { NoByCources } from "Componens/showcaseCources/NoByCources";
import { useUserCourcesList } from "Hooks/api/useCourcesList";
import { FC } from "react";

export const UserCourceList: FC = () => {
  const { data: courcesList = [], isLoading, isError } = useUserCourcesList();

  // const onClickExit = () => {
  //   localStorage.removeItem(TOKEN);
  //   navigate(URL_HOME);
  //   checkAuth();
  // };

  if (isError) {
    return <ErrorPage />;
  }

  if (isLoading) {
    return <Loading fullScreen />;
  }

  return (
    <div className="anim_opacity">
      {courcesList.length === 0 ? (
        <NoByCources />
      ) : (
        <CourcesListGrid data={courcesList} user />
      )}
    </div>
  );
};

import { ErrorPage, Loading } from "Componens/common";
import { MainCoursePlay } from "Componens/CourcePlay/MainCoursePlay";

import { useCourceUser } from "Hooks/api/useCource";
import { FC } from "react";
import { useParams } from "react-router-dom";

export const CourceUserItem: FC = () => {
  const params = useParams<string>();

  const { cource, isLoading, isError } = useCourceUser(params.id || "");

  if (isLoading) {
    return <Loading fullScreen />;
  }

  if (isError || !cource) {
    return <ErrorPage />;
  }

  return (
    <div className="anim_opacity">
      <MainCoursePlay {...cource} />
    </div>
  );
};

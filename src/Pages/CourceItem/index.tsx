import { ErrorPage } from "Componens/common/ErrorPage";
import { Loading } from "Componens/common/Loading";
import { ContentModule } from "Componens/cource/ContentModule";
import { CourcePrices } from "Componens/cource/prices";
import { getUrlImg } from "Helpers/common";
import { useCource } from "Hooks/api/useCource";
import { FC } from "react";
import { useParams } from "react-router-dom";

import styles from "Styles/pageStyles/cource.module.css";

export const CourceItemPage: FC = () => {
  const params = useParams<string>();

  const { cource, isLoading, isError } = useCource(params.id);

  if (isError) {
    return <ErrorPage />;
  }

  return (
    <div>
      {isLoading ? (
        <Loading fullScreen />
      ) : (
        <div className="anim_opacity">
          <div className={styles["course_top"]}>
            <div className={styles["cource_title"]}>
              {cource?.courseMainInfo.title}
            </div>
            <div className={styles["cource_img"]}>
              <img src={getUrlImg(cource?.courseMainInfo.img || "")} alt="" />
            </div>
          </div>
          <div className={styles["cource_descr"]}>
            <p>{cource?.courseMainInfo.description}</p>
          </div>
          <div>
            {cource?.courceModulesMain?.courseModules.map((item, index) => (
              <ContentModule {...item} key={"module" + index} />
            ))}
          </div>
          <CourcePrices prices={cource?.coursePrices || []} />
        </div>
      )}
    </div>
  );
};

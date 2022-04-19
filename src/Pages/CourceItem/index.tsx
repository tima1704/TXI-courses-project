import { ErrorPage } from "Componens/common/ErrorPage";
import { Loading } from "Componens/common/Loading";
import { ContentModule } from "Componens/cource/ContentModule";
import { CourcePrices } from "Componens/cource/prices";
import { useCource } from "Hooks/api/useCource";
import { FC } from "react";
import { useParams } from "react-router-dom";

import styles from "Styles/pageStyles/cource.module.css";

export const CourceItemPage: FC = () => {
  const params = useParams<string>();

  const { cource, isLoading, isError } = useCource(params.id);

  if (isError) {
    <ErrorPage />;
  }

  return (
    <div>
      {isLoading ? (
        <Loading fullScreen />
      ) : (
        <div className="anim_opacity">
          <h1>{cource?.title}</h1>
          <div className={styles["cource_img"]}>
            <img src={cource?.img} alt="" />
          </div>
          <div>
            <p className={styles["cource_descr"]}>{cource?.description}</p>
          </div>
          <div className={styles["cource_modules"]}>
            <h2>Содержание</h2>
            <div>
              {cource?.courseModules.map((item, index) => (
                <ContentModule {...item} key={"module" + index} />
              ))}
            </div>
          </div>
          <CourcePrices prices={cource?.coursePrices || []} />
        </div>
      )}
    </div>
  );
};

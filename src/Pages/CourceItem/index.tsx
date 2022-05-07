import { ErrorPage } from "Componens/common/ErrorPage";
import { Icon } from "Componens/common/Icon";
import { Loading } from "Componens/common/Loading";
import { ContentModule } from "Componens/cource/ContentModule";
import { CourcePrices } from "Componens/cource/prices";
import { useCource } from "Hooks/api/useCource";
import { FC } from "react";
import { useNavigate, useParams } from "react-router-dom";

import styles from "Styles/pageStyles/cource.module.css";

export const CourceItemPage: FC = () => {
  const params = useParams<string>();

  const { cource, isLoading, isError } = useCource(params.id);
  const navigate = useNavigate();
  const onClickBack = () => {
    navigate(-1);
  };

  if (isError) {
    return <ErrorPage />;
  }

  return (
    <div>
      {isLoading ? (
        <Loading fullScreen />
      ) : (
        <div className="anim_opacity">
          <h1 className="h1_grey">
            <span onClick={onClickBack} className={styles["link_back"]}>
              <Icon icon="arrowLeft" className="arrow_left" />
              Back
            </span>
          </h1>

          <div className={styles["cource_title"]}>
            {cource?.courseMainInfo.title}
          </div>
          <div className={styles["cource_img"]}>
            <img src={cource?.courseMainInfo.img} alt="" />
          </div>
          <div>
            <p className={styles["cource_descr"]}>
              {cource?.courseMainInfo.description}
            </p>
          </div>
          <div className={styles["cource_modules"]}>
            <h2>Содержание</h2>
            <div>
              {cource?.courceModulesMain?.courseModules.map((item, index) => (
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

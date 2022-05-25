import { ErrorPage, Loading } from "Componens/common";
import { Icon } from "Componens/common/Icon";
import { CourcePlayer } from "Componens/CourcePlay/CourcePlayer";
import { StartCource } from "Componens/CourcePlay/StartCource";
import { log } from "console";
import { useCourceUser } from "Hooks/api/useCource";
import { FC, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import styles from "Styles/pageStyles/cource.module.css";

export const CourceUserItem: FC = () => {
  const params = useParams<string>();

  const { cource, isLoading, isError } = useCourceUser(params.id || "");
  
  const [module, setModule] = useState(
    localStorage.getItem("cource" + params.id) || 0
  );

  const setModuleWithLocalStorage = (moduleNumber: number) => {
    setModule(moduleNumber);
    localStorage.setItem("cource" + 1, moduleNumber.toString());
  };

  const activeModule = useMemo(() => {
    return cource?.courceModulesMain.courseModules.find(
      (item) => item.itemNumber == module
    );
  }, [cource, module]);
  

  const navigate = useNavigate();
  const onClickBack = () => {
    navigate(-1);
  };

  if (isLoading) {
    return <Loading fullScreen />;
  }

  if (isError || !cource) {
    return <ErrorPage />;
  }

  return (
    <div className="anim_opacity">
      <h1>
        <span className={styles["link_back"]}>
          <Icon icon="arrowLeft" className="arrow_left" onClick={onClickBack} />
        </span>
        {cource.courseMainInfo.title}
      </h1>
      

      {activeModule ? (
        <CourcePlayer
          setModuleWithLocalStorage={setModuleWithLocalStorage}
          activeModule={activeModule}
        />
      ) : (
        <StartCource
          description={cource.courseMainInfo.description}
          img={cource.courseMainInfo.img}
          setModule={setModuleWithLocalStorage}
        />
      )}
    </div>
  );
};

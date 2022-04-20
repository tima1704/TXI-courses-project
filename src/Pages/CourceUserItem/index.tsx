import { ErrorPage, Loading } from "Componens/common";
import { CourcePlayer } from "Componens/CourcePlay/CourcePlayer";
import { StartCource } from "Componens/CourcePlay/StartCource";
import { useCourceUser } from "Hooks/api/useCource";
import { FC, useMemo, useState } from "react";
import { useParams } from "react-router-dom";

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
    // eslint-disable-next-line eqeqeq
    return cource?.courseModules.find((item) => item.itemNumber == module);
  }, [cource, module]);

  if (isLoading) {
    return <Loading fullScreen />;
  }

  if (isError || !cource) {
    return <ErrorPage />;
  }

  return (
    <div className="anim_opacity">
      <h1>{cource.title}</h1>

      {activeModule ? (
        <CourcePlayer
          setModuleWithLocalStorage={setModuleWithLocalStorage}
          activeModule={activeModule}
        />
      ) : (
        <StartCource
          description={cource.description}
          img={cource.img}
          setModule={setModuleWithLocalStorage}
        />
      )}
    </div>
  );
};

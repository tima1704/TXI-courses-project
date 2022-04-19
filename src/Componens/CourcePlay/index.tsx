import { ErrorPage, Loading } from "Componens/common";
import { useCource } from "Hooks/api/useCource";
import { FC, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { CourcePlayItem } from "./CourcePlayItem";
import { StartCource } from "./StartCource";

export const CourcePlay: FC = () => {
  const params = useParams<string>();

  const { cource, isLoading, isError } = useCource(params.id);

  const [module, setModule] = useState(localStorage.getItem("cource" + 1) || 0);
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
        <div>
          <h3>
            {activeModule.itemNumber}
            {activeModule.title}
          </h3>
          <section>
            {activeModule.courseContents.map((item, index) => (
              <CourcePlayItem {...item} key={index + "content"} />
            ))}
          </section>
          <div>
            <button
              onClick={() =>
                setModuleWithLocalStorage(activeModule.itemNumber - 1)
              }
            >
              Назад
            </button>
            <button
              onClick={() =>
                setModuleWithLocalStorage(activeModule.itemNumber + 1)
              }
            >
              Вперед
            </button>
          </div>
        </div>
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

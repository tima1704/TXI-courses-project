import { FC } from "react";
import { ICourceUserModule } from "Types/cources";
import { CourcePlayItem } from "../CourcePlayItem";

interface CourcePlayerProps {
  activeModule: ICourceUserModule;
  setModuleWithLocalStorage: (moduleNumber: number) => void;
}

export const CourcePlayer: FC<CourcePlayerProps> = ({
  activeModule,
  setModuleWithLocalStorage,
}) => {
  return (
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
          onClick={() => setModuleWithLocalStorage(activeModule.itemNumber - 1)}
        >
          Назад
        </button>
        <button
          onClick={() => setModuleWithLocalStorage(activeModule.itemNumber + 1)}
        >
          Вперед
        </button>
      </div>
    </div>
  );
};

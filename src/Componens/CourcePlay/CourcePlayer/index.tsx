import { Button } from "Componens/common/Button";
import { FC } from "react";
import { ICourceUserModule } from "Types/cources";
import { CourcePlayItem } from "../CourcePlayItem";

import styles from "./index.module.css";

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
      <h3 className={styles["title"]}>
        {activeModule.itemNumber} {activeModule.title}
      </h3>
      <section className={styles["contentBlock"]}>
        {activeModule.courseContents.map((item, index) => (
          <CourcePlayItem {...item} key={index + "content"} />
        ))}
      </section>
      <div className={styles["buttons"]}>
        <Button
          onClick={() => setModuleWithLocalStorage(activeModule.itemNumber - 1)}
        >
          Назад
        </Button>
        <Button
          onClick={() => setModuleWithLocalStorage(activeModule.itemNumber + 1)}
        >
          Вперед
        </Button>
      </div>
    </div>
  );
};

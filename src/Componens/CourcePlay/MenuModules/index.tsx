import { FC } from "react";
import { ICourceUserModule } from "Types/cources";
import { ModuleItem } from "./ModuleItem";

import styles from "./index.module.css";

interface MenuModulesProps {
  modules: ICourceUserModule[];
  setActiveContent: React.Dispatch<React.SetStateAction<any | undefined>>;
  progressModel: any;
}

export const MenuModules: FC<MenuModulesProps> = ({
  modules,
  setActiveContent,
  progressModel,
}) => {
  return (
    <div className={styles["menu"]}>
      {modules
        .sort((i) => i.itemNumber - i.itemNumber)
        .map((item, index) => (
          <ModuleItem
            {...item}
            key={index + "module"}
            index={index}
            setActiveContent={setActiveContent}
            progressModel={progressModel[item.id]}
          />
        ))}
    </div>
  );
};

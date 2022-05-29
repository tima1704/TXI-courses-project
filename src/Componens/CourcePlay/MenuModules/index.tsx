import { FC } from "react";
import { ICourceUserModule } from "Types/cources";
import { ModuleItem } from "./ModuleItem";

interface MenuModulesProps {
  modules: ICourceUserModule[];
}

export const MenuModules: FC<MenuModulesProps> = ({ modules }) => {
  return (
    <div>
      {modules
        .sort((i) => i.itemNumber - i.itemNumber)
        .map((item, index) => (
          <ModuleItem {...item} key={index + "module"} index={index} />
        ))}
    </div>
  );
};

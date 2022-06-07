import { Icon } from "Componens/common/Icon";
import { host } from "Constants/API";
import { TOKEN } from "Constants/App";
import { FC, useMemo } from "react";

interface IFileContent {
  data: string;
  title: string;
}

export const FileContent: FC<IFileContent> = ({ data, title }) => {
  const urlContent = useMemo(() => {
    return host + data + "?token=" + localStorage.getItem(TOKEN);
  }, [data]);

  return (
    <div>
      <Icon icon={"file"} />
      <a href={urlContent}>{title}</a>
    </div>
  );
};

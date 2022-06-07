import { Icon } from "Componens/common/Icon";
import ProgresBar from "Componens/common/ProgressBar";
import { WidthContext } from "Componens/main/widthWrapper";
import { FC, useContext } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./index.module.css";

interface IDescriptionPlayer {
  title: string;
  progressPercent: number;
}

export const DescriptionPlayer: FC<IDescriptionPlayer> = ({
  title,
  progressPercent,
}) => {
  const navigete = useNavigate();

  const onClickBack = () => {
    navigete(-1);
  };

  const width = useContext(WidthContext);

  return (
    <div className={styles["descrItem"]}>
      <div className={styles["topDescr"]}>
        <div onClick={onClickBack}>
          <Icon icon={width > 900 ? "arrowLeftWhite" : "closeWhite"} />
        </div>
        <div>Katia Txi</div>
      </div>
      <div className={styles["content"]}>
        <div className={styles["title"]}>{title}</div>
        <div>
          <ProgresBar value={progressPercent} />
        </div>
      </div>
    </div>
  );
};

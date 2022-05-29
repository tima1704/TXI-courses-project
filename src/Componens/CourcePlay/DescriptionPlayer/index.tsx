import { FC } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./index.module.css";

interface IDescriptionPlayer {
  title: string;
}

export const DescriptionPlayer: FC<IDescriptionPlayer> = ({ title }) => {
  const navigete = useNavigate();

  const onClickBack = () => {
    navigete(-1);
  };

  return (
    <div className={styles["descrItem"]}>
      <div className={styles["topDescr"]}>
        <div onClick={onClickBack}>BTN</div>
        <div>Katia Txi</div>
      </div>
      <div className={styles["content"]}>
        <div className={styles["title"]}>{title}</div>
        <div>PROGRESS</div>
      </div>
    </div>
  );
};

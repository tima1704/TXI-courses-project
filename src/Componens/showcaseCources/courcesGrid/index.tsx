import { FC } from "react";
import { ICource } from "Types/cources";
import { CourceItem } from "../CourcesItem";

import styles from './index.module.css'

interface CourcesListGridProps {
  data: ICource[];
}

export const CourcesListGrid: FC<CourcesListGridProps> = ({ data }) => {
  return (
    <div className={styles["courcesGrid"]}>
      {data.map((cource, index) => (
        <CourceItem {...cource} key={index + "courceItem"} />
      ))}
    </div>
  );
};

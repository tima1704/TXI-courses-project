import { FC } from "react";
import { ICource } from "Types/cources";
import { CourceItem } from "../CourcesItem";

import styles from "./index.module.css";

interface CourcesListGridProps {
  data: ICource[];
  user?: boolean;
}

export const CourcesListGrid: FC<CourcesListGridProps> = ({ data, user }) => {
  return (
    <>
    <div className={styles["courcesGrid"]}>
      {data.map((cource, index) => (
        <>
        {console.log(cource)}
          <CourceItem {...cource} key={index + "courceItem"} user={user} />
          <CourceItem {...cource} key={index + "courceItemTwo"} user={user} />
        </>
      ))}
    </div>
    </>
  );
};

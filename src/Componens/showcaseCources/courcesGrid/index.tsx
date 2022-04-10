import { FC } from "react";
import { ICource } from "Types/cources";
import { CourceItem } from "../CourcesItem";

interface CourcesListGridProps {
  data: ICource[];
}

export const CourcesListGrid: FC<CourcesListGridProps> = ({ data }) => {
  return (
    <div>
      {data.map((cource, index) => (
        <CourceItem {...cource} key={index + "courceItem"} />
      ))}
    </div>
  );
};

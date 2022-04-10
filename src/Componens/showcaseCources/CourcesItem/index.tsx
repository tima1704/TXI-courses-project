import { FC } from "react";
import { ICource } from "Types/cources";

export const CourceItem: FC<ICource> = ({ title, description }) => {
  return (
    <div>
      <div>{title}</div>
      <div>{description}</div>
    </div>
  );
};

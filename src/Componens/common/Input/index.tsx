import { FC } from "react";

import styles from "./index.module.css";

export const Input: FC<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
> = ({ ...props }) => {
  return <input className={styles["input"]} {...props} />;
};

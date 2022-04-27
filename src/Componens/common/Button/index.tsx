import { FC } from "react";

import styles from "./index.module.css";

interface IButton
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

export const Button: FC<IButton> = ({ children, ...props }) => {
  return (
    <button {...props} className={styles["primary"]}>
      {children}
    </button>
  );
};

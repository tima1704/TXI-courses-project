import classNames from "classnames";
import { FC } from "react";

import styles from "./index.module.css";

interface IButton
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

export const Button: FC<IButton> = ({ className = "", children, ...props }) => {
  return (
    <button
      {...props}
      className={classNames(styles["primary"], { [className]: className })}
    >
      {children}
    </button>
  );
};

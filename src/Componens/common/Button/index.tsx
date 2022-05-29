import classNames from "classnames";
import { FC } from "react";

import styles from "./index.module.css";

interface IButton
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: "primary" | "grey";
}

export const Button: FC<IButton> = ({
  className = "",
  children,
  variant = "primary",
  ...props
}) => {
  return (
    <button
      {...props}
      className={classNames(styles["btn"], styles[variant], {
        [className]: className,
      })}
    >
      {children}
    </button>
  );
};

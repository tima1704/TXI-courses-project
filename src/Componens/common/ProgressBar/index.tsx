import classNames from "classnames";
import { FC } from "react";
import { Button } from "../Button";
import styles from "./index.module.css";

interface ProgresBarProps {
  value?: number;
  classNameBar?: string;
}

const ProgresBar: FC<ProgresBarProps> = ({ value = 0, classNameBar = "" }) => {
  return (
    <div className={styles["row__progress"]}>
      <Button>{`${value.toFixed(0)}%`}</Button>
      <div
        className={classNames(styles["progress_background"], {
          [classNameBar]: classNameBar,
        })}
      >
        <div
          className={styles["progress_item"]}
          style={{ width: value + "%" }}
        />
      </div>
    </div>
  );
};

export default ProgresBar;

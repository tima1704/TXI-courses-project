import { FC } from "react";
import { Button } from "../Button";
import styles from "./index.module.css";

interface ProgresBarProps {
  value?: number;
}

const ProgresBar: FC<ProgresBarProps> = ({ value = 0 }) => {
  return (
    <div className={styles["row__progress"]}>
      <Button>{`${value.toFixed(0)}%`}</Button>
      <div className={styles["progress_background"]}>
        <div
          className={styles["progress_item"]}
          style={{ width: value + "%" }}
        />
      </div>
    </div>
  );
};

export default ProgresBar;

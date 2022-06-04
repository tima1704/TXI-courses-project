import { Button } from "../Button";
import styles from "./index.module.css";
const ProgresBar = () => {
     return (
          <>
               <div className={styles["row__progress"]}>
                    <Button>{`50%`}</Button>
                    <div className={styles["progress_background"]}>
                         <div className={styles["progress_item"]} style={{ width: "50%" }}></div>
                    </div>
               </div>
          </>
     );
};

export default ProgresBar;
import { FC } from "react";

import styles from "Styles/pageStyles/cource.module.css";

interface StartCourceProps {
  img: string;
  description: string;
  setModule: (moduleNumber: number) => void;
}

export const StartCource: FC<StartCourceProps> = ({
  img,
  description,
  setModule,
}) => {

  const onClickStart = () => {
    setModule(1);
  };
  
  return (
    <div>
      <div className={styles["cource_img"]}>
        <img src={img} alt="" />
      </div>
      <div>
        <p className={styles["cource_descr"]}>{description}</p>
      </div>
      <div>
        <button onClick={onClickStart}>START</button>
      </div>
    </div>
  );
};

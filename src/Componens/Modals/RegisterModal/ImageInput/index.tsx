import classNames from "classnames";
import { Icon } from "Componens/common/Icon";
import { createRef, FC, useEffect, useState } from "react";
import useCollapse from "react-collapsed";
import { useTranslation } from "react-i18next";
import { IValidError } from "Types/common";

import styles from "./index.module.css";

type Trotate = 0 | 1 | 2 | 3;
interface ImageInputProps {
  onChangeFile: React.ChangeEventHandler<HTMLInputElement>;
  value?: File;
  onChangeRotate: (rotate: Trotate) => void;
  rotate: Trotate;
  error?: IValidError;
  resetFile: () => void;
}

export const ImageInput: FC<ImageInputProps> = ({
  onChangeFile,
  value,
  rotate,
  onChangeRotate,
  error,
  resetFile,
}) => {
  const refInputFile = createRef<HTMLInputElement>();
  const refImg = createRef<HTMLImageElement>();

  const onClickPhoto = () => {
    refInputFile.current?.click();
  };

  const onClickRotateRight = () => {
    if (rotate === 3) {
      onChangeRotate(0);
    } else {
      onChangeRotate((rotate + 1) as Trotate);
    }
  };

  const onClickRotateLeft = () => {
    if (rotate === 0) {
      onChangeRotate(3);
    } else {
      onChangeRotate((rotate - 1) as Trotate);
    }
  };

  useEffect(() => {
    if (value) {
      var reader = new FileReader();
      reader.onload = function () {
        var dataURL = reader.result;
        if (refImg.current) {
          refImg.current.src = dataURL as any;
        }
      };
      reader.readAsDataURL(value as Blob);
    }
  }, [value, refImg]);

  const { t } = useTranslation();

  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps } = useCollapse({ isExpanded });
  useEffect(() => {
    if (error) {
      resetFile();
      setExpanded(true);
    } else {
      setExpanded(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  return (
    <div className={styles["inputImage"]}>
      {value ? (
        <div className={styles["user_img_wrapper"]}>
          <img
            src="/rotationLeft.png"
            alt=""
            className={styles["rotate"]}
            onClick={onClickRotateLeft}
          />
          <img
            className={styles["user_img"]}
            alt="File"
            ref={refImg}
            onClick={onClickPhoto}
            style={{ transform: `rotate(${90 * rotate}deg)` }}
          />
          <img
            src="/rotationRight.png"
            alt=""
            className={styles["rotate"]}
            onClick={onClickRotateRight}
          />
        </div>
      ) : (
        <div
          className={classNames(styles["user_img"], styles["user_img_input"])}
          onClick={onClickPhoto}
        >
          <Icon icon={"photo"} />
        </div>
      )}
      <input
        ref={refInputFile}
        type={"file"}
        id={"file"}
        onChange={onChangeFile}
        style={{ display: "none" }}
        accept={"image/png, image/gif, image/jpeg"}
      />
      <div {...getCollapseProps()}>
        <div className={styles["error_message"]}>
          {error && t(error.message)}
        </div>
      </div>
    </div>
  );
};

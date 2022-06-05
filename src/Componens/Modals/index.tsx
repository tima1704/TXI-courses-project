import { useAppDispatch, useAppSelector } from "Hooks/redux";
import { FC, useEffect } from "react";
import { LoginModal } from "./LoginModal";

import styles from "./index.module.css";
import { Icon } from "Componens/common/Icon";
import { useGetBody } from "Hooks/common";
import classNames from "classnames";
import { RegisterPage } from "./RegisterModal";

export const Modals: FC = () => {
  const typeModal = useAppSelector((s) => s.Modal.type);

  const { setModalViewAction } = useAppDispatch();

  const onClickCloseModal = () => {
    setModalViewAction();
  };

  const bodyRef = useGetBody();

  useEffect(() => {
    if (bodyRef.current)
      if (typeModal) {
        bodyRef.current.style.overflowY = "hidden";
      } else {
        bodyRef.current.style.overflowY = "auto";
      }
  }, [bodyRef, typeModal]);

  if (!typeModal) {
    return null;
  }

  return (
    <div
      className={classNames(styles["modalWrapper"], {
        [styles["modalOpen"]]: typeModal,
      })}
    >
      <div className={styles["modal"]}>
        <div className={styles["modalTop"]}>
          <Icon icon="close" className="scale" onClick={onClickCloseModal} />
        </div>
        {typeModal === "login" && <LoginModal />}
        {typeModal === "register" && <RegisterPage />}
      </div>
    </div>
  );
};

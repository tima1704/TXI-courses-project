import { useAppDispatch, useAppSelector } from "Hooks/redux";
import { FC, useEffect } from "react";
import { LoginModal } from "./LoginModal";
import FgPassword from "./FgPasswordModal";

import styles from "./index.module.css";
import { Icon } from "Componens/common/Icon";
import { useGetBody } from "Hooks/common";
import classNames from "classnames";
import { RegisterPage } from "./RegisterModal";
import ErrorCourceModal from './TextModals/errorcourseModal';
import MailModal from "./TextModals/mailSent";
import SomeWrong from "./TextModals/somethingWrong";
import PasswordChanged from "./TextModals/passwordChanged";
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
        {typeModal === "editProfile" && <FgPassword/>}
        {typeModal === "errorCoursePaid" && <ErrorCourceModal/>}
        {typeModal === "sentMail" && <MailModal/>}
        {typeModal === "someWrong" && <SomeWrong/>}
        {typeModal === "passwordChanged" && <PasswordChanged/>}
      </div>
    </div>
  );
};

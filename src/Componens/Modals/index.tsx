import { useAppDispatch, useAppSelector } from "Hooks/redux";
import { FC, useEffect } from "react";
import { LoginModal } from "./LoginModal";
import FgPassword from "./FgPasswordModal";

import styles from "./index.module.css";
import { Icon } from "Componens/common/Icon";
import { useGetBody } from "Hooks/common";
import classNames from "classnames";
import { RegisterPage } from "./RegisterModal";
import ErrorCourceModal from "./TextModals/errorCourseModal";
import MailModal from "./TextModals/mailSent";
import SomeWrong from "./TextModals/somethingWrong";
import PasswordChanged from "./TextModals/passwordChanged";
import NewPassword from "./NewPasswordModal";
import CloudErrors from "./TextModals/сloudErrors";
import SentEmailMessageModal from "./TextModals/sentEmailMessage";
import SomeWrongEmailModal from "./TextModals/emailErrorMessege";

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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typeModal]);

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
        {typeModal === "forgotPassword" && <FgPassword />}
        {typeModal === "errorCoursePaid" && <ErrorCourceModal />}
        {typeModal === "sentMail" && <MailModal />}
        {typeModal === "someWrong" && <SomeWrong />}
        {typeModal === "passwordChanged" && <PasswordChanged />}
        {typeModal === "newPassword" && <NewPassword />}
        {typeModal === "cloudErrors" && <CloudErrors/>}
        {typeModal === "emailErrorMessage" && <SomeWrongEmailModal/>}
        {typeModal === "sentEmailMessege" && <SentEmailMessageModal/>}
      </div>
    </div>
  );
};

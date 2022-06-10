import styles from "./index.module.css";
import { useTranslation } from "react-i18next";
import { Button } from "../../common/Button"
import { Input } from "Componens/common";
const ForgotPasswordModal = () => {
     const { t } = useTranslation();
     return (
          <div className={styles["Forgot_Modal"]}>
               <div className={styles["title_modal"]}>
                    <h3>{t("modals.forgotPassword.title")}</h3>
                    <div className={styles["text_modal"]}>
                         <p>{t("modals.forgotPassword.info")}</p>
                    </div>
               </div>
               <div className={styles["body_modal"]}>
                    <div>
                         <Input
                              type="email"
                              placeholder={t("modals.forgotPassword.forgotPlaceHolder.email")} />
                    </div>
               </div>
               <div className={styles["footer_modal"]}>
                    <Button
                         type="button"
                         variant="grey">{t("modals.forgotPassword.send")}
                    </Button>
               </div>
          </div>
     );
};

export default ForgotPasswordModal;
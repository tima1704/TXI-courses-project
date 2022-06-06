import { Input } from 'Componens/common';
import { Button } from 'Componens/common/Button';
import { useTranslation } from 'react-i18next';
import styles from "./index.module.css";
const NewPasswordModal = () => {
     const { t } = useTranslation();
     return (
          <div className={styles["content_modal"]}>
               <div className={styles["title_modal"]}>
                    <h3>{t("modals.newPassword.title")}</h3>
               </div>
               <div className={styles["body_modal"]}>
                    <div>
                         <Input type="password" placeholder={t("modals.newPassword.newPasswordInput.password")} />
                    </div>
                    <div>
                         <Input type="password" placeholder={t("modals.newPassword.newPasswordInput.confirmPassword")} />
                    </div>

               </div>
               <div className={styles["header_module"]}>
                    <Button variant='grey'>{t("modals.newPassword.apply")}</Button>
               </div>
          </div>
     );
};

export default NewPasswordModal;
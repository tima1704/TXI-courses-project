import React from 'react';
import styles from "../index.module.css";
const PasswordChanged : React.FC = () => {
     return (
          <div className={styles["contentModal"]}>
               <div className={styles["title_modal"]}>
                    <h3>Пароль изменен!</h3>
               </div>
               <div className={styles["body_modal"]}>
                    <p>Новый пароль успешно установлен. Вы будете перенаправлены на главную страницу.</p>
               </div>
          </div>
     );
};

export default PasswordChanged;
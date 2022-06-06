import React from 'react';
import styles from "../index.module.css";
const sentMailModal : React.FC = () => {
     return (
          <div className={styles["contentModal"]}>
               <div className={styles["title_modal"]}>
                    <h3>Письмо отправлено</h3>
               </div>
               <div className={styles["body_modal"]}>
                    <p>На вашу электронную почту {`my***@gmail.com`} отправлена ссылка для сброса пароля.</p>
               </div>
          </div>
     );
};

export default sentMailModal;
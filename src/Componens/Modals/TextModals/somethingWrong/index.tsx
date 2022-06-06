import React from 'react';
import styles from "../index.module.css";
const someWrongModal : React.FC = () => {
     return (
          <div className={styles["contentModal"]}>
               <div className={styles["title_modal"]}>
                    <h3>Что-то пошло не так!</h3>
               </div>
               <div className={styles["body_modal"]}>
                    <p>Упс! Ссылка, которую вы использовали, недействительна. Если вы забыли свой пароль, сформируйте новый запрос.</p>
               </div>
          </div>
     );
};

export default someWrongModal;
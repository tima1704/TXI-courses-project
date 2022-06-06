import React from 'react';
import styles from "./index.module.css";
const errorCourseModal: React.FC = () => {
     return (
          <div className={styles["contentModal"]}>
               <div className={styles["title_modal"]}>
                    <h3>Вы уже подписаны на данный курс.</h3>
               </div>
               <div className={styles["body_modal"]}>
                    <p>По любым вопросам о курсе, модулях, оплате и пр. Вы можете обращаться в команду поддержки по адресу: <span>support@wildhumans.club.</span></p>
               </div>
          </div>
     );
};

export default errorCourseModal;
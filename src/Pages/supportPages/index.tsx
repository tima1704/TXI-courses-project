import { Input } from "Componens/common";
import { Button } from "Componens/common/Button";
import styles from "./index.module.css";
const supportPageFunc = () => {
     return (
          <section className={styles["support"]}>
               <div className={styles["leftBlock__supportPage"]}>
                    <div className={styles["content__left"]}>
                         <div className={styles["title__left"]}>
                              <h3>Поддержка</h3>
                         </div>
                         <span>support@katiatxi.club</span>
                         <p>Мы будем рады получить ваш отзыв или помочь вам с любыми вопросами о вашем заказе.</p>
                    </div>
               </div>
               <div className={styles["rightBlock__supportPage"]}>
                    <div className={styles["content__right"]}>
                         <div className={styles["title__right"]}>
                              <h3>Какой у вас вопрос?</h3>
                         </div>
                         <form>
                              <div className={styles["inputsBlock"]}>
                                   <div className={styles["form__content"]}>
                                        <div className={styles["input__content"]}>
                                             <span>ИМЯ: *</span>
                                             <Input type="text" placeholder="Введите имя" />
                                        </div>
                                        <div className={styles["input__content"]}>
                                             <span>НОМЕР ЗАКАЗА: *</span>
                                             <Input type="text" placeholder="Введите номер заказа" />
                                        </div>
                                   </div>
                                   <div className={styles["form__content"]}>
                                        <div className={styles["input__content"]}>
                                             <span>ТЕЛЕФОН: *</span>
                                             <Input type="number" placeholder="Введите номер телефона" />
                                        </div>
                                        <div className={styles["input__content"]}>
                                             <span>EMAIL: *</span>
                                             <Input type="email" placeholder="Введите email" />
                                        </div>
                                   </div>
                              </div>
                              <div className={styles["comment__input"]}>
                                   <span>КОМЕНТАРИЙ / ВОПРОС: *</span>
                                   <Input type="text" placeholder="Введите Коментарий / Вопрос " />
                              </div>
                              <div className={styles["form_button"]}>
                                   <Button>Отправить</Button>
                              </div>
                         </form>
                    </div>
               </div>
          </section>
     );
};

export default supportPageFunc;
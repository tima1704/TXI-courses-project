import classNames from "classnames";
import { Input } from "Componens/common";
import { Button } from "Componens/common/Button";
import { useSupport } from "Hooks/api/useSupport";
import { FC } from "react";
import styles from "./index.module.css";

const SupportPage: FC = () => {
  const { errors, data, setData, isDisabled, mutate } = useSupport();

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (isDisabled) return;

    mutate(data);
  };

  return (
    <section className={classNames(styles["support"], "anim_opacity")}>
      <div className={styles["leftBlock__supportPage"]}>
        <div className={styles["content__leftSupport"]}>
          <div className={styles["title__leftSupport"]}>
            <h3>Поддержка</h3>
          </div>
          <span>support@katiatxi.club</span>
          <p>
            Мы будем рады получить ваш отзыв или помочь вам с любыми вопросами о
            вашем заказе.
          </p>
        </div>
      </div>
      <div className={styles["rightBlock__supportPage"]}>
        <div className={styles["content__rightSupport"]}>
          <div className={styles["title__right"]}>
            <h3>Какой у вас вопрос?</h3>
          </div>
          <div className={styles["contentFlex"]}>
            <form onSubmit={onSubmit}>
              <div className={styles["inputsBlock"]}>
                <div className={styles["form__content"]}>
                  <div className={styles["input__content"]}>
                    <span>ИМЯ: *</span>
                    <Input
                      type="text"
                      placeholder="Введите имя"
                      onChange={onChange}
                      id={"name"}
                      value={data.name}
                      disabled={isDisabled}
                      error={errors.find((e) => e.name === "name")}
                    />
                  </div>
                  <div className={styles["input__content"]}>
                    <span>НОМЕР ЗАКАЗА:</span>
                    <Input
                      type="text"
                      placeholder="Введите номер заказа"
                      onChange={onChange}
                      id={"orderNumber"}
                      value={data.orderNumber}
                      disabled={isDisabled}
                      error={errors.find((e) => e.name === "orderNumber")}
                    />
                  </div>
                </div>
                <div className={styles["form__content"]}>
                  <div className={styles["input__content"]}>
                    <span>ТЕЛЕФОН: *</span>
                    <Input
                      type={"tel"}
                      placeholder="Введите номер телефона"
                      onChange={onChange}
                      id={"phone"}
                      value={data.phone}
                      disabled={isDisabled}
                      error={errors.find((e) => e.name === "phone")}
                    />
                  </div>
                  <div className={styles["input__content"]}>
                    <span>EMAIL: *</span>
                    <Input
                      type="email"
                      placeholder="Введите email"
                      onChange={onChange}
                      id={"email"}
                      value={data.email}
                      disabled={isDisabled}
                      error={errors.find((e) => e.name === "email")}
                    />
                  </div>
                </div>
              </div>
              <div className={styles["comment__input"]}>
                <span>КОМЕНТАРИЙ / ВОПРОС: *</span>
                <Input
                  type="text"
                  placeholder="Введите Коментарий / Вопрос"
                  onChange={onChange}
                  id={"description"}
                  value={data.description}
                  disabled={isDisabled}
                  error={errors.find((e) => e.name === "description")}
                />
              </div>
              <div className={styles["form_button"]}>
                <Button type={"submit"} disabled={isDisabled}>
                  Отправить
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportPage;

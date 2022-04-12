import { Input } from "Componens/common/Input";
import { FC, useEffect, useState } from "react";

import styles from "Styles/pageStyles/login.module.css";

export const LoginPage: FC = () => {
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setDisabled(false);
    }, 1000);
  }, []);

  return (
    <div className={styles["login"]}>
      <div className={styles["login_form"]}>
        <label>Войти</label>
        <div>
          <Input disabled={disabled} />
        </div>
        <div>
          <Input disabled={disabled} />
        </div>
        <button>Вход</button>
      </div>
    </div>
  );
};

import { FC } from "react";
import { ICourcePrice } from "Types/cources";

import styles from "./index.module.css";

interface CourcePricesProps {
  prices: ICourcePrice[];
}

export const CourcePrices: FC<CourcePricesProps> = ({ prices }) => {
  return (
    <div className={styles["prices"]}>
      <div>
        <h2>Варианты оплаты</h2>
      </div>

      <div>
        {prices.map((price) => (
          <PriceItem {...price} key={"price" + price.id} />
        ))}
      </div>
    </div>
  );
};

const PriceItem: FC<ICourcePrice> = ({ sum, days, currency, id }) => {
  return (
    <div className={styles["prices__item"]}>
      <div>
        <div>
          {sum} {currency}
        </div>
        <div className={styles["prices__item_descr"]}>{days} дней доступа</div>
      </div>
      <button className={styles["prices__item_btn"]}>Выбрать</button>
    </div>
  );
};

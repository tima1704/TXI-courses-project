import { FC } from "react";
import { ICourcePrice } from "Types/cources";
import styles from "./index.module.css";

interface CourcePricesProps {
  prices: ICourcePrice[];
}

export const CourcePrices: FC<CourcePricesProps> = ({ prices }) => {
  return (
    <div className={styles["prices"]}>
      <div className={styles["left_contentPrices"]}>
        <h3>Варианты оплаты:</h3>
      </div>

      <div className={styles["right_contentPrices"]}>
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
        <div className={styles["CurrencyPrice"]}>
          {currency} {sum}
        </div>
        <div className={styles["prices__item_descr"]}>
          {days === 3650 ? "Постоянный доступ" : `${days} дней доступа`}
        </div>
      </div>
      <button className={styles["prices__item_btn"]}>Выбрать</button>
    </div>
  );
};

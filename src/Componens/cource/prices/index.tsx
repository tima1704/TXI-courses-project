import { Pay } from "Helpers/common";
import { usePayment } from "Hooks/api/usePayment";
import { FC, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ICourcePrice } from "Types/cources";
import styles from "./index.module.css";
import { useAppSelector } from "Hooks/redux";

interface CourcePricesProps {
  prices: ICourcePrice[];
}

export const CourcePrices: FC<CourcePricesProps> = ({ prices }) => {
  const { t } = useTranslation();
  return (
    <div className={styles["prices"]}>
      <div className={styles["left_contentPrices"]}>
        <h3>{t("cource.price.PaymentOptions")}</h3>
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
  const { t } = useTranslation();

  const { isAuth, user } = useAppSelector((s) => s.App);

  const { isLoading, mutate, setModalViewAction, pay, setPay } = usePayment();

  // const navigate = useNavigate();

  useEffect(() => {
    if (pay && user) {
      const publcId = process.env.REACT_APP_TXI_URL_COURSE;
      const amount = +pay.amount;
      const currency = pay.currency;
      const invoiceId = pay.invoiceId;
      const email = user?.email || "";
      const accountId = user?.id || "";
      Pay({
        publicId: publcId,
        description: "",
        amount: amount,
        currency: currency,
        accountId: accountId,
        invoiceId: invoiceId,
        email: email,
        skin: "mini",
      });
      setPay(undefined);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pay, user]);

  const onClickPayCourse = () => {
    if (isAuth) {
      mutate(id);
    } else {
      setModalViewAction("login");
    }
  };

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
      <button
        className={styles["prices__item_btn"]}
        onClick={onClickPayCourse}
        disabled={isLoading}
      >
        {t("cource.price.choose")}
      </button>
    </div>
  );
};

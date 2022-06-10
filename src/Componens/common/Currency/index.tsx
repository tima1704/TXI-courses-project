import classNames from "classnames";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { TTransactionsCurrency } from "Types/transactions";

import styles from "./index.module.css";

interface TransactionStatusProps {
     currency: TTransactionsCurrency;
}

export const TransactionsCurrency: FC<TransactionStatusProps> = ({ currency }) => {
  const { t } = useTranslation();
  if (currency === "RUB") {
    return (
      <div className={classNames(styles["currency"])}>
        {t("₽")}
      </div>
    );
  }
  if (currency === "EUR") {
     return (
       <div className={classNames(styles["currency"])}>
         {t("€")}
       </div>
     );
   }
   if (currency === "USD") {
     return (
       <div className={classNames(styles["currency"])}>
         {t("$")}
       </div>
     );
   }
   if (currency === "GBP") {
     return (
       <div className={classNames(styles["currency"])}>
         {t("£")}
       </div>
     );
   }
   if (currency === "UAH") {
     return (
       <div className={classNames(styles["currency"])}>
         {t("₴")}
       </div>
     );
   }
   if (currency === "BYN") {
     return (
       <div className={classNames(styles["currency"])}>
         {t("Br")}
       </div>
     );
   }
   if (currency === "AZN") {
     return (
       <div className={classNames(styles["currency"])}>
         {t("₼")}
       </div>
     );
   }
   if (currency === "CHF") {
     return (
       <div className={classNames(styles["currency"])}>
         {t("CHF")}
       </div>
     );
   }
   if (currency === "CZK") {
     return (
       <div className={classNames(styles["currency"])}>
         {t("Kč")}
       </div>
     );
   }
   if (currency === "CAD") {
     return (
       <div className={classNames(styles["currency"])}>
         {t("$")}
       </div>
     );
   }
   if (currency === "PLN") {
     return (
       <div className={classNames(styles["currency"])}>
         {t("zł")}
       </div>
     );
   }
   if (currency === "SEK") {
     return (
       <div className={classNames(styles["currency"])}>
         {t("kr")}
       </div>
     );
   }
   if (currency === "TRY") {
     return (
       <div className={classNames(styles["currency"])}>
         {t("₺")}
       </div>
     );
   }
   if (currency === "CNY") {
     return (
       <div className={classNames(styles["currency"])}>
         {t("¥")}
       </div>
     );
   }
   if (currency === "INR") {
     return (
       <div className={classNames(styles["currency"])}>
         {t("₹")}
       </div>
     );
   }
   if (currency === "BRL") {
     return (
       <div className={classNames(styles["currency"])}>
         {t("R$")}
       </div>
     );
   }
   if (currency === "ZAR") {
     return (
       <div className={classNames(styles["currency"])}>
         {t("R")}
       </div>
     );
   }
   if (currency === "RON") {
     return (
       <div className={classNames(styles["currency"])}>
         {t("lei")}
       </div>
     );
   }
   if (currency === "AUD") {
     return (
       <div className={classNames(styles["currency"])}>
         {t("$")}
       </div>
     );
   }
   if (currency === "HKD") {
     return (
       <div className={classNames(styles["currency"])}>
         {t("$")}
       </div>
     );
   }
   if (currency === "AED") {
     return (
       <div className={classNames(styles["currency"])}>
         {t("د.إ")}
       </div>
     );
   }
  return (
    <div className={classNames(styles["status"])}>
      {t("лв")}
    </div>
  );
};

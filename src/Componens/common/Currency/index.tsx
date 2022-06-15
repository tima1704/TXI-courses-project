import classNames from "classnames";
import { FC } from "react";
import { TTransactionsCurrency } from "Types/transactions";

import styles from "./index.module.css";

interface TransactionStatusProps {
  currency: TTransactionsCurrency;
}

const currencySymbol = {
  RUB: "₽",
  EUR: "€",
  USD: "$",
  GBP: "£",
  UAH: "₴",
  BYN: "Br",
  AZN: "₼",
  CHF: "CHF",
  CZK: "Kč",
  CAD: "$",
  PLN: "zł",
  SEK: "kr",
  TRY: "₺",
  CNY: "¥",
  INR: "₹",
  BRL: "R$",
  ZAR: "R",
  RON: "lei",
  AUD: "$",
  HKD: "$",
  AED: "د.إ",
  KZT: "KZT",
  UZS: "UZS",
  BGN: "BGN",
  GEL: "GEL",
  KGS: "KGS",
  AMD: "AMD",
};

export const TransactionsCurrency: FC<TransactionStatusProps> = ({
  currency,
}) => {
  return (
    <div className={classNames(styles["status"])}>
      {currencySymbol[currency]}
    </div>
  );
};

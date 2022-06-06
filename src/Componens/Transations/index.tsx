import { FC } from "react";
import { useTranslation } from "react-i18next";
import { TTransactionsStatus } from "Types/transactions";

interface TransactionStatusProps {
  status: TTransactionsStatus;
}

export const TransactionStatus: FC<TransactionStatusProps> = ({ status }) => {
  const { t } = useTranslation();
  if (status === "paid") {
    return <div>{t("")}</div>;
  }

  if (status === "processing") {
    return <div>{t("")}</div>;
  }

  return <div>{t("")}</div>;
};

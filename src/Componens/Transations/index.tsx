import { FC } from "react";
import { useTranslation } from "react-i18next";
import { TTransactionsStatus } from "Types/transactions";

interface TransactionStatusProps {
  status: TTransactionsStatus;
}

export const TransactionStatus: FC<TransactionStatusProps> = ({ status }) => {
  const { t } = useTranslation();
  if (status === "paid") {
    return <div>{t("paid")}</div>;
  }

  if (status === "processing") {
    return <div>{t("processing")}</div>;
  }

  return <div>{t("rejected")}</div>;
};

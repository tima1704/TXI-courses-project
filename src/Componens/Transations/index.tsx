import classNames from "classnames";
import { Icon } from "Componens/common/Icon";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { TTransactionsStatus } from "Types/transactions";

import styles from "./index.module.css";

interface TransactionStatusProps {
  status: TTransactionsStatus;
}

export const TransactionStatus: FC<TransactionStatusProps> = ({ status }) => {
  const { t } = useTranslation();
  if (status === "paid") {
    return (
      <div className={classNames(styles["status"], styles["paid"])}>
        {t("common.transactionsStatus.paid")}
        <div>
          <Icon icon={"success"} />
        </div>
      </div>
    );
  }

  if (status === "reject") {
    return <div>{t("common.transactionsStatus.rejected")}</div>;
  }

  if (status === "fail") {
    return (
      <div className={classNames(styles["status"], styles["fail"])}>
        {t("common.transactionsStatus.fail")}
        <div>
          <Icon icon={"error"} />
        </div>
      </div>
    );
  }

  return (
    <div className={classNames(styles["status"], styles["processing"])}>
      {t("common.transactionsStatus.processing")}
      <div>
        <Icon icon={"spinner"} />
      </div>
    </div>
  );
};

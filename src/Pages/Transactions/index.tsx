import { ErrorPage, Loading } from "Componens/common";
import { WidthContext } from "Componens/main/widthWrapper";
import { TransactionStatus } from "Componens/Transations";
import { useCourcesList } from "Hooks/api/useCourcesList";
import { useTransactions } from "Hooks/api/useTransactions";
import moment from "moment";
import { FC, useContext, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { TTransactionsStatus } from "Types/transactions";
import styles from "Styles/pageStyles/Transactions.module.css";

const TransactionsFunc: FC = () => {
  const widthScreen = useContext(WidthContext);

  const { t } = useTranslation();

  const { data, isError, isLoading } = useTransactions();
  const {
    courcesList,
    isError: isErrorCourses,
    isLoading: isLoadingCourses,
  } = useCourcesList();

  const dataTransactions = useMemo(() => {
    if (data && courcesList) {
      return data.map((item) => ({
        ...item,
        course: courcesList.find((course) => course.id === item.courseId),
      }));
    }

    return [];
  }, [data, courcesList]);

  if (isError || isErrorCourses) {
    return <ErrorPage />;
  }

  if (isLoading || isLoadingCourses) {
    return <Loading fullScreen />;
  }

  return (
    <div className={"anim_opacity"}>
      {widthScreen > 820 ? (
        <div className={styles["transaction_element"]}>
          <div className={styles["table_transactions"]}>
            <div className={styles["title_transact"]}>
              <h3>{t("transactions.title")}</h3>
            </div>
            <table className={styles["table"]}>
              <thead className={styles["table_header"]}>
                <tr>
                  <th className={styles["order_table"]}>
                    {t("transactions.headers.order")}
                  </th>
                  <th className={styles["product_table"]}>
                    {t("transactions.headers.product")}
                  </th>
                  <th className={styles["date_table"]}>
                    {t("transactions.headers.date")}
                  </th>
                  <th className={styles["lastdate_table"]}>
                    {t("transactions.headers.lastdate")}
                  </th>
                  <th className={styles["status_table"]}>
                    {t("transactions.headers.status")}
                  </th>
                  <th className={styles["price_table"]}>
                    {t("transactions.headers.price_table")}
                  </th>
                </tr>
              </thead>
              <tbody className={styles["body_table"]}>
                {dataTransactions.length < 1 ? (
                  <tr>
                    <td>{t("transactions.noitems")}</td>
                  </tr>
                ) : (
                  dataTransactions.map((item) => {
                    return (
                      <tr>
                        <td className={styles["order_table"]}>{item.id}</td>
                        <td className={styles["product_table"]}>
                          {item.course?.courseMainInfo.title}
                        </td>
                        <td className={styles["date_table"]}>
                          {moment(item.createdAt).format("DD.MM.YYYY")}
                        </td>
                        <td className={styles["lastdate_table"]}>
                          {moment(new Date(+item.expirationDate)).format(
                            "DD.MM.YYYY"
                          )}
                        </td>
                        <td className={styles["status_table"]}>
                          <TransactionStatus status={item.status} />
                        </td>
                        <td className={styles["price_table"]}>
                          {item.coursePrice?.currency}
                          {item.coursePrice?.sum}
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className={styles["anim_opacity"]}>
          <div className={styles["mobile_transactions"]}>
            <div className={styles["title_transactMobile"]}>
              <h3>{t("transactions.title")}</h3>
            </div>
            <div className={styles["content__transaction"]}>
              {dataTransactions.length < 1 ? (
                <div>{t("transactions.noitems")}</div>
              ) : (
                dataTransactions.map((item) => {
                  return (
                    <div className={styles["element_transaction"]}>
                      <div className={styles["top_content"]}>
                        <div className={styles["item_top"]}>
                          <div>
                            <span>{t("transactions.headers.order")}</span>
                            <p>{item.id}</p>
                          </div>
                          <div>
                            <span>{t("transactions.headers.date")}</span>
                            <p>{moment(item.createdAt).format("DD.MM.YYYY")}</p>
                          </div>
                        </div>
                        <div className={styles["price_content"]}>
                          <div>
                            <span>{t("transactions.headers.price_table")}</span>
                            <p className={styles["priceMobile"]}>
                              {item.coursePrice?.currency}
                              {item.coursePrice?.sum}
                            </p>
                          </div>
                          <div>
                            <span>{t("transactions.headers.lastdate")}</span>
                            <p>
                              {moment(new Date(+item.expirationDate)).format(
                                "DD.MM.YYYY"
                              )}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className={styles["bottom_content"]}>
                        <div className={styles["product_item"]}>
                          <div>
                            <span>{t("transactions.headers.product")}</span>
                            <p>{item.course?.courseMainInfo.title}</p>
                          </div>
                        </div>
                        <div className={styles["status_item"]}>
                          <div>
                            <span>{t("transactions.headers.status")}</span>
                            <p className={styles["status_item_text"]}>
                              <TransactionStatus
                                status={item.status as TTransactionsStatus}
                              />
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TransactionsFunc;

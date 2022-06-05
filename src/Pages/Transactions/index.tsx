import { WidthContext } from "Componens/main/widthWrapper";
import { TransactionStatus } from "Componens/Transations";
import { useContext } from "react";
import { TTransactionsStatus } from "Types/transactions";

import styles from "./index.module.css";

const transactArray = [
  {
    id: 1,
    itemid: 23245,
    name: "Мир энергий с Александрой Доранн: Пробуждение",
    date: "19.05.2022",
    lastdate: "24.07.2022",
    status: "processing",
    price: "$140",
  },
  {
    id: 2,
    itemid: 23244,
    name: "Мир энергий с Александрой Доранн: Основы",
    date: "19.05.2022",
    lastdate: "24.06.2022",
    status: "paid",
    price: "$160",
  },
  {
    id: 3,
    itemid: 23243,
    name: "Мир энергий: Серия курсов",
    date: "08.10.2021",
    lastdate: "18.12.2021",
    status: "rejected",
    price: "$180",
  },
];

const TransactionsFunc = () => {
  const widthScreen = useContext(WidthContext);

  return (
    <div className={styles["anim_opacity"]}>
      {widthScreen > 820 ? (
        <div className={styles["transaction_element"]}>
          <div className={styles["table_transactions"]}>
            <div className={styles["title_transact"]}>
              <h3>Транзакции</h3>
            </div>
            <table className={styles["table"]}>
              <thead className={styles["table_header"]}>
                <tr>
                  <th className={styles["order_table"]}>Заказ #</th>
                  <th className={styles["product_table"]}>Продукт</th>
                  <th className={styles["date_table"]}>Дата покупки</th>
                  <th className={styles["lastdate_table"]}>Истекает</th>
                  <th className={styles["status_table"]}>Статус</th>
                  <th className={styles["price_table"]}>Стоимость</th>
                </tr>
              </thead>
              <tbody className={styles["body_table"]}>
                {transactArray.length < 1 ? (
                  <tr>
                    <td>Ничего не найдено.</td>
                  </tr>
                ) : (
                  transactArray.map((item) => {
                    return (
                      <tr>
                        <td className={styles["order_table"]}>{item.itemid}</td>
                        <td className={styles["product_table"]}>{item.name}</td>
                        <td className={styles["date_table"]}>{item.date}</td>
                        <td className={styles["lastdate_table"]}>
                          {item.lastdate}
                        </td>
                        <td className={styles["status_table"]}>
                          {item.status}
                        </td>
                        <td className={styles["price_table"]}>{item.price}</td>
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
              <h3>Транзакции</h3>
            </div>
            <div className={styles["content__transaction"]}>
              {transactArray.length < 1 ? (
                <div>Ничего не найдено</div>
              ) : (
                transactArray.map((item) => {
                  return (
                    <div className={styles["element_transaction"]}>
                      <div className={styles["top_content"]}>
                        <div className={styles["item_top"]}>
                          <div>
                            <span>Заказ #</span>
                            <p>{item.itemid}</p>
                          </div>
                          <div>
                            <span>Дата покупки</span>
                            <p>{item.date}</p>
                          </div>
                        </div>
                        <div className={styles["price_content"]}>
                          <div>
                            <span>Стоимость</span>
                            <p className={styles["priceMobile"]}>
                              {item.price}
                            </p>
                          </div>
                          <div>
                            <span>Истекает</span>
                            <p>{item.lastdate}</p>
                          </div>
                        </div>
                      </div>
                      <div className={styles["bottom_content"]}>
                        <div className={styles["product_item"]}>
                          <div>
                            <span>Продукт</span>
                            <p>{item.name}</p>
                          </div>
                        </div>
                        <div className={styles["status_item"]}>
                          <div>
                            <span>Статус</span>
                            <TransactionStatus
                              status={item.status as TTransactionsStatus}
                            />
                            <p className={styles["status_item_text"]}></p>
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

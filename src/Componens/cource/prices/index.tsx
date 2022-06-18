import { Pay } from "Helpers/common";
import { usePayment } from "Hooks/api/usePayment";
import { FC, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ICourcePrice } from "Types/cources";
import styles from "./index.module.css";
import { useAppSelector } from "Hooks/redux";
import { useNavigate, useParams } from "react-router-dom";
import { URL_USER_COURSE_ID } from "Constants/URL";
import { TransactionsCurrency } from "Componens/common/Currency";
interface CourcePricesProps {
  prices: ICourcePrice[];
  titleCourse: string;
}

export const CourcePrices: FC<CourcePricesProps> = ({
  prices,
  titleCourse,
}) => {
  const { t } = useTranslation();
  return (
    <div className={styles["prices"]}>
      <div className={styles["left_contentPrices"]}>
        <h3>{t("cource.price.PaymentOptions")}</h3>
      </div>

      <div className={styles["right_contentPrices"]}>
        {prices.map((price) => (
          <PriceItem
            {...price}
            key={"price" + price.id}
            titleCourse={titleCourse}
          />
        ))}
      </div>
    </div>
  );
};

interface PriceItemProps extends ICourcePrice {
  titleCourse: string;
}

const PriceItem: FC<PriceItemProps> = ({
  sum,
  days,
  currency,
  id,
  type,
  maxPeriod,
  titleCourse,
}) => {
  const { t } = useTranslation();

  const { isAuth, user } = useAppSelector((s) => s.App);

  const { isLoading, mutate, setModalViewAction, pay, setPay } = usePayment();

  const { id: courseId } = useParams<string>();
  const navigate = useNavigate();

  useEffect(() => {
    if (pay && user) {
      if (+pay.amount === 0) {
        navigate(URL_USER_COURSE_ID(courseId as string));
        return;
      }
      const publcId = process.env.REACT_APP_PUBLIC_API_CLOUD_PAYMENTS;
      let amount = +pay.amount;
      const currency = pay.currency;
      const invoiceId = pay.invoiceId;
      const email = user?.email || "";

      const receipt = {
        Items: [
          {
            label: titleCourse, //наименование товара
            price: +pay.amount, //цена
            quantity: 1.0, //количество
            measurementUnit: "шт",
            amount: +pay.amount, //сумма
            vat: 0, //ставка НДС
            method: pay.type === "recurrent" ? 5 : 1, // тег-1214 признак способа расчета - признак способа расчета
            object: 4, // тег-1212 признак предмета расчета - признак предмета товара, работы, услуги, платежа, выплаты, иного предмета расчета
          },
        ],
        taxationSystem: 0, //система налогообложения; необязательный, если у вас одна система налогообложения
        email: email, //e-mail покупателя, если нужно отправить письмо с чеком
        isBso: false, //чек является бланком строгой отчетности
        amounts: {
          electronic: +pay.amount, // Сумма оплаты электронными деньгами
          advancePayment: 0.0, // Сумма из предоплаты (зачетом аванса) (2 знака после запятой)
          credit: 0.0, // Сумма постоплатой(в кредит) (2 знака после запятой)
          provision: 0.0, // Сумма оплаты встречным предоставлением (сертификаты, др. мат.ценности) (2 знака после запятой)
        },
      };
      let data: any = {
        CloudPayments: {
          CustomerReceipt: receipt,
        },
      };
      if (pay.type === "recurrent") {
        data.CloudPayments = {
          CustomerReceipt: receipt,
          recurrent: {
            interval: "Month",
            period: 1,
            maxPeriods: pay.maxPeriod - 1,
            customerReceipt: receipt,
          },
        };
        amount = amount / pay.maxPeriod;
      }
      Pay(
        {
          publicId: publcId,
          description: "",
          amount: amount,
          currency: currency,
          accountId: invoiceId,
          invoiceId: invoiceId,
          email: email,
          skin: "mini",
          data,
        },
        () => {
          navigate(URL_USER_COURSE_ID(courseId as string));
        }
      );
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
          {+sum === 0 ? (
            <div className={styles["flex_currency"]}>
              {t("cource.price.priceItem.free")}
            </div>
          ) : (
            <div className={styles["flex_currency"]}>
              {type === "recurrent" && maxPeriod ? (
                <>
                  <TransactionsCurrency currency={currency} />
                  &nbsp;{(+sum / maxPeriod).toFixed(0)}
                  {" / "}
                  {t("cource.price.priceItem.period")}
                </>
              ) : (
                <>
                  <TransactionsCurrency currency={currency} />
                  &nbsp;{sum}
                </>
              )}
            </div>
          )}
        </div>
        <div className={styles["prices__item_descr"]}>
          {type === "recurrent" &&
            `${t("cource.price.priceItem.installmentPlan")} ${maxPeriod} ${t(
              "cource.price.priceItem.planPeriod"
            )} • `}

          {days === 3650
            ? `${t("cource.price.priceItem.permanentAccess")}`
            : `${days} ${t("cource.price.priceItem.daysAccess")}`}
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

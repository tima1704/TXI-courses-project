import { URL_USER_COURSE } from "Constants/URL";
import { PaymentsServices } from "Helpers/api/Payments";
import { useAppDispatch, useAppSelector } from "Hooks/redux";
import { useTranslation } from "react-i18next";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

export const usePayment = () => {
  const { user, isAuth } = useAppSelector((s) => s.App);
  const { setModalViewAction } = useAppDispatch();
  const { t } = useTranslation();

  const navigate = useNavigate();

  const { mutate, isLoading } = useMutation(
    PaymentsServices.createPaymentInvoise,
    {
      onSuccess: async (invoiceData) => {
        if (!invoiceData) return;

        const paymentOptions = {
          publicId: process.env.REACT_APP_PUBLIC_API_CLOUD_PAYMENTS,
          description: `${t("pay.descrition")} ${
            process.env.REACT_APP_TXI_URL_COURSE
          }`,
          amount: invoiceData.amount + ".00", //сумма
          currency: invoiceData.currency, //валюта
          accountId: user?.id, //идентификатор плательщика (необязательно)
          invoiceId: invoiceData.invoiceId, //номер заказа  (необязательно)
          email: user?.email, //email плательщика (необязательно)
          requireEmail: true,
          skin: "modern", //дизайн виджета (необязательно)
        };

        console.log(paymentOptions);

        var widget = new (window as any).cp.CloudPayments();
        widget.pay(
          "charge",
          paymentOptions,
          {
            onSuccess: () => {
              navigate(URL_USER_COURSE);
            },
          }
          //   onFail: function (reason, options) {
          //     // fail
          //     //действие при неуспешной оплате
          //   },
        );
      },
      onError: (err) => {
        if (Array.isArray(err)) {
          setModalViewAction("errorCoursePaid");
        }
      },
    }
  );

  return { mutate, isAuth, isLoading, setModalViewAction };
};

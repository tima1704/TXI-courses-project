export type TTransactionsStatus = "paid" | "processing" | "reject" | "fail";
export type TTransactionsCurrency = "RUB" | "EUR" | "USD" | "GBP" | "UAH" | "BYN" | "KZT" | "AZN" | "CHF" | "CZK" | "CAD" | "PLN" | "SEK" | "TRY" | "CNY" | "INR" | "BRL" | "ZAR" | "UZS" | "BGN" | "RON" | "AUD" | "HKD" | "GEL" | "KGS" | "AMD" | "AED";
export interface ITransaction {
  courseId: number;
  coursePrice?: { sum: string; currency: TTransactionsCurrency };
  createdAt: string;
  expirationDate: string;
  id: number;
  status: TTransactionsStatus;
}

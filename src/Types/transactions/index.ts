export type TTransactionsStatus = "paid" | "processing" | "reject" | "fail";

export interface ITransaction {
  courseId: number;
  coursePrice?: { sum: string; currency: string };
  createdAt: string;
  expirationDate: string;
  id: number;
  status: TTransactionsStatus;
}

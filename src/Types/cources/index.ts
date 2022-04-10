export type courseStatus = "active" | "draft" | "closed";

export interface ICource {
  id: number;
  createdAt: string;
  description: string;
  img: string;
  status: courseStatus;
  title: string;
  updatedAt: string;
}

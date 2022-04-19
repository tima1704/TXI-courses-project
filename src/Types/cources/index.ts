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

export interface ICourceItem extends ICource {
  courseModules: ICourceModule[];
  coursePrices: ICourcePrice[];
}

export interface ICourceModule {
  id: number;
  itemNumber: number;
  status: string;
  title: string;
  courseContents: ICourceContent[];
}

export interface ICourceContent {
  id: number;
  title: string;
  type: CourseContentType;
}

export type CourseContentType = "text" | "video";

export interface ICourcePrice {
  id: number;
  sum: string;
  currency: string;
  days: number;
}

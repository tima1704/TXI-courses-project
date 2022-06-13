import { TRegion } from "Types/common";
import { TTransactionsCurrency } from "Types/transactions";

export type courseStatus = "active" | "draft" | "closed";

export interface ICource {
  id: number;
  courseMainInfo: {
    title: string;
    img: string;
    description: string;
    regionId: TRegion;
    progress?: string;
  };
}

export interface ICourceItem extends ICource {
  courceModulesMain: { courseModules: ICourceModule[] };
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
export type TPriceType = "pay" | "recurrent";

export interface ICourcePrice {
  id: number;
  sum: string;
  currency: TTransactionsCurrency;
  days: number;
  type: TPriceType;
  maxPeriod?: number;
}

export interface ICourceUserItem extends ICource {
  courceModulesMain: { courseModules: ICourceUserModule[] };
  progress: IProgress;
}

export interface IProgress {
  percent: number;
  progressModel: any;
}

export interface ICourceUserModule {
  id: number;
  itemNumber: number;
  status: string;
  title: string;
  description: string;
  courseContents: ICourceUserContent[];
}

export type ICourceUserContent =
  | ICourceUserContentVideo
  | ICourceUserContentText
  | ICourceUserContentFile
  | ICourceUserContentImg;

interface ICourceUserContentVideo {
  id: number;
  title: string;
  type: "video";
  data: string;
}

interface ICourceUserContentText {
  id: number;
  title: string;
  type: "text";
  data: string;
}
interface ICourceUserContentFile {
  id: number;
  title: string;
  type: "file";
  data: string;
}
interface ICourceUserContentImg {
  id: number;
  title: string;
  type: "image";
  data: string;
}

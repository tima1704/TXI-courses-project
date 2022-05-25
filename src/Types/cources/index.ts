import { TRegion } from "Types/common";

export type courseStatus = "active" | "draft" | "closed";

export interface ICource {
  id: number;
  courseMainInfo: {
    title: string;
    img: string;
    description: string;
    regionId: TRegion;
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

export interface ICourcePrice {
  id: number;
  sum: string;
  currency: string;
  days: number;
}

export interface ICourceUserItem extends ICource {
  courceModulesMain: { courseModules: ICourceUserModule[] };
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
  type: "img";
  data: string;
}

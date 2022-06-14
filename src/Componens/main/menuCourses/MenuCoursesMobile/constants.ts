import { URL_HOME, URL_SUPPORT, URL_USER_COURSE } from "Constants/URL";

export interface IlinkMenu {
  id: number;
  title: string;
  link?: string;
  isAuth?: boolean;
}

export const LinksMenu: IlinkMenu[] = [
  {
    id: 0,
    title: "menuCourses.courseMenu.onlinecourse",
  },
  {
    id: 1,
    title: "menuCourses.courseMenu.allprograms",
    link: URL_HOME,
  },
  {
    id: 2,
    title: "menuCourses.courseMenu.yourcourses",
    link: URL_USER_COURSE,
    isAuth: true
  },
  {
    id: 3,
    title: "supportPage.support",
    link: URL_SUPPORT,
  },
];

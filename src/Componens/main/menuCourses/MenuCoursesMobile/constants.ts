import { URL_HOME, URL_SUPPORT, URL_USER_COURSE } from "Constants/URL";

export interface IlinkMenu {
  title: string;
  link?: string;
  isAuth?: boolean;
}

export const LinksMenu: IlinkMenu[] = [
  {
    title: "menuCourses.courseMenu.onlinecourse",
  },
  {
    title: "menuCourses.courseMenu.allprograms",
    link: URL_HOME,
  },
  {
    title: "menuCourses.courseMenu.yourcourses",
    link: URL_USER_COURSE,
    isAuth: true
  },
  {
    title: "supportPage.support",
    link: URL_SUPPORT,
  },
];

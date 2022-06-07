import { useGetBody } from "Hooks/common";
import { FC, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { CookiesModal } from "../cookiesModal";
import { Footer } from "../footer";
import { Header } from "../header/header";
import { Menu } from "../menu";
import { MenuCourses } from "../menuCourses";

export const AppWrapper: FC = ({ children }) => {
  const [openMenu, setOpenMenu] = useState(false);

  const bodyRef = useGetBody();

  useEffect(() => {
    if (bodyRef.current)
      if (openMenu) {
        bodyRef.current.style.overflowY = "hidden";
      } else {
        bodyRef.current.style.overflowY = "auto";
      }
  }, [bodyRef, openMenu]);

  const { pathname } = useLocation();

  if (pathname.includes("/p/cource/")) {
    return <div>{children}</div>;
  }

  return (
    <div>
      <Header setOpenMenu={setOpenMenu} />
      <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <MenuCourses />
      <div className="container body">{children}</div>
      <Footer />
      <CookiesModal />
    </div>
  );
};

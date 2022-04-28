import { useGetBody } from "Hooks/common";
import { FC, useEffect, useState } from "react";
import { Footer } from "../footer";
import { Header } from "../header/header";
import { Menu } from "../menu";

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

  return (
    <div>
      <Header setOpenMenu={setOpenMenu} />
      <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <div className="container body">{children}</div>
      <Footer />
    </div>
  );
};

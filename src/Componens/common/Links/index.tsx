import React from "react";
import { Link } from "react-router-dom";

interface LinkProprs {
  link: string;
  onClick?: any;
  className?: string;
}

export const LinkTo: React.FC<LinkProprs> = ({
  link,
  onClick,
  children,
  className = "",
}) => {
  const onTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    if (onClick) {
      onClick();
    }
  };

  return (
    <Link className={className} onClick={onTop} to={link}>
      {children}
    </Link>
  );
};

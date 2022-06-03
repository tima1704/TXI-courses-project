import { useAppSelector } from "Hooks/redux";
import { FC } from "react";

export const MenuUser: FC = () => {
  const user = useAppSelector((state) => state.App.user);

  return <div>{user?.name}</div>;
};

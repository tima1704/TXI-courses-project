import { useRef } from "react";

export const useGetBody = () => {
  const bodyRef = useRef<HTMLBodyElement>();

  const bodyHTML = document.getElementsByTagName("body");

  bodyRef.current = bodyHTML[0];

  return bodyRef;
};

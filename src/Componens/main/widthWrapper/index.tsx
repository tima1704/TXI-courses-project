import { FC, createContext, useState, useEffect } from "react";

export const WidthContext = createContext(window.innerWidth);

export const WidthWrapper: FC = ({ children }) => {
  const [widthDocument, setWidthDocument] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", function () {
      setWidthDocument(window.innerWidth);
    });
    
    return () => {
      window.removeEventListener("resize", function () {
        setWidthDocument(window.innerWidth);
      });
    };
  }, []);

  return (
    <WidthContext.Provider value={widthDocument}>
      {children}
    </WidthContext.Provider>
  );
};

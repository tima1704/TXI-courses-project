import React, { useEffect } from "react";
import LoginPage from "Pages";
import { Header } from "Componens/main/header/header";
import { CourceItemPage } from "Pages/CourceItem";
import { CourcesListPage } from "Pages/CourcesList";
import { Route, Routes } from "react-router-dom";
import { URL_LOGIN } from "Constants/URL";
import { useAppDispatch, useAppSelector } from "Hooks/redux";

function App() {
  const { checkAuth } = useAppDispatch();

  useEffect(() => {
    checkAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { isAuth, isLoadedApp } = useAppSelector((state) => state.App);

  return (
    <div className="App">
      {isLoadedApp ? (
        <div>
          <Header />
          {isAuth ? (
            <div className="container body">
              <Routes>
                <Route path="/" element={<CourcesListPage />} />
                <Route path="/cource/:id" element={<CourceItemPage />} />
              </Routes>
            </div>
          ) : (
            <Routes>
              <Route path={URL_LOGIN} element={<LoginPage />} />
            </Routes>
          )}
        </div>
      ) : (
        <>LOADING</>
      )}
    </div>
  );
}

export default App;

import React, { useEffect } from "react";
import LoginPage from "Pages";
import { Header } from "Componens/main/header/header";
import { CourceItemPage } from "Pages/CourceItem";
import { CourcesListPage } from "Pages/CourcesList";
import { Route, Routes } from "react-router-dom";
import { URL_COURSE_$ID, URL_LOGIN } from "Constants/URL";
import { useAppDispatch, useAppSelector } from "Hooks/redux";
import { Loading } from "Componens/common/Loading";
import { Footer } from "Componens/main/footer";

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
          <div className="container body">
            {isAuth ? (
              <Routes>
                <Route path="/" element={<CourcesListPage />} />
                <Route path={URL_COURSE_$ID} element={<CourceItemPage />} />
              </Routes>
            ) : (
              <Routes>
                <Route path={URL_LOGIN} element={<LoginPage />} />
                <Route path="/" element={<CourcesListPage />} />
                <Route path={URL_COURSE_$ID} element={<CourceItemPage />} />
              </Routes>
            )}
          </div>
          <Footer />
        </div>
      ) : (
        <Loading fullScreen />
      )}
    </div>
  );
}

export default App;

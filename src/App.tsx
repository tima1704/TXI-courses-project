import React, { useEffect } from "react";
import LoginPage from "Pages";
import { Header } from "Componens/main/header/header";
import { CourceItemPage } from "Pages/CourceItem";
import { CourcesListPage } from "Pages/CourcesList";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import {
  URL_COURSE_$ID,
  URL_HOME,
  URL_LOGIN,
  URL_USER_COURSE,
  URL_USER_COURSE_$ID,
} from "Constants/URL";
import { useAppDispatch, useAppSelector } from "Hooks/redux";
import { Loading } from "Componens/common/Loading";
import { Footer } from "Componens/main/footer";
import { UserCourceList } from "Pages/UserCourceList";
import { ErrorPage } from "Componens/common";

function App() {
  const { checkAuth } = useAppDispatch();

  useEffect(() => {
    checkAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { isAuth, isLoadedApp } = useAppSelector((state) => state.App);

  const navigate = useNavigate();
  const { pathname } = useLocation();
  useEffect(() => {
    if (isAuth && pathname === URL_HOME) {
      navigate(URL_USER_COURSE);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuth]);

  return (
    <div className="App">
      {isLoadedApp ? (
        <div>
          <Header />
          <div className="container body">
            <Routes>
              {isAuth && (
                <>
                  <Route path={URL_USER_COURSE} element={<UserCourceList />} />
                  <Route
                    path={URL_USER_COURSE_$ID}
                    element={<CourceItemPage />}
                  />
                </>
              )}
              <Route path={URL_LOGIN} element={<LoginPage />} />
              <Route path={URL_HOME} element={<CourcesListPage />} />
              <Route path={URL_COURSE_$ID} element={<CourceItemPage />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
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

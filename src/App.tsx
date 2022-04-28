import React, { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

import {
  URL_COURSE_$ID,
  URL_HOME,
  URL_LOGIN,
  URL_USER_COURSE,
  URL_USER_COURSE_$ID,
} from "Constants/URL";

import LoginPage from "Pages";
import { CourceItemPage } from "Pages/CourceItem";
import { CourcesListPage } from "Pages/CourcesList";
import { UserCourceList } from "Pages/UserCourceList";
import { CourceUserItem } from "Pages/CourceUserItem";

import { ErrorPage, Loading } from "Componens/common";
import { AppWrapper } from "Componens/main";

import { useAppDispatch, useAppSelector } from "Hooks/redux";

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
        <AppWrapper>
          <Routes>
            {isAuth ? (
              <>
                <Route path={URL_USER_COURSE} element={<UserCourceList />} />
                <Route
                  path={URL_USER_COURSE_$ID}
                  element={<CourceUserItem />}
                />
              </>
            ) : (
              <Route path={URL_LOGIN} element={<LoginPage />} />
            )}

            <Route path={URL_HOME} element={<CourcesListPage />} />
            <Route path={URL_COURSE_$ID} element={<CourceItemPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </AppWrapper>
      ) : (
        <Loading fullScreen />
      )}
    </div>
  );
}

export default App;

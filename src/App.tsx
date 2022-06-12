import React from "react";
import {
  Route,
  Routes,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

import {
  URL_COURSE_$ID,
  URL_HOME,
  URL_SUPPORT,
  URL_USER_COURSE,
  URL_USER_COURSE_$ID,
  URL_TRANSACTIONS,
} from "Constants/URL";

import {
  SupportPage,
  CourceUserItem,
  UserCourceList,
  CourcesListPage,
  CourceItemPage,
} from "Pages";

import { ErrorPage, Loading } from "Componens/common";
import { AppWrapper } from "Componens/main";

import { useAppDispatch, useAppSelector } from "Hooks/redux";
import { WidthWrapper } from "Componens/main/widthWrapper";
import { Modals } from "Componens/Modals";
import Transactions from "Pages/Transactions";
import { ProfileService } from "Helpers/api/Profile";

function App() {
  const { checkAuth, setModalViewAction } = useAppDispatch();

  const [searchParams, setSearchParams] = useSearchParams();

  React.useEffect(() => {
    checkAuth();

    if (searchParams.get("confirm-email")) {
      ProfileService.confirmEmail(searchParams.get("confirm-email") as string);
      setSearchParams("");
    }

    if (searchParams.get("reset-password")) {
      setModalViewAction("newPassword");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { isAuth, isLoadedApp } = useAppSelector((state) => state.App);

  const navigate = useNavigate();
  const { pathname } = useLocation();

  React.useEffect(() => {
    if (isAuth && pathname === URL_HOME) {
      navigate(URL_USER_COURSE);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuth]);

  return (
    <div className="App">
      <WidthWrapper>
        {isLoadedApp ? (
          <>
            <Modals />
            <AppWrapper>
              <Routes>
                {isAuth && (
                  <>
                    <Route
                      path={URL_USER_COURSE}
                      element={<UserCourceList />}
                    />
                    <Route
                      path={URL_USER_COURSE_$ID}
                      element={<CourceUserItem />}
                    />
                  </>
                )}
                <Route path={URL_HOME} element={<CourcesListPage />} />
                <Route path={URL_COURSE_$ID} element={<CourceItemPage />} />
                <Route path={URL_SUPPORT} element={<SupportPage />} />
                <Route path="*" element={<ErrorPage />} />
                <Route path={URL_TRANSACTIONS} element={<Transactions />} />
              </Routes>
            </AppWrapper>
          </>
        ) : (
          <Loading fullScreen />
        )}
      </WidthWrapper>
    </div>
  );
}

export default App;

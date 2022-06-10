// TODO | Сделать под все запросы обработчик ошибок

import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { BrowserRouter } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import { Provider } from "react-redux";
import Store from "Redux/Store";

import "i18n";

import "./Styles/reset.css";
import "./Styles/fonts/fonts.css";
import "./Styles/index.css";
import "./Styles/anitmations.css";
import "../node_modules/video-react/dist/video-react.css";
import { Loading } from "Componens/common";

export const queryClient = new QueryClient();
export const AppStore = Store;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<Loading fullScreen />}>
          <BrowserRouter>
            <ReactQueryDevtools
              initialIsOpen={process.env.NODE_ENV === "production"}
            />
            <App />
          </BrowserRouter>
        </Suspense>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

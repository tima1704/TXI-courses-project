import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { BrowserRouter } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import { Provider } from "react-redux";
import Store from "Redux/Store";

import "./Styles/reset.css";
import "./Styles/fonts/fonts.css";
import "./Styles/index.css";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <ReactQueryDevtools
            initialIsOpen={process.env.NODE_ENV === "production"}
          />
          <App />
        </BrowserRouter>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

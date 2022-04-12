import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { QueryClient, QueryClientProvider } from "react-query";

import "./Styles/reset.css";
import "./Styles/fonts/fonts.css";
import "./Styles/index.css";
import { BrowserRouter } from "react-router-dom";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

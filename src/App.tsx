import React from "react";
import LoginPage from "Pages";
import { Header } from "Componens/main/header/header";
import { CourceItemPage } from "Pages/CourceItem";
import { CourcesListPage } from "Pages/CourcesList";
import { Route, Routes } from "react-router-dom";
import { URL_LOGIN } from "Constants/URL";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container body">
        <Routes>
          <Route path="/" element={<CourcesListPage />} />
          <Route path="/:id" element={<CourceItemPage />} />
          <Route path={URL_LOGIN} element={<LoginPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

import React from "react";
// import LoginPage from "Pages";
import { Header } from "Componens/main/header/header";
import { CourceItemPage } from "Pages/CourceItem";
// import { CourcesListPage } from "Pages/CourcesList";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <LoginPage /> */}
      <div className="container">
        {/* <CourcesListPage /> */}
        <CourceItemPage />
      </div>
    </div>
  );
}

export default App;

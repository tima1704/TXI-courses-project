import React from "react";
// import LoginPage from "Pages";
import { Header } from "Componens/main/header/header";
import { CourcesListPage } from "Pages/CourcesList";



function App() {
  return (
    <div className="App">
      <Header />
      {/* <LoginPage /> */}
      <div className="container">
        <CourcesListPage />
      </div>
    </div>
  );
}

export default App;

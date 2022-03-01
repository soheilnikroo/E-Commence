import React, { Fragment } from "react";
import HomePage from "./Pages/HomePage/HomePage.component";
import { Route, Routes } from "react-router-dom";
import ShopPage from "./Pages/ShopPage/ShopPage.component";
import Header from "./components/Header/Header.component";

const App: React.FC = () => {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
    </Fragment>
  );
};

export default App;

import React from "react";
import HomePage from "./Pages/HomePage/HomePage.component";
import { Route, Routes } from "react-router-dom";
import ShopPage from "./Pages/ShopPage/ShopPage.component";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<ShopPage />} />
    </Routes>
  );
};

export default App;

import React from "react";
import "./App.css";
import HomePage from "./Pages/HomePage/HomePage.component";
import { Route, Routes } from "react-router-dom";

const HatsPage: React.FC = () => {
  return <div>Hats Page</div>;
};

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shop/hats" element={<HatsPage />} />
    </Routes>
  );
};

export default App;

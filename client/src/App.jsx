import React from "react";
import { Route, Routes } from "react-router-dom";
import { AppStyled } from "./AppStyled";
import Home from "./components/Home/Home";

function App() {
  return (
    <AppStyled>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </AppStyled>
  );
}

export default App;

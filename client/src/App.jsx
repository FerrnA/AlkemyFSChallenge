import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AppStyled } from "./AppStyled";
import Home from "./components/Home";

function App() {
  return (
    <AppStyled>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </AppStyled>
  );
}

export default App;

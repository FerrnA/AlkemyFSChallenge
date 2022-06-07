import React from "react";
import { Route, Routes } from "react-router-dom";
import { AppStyled } from "./AppStyled";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import ABM from "./components/ABMoperations/ABM";
import Login from "./components/Login/Login";

function App() {
  return (
    <AppStyled>
      <Routes>
        <Route path="/*" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="operations" element={<ABM />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </AppStyled>
  );
}

export default App;

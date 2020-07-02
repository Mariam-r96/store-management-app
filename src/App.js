import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import MainLayout from "./components/main-layout";
import LoginPage from "./pages/login/login-page";
import SellPage from "./pages/sell/sell-page";
import Report from "./pages/report/report-page";
import NavBar from "./components/navbar";
import AdminPanel from './pages/admin/home/home';
import SellerData from './pages/admin/sellers/SellerDataPage';
import AddSeller from './pages/admin/sellers/addSeller'

const App = () => {
  // ===============================
  // Hooks
  // ===============================

  const [hello, setHello] = useState("Hello User");
  const [color, setColor] = useState("#FFFFFF");

  // ===============================
  // Helpers
  // ===============================

  function changeHello(msg) {
    setHello(msg);
  }

  function changeBgColor(color){
    setColor(color);
  }

  // ===============================

  return (
    <MainLayout style={{ background: color }}>
      <Switch>
        <Route path="/" exact style={{ backgroundColor: "#FF0000" }}>
          <LoginPage />
        </Route>

        <Route path="/adminHome" onClick={() => changeBgColor("#FFFFFF")} exact>
          <NavBar hello={hello} changeHello={changeHello} />
          <AdminPanel />
        </Route>
        <Route path="/sellerData" onClick={() => changeBgColor("#FFFFFF")} exact>
          <NavBar hello={hello} changeHello={changeHello} />
          <SellerData />
        </Route>
        <Route path="/addSeller" onClick={() => changeBgColor("#FFFFFF")} exact>
          <NavBar hello={hello} changeHello={changeHello} />
          <AddSeller />
        </Route>
        
        <Route path="/sellerHome" onClick={() => changeBgColor("#FFFFFF")} exact>
          <NavBar hello={hello} changeHello={changeHello} />
          <SellPage />
        </Route>
        <Route path="/report" onClick={() => changeBgColor("#FFFFFF")} exact>
          <NavBar hello={hello} changeHello={changeHello} />
          <Report hello={hello} changeHello={changeHello} />
        </Route>
      </Switch>

    </MainLayout>
  );
};

export default App;

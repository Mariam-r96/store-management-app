import React from "react";
import NavBar from "./navbar";
import Footer from "./footer";
import "./styles/main-layout.css";

const MainLayout = (props) => {
  return (
    <div className="MainLayout">
      <NavBar />
      <main className="main-content">{props.children}</main>
      {/* <Footer /> */}
    </div>
  );
};

export default MainLayout;

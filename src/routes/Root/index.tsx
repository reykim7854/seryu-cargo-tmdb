import React from "react";
import Navbar from "../../components/Navbar";
import { Outlet } from "react-router-dom";
import "./index.css";
import ScrollToTop from "../../components/ScrollToTop";

const Root: React.FC = () => {
  return (
    <>
      <ScrollToTop>
        <Navbar></Navbar>
        <main className="main">
          <Outlet />
        </main>
      </ScrollToTop>
    </>
  );
};

export default Root;

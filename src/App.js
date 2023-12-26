import React from "react";
import SideNav from "./components/SideNav";
import CustomRoute from "./CustomRoute";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div className="h-screen">
      <ToastContainer/>     
      <CustomRoute />
      <SideNav />
    </div>
  );
};

export default App;

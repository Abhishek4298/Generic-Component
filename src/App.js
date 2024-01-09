import React from "react";
import SideNav from "./components/SideNav";
import CustomRoute from "./CustomRoute";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { sideNavItem } from "./constant";

const App = () => {
  return (
    <div className="h-screen">
      <ToastContainer/>     
      <CustomRoute />
      <SideNav
        navItem={sideNavItem}
        isSideNavOpen={true} //default false
      />
    </div>
  );
};

export default App;

import React from "react";
import SideNav from "./components/SideNav";
import CustomRoute from "./CustomRoute";
import { sideNavItem } from "./constant";

const App = () => {
  return (
    <div className="h-screen">
      <CustomRoute />
      <SideNav
        navItem={sideNavItem}
        isSideNavOpen={true} //default false
      />
    </div>
  );
};

export default App;

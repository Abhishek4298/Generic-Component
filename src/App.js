import React from "react";
import SideNav from "./components/SideNav";
import CustomRoute from "./CustomRoute";

const App = () => {
  return (
    <div className="h-screen">
      <CustomRoute />
      <SideNav />
    </div>
  );
};

export default App;

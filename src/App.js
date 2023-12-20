import React from "react";
import SideNav from "./components/SideNav";
import CustomRoute from "./CustomRoute";

const App = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <CustomRoute />
      <SideNav />
    </div>
  );
};

export default App;

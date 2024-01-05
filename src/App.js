import React from "react";
import SideNav from "./components/SideNav";
import CustomRoute from "./CustomRoute";
// import Home from "./components/MenuBar/Home";

const App = () => {
  return (
    <div className="h-screen">
      <CustomRoute />
      <SideNav />
      {/* <Home/> */}
    </div>
  );
};

export default App;

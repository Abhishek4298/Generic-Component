import React from "react";
import SideNav from "./components/SideNav";
import CustomRoute from "./CustomRoute";
import { useTheme } from "./ThemeContext";

const App = () => {
  const { theme } = useTheme();
  return (
    <div className={`bg-${theme === "dark" ? "black" : "white"} text-${
      theme === "dark" ? "white" : "black"
    } h-screen`}>
      <CustomRoute />
      <SideNav />
    </div>
  );
};

export default App;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import SideNavChildren from "./SideNavChildren";
import { sideNavIcon } from "../../constant";
import backIcon from "../../assets/images/previous.png";

const SideNav = ({ navItem, isSideNavOpen = false }) => {
  const [isNavOpen, setNavOpen] = useState(isSideNavOpen);

  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };

  return (
    <nav className="flex">
      <div
        className={`fixed inset-0 bg-black opacity-50 z-20 transition-opacity duration-300 ${
          isNavOpen ? "block" : "hidden"
        }`}
        onClick={toggleNav}
      ></div>

      <SideNavChildren isOpen={isNavOpen}>
        <nav>
          <ul className="space-y-4 mt-24">
            {navItem?.length &&
              navItem.map((nav) => {
                return (
                  <li key={nav?.label}>
                    <Link
                      to={nav?.link}
                      className="text-lg text-white hover:text-blue-300 focus:text-blue-300 px-4 py-2 flex items-center transition-colors duration-150 ease-in-out"
                    >
                      {nav?.label}
                    </Link>
                  </li>
                );
              })}
          </ul>
        </nav>
      </SideNavChildren>

      <div className="fixed top-5 left-5 z-30">
        <div
          onClick={toggleNav}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {isNavOpen ? (
            <h2 className="z-5 text-white">
              {<img src={backIcon} height={35} width={35} alt="back button" />}
            </h2>
          ) : (
            <div>{sideNavIcon}</div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default SideNav;

import React, { useState } from "react";
import Button from "../Button";
import SideNavChildren from "./SideNavChildren";

const SideNav = () => {
  const [isNavOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };

  return (
    <div className="flex">
      <div
        className={`fixed inset-0 bg-black opacity-50 z-20 transition-opacity duration-300 ${
          isNavOpen ? "block" : "hidden"
        }`}
        onClick={toggleNav} 
      ></div>

      <SideNavChildren isOpen={isNavOpen}>
        <nav>
          <ul className="space-y-4 mt-24">
            <li>
              <a
                href="/button"
                className="text-lg text-white hover:text-blue-300 focus:text-blue-300 px-4 py-2 flex items-center transition-colors duration-150 ease-in-out"
              >
                <svg
                  /* SVG icon for button */ className="w-6 h-6 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  {/* SVG path here */}
                </svg>
                Button
              </a>
            </li>
            <li>
              <a
                href="/modal"
                className="text-lg text-white hover:text-blue-300 focus:text-blue-300 px-4 py-2 flex items-center transition-colors duration-150 ease-in-out"
              >
                <svg
                  /* SVG icon for modal */ className="w-6 h-6 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  {/* SVG path here */}
                </svg>
                Modal
              </a>
            </li>
            {/* Add additional menu items here */}
          </ul>
        </nav>
      </SideNavChildren>

      {/* Button that stays fixed and is visible */}
      <div className="fixed top-5 left-5 z-30">
        <Button
          onClick={toggleNav}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {isNavOpen ? "Close" : "Menu"}
        </Button>
      </div>
    </div>
  );
};

export default SideNav;

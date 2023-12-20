import React, { useState } from "react";
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
                 className="w-6 h-6 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
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
                  className="w-6 h-6 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                </svg>
                Modal
              </a>
            </li>
          </ul>
        </nav>
      </SideNavChildren>

      <div className="fixed top-5 left-5 z-30">
        <div
          onClick={toggleNav}
          className="cursor-pointer"
          // className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {isNavOpen ? (
            <h2 className="z-5 text-white">👈</h2>
          ) : (
            <div>
              <svg viewBox="0 0 100 80" width="40" height="40">
                <rect width="100" height="20"></rect>
                <rect y="30" width="100" height="20"></rect>
                <rect y="60" width="100" height="20"></rect>
              </svg>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SideNav;
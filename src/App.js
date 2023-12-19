import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Button from "./components/Button";
import SideNav from "./components/SideNav";
import Modal from "./components/Modal";

const App = () => {
  const handleClick = () => {
    alert("Button clicked!");
  };
  const handleClickTwo = (data) => {
    alert(`Button clicked with data: ${data}`);
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <Router>
        <Routes>
          <Route
            path="/button"
            element={
              <div className="flex">
                <Button
                  color="red"
                  borderColor="purple"
                  rounded="md"
                  size="lg"
                  onClick={handleClick}
                >
                  Basic Button
                </Button>
                <Button
                  color="blue"
                  borderColor="blue"
                  rounded="md"
                  icon={
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
                  }
                  iconPosition="left"
                  onClick={() => handleClickTwo("GHEEEE")}
                >
                  Button with Icon
                </Button>
              </div>
            }
          />
        </Routes>
        <Routes>
          <Route path="/modal" element={<Modal color="red" header='Modal header' content="Modal Body"/>} />
        </Routes>

        <div>
          <SideNav />
        </div>
      </Router>
    </div>
  );
};

export default App;

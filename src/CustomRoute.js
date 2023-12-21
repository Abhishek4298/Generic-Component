import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Modal from "./components/Modal";
import Button from "./components/Button";

const CustomRoute = () => {
  const handleClick = () => {
    alert("Button clicked!");
  };

  const handleClickTwo = (data) => {
    alert(`Button clicked with data: ${data}`);
  };

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/button"
            element={
              <div className="flex justify-center items-center h-screen">
                <div className="grid grid-cols-3">
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
                    onClick={() => handleClickTwo("Custom Value")}
                  >
                    Button with Icon
                  </Button>
                  <Button
                    color="yellow"
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
                    iconPosition="right"
                    onClick={() => handleClickTwo("Custom Value")}
                  >
                    Button with Icon
                  </Button>
                </div>
              </div>
            }
          />
          <Route
            path="/modal"
            element={
              <div className="flex justify-center">
                <Modal
                  color="blue"
                  header="Generic Component"
                  content="New Content"
                  position="center"
                />
              </div>
            }
          />
        </Routes>
      </Router>
    </>
  );
};

export default CustomRoute;

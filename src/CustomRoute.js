import { Routes, Route } from "react-router-dom";
import Modal from "./components/Modal";
import Button from "./components/Button";
import Card from "./components/Card";
import Tooltip from "./components/Tooltip";
import { sampleImage1, trueIcon } from "./constant";

const CustomRoute = () => {
  const handleClick = () => {
    alert("Button clicked!");
  };

  const handleClickTwo = (data) => {
    alert(`Button clicked with data: ${data}`);
  };

  return (
    <>
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
                  icon={trueIcon}
                  iconPosition="left"
                  onClick={() => handleClickTwo("Custom Value")}
                >
                  Button with Icon
                </Button>
                <Button
                  color="yellow"
                  borderColor="blue"
                  rounded="md"
                  icon={trueIcon}
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
        <Route
          path="/card"
          element={
            <div className="flex">
              <Card
                title="Example Card"
                content="This is a generic card component."
                imageUrl={sampleImage1}
                onClick={() => alert("Button clicked!")}
              />
              <Card
                title="Example Card"
                content="This is a generic card component."
                onClick={() => alert("Button clicked!")}
              />
            </div>
          }
        />
       
        <Route
          path="/tooltip"
          element={
            <div className="flex justify-center items-center h-screen">
              <Tooltip text="Top Tooltip" position="top">
                <button className="p-4 mr-3 bg-blue-500 text-white hover:bg-blue-600">
                  Top
                </button>
              </Tooltip>

              <Tooltip text="Right Tooltip" position="right">
                <button className="p-4 mr-3 bg-green-500 text-white hover:bg-green-600">
                  Right
                </button>
              </Tooltip>

              <Tooltip text="Bottom Tooltip" position="bottom">
                <button className="p-4 mr-3 bg-yellow-500 text-white hover:bg-yellow-600">
                  Bottom
                </button>
              </Tooltip>

              <Tooltip text="Left Tooltip" position="left">
                <button className="p-4 mr-3 bg-red-500 text-white hover:bg-red-600">
                  Left
                </button>
              </Tooltip>
            </div>
          }
        />
      </Routes>
    </>
  );
};

export default CustomRoute;

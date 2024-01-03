import { Routes, Route } from "react-router-dom";
import Modal from "./components/Modal";
import Button from "./components/Button";
import Card from "./components/Card";
import { sampleImage1, trueIcon } from "./constant";
import CardBody from "./components/Card/CardBody";
import CardHeader from "./components/Card/CardHeader";
import CardFooter from "./components/Card/CardFooter";

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
              <Card>
                <CardHeader>
                  <h2 className="text-xl font-bold text-gray-800">Card Title</h2>
                </CardHeader>
                <CardBody>
                  <img
                    src="https://placekitten.com/300/200"
                    alt="Card Preview"
                    className="mb-4 rounded-lg"
                  />
                  <p className="text-gray-700 text-base">
                    This is the content of the card body. It can contain text, images,
                    or any other elements you want to display.
                  </p>
                </CardBody>
                <CardFooter>
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-500">Posted on January 1, 2024</div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      Read More
                    </button>
                  </div>
                </CardFooter>
              </Card>

              <Card
                title="Example Card"
                content="This is a generic card component."
                onClick={() => alert("Button clicked!")}
              />
            </div>
          }
        />
      </Routes>
    </>
  );
};

export default CustomRoute;

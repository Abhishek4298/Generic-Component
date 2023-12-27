import { Routes, Route } from "react-router-dom";
import Modal from "./components/Modal";
import Button from "./components/Button";
import Card from "./components/Card";
import { sampleImage1, trueIcon } from "./constant";
import InputFormControllers from "./components/FormInput"

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
          path="/input"
          element={
            <div>
              <InputFormControllers
                className="p-3 ml-3 text-lg"
                boxPosition='justify-center'
                labelColor='text-green-500'
                label="Your Name"
                name="username"
                type="text"
                placeholder="Enter Your Name"
                minLength={3}
                maxLength={20}
              />
              <InputFormControllers
                className="p-3 ml-3 mx-auto text-lg"
                boxPosition='justify-center'
                label="Your Age"
                name="age"
                type="number"
                placeholder="Enter Your Age"
              />
              <InputFormControllers
                className="p-3 ml-3 text-lg"
                boxPosition='justify-center'
                label="Your Email"
                name="email"
                type="email"
                placeholder="Enter Your Email"
                minLength={3}
                maxLength={50}
              />
              <InputFormControllers
                className="p-3 ml-3 text-lg"
                boxPosition='justify-center'
                label="Your Password"
                name="password"
                type="password"
                placeholder="Enter Your Password"
                minLength={8}
                maxLength={12}
              />
            </div>
          }
        />
      </Routes>
    </>
  );
};

export default CustomRoute;

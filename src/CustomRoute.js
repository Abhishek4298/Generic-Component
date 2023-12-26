import { Routes, Route } from "react-router-dom";
import Modal from "./components/Modal";
import Button from "./components/Button";
import Card from "./components/Card";
import { sampleImage1, trueIcon } from "./constant";
import ToastMessages from "./components/ToastMessages";

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
          path="/toast"
          element={
            <div>
              <ToastMessages
                type="success"
                buttonColor="bg-green-500"
                buttonPosition="center"
                autoClose={5000}
                position="top-right"
                hideProgressBar={false}
                closeOnClick={false}
                pauseOnHover={false}
                draggable={false}
                progress={0.3}
                theme="dark"
                promiseFn={async () => {
                  await new Promise((resolve) => setTimeout(resolve, 2000));
                }}
                loadingMessage="Loading..."
                successMessage="Success Toast!"
                errorMessage="Error!"
                delaySuccess="1000"
              />

              <ToastMessages
                type="error"
                buttonColor="bg-red-500"
                buttonPosition="end"
                autoClose={5000}
                position="top-right"
                hideProgressBar={false}
                closeOnClick={false}
                pauseOnHover={false}
                draggable={false}
                progress={0.3}
                theme="light"
                promiseFn={async () => {
                  await new Promise((resolve) => setTimeout(resolve, 2000));
                }}
                loadingMessage="Loading..."
                successMessage="Error Toast!"
                errorMessage="Error!"
                delaySuccess="1000"
              />
              <ToastMessages
                type="info"
                buttonColor="bg-blue-500"
                buttonPosition="start"
                autoClose={5000}
                position="top-right"
                hideProgressBar={false}
                closeOnClick={false}
                pauseOnHover={false}
                draggable={false}
                progress={0.3}
                theme="dark"
                promiseFn={async () => {
                  await new Promise((resolve) => setTimeout(resolve, 2000));
                }}
                loadingMessage="Loading..."
                successMessage="Information Toast!"
                errorMessage="Error!"
                delaySuccess="1000"
              />
              <ToastMessages
                type="warning"
                buttonColor="bg-yellow-500"
                buttonPosition="center"
                autoClose={5000}
                position="top-right"
                hideProgressBar={false}
                closeOnClick={false}
                pauseOnHover={false}
                draggable={false}
                progress={0.3}
                theme="dark"
                promiseFn={async () => {
                  await new Promise((resolve) => setTimeout(resolve, 2000));
                }}
                loadingMessage="Loading..."
                successMessage="Warning Toast!"
                errorMessage="Error!"
                delaySuccess="1000"
              />
            </div>
          }
        />
      </Routes>
    </>
  );
};

export default CustomRoute;

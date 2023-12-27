import { Routes, Route } from "react-router-dom";
import Modal from "./components/Modal";
import Button from "./components/Button";
import Card from "./components/Card";
import { sampleImage1, trueIcon } from "./constant";
import Accordion from "./components/Accordian";

const CustomRoute = () => {
  const handleClick = () => {
    alert("Button clicked!");
  };

  const handleClickTwo = (data) => {
    alert(`Button clicked with data: ${data}`);
  };

  const accordionItems = [
    {
      title: "Introduction",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu velit nec quam consectetur vestibulum vel eget libero.",
      imageUrl: "https://clipart-library.com/images/LTd5pnrMc.jpg",
    },
    {
      title: "Features",
      content:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.",
      imageUrl: "https://clipart-library.com/images/kiMKznyKT.jpg",
    },
    {
      title: "Usage",
      content:
        "Duis vehicula elit at purus dapibus, eu feugiat sem feugiat. Praesent nec lacus vel purus sodales hendrerit. Sed ac nunc ut elit auctor lacinia.",
      imageUrl: "https://clipart-library.com/images/8TGEyr9Gc.jpg",
    },
    {
      title: "Support",
      content:
        "Fusce ac nulla vitae ex varius aliquet id vitae quam. Etiam rhoncus tellus in lectus feugiat, vel scelerisque leo vestibulum. Aenean laoreet nisl vel est iaculis, vitae malesuada augue fermentum.",
      imageUrl: "https://clipart-library.com/images/yikA6Ep6T.jpg",
    },
  ];

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
          path="/accordian"
          element={
            <Accordion
              items={accordionItems}
              headerBgColor="bg-gradient-to-r from-blue-300 to-blue-400"
              itemsPosition="center"
              ttitleColor="text-white"
              contentBgColor="bg-white"
              contentColor="text-purple-800"
              headerSize="text-3xl"
              contentSize="text-2xl"
            />
          }
        />
      </Routes>
    </>
  );
};

export default CustomRoute;

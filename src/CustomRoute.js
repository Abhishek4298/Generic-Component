import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Modal from "./components/Modal";
import Button from "./components/Button";
import Card from "./components/Card";
import { sampleImage1, trueIcon } from "./constant";
import MenuBar from "./components/MenuBar";
import About from "./components/MenuBar/About";
import Contact from "./components/MenuBar/Contact";
import Home from "./components/MenuBar/Home";
import Music from "./components/MenuBar/Music";

const CustomRoute = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleClick = () => {
    alert("Button clicked!");
  };

  const handleClickTwo = (data) => {
    alert(`Button clicked with data: ${data}`);
  };

  const menuItems = [
    { label: "🏠Home", link: "/", linkedComponent: Home },
    { label: "🅰️bout", link: "/about", linkedComponent: About },
    { label: "🎵 Music", link: "/music", linkedComponent: Music },
    { label: "📞Contact", link: "/contact", linkedComponent: Contact },
  ];

  return (
    <>
      <Routes>
        <Route
          path="/button"
          element={
            <>
              <div className="flex justify-center items-center h-screen">
                <div className="grid grid-cols-3 gap-8 p-8 bg-gray-100 rounded-lg shadow-md">
                  <div className="space-y-4">
                    <h1 class="text-2xl font-bold mb-4">Generic Button</h1>
                    <Button>Default Button</Button>
                    <Button
                      borderColor="blue"
                      textColor="blue"
                      hoverColor="red"
                      hoverColorStrength="800"
                      className="mx-4"
                    >
                      Outline
                    </Button>
                    <Button
                      color="purple"
                      colorStrength="100"
                      borderColor="blue"
                      hoverColor="red"
                      hoverColorStrength="100"
                      rounded="md"
                      textColor="red"
                      size="lg"
                      onClick={handleClick}
                      className="italic mx-4"
                    >
                      Primary Button
                    </Button>
                    <Button
                      color="purple"
                      colorStrength="100"
                      borderColor="blue"
                      hoverColor="red"
                      hoverColorStrength="100"
                      rounded="full"
                      textColor="red"
                      size="lg"
                      onClick={handleClick}
                      className="mx-4"
                    >
                      Border Radius
                    </Button>
                    <Button
                      color="pink"
                      colorStrength="100"
                      hoverColor="red"
                      hoverColorStrength="300"
                      borderColor="yellow"
                      rounded="md"
                      icon={trueIcon}
                      iconPosition="left"
                      onClick={() => handleClickTwo("Custom Value")}
                    >
                      Icon Button
                    </Button>
                    <Button
                      color="yellow"
                      colorStrength="100"
                      borderColor="green"
                      rounded="md"
                      icon={trueIcon}
                      iconPosition="right"
                      onClick={() => handleClickTwo("Custom Value")}
                      className="mx-2"
                    >
                      Icon Button
                    </Button>
                  </div>
                  <div className="flex flex-col space-y-4 mt-4">
                    <Button size="small">Small</Button>
                    <Button size="medium">Medium</Button>
                    <Button size="large">Large</Button>
                  </div>
                </div>
              </div>
            </>
          }
        />
        <Route
          path="/modal"
          element={
            <div className="flex justify-center">
              <button onClick={openModal} className="bg-blue-500 text-white px-4 py-2">
                Open Modal
              </button>


              <Modal isOpen={isModalOpen} onClose={closeModal} showCloseIcon={true} content="Modal Body" size="small" position="center">
                <div>
                  Extra content
                </div>
                
              </Modal>
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
          path="/menu/*"
          element={
            <div>
              <MenuBar
                items={menuItems}
                backgroundColor="bg-pink-500"
                textColor="text-white"
                textSize="text-2xl"
                font="font-serif"
                height="h-25"
                image="https://www.shutterstock.com/image-vector/creative-abstract-3d-sphere-logo-260nw-1971786323.jpg"
                basePath="/menu"
              />
              <Routes>
                {menuItems.map((menu) => (
                  <Route
                    key={menu.link}
                    path={menu.link}
                    element={<menu.linkedComponent />}
                  />
                ))}
              </Routes>
            </div>
          }
        />
      </Routes>
    </>
  );
};

export default CustomRoute;

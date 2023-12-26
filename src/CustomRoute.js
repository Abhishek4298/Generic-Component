import { Routes, Route } from "react-router-dom";
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
          path="/menu"
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
              />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/music" element={<Music />} />
                <Route path="/contact" element={<Contact />} />
              {/* {menuItems.map((menu) => (
                <Route key={menu.link} path={menu.link} element={<menu.linkedComponent />} />
              ))} */}
            </Routes>
            </div>
          }
        />
      </Routes>
    </>
  );
};

export default CustomRoute;

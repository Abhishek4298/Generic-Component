import { Routes, Route } from "react-router-dom";
import Modal from "./components/Modal";
import Button from "./components/Button";
import Card from "./components/Card";
import { sampleImage1, trueIcon } from "./constant";
// import InputFormControllers from "./components/FormInput";
import MenuBar from './components/MenuBar';

const CustomRoute = () => {
  const handleClick = () => {
    alert("Button clicked!");
  };

  const handleClickTwo = (data) => {
    alert(`Button clicked with data: ${data}`);
  };

  const fields = [
    { name: 'name', label: 'Name', type: 'text', placeholder: 'Enter your name' },
    { name: 'email', label: 'Email', type: 'email', placeholder: 'Enter your email' },
    { name: 'password', label: 'Password', type: 'password', placeholder: 'Enter your password' },
    { name: 'phone', label: 'Phone', type: 'text', placeholder: 'Enter your phone number' },
    { name: 'message', label: 'Message', type: 'textarea', placeholder: 'Enter your message' },
    {
      name: 'radio',
      label: 'Radio',
      type: 'radio',
      options: [
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' },
        { value: 'others', label: 'Others' },
      ],
    },
    {
      name: 'dropdown',
      label: 'City',
      type: 'dropdown',
      options: [
        { value: 'ranchi', label: 'Ranchi' },
        { value: 'jamshedpur', label: 'Jamshedpur' },
        { value: 'varanasi', label: 'Varanasi' },
      ],
    },
    {
      name: 'hobbies',
      label: 'Hobbies',
      type: 'checkbox',
      options: [
        { value: 'reading', label: 'Reading' },
        { value: 'traveling', label: 'Traveling' },
        { value: 'coding', label: 'Coding' },
      ],
    },
    {
      name: 'acceptTerms',
      label: 'Accept Terms & Conditions',
      type: 'checkbox',
      options: [
        { value: 'acceptTerms', label: 'I accept the terms and conditions' },
      ],
    },
    // { name: 'checkbox',
    //   label: 'Accept Terms & Conditions', 
    //   type: 'checkbox', 
    //   options:[
    //     { value:'acceptterms', label:''}
    //   ],
    // }
  ];

  const menuItems = [
    {
      label: "Home",
      link: "/",
      linkedComponent: (
        <div className="flex justify-center text-8xl text-red-600 mt-12 italic">
          <h1>This is Home component</h1>
        </div>
      ),
    },
    {
      label: "About",
      link: "/about",
      linkedComponent: (
        <div className="flex justify-center text-8xl text-red-600 mt-12 font-thin">
          <h1>This is About component</h1>
        </div>
      ),
    },
    {
      label: "Music",
      link: "/music",
      linkedComponent: (
        <div className="flex justify-center text-8xl text-red-600 mt-12 font-semibold">
          <h1>This is Music component</h1>
        </div>
      ),
    },
    {
      label: "Contact",
      link: "/contact",
      linkedComponent: (
        <div className="flex justify-center text-8xl text-red-600 mt-12 font-bold">
          <h1>This is Contact component</h1>
        </div>
      ),
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
                onClick={() => alert("Button clicked!")}l
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
                color="blue"
                textColor="white"
                textSize="22"
                navHeight="150"
                //logoImageURL="Logo"
                logoImageURL="https://www.shutterstock.com/image-vector/creative-abstract-3d-sphere-logo-260nw-1971786323.jpg"
                logoTextSize="80"
                logoTextColor="yellow"
                logoTextColorStrength="300"
                logoClassName="font-semibold"
                basePath="/menu"
                imageHeight="80"
                imageWidth="80"
                spaceNavItems="5"
                itemsLinkHoverColor="gray"
                itemsLinkHoverColorStrength="800"
                navItemPosition="right"
                logoPosition="left"
                className="font-serif"
              />
            </div>
          }
        />
        {/* <Route
          path="/input"
          element={
            <div>
              <InputFormControllers 
              fields={fields}
              />
            </div>
          }
        /> */}
      </Routes>
    </>
  );
};

export default CustomRoute;

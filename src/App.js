import React from "react";
import Button from "./components/Button";

const App = () => {
  const handleClick = () => {
    alert("Button clicked!");
    // Perform any actions you want to take on click
  };
  const handleClickTwo = (data) => {
    // You can access event.target to get details about the clicked button if needed
    alert(`Button clicked with data: ${data}`);
  };

  return (
    <div className="flex justify-around">
      <label className="text-lg font-bold">Button component</label>
      <div className="flex">
        <Button
          color="red"
          borderColor="green"
          rounded="md"
          size="md"
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
    </div>
  );
};

export default App;

import React, { useState } from "react";

const Modal = ({
  color = "blue",
  header = "Modal Header",
  content = "Modal Body",
  position 
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openDialog = () => {
    setIsModalOpen(true);
  };

  const closeDialog = () => {
    setIsModalOpen(false);
  };

  const align = position === "center" ? "mt-60" : "mt-0" 

  return (
    <>
      {!isModalOpen && (
        <button
          className={`bg-${color}-500 hover:bg-${color}-600 text-white font-semibold py-2 px-4 rounded`}
          onClick={openDialog}
        >
          Open Dialog
        </button>
      )}

      {isModalOpen && (
        <div className={align}>
          <div className={`bg-white rounded shadow-lg p-6 max-w-sm mx-auto`}>
            <h1 className="text-2xl font-bold mb-4">{header}</h1>
            <div>
              <h2>{content}</h2>
            </div>
            <button
              className={`mt-3 bg-${color}-500 hover:bg-${color}-600 text-white font-semibold py-2 px-4 rounded`}
              onClick={closeDialog}
            >
              Close Dialog
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;

import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { tw } from "@twind/react";

const ToastMessages = ({
  type,
  buttonColor,
  buttonColorStrength,
  buttonTextColor,
  buttonTextColorStrength,
  onhoverBgColor,
  onhoverBgColorStrength,
  buttonTextSize,
  buttonLabel,
  autoClose,
  position,
  hideProgressBar,
  closeOnClick,
  pauseOnHover,
  draggable,
  theme,
  message,
  errorMessage,
}) => {
  const toastStyle = {
    buttonColor: tw`bg-${buttonColor}-${buttonColorStrength}` || "bg-green-500",
    buttonTextColor:
      tw`text-${buttonTextColor}-${buttonTextColorStrength}` || "text-black",
    onhoverBgColor:
      tw`bg-${onhoverBgColor}-${onhoverBgColorStrength}` || "bg-green-700",
    buttonTextSize: tw`text-[${buttonTextSize}px]` || "text-lg",
  };

  const showToast = async () => {
    try {
      const toastId = toast[type](message || "Default Message", {
        position: position || "top-right",
        autoClose: false,
        hideProgressBar: hideProgressBar !== undefined ? hideProgressBar : true,
        closeOnClick: closeOnClick !== undefined ? closeOnClick : true,
        pauseOnHover: pauseOnHover !== undefined ? pauseOnHover : true,
        draggable: draggable !== undefined ? draggable : true,
        theme: theme || "light",
      });

      await Promise.resolve();

      toast.update(toastId, {
        render: message || "Default Message",
        type: type,
        autoClose: autoClose !== undefined ? autoClose : 5000,
        hideProgressBar: hideProgressBar !== undefined ? hideProgressBar : true,
        closeOnClick: closeOnClick !== undefined ? closeOnClick : true,
        pauseOnHover: pauseOnHover !== undefined ? pauseOnHover : true,
        draggable: draggable !== undefined ? draggable : true,
        theme: theme || "light",
      });
    } catch (error) {
      toast.error(errorMessage || "Error!", {
        position: position || "top-right",
        autoClose: autoClose !== undefined ? autoClose : 5000,
        hideProgressBar: hideProgressBar !== undefined ? hideProgressBar : true,
        closeOnClick: closeOnClick !== undefined ? closeOnClick : true,
        pauseOnHover: pauseOnHover !== undefined ? pauseOnHover : true,
        draggable: draggable !== undefined ? draggable : true,
        theme: theme || "light",
      });
    }
  };

  return (
    <button
      className={`${toastStyle.buttonColor} ${toastStyle.buttonTextColor} hover:${toastStyle.onhoverBgColor} rounded-lg p-3 m-3 ${toastStyle.buttonTextSize}`}
      onClick={showToast}
    >
      {buttonLabel}
    </button>
  );
};

export default ToastMessages;

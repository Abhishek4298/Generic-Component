import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastMessages = ({
  type,
  buttonColor,
  position,
  autoClose,
  hideProgressBar,
  closeOnClick,
  pauseOnHover,
  draggable,
  theme,
  promiseFn,
  loadingMessage,
  successMessage,
  errorMessage,
  delaySuccess,
}) => {
  const [progress, setProgress] = useState(0);

  const showToast = async () => {
    try {
      const loadingToastId = toast[type](loadingMessage || "Loading...", {
        position: position || "top-right",
        autoClose: false,
        hideProgressBar: hideProgressBar !== undefined ? hideProgressBar : true,
        closeOnClick: closeOnClick !== undefined ? closeOnClick : true,
        pauseOnHover: pauseOnHover !== undefined ? pauseOnHover : true,
        draggable: draggable !== undefined ? draggable : true,
        progress: hideProgressBar ? undefined : progress,
        theme: theme || "light",
      });

      if (delaySuccess) {
        setTimeout(async () => {
          await promiseFn();
          toast.update(loadingToastId, {
            render: successMessage || "Success!",
            type: type,
            autoClose: autoClose !== undefined ? autoClose : 5000,
            hideProgressBar: hideProgressBar !== undefined ? hideProgressBar : true,
            closeOnClick: closeOnClick !== undefined ? closeOnClick : true,
            pauseOnHover: pauseOnHover !== undefined ? pauseOnHover : true,
            draggable: draggable !== undefined ? draggable : true,
            progress: hideProgressBar ? undefined : progress,
            theme: theme || "light",
          });
        }, delaySuccess);
      } else {
        await promiseFn();
        toast.update(loadingToastId, {
          render: successMessage || "Success!",
          type: type,
          autoClose: autoClose !== undefined ? autoClose : 5000,
          hideProgressBar: hideProgressBar !== undefined ? hideProgressBar : true,
          closeOnClick: closeOnClick !== undefined ? closeOnClick : true,
          pauseOnHover: pauseOnHover !== undefined ? pauseOnHover : true,
          draggable: draggable !== undefined ? draggable : true,
          progress: hideProgressBar ? undefined : progress,
          theme: theme || "light",
        });
      }
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

  useEffect(() => {
    if (autoClose) {
      const interval = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress < 1) {
            return prevProgress + 0.01;
          } else {
            clearInterval(interval);
            return 1;
          }
        });
      }, (autoClose / 100) * 1000);

      return () => clearInterval(interval);
    }
  }, [autoClose]);

  return (
    <div>
      <button className={`bg-${buttonColor}-500 mr-3 p-3 rounded-lg`} onClick={showToast}>
        Show {type} Toast
      </button>
    </div>
  );
};

export default ToastMessages;

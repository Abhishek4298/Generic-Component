import React from 'react';
import PropTypes from 'prop-types';
import { closeIcon } from "../../constant";
import { tw } from "@twind/react";
const Modal = ({ isOpen, onClose, children, showCloseIcon, header, content, size, position, customCloseIcon,showBorder,borderColor,borderWidth }) => {
  const modalClasses = isOpen
    ? `fixed inset-0 flex z-50 ${getPositionClass(position)}`
    : 'hidden';

  const modalSizeClasses = {
    small: 'w-64',
    medium: 'w-96',
    large: 'w-2/3',
    auto: 'w-auto',
  };

  const sizeClass = modalSizeClasses[size] || modalSizeClasses.medium;

  function getPositionClass(position)  {
    switch (position) {
      case 'left':
        return 'justify-start items-center';
      case 'right':
        return 'justify-end items-center';
      case 'top':
        return 'justify-center items-start';
      case 'bottom':
        return 'justify-center items-end';
      default:
        return 'justify-center items-center';
    }
  }

  return (
    <div className={`${modalClasses} bg-black bg-opacity-50`}>
      <div className={tw`${showBorder ? `border border-${borderWidth} border-${borderColor}-900`:'border-none'} bg-white p-4 shadow-md ${sizeClass} ${getPositionClass(position)}`}>
        {showCloseIcon && (
          <button onClick={onClose} className="float-right right-2 top-2 text-gray-600 hover:text-gray-800">
            {customCloseIcon ? (
              customCloseIcon
            ) : (
              closeIcon // Default close icon (you can customize it)
            )}
          </button>
        )}
        {header && <h1 className="text-2xl font-bold mb-4">{header}</h1>}
        {content && <div>{content}</div>}
        {children}
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  showCloseIcon: PropTypes.bool,
  header: PropTypes.string,
  content: PropTypes.node,
  size: PropTypes.oneOf(['small', 'medium', 'large', 'auto']),
  position: PropTypes.oneOf(['left', 'right', 'top', 'bottom']),
  customCloseIcon: PropTypes.node,
  showBorder: PropTypes.bool,
  borderColor: PropTypes.string,
  borderWidth: PropTypes.string
};
Modal.defaultProps = {
  showCloseIcon: true,
  size: 'auto',
  showBorder: false,
  borderColor: 'black',
  borderWidth: '2'
};
export default Modal;

import React from "react";
import { Link } from "react-router-dom";

const MenuBar = ({
  items,
  backgroundColor,
  textColor,
  textSize,
  font,
  height,
  image,
  basePath
}) => {
  const menuBarStyle = {
    backgroundColor: backgroundColor || "bg-gray-800",
    color: textColor || "text-white",
    size: textSize || "text-md",
    fontFamily: font || "font-sans",
    height: height || "h-16",
  };

  return (
    <nav
      className={`${menuBarStyle.backgroundColor} ${menuBarStyle.height} ${menuBarStyle.size} p-4`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div>
            <img src={image} alt="Logo" className="h-[60px] rounded-3xl"/>
        </div>
        <ul className={`lg:flex space-x-4  items-center`}>
          {items.map((item, index) => (
            <li key={index}>
              <Link
                to={`${basePath}${item.link}`}
                className={`${menuBarStyle.color} hover:text-gray-300`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default MenuBar;

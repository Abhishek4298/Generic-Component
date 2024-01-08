import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { tw } from "@twind/react";

const MenuBar = ({
  items,
  color="blue",
  textColor="white",
  textSize="22",
  navHeight="100",
  logoImageURL,
  basePath,
  imageHeight,
  imageWidth,
  spaceNavItems,
  itemsLinkHoverColor,
  itemsLinkHoverColorStrength,
  navItemPosition,
  logoPosition,
  className,
  logoTextSize,
  logoTextColor,
  logoTextColorStrength,
  logoClassName,
}) => {
  const [logoURLPosition, setLogoURLPositon] = useState("");
  const [navItemsPosition, setNavItemsPosition] = useState("");
  const [selectedItem, setSelectedItem] = useState(0);

  const handleItemClick = (index) => {
    setSelectedItem(index);
  };

  const renderLinkedComponent = () => {
    if (selectedItem !== null) {
      return items[selectedItem].linkedComponent;
    }
    return null;
  };

  useEffect(() => {
    if (logoPosition && logoPosition === "left") {
      setLogoURLPositon("justify-start mx-20");
    } else if (logoPosition && logoPosition === "right") {
      setLogoURLPositon("justify-end mr-10");
    } else if (logoPosition && logoPosition === "center") {
      setLogoURLPositon("justify-center ");
    } else if (logoPosition && logoPosition === "sticky") {
      setLogoURLPositon("sticky top-5 mx-20");
    } else {
      setLogoURLPositon("justify-start mx-20 ");
    }
  }, [logoPosition]);

  useEffect(() => {
    if (navItemPosition && navItemPosition === "left") {
      setNavItemsPosition("justify-start mx-10");
    } else if (navItemPosition && navItemPosition === "right") {
      setNavItemsPosition("justify-end mr-10");
    } else if (navItemPosition && navItemPosition === "center") {
      setNavItemsPosition("justify-center");
    } else if (navItemPosition && navItemPosition === "sticky") {
      setNavItemsPosition("sticky top-5 mr-20");
    } else {
      setNavItemsPosition("justify-between");
    }
  }, [navItemPosition]);

  const menuBarStyle = {
    backgroundColor: tw`bg-${color}-500` || "bg-gray-800",
    color: tw`text-${textColor}` || "text-white",
    size: tw`text-[${textSize}px]` || "text-md",
    height: tw`h-[${navHeight}px]` || "h-16",
    imageHeight: tw`h-[${imageHeight}px]` || "h-20",
    imageWidth: tw`w-[${imageWidth}px]` || "w-24",
    spaceNavItems: tw`space-x-${spaceNavItems}` || "space-x-4",
    itemsLinkHoverColor:
      tw`hover:text-${itemsLinkHoverColor}-${itemsLinkHoverColorStrength}` ||
      "hover:text-gray-300",
    navItemPosition: tw`${navItemsPosition}` || "justify-between",
    logoURLPosition: tw`${logoURLPosition}` || "justify-start",
    className: tw`${className}` || "",
    logoTextColor:
      tw`text-${logoTextColor}-${logoTextColorStrength}` || "text-white",
    logoTextSize: tw`text-[${logoTextSize}px]` || "text-3xl",
    logoClassName: tw`${logoClassName}` || "",
  };

  const gridColWisePosition = logoImageURL
    ? "grid grid-rows-1 grid-flow-col"
    : tw`flex ${navItemsPosition}`;

  return (
    <>
      <nav
        className={`${menuBarStyle.backgroundColor} ${menuBarStyle.size} ${menuBarStyle.className}`}
      >
        <div
          className={`${gridColWisePosition} ${menuBarStyle.height} items-center`}
        >
          {logoImageURL !== null && logoImageURL !== undefined && (
            <div className={`flex ${menuBarStyle.logoURLPosition}`}>
              {isValidURL(logoImageURL) ? (
                <img
                  src={logoImageURL}
                  alt="Logo Not Found"
                  className={`${menuBarStyle.imageHeight} ${menuBarStyle.imageWidth} rounded-2xl`}
                />
              ) : (
                <span
                  className={` ${menuBarStyle.logoTextColor} ${menuBarStyle.logoTextSize} ${menuBarStyle.logoClassName}`}
                >
                  {logoImageURL}
                </span>
              )}
            </div>
          )}
          <div>
            <ul
              className={`flex ${menuBarStyle.spaceNavItems} ${menuBarStyle.navItemPosition}`}
            >
              {items.map((item, index) => (
                <li key={index}>
                  <Link
                    to={`${basePath}${item.link}`}
                    className={`${menuBarStyle.color} ${menuBarStyle.itemsLinkHoverColor}`}
                    onClick={() => handleItemClick(index)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      {renderLinkedComponent()}
    </>
  );
};

export default MenuBar;

//to check whether image is url or string
function isValidURL(str) {
  try {
    new URL(str);
    return true;
  } catch (error) {
    return false;
  }
}
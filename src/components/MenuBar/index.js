import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { tw } from "@twind/react";

const MenuBar = ({
  items,
  backgroundColor,
  textColor,
  textSize,
  fontFamily,
  navHeight,
  logoImageURL,
  basePath,
  imageHeight,
  imageWidth,
  spaceNavItems,
  itemsLinkHoverColor,
  itemsLinkHoverColorStrength,
  navItemPosition,
  logoPosition,
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
      setLogoURLPositon("justify-start mx-20 pt-5 pb-2");
    } else if (logoPosition && logoPosition === "right") {
      setLogoURLPositon("justify-end pt-5 pb-2");
    } else if (logoPosition && logoPosition === "center") {
      setLogoURLPositon("justify-center pt-5 pb-2");
    } else if (logoPosition && logoPosition === "sticky") {
      setLogoURLPositon("sticky top-5 mx-20");
    } else {
      setLogoURLPositon("justify-start mx-20 pt-5 pb-2");
    }
  }, [logoPosition]);

  useEffect(() => {
    if (navItemPosition && navItemPosition === "left") {
      setNavItemsPosition("justify-start pt-6");
    } else if (navItemPosition && navItemPosition === "right") {
      setNavItemsPosition("justify-end mr-10 pt-6");
    } else if (navItemPosition && navItemPosition === "center") {
      setNavItemsPosition("justify-center pt-6");
    } else if (navItemPosition && navItemPosition === "sticky") {
      setNavItemsPosition("sticky top-5 mr-20");
    } else {
      setNavItemsPosition("justify-between");
    }
  }, [navItemPosition]);

  const menuBarStyle = {
    backgroundColor: tw`bg-${backgroundColor}-500` || "bg-gray-800",
    color: tw`text-${textColor}` || "text-white",
    size: tw`text-${textSize}` || "text-md",
    fontFamily: tw`font-${fontFamily}` || "font-sans",
    height: tw`h-${navHeight}` || "h-16",
    imageHeight: tw`h-${imageHeight}` || "h-20",
    imageWidth: tw`w-${imageWidth}` || "w-24",
    spaceNavItems: tw`space-x-${spaceNavItems}` || "space-x-4",
    itemsLinkHoverColor:
      tw`hover:text-${itemsLinkHoverColor}-${itemsLinkHoverColorStrength}` ||
      "hover:text-gray-300",
    navItemPosition: tw`${navItemsPosition}` || "justify-between",
    logoURLPosition: tw`${logoURLPosition}` || "justify-start",
  };

  const gridColWisePosition = logoImageURL
    ? "grid grid-rows-1 grid-flow-col"
    : "";

  return (
    <>
      <nav
        className={`${menuBarStyle.backgroundColor} ${menuBarStyle.height} ${menuBarStyle.size}`}
      >
        <div className={`${gridColWisePosition}`}>
          {logoImageURL && (
            <div className={`flex ${menuBarStyle.logoURLPosition} `}>
              <img
                src={logoImageURL}
                alt="Logo Not Found"
                className={`${menuBarStyle.imageHeight} ${menuBarStyle.imageWidth} rounded-2xl`}
              />
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

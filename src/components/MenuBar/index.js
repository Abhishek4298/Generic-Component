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

  useEffect(() => {
    if (logoPosition && logoPosition === "left") {
      setLogoURLPositon("justify-start mx-20 pt-5");
    } else if (logoPosition && logoPosition === "right") {
      setLogoURLPositon("justify-end pt-5");
    } else if (logoPosition && logoPosition === "center") {
      setLogoURLPositon("justify-center pt-5");
    } else if (logoPosition && logoPosition === "sticky") {
      setLogoURLPositon("sticky top-5 mx-20");
    } else {
      setLogoURLPositon("justify-start mx-20 pt-5");
    }
  }, [logoPosition]);

  useEffect(() => {
    if (navItemPosition && navItemPosition === "left") {
      setNavItemsPosition("justify-start");
    } else if (navItemPosition && navItemPosition === "right") {
      setNavItemsPosition("justify-end mr-10");
    } else if (navItemPosition && navItemPosition === "center") {
      setNavItemsPosition("justify-center");
    } else if (navItemPosition && navItemPosition === "sticky") {
      setNavItemsPosition("sticky top-5 mr-20");
    }else {
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

  return (
    <nav
      className={`${menuBarStyle.backgroundColor} ${menuBarStyle.height} ${menuBarStyle.size}`}
    >
      <div className={`${menuBarStyle.logoURLPosition} `}>
        {logoImageURL && (
          <img
            src={logoImageURL}
            alt="Logo Not Found"
            className={`${menuBarStyle.imageHeight} ${menuBarStyle.imageWidth} rounded-2xl`}
          />
        )}
      </div>
      <div className={`flex ${menuBarStyle.navItemPosition}`}>
        <ul className={`flex ${menuBarStyle.spaceNavItems}`}>
          {items.map((item, index) => (
            <li key={index}>
              <Link
                to={`${basePath}${item.link}`}
                className={`${menuBarStyle.color} ${menuBarStyle.itemsLinkHoverColor}`}
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

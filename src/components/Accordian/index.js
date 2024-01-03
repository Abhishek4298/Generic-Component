import React, { useState } from "react";
import AccordionItem from "./AccordianItems";

const Accordion = ({
  items,
  headerBgColor,
  itemsPosition,
  ttitleColor,
  contentBgColor,
  contentColor,
  contentSize,
  headerSize,
  accordionWidth,
}) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className={`w-[${accordionWidth}%] mx-auto mt-8`}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          item={item}
          index={index}
          isOpen={openIndex === index}
          onToggle={handleToggle}
          headerBgColor={headerBgColor}
          itemsPosition={itemsPosition}
          titleColor={ttitleColor}
          contentBgColor={contentBgColor}
          contentColor={contentColor}
          contentSize={contentSize}
          headerSize={headerSize}
        />
      ))}
    </div>
  );
};

export default Accordion;

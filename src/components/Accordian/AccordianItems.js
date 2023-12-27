import React from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";

const AccordionItem = ({
  item,
  index,
  isOpen,
  onToggle,
  headerBgColor,
  itemsPosition,
  titleColor,
  contentBgColor,
  contentColor,
  headerSize,
  contentSize,
}) => {
  const { title, content, imageUrl } = item;

  return (
    <div className="mb-2 border rounded overflow-hidden">
      <div
        className={`flex items-${itemsPosition} justify-between p-2 cursor-pointer ${headerBgColor}`}
        onClick={() => onToggle(index)}
      >
        <div className={`${titleColor} ${headerSize}`}>{title}</div>
        {isOpen ? (
          <ChevronUpIcon className="w-6 h-6 text-white" />
        ) : (
          <ChevronDownIcon className="w-6 h-6 text-white" />
        )}
      </div>
      {isOpen && (
        <div className={`accordion-content p-2 ${contentBgColor}`}>
          {imageUrl && (
            <img src={imageUrl} alt={title} className="mb-2 rounded" />
          )}
          <p className={`${contentColor} ${contentSize}`}>{content}</p>
        </div>
      )}
    </div>
  );
};

export default AccordionItem;

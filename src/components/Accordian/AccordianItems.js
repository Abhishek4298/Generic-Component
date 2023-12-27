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
        <div className={`${titleColor} ${headerSize} font-bold`}>{title}</div>
        {isOpen ? (
          <ChevronUpIcon className="w-6 h-6 text-white" />
        ) : (
          <ChevronDownIcon className="w-6 h-6 text-white" />
        )}
      </div>
      {isOpen && (
        <div className={`accordion-content p-2 ${contentBgColor}`}>
          {imageUrl ? (
            <img src={imageUrl} alt={title} className="mb-2 rounded" />
          ) : (<h1 className={`${headerSize} text-${itemsPosition} p-3 text-blue-700 font-bold`}>Loading...</h1>)
          }
          <p className={`${contentColor} ${contentSize} text-justify`}>{content}</p>
        </div>
      )}
    </div>
  );
};

export default AccordionItem;

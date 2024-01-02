import React from "react";

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

  const headerStyle = headerBgColor
    ? {
        background: `linear-gradient(to right, ${headerBgColor}, ${headerBgColor})`,
      }
    : { background: `linear-gradient(to right, red, red)` };

  return (
    <div className="mb-2 border rounded overflow-hidden">
      <div
        className={`flex items-${itemsPosition} justify-between p-2 cursor-pointer`}
        style={headerStyle}
        onClick={() => onToggle(index)}
      >
        <div className={`text-${titleColor} text-[${headerSize}px] font-bold`}>
          {title}
        </div>
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className={`w-6 h-6 text-${titleColor}`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className={`w-6 h-6 text-${titleColor}`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 15l7-7 7 7"
            />
          </svg>
        )}
      </div>
      {isOpen && (
        <div className={`accordion-content p-2 bg-${contentBgColor}`}>
          {imageUrl && (
            <img src={imageUrl} alt={title} className="mb-2 rounded" />
          )}
          <p
            className={`text-${contentColor}-700 text-[${contentSize}px] text-justify`}
          >
            {content}
          </p>
        </div>
      )}
    </div>
  );
};

export default AccordionItem;

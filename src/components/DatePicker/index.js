import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./styles.css";

const DatePickerComponent = ({
  dateLabel,
  rangeDateLabel,
  dateFormat,
  selectedDate,
  onChange,
  startDate,
  endDate,
  closeOnSelect,
  isClear,
  monthShown,
  dateBorder,
}) => {
  const [dateSelected, setSelectedDate] = useState(selectedDate);
  const [dateRange, setDateRange] = useState([startDate, endDate]);
  const [displayedDate, setDisplayedDate] = useState(null);
  const [buttonText, setButtonText] = useState("Show Selected Date");

  const handleRangeDateChange = (dates) => {
    setDateRange(dates);
    onChange(dates);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    onChange(date);
  };

  const handleToggleVisibility = () => {
    if (!displayedDate) {
      let displayedDateText = "";
      if (dateRange[0] && dateRange[1] && dateSelected) {
        displayedDateText = `${dateLabel} ${dateSelected.toLocaleDateString(
          "en-GB"
        )}
        ${rangeDateLabel} ${dateRange[0].toLocaleDateString(
          "en-GB"
        )} to ${dateRange[1].toLocaleDateString("en-GB")}`;
      } else if (dateRange[0] && dateRange[1]) {
        displayedDateText = `${rangeDateLabel} ${dateRange[0].toLocaleDateString(
          "en-GB"
        )} to ${dateRange[1].toLocaleDateString()}`;
      } else if (dateSelected) {
        displayedDateText = `${dateLabel} ${dateSelected.toLocaleDateString(
          "en-GB"
        )}`;
      } else {
        displayedDateText = "No date selected";
      }

      setDisplayedDate(displayedDateText);
      setButtonText("Hide Selected Date");
    } else {
      setDisplayedDate(null);
      setButtonText("Show Selected Date");
    }
  };

  return (
    <>
      <div className="relative flex justify-center items-center">
        <h1 className="m-6">{dateLabel}</h1>
        <DatePicker
          selected={dateSelected}
          onChange={handleDateChange}
          dateFormat={dateFormat}
          showYearDropdown
          scrollableMonthYearDropdown
          shouldCloseOnSelect={closeOnSelect}
          isClearable={isClear}
          monthsShown={monthShown}
          className={`w-full p-2 ${dateBorder} rounded-md cursor-pointer`}
        />
      </div>
      <div className="relative flex justify-center items-center">
        <h1 className="m-5">{rangeDateLabel[0]}</h1>
        <DatePicker
          selected={dateRange[0]}
          onChange={(date) => handleRangeDateChange([date, dateRange[1]])}
          startDate={dateRange[0]}
          endDate={dateRange[1]}
          selectsStart
          dateFormat={dateFormat}
          minDate={new Date()}
          showYearDropdown
          scrollableMonthYearDropdown
          shouldCloseOnSelect={closeOnSelect}
          isClearable={isClear}
          monthsShown={monthShown}
          className={`w-full p-2 ${dateBorder} rounded-md cursor-pointer`}
        />
        <h1 className="m-5">{rangeDateLabel[1]}</h1>
        <DatePicker
          selected={dateRange[1]}
          onChange={(date) => handleRangeDateChange([dateRange[0], date])}
          startDate={dateRange[0]}
          endDate={dateRange[1]}
          selectsEnd
          dateFormat={dateFormat}
          minDate={dateRange[1]}
          showYearDropdown
          scrollableMonthYearDropdown
          shouldCloseOnSelect={closeOnSelect}
          isClearable={isClear}
          monthsShown={monthShown}
          className={`w-full p-2 ${dateBorder} rounded-md cursor-pointer`}
        />
      </div>
      <div className="flex justify-center">
        <button
          onClick={handleToggleVisibility}
          className="bg-blue-500 text-white p-2 mt-4 rounded-md cursor-pointer"
        >
          {buttonText}
        </button>
      </div>
      <div className="mt-4 text-2xl">
        {displayedDate !== "No date selected" && (
          <p className="text-center">{displayedDate}</p>
        )}
        {displayedDate === "No date selected" && (
          <p className="text-center text-red-700 text-3xl font-bold">
            {displayedDate}
          </p>
        )}
      </div>
    </>
  );
};

export default DatePickerComponent;

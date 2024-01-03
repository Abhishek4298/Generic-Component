import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./styles.css";

const DatePickerComponent = ({
  dateFormat,
  selectedDate,
  onChange,
  startDate,
  endDate,
  closeOnSelect,
  isClear,
  monthShown,
  dateBorder
}) => {
  const [dateSelected, setSelectedDate] = useState(selectedDate);
  const [dateRange, setDateRange] = useState([startDate, endDate]);

  const handleRangeDateChange = (dates) => {
    setDateRange(dates);
    onChange(dates);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    onChange(date);
  };

  return (
    <>
      <div className="relative flex justify-center items-center">
        <h1 className="m-6">Select Date</h1>
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
        <h1 className="m-5">Start Date</h1>
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
         <h1 className="m-5">End Date</h1>
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
    </>
  );
};

export default DatePickerComponent;

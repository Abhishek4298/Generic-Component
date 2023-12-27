import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePickerComponent = ({
  selectedDate,
  onChange,
  startDate,
  endDate,
  closeOnSelect,
  isClear,
  monthShown
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
        <h1 className="m-3">Date Picker</h1>
        <DatePicker
          selected={dateSelected}
          onChange={handleDateChange}
          dateFormat="dd/MM/yyyy"
          shouldCloseOnSelect={closeOnSelect}
          isClearable={isClear}
          monthsShown={monthShown}
          className="w-full p-2 border border-gray-300 rounded-md cursor-pointer"
        />
      </div>
      <div className="flex space-x-2">
        <h1>Range Date Picker</h1>
        <DatePicker
          selected={dateRange[0]}
          onChange={(date) => handleRangeDateChange([date, dateRange[1]])}
          startDate={dateRange[0]}
          endDate={dateRange[1]}
          selectsStart
          dateFormat="dd/MM/yyyy"
          showYearDropdown
          shouldCloseOnSelect={closeOnSelect}
          isClearable={isClear}
          monthsShown={monthShown}
          className="w-full p-2 border border-gray-300 rounded-md cursor-pointer"
        />
        <DatePicker
          selected={dateRange[1]}
          onChange={(date) => handleRangeDateChange([dateRange[0], date])}
          startDate={dateRange[0]}
          endDate={dateRange[1]}
          selectsEnd
          dateFormat="dd/MM/yyyy"
          showYearDropdown
          shouldCloseOnSelect={closeOnSelect}
          isClearable={isClear}
          monthsShown={monthShown}
          className="w-full p-2 border border-gray-300 rounded-md cursor-pointer"
        />
      </div>
    </>
  );
};

export default DatePickerComponent;

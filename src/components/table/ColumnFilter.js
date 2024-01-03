import React from "react";

const ColumnFilter = ({ column }) => {
  const { filterValue, setFilter } = column;
  return (
    <div>
      <input
        className="border border-gray-300 rounded px-2 py-1 text-lg text-black"
        value={filterValue || ""}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Search..."
      />
    </div>
  );
};

export default ColumnFilter;

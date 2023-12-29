import React from 'react';

const SearchInput = ({ placeholder, onChange, searchData, onSearchIconClick, searchedResult }) => {
  

  return (
    <div className="flex flex-col relative">
      <div className="relative">
        <input
          type="text"
          placeholder={placeholder}
          className="py-2 px-4 border border-blue-800 sm:border-1 md:border-2 lg:border-6 rounded-md focus:outline-none focus:border-blue-500 w-48 sm:w-64 md:w-96 relative"
          onChange={onChange}
        />
        <span 
          className="absolute inset-y-0 right-0 flex items-center pr-3 after:absolute"
          onClick={onSearchIconClick}      
        >
          <svg
            className="h-5 w-5 text-gray-500"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M21 21l-6-6"></path>
            <circle cx="10" cy="10" r="8"></circle>
          </svg>
        </span>
      </div>

      {/* <div className="mt-3">
        {searchData.map((city) => (
          <div key={city}>{city}</div>
        ))}
      </div> */}
      <div className="mt-3">
      {searchedResult?
      <p>{searchedResult}</p>:null
      }
      
      </div>
    </div>
  );
};

export default SearchInput;

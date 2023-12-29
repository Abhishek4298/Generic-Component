import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Modal from "./components/Modal";
import Button from "./components/Button";
import Card from "./components/Card";
import { sampleImage1, trueIcon } from "./constant";
import SearchInput from "./components/SearchInput";

const CustomRoute = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchedResult, setSearchedResult] = useState('');
  const handleClick = () => {
    alert("Button clicked!");
  };

  const handleClickTwo = (data) => {
    alert(`Button clicked with data: ${data}`);
  };

  const searchData = ["Ranchi", "Jamshedpur", "Varanasi", "Ahmedabad"];

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchIconClick = () => {
    console.log('Search query:', searchQuery);

    if (!searchQuery.trim()) {
      alert('Please enter a valid search query!');
      return;
    }

    const filteredData = searchData.filter(city =>
      city.toLowerCase().includes(searchQuery.toLowerCase())
      );

    if (filteredData.length === 0) {
        alert('Data not found in the list!');
        setSearchedResult('');
        return;
      }

      setSearchedResult(filteredData);
    
  };

  return (
    <>
      <Routes>
        <Route
          path="/button"
          element={
            <div className="flex justify-center items-center h-screen">
              <div className="grid grid-cols-3">
                <Button
                  color="red"
                  borderColor="purple"
                  rounded="md"
                  size="lg"
                  onClick={handleClick}
                >
                  Basic Button
                </Button>
                <Button
                  color="blue"
                  borderColor="blue"
                  rounded="md"
                  icon={trueIcon}
                  iconPosition="left"
                  onClick={() => handleClickTwo("Custom Value")}
                >
                  Button with Icon
                </Button>
                <Button
                  color="yellow"
                  borderColor="blue"
                  rounded="md"
                  icon={trueIcon}
                  iconPosition="right"
                  onClick={() => handleClickTwo("Custom Value")}
                >
                  Button with Icon
                </Button>
              </div>
            </div>
          }
        />
        <Route
          path="/modal"
          element={
            <div className="flex justify-center">
              <Modal
                color="blue"
                header="Generic Component"
                content="New Content"
                position="center"
              />
            </div>
          }
        />
        <Route
          path="/card"
          element={
            <div className="flex">
              <Card
                title="Example Card"
                content="This is a generic card component."
                imageUrl={sampleImage1}
                onClick={() => alert("Button clicked!")}
              />
              <Card
                title="Example Card"
                content="This is a generic card component."
                onClick={() => alert("Button clicked!")}
              />
            </div>
          }
        />
         <Route
          path="/searchinput"
          element={
            <div className="flex justify-center items-center h-screen">
               <SearchInput 
                  placeholder="Search..."
                  onChange={handleSearchChange}
                  searchData={searchData}
                  onSearchIconClick={handleSearchIconClick}
                  searchedResult={searchedResult}
               />
            </div>
          }
        />
      </Routes>
    </>
  );
};

export default CustomRoute;

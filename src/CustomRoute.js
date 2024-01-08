import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Modal from "./components/Modal";
import Button from "./components/Button";
import Card from "./components/Card";
import { trueIcon } from "./constant";
import CardBody from "./components/Card/CardBody";
import CardHeader from "./components/Card/CardHeader";
import CardFooter from "./components/Card/CardFooter";
import Table from "./components/table";
import Data from "./components/table/data.json";
import COLUMNS from "./components/table/COLUMNS";
import { useMemo } from "react";
import ColumnFilter from "./components/table/ColumnFilter";
import DatePickerComponent from "./components/DatePicker";
import MenuBar from "./components/MenuBar";
import Carousel from "./components/Carousel";
import Presentation from "./components/MenuBar/Presentation";
import { carouselImages } from "./constant";

const CustomRoute = () => {
  //Modal code start
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(0);
  const openModal = (modalType) => {
    setIsModalOpen(true);
    setModalType(modalType);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Modal code end
  // const [selectedDate, setSelectedDate] = useState(null);
  const [dateRange, setDateRange] = useState([null, null]);
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => Data, []);

  const defaultColumn = useMemo(() => {
    return {
      Filter: ColumnFilter,
    };
  }, []);

  const handleClick = () => {
    alert("Button clicked!");
  };

  const handleClickTwo = (data) => {
    alert(`Button clicked with data: ${data}`);
  };

  // const handleDateChange = (date) => {
  //   console.log("Selected Date:", date);
  //   setSelectedDate(date);
  // };

  const handleDateRangeChange = (dates) => {
    console.log("Selected Date Range:", dates);
    setDateRange(dates);
  };

  const menuItems = [
    {
      label: "Home",
      link: "/",
      linkedComponent: (
        <div className="flex justify-center text-8xl text-red-600 mt-12 italic">
          <h1>This is Home component</h1>
        </div>
      ),
    },
    {
      label: "About",
      link: "/about",
      linkedComponent: (
        <div className="flex justify-center text-8xl text-red-600 mt-12 font-thin">
          <h1>This is About component</h1>
        </div>
      ),
    },
    {
      label: "Music",
      link: "/music",
      linkedComponent: (
        <div className="flex justify-center text-8xl text-red-600 mt-12 font-semibold">
          <h1>This is Music component</h1>
        </div>
      ),
    },
    {
      label: "Contact",
      link: "/contact",
      linkedComponent: (
        <div className="flex justify-center text-8xl text-red-600 mt-12 font-bold">
          <h1>This is Contact component</h1>
        </div>
      ),
    },
  ];

  return (
    <>
      <Routes>
        <Route
          path="/button"
          element={
            <>
              <div className="flex justify-center items-center h-screen">
                <div className="grid grid-cols-3 gap-8 p-8 bg-gray-100 rounded-lg shadow-md">
                  <div className="space-y-4">
                    <h1 class="text-2xl font-bold mb-4">Generic Button</h1>
                    <Button>Default Button</Button>
                    <Button
                      borderColor="blue"
                      textColor="blue"
                      hoverColor="red"
                      hoverColorStrength="800"
                      className="mx-4"
                    >
                      Outline
                    </Button>
                    <Button
                      color="purple"
                      colorStrength="100"
                      borderColor="blue"
                      hoverColor="red"
                      hoverColorStrength="100"
                      rounded="md"
                      textColor="red"
                      size="lg"
                      onClick={handleClick}
                      className="italic mx-4"
                    >
                      Primary Button
                    </Button>
                    <Button
                      color="purple"
                      colorStrength="100"
                      borderColor="blue"
                      hoverColor="red"
                      hoverColorStrength="100"
                      rounded="full"
                      textColor="red"
                      size="lg"
                      onClick={handleClick}
                      className="mx-4"
                    >
                      Border Radius
                    </Button>
                    <Button
                      color="pink"
                      colorStrength="100"
                      hoverColor="red"
                      hoverColorStrength="300"
                      borderColor="yellow"
                      rounded="md"
                      icon={trueIcon}
                      iconPosition="left"
                      onClick={() => handleClickTwo("Custom Value")}
                    >
                      Icon Button
                    </Button>
                    <Button
                      color="yellow"
                      colorStrength="100"
                      borderColor="green"
                      rounded="md"
                      icon={trueIcon}
                      iconPosition="right"
                      onClick={() => handleClickTwo("Custom Value")}
                      className="mx-2"
                    >
                      Icon Button
                    </Button>
                  </div>
                  <div className="flex flex-col space-y-4 mt-4">
                    <Button size="small">Small</Button>
                    <Button size="medium">Medium</Button>
                    <Button size="large">Large</Button>
                  </div>
                </div>
              </div>
            </>
          }
        />

        {/*  Modal code start */}
        <Route
          path="/modal"
          element={
            <div className="flex justify-center items-center h-screen">
              <button
                onClick={() => openModal(1)}
                className="bg-blue-500 text-white px-4 py-2 m-2"
              >
                Center Modal
              </button>
              <button
                onClick={() => openModal(2)}
                className="bg-blue-500 text-white px-4 py-2 m-2"
              >
                Top Modal
              </button>
              <button
                onClick={() => openModal(3)}
                className="bg-blue-500 text-white px-4 py-2 m-2"
              >
                Bottom Modal
              </button>
              {modalType === 1 && (
                <Modal
                  isOpen={isModalOpen}
                  onClose={closeModal}
                  showCloseIcon={true}
                  modalWidth={400}
                  position="center"
                >
                  <div>
                    <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                      <h3 class="text-xl font-semibold text-gray-900 dark:text-black">
                        Terms of Service
                      </h3>
                    </div>
                    <div class="p-4 md:p-5 space-y-4">
                      <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        With less than a month to go before the European Union
                        enacts new consumer privacy laws for its citizens,
                        companies around the world are updating their terms of
                        service agreements to comply.
                      </p>
                      <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        The European Union’s General Data Protection Regulation
                        (G.D.P.R.) goes into effect on May 25 and is meant to
                        ensure a common set of data rights in the European
                        Union. It requires organizations to notify users as soon
                        as possible of high-risk data breaches that could
                        personally affect them.
                      </p>
                    </div>
                    <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                      <button
                        data-modal-hide="default-modal"
                        type="button"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        I accept
                      </button>
                      <button
                        data-modal-hide="default-modal"
                        type="button"
                        class="ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                      >
                        Decline
                      </button>
                    </div>
                  </div>
                </Modal>
              )}
              {modalType === 2 && (
                <Modal
                  isOpen={isModalOpen}
                  onClose={closeModal}
                  showCloseIcon={true}
                  header="Modal Header"
                  content="Modal Body"
                  modalWidth={400}
                  position="top"
                >
                  <div>
                    <p class="text-gray-700 my-2">
                      With less than a month to go before the European Union
                      enacts new consumer privacy laws for its citizens,
                      companies around the world are updating their terms of
                      service agreements to comply.
                    </p>
                    <p class="text-gray-700 my-2">
                      The European Union’s General Data Protection Regulation
                      (G.D.P.R.) goes into effect on May 25 and is meant to
                      ensure a common set of data rights in the European Union.
                      It requires organizations to notify users as soon as
                      possible of high-risk data breaches that could personally
                      affect them
                    </p>
                  </div>
                </Modal>
              )}
              {modalType === 3 && (
                <Modal
                  isOpen={isModalOpen}
                  onClose={closeModal}
                  showCloseIcon={true}
                  header="Modal Header"
                  content="Modal Body"
                  modalWidth={400}
                  position="bottom"
                >
                  <div>
                    <p class="text-gray-700 my-2">
                      With less than a month to go before the European Union
                      enacts new consumer privacy laws for its citizens,
                      companies around the world are updating their terms of
                      service agreements to comply.
                    </p>
                    <p class="text-gray-700 my-2">
                      The European Union’s General Data Protection Regulation
                      (G.D.P.R.) goes into effect on May 25 and is meant to
                      ensure a common set of data rights in the European Union.
                      It requires organizations to notify users as soon as
                      possible of high-risk data breaches that could personally
                      affect them
                    </p>
                  </div>
                </Modal>
              )}
            </div>
          }
        />
        {/*  Modal code end */}
        <Route
          path="/card"
          element={
            <div className="flex">
              <Card>
                <CardHeader>
                  <h2 className="text-xl font-bold text-gray-800">
                    Card Title
                  </h2>
                </CardHeader>
                <CardBody>
                  <img
                    src="https://placekitten.com/300/200"
                    alt="Card Preview"
                    className="mb-4 rounded-lg"
                  />
                  <p className="text-gray-700 text-base">
                    This is the content of the card body. It can contain text,
                    images, or any other elements you want to display.
                  </p>
                </CardBody>
                <CardFooter>
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-500">
                      Posted on January 1, 2024
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      Read More
                    </button>
                  </div>
                </CardFooter>
              </Card>

              <Card
                title="Example Card"
                content="This is a generic card component."
                onClick={() => alert("Button clicked!")}
              />
            </div>
          }
        />
        <Route
          path="/table"
          element={
            <Table
              columns={columns}
              data={data}
              showPagination={true}
              showRowSelection={true}
              showFilters={true}
              showSorting={true}
              defaultPageSize={10}
              headerBgColor=""
              defaultColumn={defaultColumn}
              showColumnFilter={true}
              filteredColumns={["first_name", "gender"]}
            />
          }
        />
        <Route
          path="/datepicker"
          element={
            <>
              <DatePickerComponent
                dateLabel="Birth Date"
                rangeDateLabel={["Start Date", "End Date"]}
                dateFormat="dd-MM-yyyy"
                startDate={dateRange?.length && dateRange[0]}
                endDate={dateRange?.length && dateRange[1]}
                onChange={handleDateRangeChange}
                closeOnSelect={true}
                isClear={true}
                monthShown={1}
                dateBorder="border border-blue-300"
              />
            </>
          }
        />
        <Route
          path="/menu/*"
          element={
            <div>
              <MenuBar
                items={menuItems}
                backgroundColor="blue"
                textColor="white"
                textSize="2xl"
                navHeight="24"
                logoImageURL="https://www.shutterstock.com/image-vector/creative-abstract-3d-sphere-logo-260nw-1971786323.jpg"
                basePath="/menu"
                imageHeight="16"
                imageWidth="20"
                spaceNavItems="5"
                itemsLinkHoverColor="gray"
                itemsLinkHoverColorStrength="800"
                navItemPosition="right"
                logoPosition="left"
              />
            </div>
          }
        />
        <Route path="/presentation" element={<Presentation />} />
        <Route
          path="/carousel"
          element={
            <div className="h-full">
              <Carousel images={carouselImages} height={400} width="100%" />
              <hr className="h-px my-3 bg-gray-100 border-0 dark:bg-gray-300" />
              <h2>Carousel With TimeInterval props passed</h2>
              <Carousel
                images={carouselImages}
                height={400}
                width="100%"
                timeInterval={2}
              />
              <hr className="h-px my-3 bg-gray-100 border-0 dark:bg-gray-300" />
              <h2>Carousel Without navigationDots props</h2>
              <Carousel
                images={carouselImages}
                height={400}
                width="100%"
                navigationDots={false}
              />
            </div>
          }
        />
      </Routes>
    </>
  );
};

export default CustomRoute;

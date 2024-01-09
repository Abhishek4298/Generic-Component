import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Modal from "./components/Modal";
import Button from "./components/Button";
import Card from "./components/Card";
import ToastMessages from "./components/ToastMessages";
import { menuItems, trueIcon } from "./constant";
import CardBody from "./components/Card/CardBody";
import CardHeader from "./components/Card/CardHeader";
import CardFooter from "./components/Card/CardFooter";
import Table from "./components/Table";
import Data from "./components/Table/data.json";
import COLUMNS from "./components/Table/COLUMNS";
import { useMemo } from "react";
import ColumnFilter from "./components/Table/ColumnFilter";
import DatePickerComponent from "./components/DatePicker";
import MenuBar from "./components/MenuBar";
import Carousel from "./components/Carousel";
import Presentation from "./components/MenuBar/Presentation";
import { carouselImages } from "./constant";
import RatingReview from "./components/RatingReview";

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

  const handleDateRangeChange = (dates) => {
    setDateRange(dates);
  };

  return (
    <>
      <Routes>
        <Route
          path="/button"
          element={
            <>
              <div className="flex justify-center items-center h-screen">
                <div className="flex flex-wrap gap-8 p-8 bg-gray-100 rounded-lg shadow-md">
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
                      size="40"
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
        {/*  Card code start */}
        <Route
          path="/card"
          element={
            <div className="flex mt-20">
              <Card width={400}>
                <CardHeader>
                  <h2 className="text-xl font-bold text-gray-800">
                    Card Cat Title
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
              <Card width={400} hoverEffect={true} className="mx-14">
                <CardHeader>
                  <h2 className="text-xl font-bold text-gray-800">
                    Card Cat Title
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
              headerBgColor="gray"
              headerBgColorStrength="600"
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
                color="blue"
                textColor="white"
                textSize="22"
                navHeight="100"
                //logoImageURL="Logo"
                logoImageURL="https://www.shutterstock.com/image-vector/creative-abstract-3d-sphere-logo-260nw-1971786323.jpg"
                logoTextSize="80"
                logoTextColor="yellow"
                logoTextColorStrength="300"
                logoClassName="font-semibold"
                basePath="/menu"
                imageHeight="80"
                imageWidth="80"
                spaceNavItems="5"
                itemsLinkHoverColor="gray"
                itemsLinkHoverColorStrength="800"
                navItemPosition="right"
                logoPosition="left"
                className="font-serif"
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
        <Route
          path="/toast"
          element={
            <div className="flex justify-center">
              <ToastMessages
                type="success"
                buttonColor="green"
                buttonColorStrength="500"
                buttonTextColor="gray"
                buttonTextColorStrength="50"
                onhoverBgColor="green"
                onhoverBgColorStrength="700"
                buttonTextSize="20"
                buttonLabel="Submit Button"
                autoClose={8000}
                position="top-right"
                hideProgressBar={false}
                closeOnClick={false}
                pauseOnHover={true}
                draggable={false}
                theme="dark"
                message="Success Toast!"
                errorMessage="Error!"
              />

              <ToastMessages
                type="info"
                buttonColor="blue"
                buttonColorStrength="500"
                buttonTextColor="gray"
                buttonTextColorStrength="100"
                onhoverBgColor="blue"
                onhoverBgColorStrength="800"
                buttonTextSize="22"
                buttonLabel="Show Information"
                autoClose={1500}
                position="top-right"
                hideProgressBar={false}
                closeOnClick={false}
                pauseOnHover={false}
                draggable={false}
                theme="light"
                message="Info Toast!"
                errorMessage="Error!"
              />
              <ToastMessages
                type="warning"
                buttonColor="yellow"
                buttonColorStrength="500"
                buttonTextColor="gray"
                buttonTextColorStrength="100"
                onhoverBgColor="yellow"
                onhoverBgColorStrength="700"
                buttonTextSize="20"
                buttonLabel="Warning Message"
                autoClose={1500}
                position="top-right"
                hideProgressBar={false}
                closeOnClick={false}
                pauseOnHover={false}
                draggable={false}
                theme="light"
                message="Warning Toast!"
                errorMessage="Error!"
              />
               <ToastMessages
                type="error"
                buttonColor="red"
                buttonColorStrength="500"
                buttonTextColor="gray"
                buttonTextColorStrength="100"
                onhoverBgColor="red"
                onhoverBgColorStrength="600"
                buttonTextSize="20"
                buttonLabel="Error Message"
                autoClose={1500}
                position="bottom-right"
                hideProgressBar={false}
                closeOnClick={false}
                pauseOnHover={false}
                draggable={false}
                theme="light"
                message="Error Toast!"
                errorMessage="Error!"
              />
            </div>
          }
        />
        <Route
          path="/rating-review"
          element={
            <RatingReview
              allowReview={true}
              ratingSize="40"
              ratingColor="yellow"
              ratingColorStrength ="500"
              reviewSize="20"
              reviewColor="blue"
              reviewColorStrength="500"
              reviewBorder="stone"
              reviewBorderStrength = "800"
              className=""
              reviewMaxCharacter="100"
              reviewPlaceholder = "Write your description"
            />
          }
        />
      </Routes>
    </>
  );
};

export default CustomRoute;

import React, { useMemo, useState } from "react";
import CardFooter from "../Card/CardFooter";
import MenuBar from "../MenuBar";
import Card from "../Card";
import CardHeader from "../Card/CardHeader";
import CardBody from "../Card/CardBody";
import { carouselImages, trueIcon } from "../../constant";
import Button from "../Button";
import Modal from "../Modal";
import COLUMNS from "../table/COLUMNS";
import Data from "../table/data.json";
import Table from "../table";
import ColumnFilter from "../table/ColumnFilter";
import DatePickerComponent from "../DatePicker";
import Carousel from "../Carousel";

const Presentation = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(0);
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => Data, []);
  const defaultColumn = useMemo(() => {
    return {
      Filter: ColumnFilter,
    };
  }, []);
  const [dateRange, setDateRange] = useState([null, null]);
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
  const handleClick = () => {
    alert("Button clicked!");
  };

  const openModal = (modalType) => {
    setIsModalOpen(true);
    setModalType(modalType);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleDateRangeChange = (dates) => {
    setDateRange(dates);
  };
  return (
    <div className="bg-gray-100 min-h-screen p-8 mt-20">
      <Card className="mt-2">
        <CardHeader>
          <h2 className="text-3xl underline font-bold text-gray-800">
            Introduction to Generic Components with React
          </h2>
        </CardHeader>
        <CardBody>
          <p className="text-gray-700 text-base">
            A generic component in React is a reusable and versatile building
            block that is designed to be flexible and adaptable across various
            scenarios within an application. Unlike specific or narrowly focused
            components that serve a single purpose, generic components are
            crafted to handle a wide range of functionalities and can be easily
            customized to meet diverse requirements.
          </p>
          <div className=" mx-auto my-8 p-6 bg-white rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-4">Key Features</h2>

            <ul className="list-disc pl-6">
              <li className="mb-4">
                <strong className="text-indigo-600">Reusability:</strong>{" "}
                Generic components can be used in multiple parts of your
                application, promoting code reusability. This reduces the amount
                of redundant code and makes it easier to maintain and update
                your application.
              </li>

              <li className="mb-4">
                <strong className="text-indigo-600">Scalability:</strong> As
                your application grows, generic components provide a scalable
                solution by offering consistent and standardized elements that
                can be employed across different sections.
              </li>

              <li className="mb-4">
                <strong className="text-indigo-600">
                  Consistency in Design:
                </strong>{" "}
                Generic components help in maintaining a consistent design and
                user experience throughout the application.
              </li>

              <li className="mb-4">
                <strong className="text-indigo-600">Time Efficiency:</strong>{" "}
                Building generic components initially might take more time than
                creating specific components for each use case.
              </li>

              <li className="mb-4">
                <strong className="text-indigo-600">Customization:</strong>{" "}
                Generic components can be easily customized to suit different
                requirements.
              </li>

              <li className="mb-4">
                <strong className="text-indigo-600">
                  Collaboration and Consensus:
                </strong>{" "}
                When multiple developers are working on a project, using generic
                components can help in reaching a consensus on common UI
                patterns and functionalities.
              </li>
            </ul>
          </div>
        </CardBody>
      </Card>
      <Card className="mt-2">
        <CardHeader>
          <h2 className="text-xl font-bold text-gray-800">Botton component</h2>
        </CardHeader>
        <CardBody>
          <p className="text-gray-700 text-base">
            Passing props can change the layout of Button component as expected.
          </p>
          <div className="my-4">
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
              onClick={() => handleClick()}
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
              onClick={() => handleClick()}
              className="mx-2"
            >
              Icon Button
            </Button>
            <Button
              color="green"
              colorStrength="300"
              borderColor="red"
              hoverColor="red"
              hoverColorStrength="100"
              rounded="md"
              textColor="white"
              size="lg"
              onClick={handleClick}
              className="font-extrabold mx-4"
            >
              Primary Button
            </Button>
          </div>
        </CardBody>
      </Card>
      <Card className="mt-2">
        <CardHeader>
          <h2 className="text-xl font-bold text-gray-800">Modal component</h2>
        </CardHeader>
        <CardBody>
          <p className="text-gray-700 text-base">Popup will appear.</p>
          <div className="my-4">
            <div className="flex justify-center items-center">
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
          </div>
        </CardBody>
      </Card>
      <Card className="mt-2">
        <CardHeader>
          <h2 className="text-xl font-bold text-gray-800">Card component</h2>
        </CardHeader>
        <CardBody>
          <p className="text-gray-700 text-base">
            Organizes information into a contained and visually distinct unit.
          </p>
          <div className="my-4 flex">
            <Card width={350}>
              <CardHeader>
                <h2 className="text-xl font-bold text-gray-800">Card Title</h2>
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
            <Card className="mx-20" width={350} hoverEffect={true}>
              <CardHeader>
                <h2 className="text-xl font-bold text-gray-800">Card Title</h2>
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
        </CardBody>
      </Card>
      <Card className="mt-2">
        <CardHeader>
          <h2 className="text-xl font-bold text-gray-800">Table component</h2>
        </CardHeader>
        <CardBody>
          <p className="text-gray-700 text-base">
            To give header and data it will provide features like pagination,
            selecting a row etc.
          </p>
          <div>
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
          </div>
        </CardBody>
        <CardFooter>
          <div>
            <h4 className="font-bold text-xl underline mb-3">
              Code require to make the Generic Table Component.
            </h4>
            <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
              <code>
                {`
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
                />`}
              </code>
            </pre>
          </div>
        </CardFooter>
      </Card>
      <Card className="mt-2">
        <CardHeader>
          <h2 className="text-xl font-bold text-gray-800">
            Date picker component
          </h2>
        </CardHeader>
        <CardBody>
          <p className="text-gray-700 text-base">
            Enables users to select dates from a calendar. Either users can only
            select date like Birth Date or they can use date range like start &
            end date.
          </p>
          <div className="my-4 h-96">
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
          </div>
        </CardBody>
      </Card>
      <Card className="mt-2">
        <CardHeader>
          <h2 className="text-xl font-bold text-gray-800">Menubar</h2>
        </CardHeader>
        <CardBody>
          <p className="text-gray-700 text-base">
            To Switch between different pages.
          </p>
          <p className="text-gray-700 text-base">
            <MenuBar
              items={menuItems}
              backgroundColor="blue"
              textColor="white"
              textSize="2xl"
              fontFamily="serif"
              // navHeight="30"
              logoImageURL="https://www.shutterstock.com/image-vector/creative-abstract-3d-sphere-logo-260nw-1971786323.jpg"
              basePath="/menu"
              imageHeight="36"
              spaceNavItems="5"
              itemsLinkHoverColor="gray"
              itemsLinkHoverColorStrength="800"
              navItemPosition="right"
              logoPosition="left"
            />
          </p>
        </CardBody>
      </Card>
      <hr />
      <Card className="mt-2">
        <CardHeader>
          <h2 className="text-xl font-bold text-gray-800">Search Input</h2>
        </CardHeader>
        <CardBody>
          <p className="text-gray-700 text-base">
            Searching for data from data layer.
          </p>
          <div className="my-4">Inprogress...</div>
        </CardBody>
      </Card>
      <Card className="mt-2">
        <CardHeader>
          <h2 className="text-xl font-bold text-gray-800">
            Form Input Controllers{" "}
          </h2>
        </CardHeader>
        <CardBody>
          <p className="text-gray-700 text-base">
            For the Form Input : Input text, Input Number, Checkbox, dropdown,
            radio.
          </p>
          <div className="my-4">Inprogress...</div>
        </CardBody>
      </Card>
      <Card className="mt-2">
        <CardHeader>
          <h2 className="text-xl font-bold text-gray-800">
            Side Navigation Panel{" "}
          </h2>
        </CardHeader>
        <CardBody>
          <p className="text-gray-700 text-base">
            To Navigate between different pages.
          </p>
          <div className="my-4">Inprogress...</div>
        </CardBody>
      </Card>
      <Card className="mt-2">
        <CardHeader>
          <h2 className="text-xl font-bold text-gray-800">Breadcrums</h2>
        </CardHeader>
        <CardBody>
          <p className="text-gray-700 text-base">
            To show user for the current location of the page and go to previous
            pages.
          </p>
          <div className="my-4">Inprogress...</div>
        </CardBody>
      </Card>
      <Card className="mt-2">
        <CardHeader>
          <h2 className="text-xl font-bold text-gray-800">Toast Messages</h2>
        </CardHeader>
        <CardBody>
          <p className="text-gray-700 text-base">
            To alert the User with a specific alert message.
          </p>
          <div className="my-4">Inprogress...</div>
        </CardBody>
      </Card>
      <Card className="mt-2">
        <CardHeader>
          <h2 className="text-xl font-bold text-gray-800">Toggle Switch</h2>
        </CardHeader>
        <CardBody>
          <p className="text-gray-700 text-base">
            Offers a binary choice, typically used for turning settings on or
            off.
          </p>
          <div className="my-4">Inprogress...</div>
        </CardBody>
      </Card>
      <Card className="mt-2">
        <CardHeader>
          <h2 className="text-xl font-bold text-gray-800">Progress Bar</h2>
        </CardHeader>
        <CardBody>
          <p className="text-gray-700 text-base">
            Visualizes the completion status of a task or process.
          </p>
          <div className="my-4">Inprogress...</div>
        </CardBody>
      </Card>
      <Card className="mt-2">
        <CardHeader>
          <h2 className="text-xl font-bold text-gray-800">Slider</h2>
        </CardHeader>
        <CardBody>
          <p className="text-gray-700 text-base">
            Allows users to select a value from a range by moving a slider
            handle.
          </p>
          <div className="my-4">Inprogress...</div>
        </CardBody>
      </Card>
      <Card className="mt-2">
        <CardHeader>
          <h2 className="text-xl font-bold text-gray-800">Accordian</h2>
        </CardHeader>
        <CardBody>
          <p className="text-gray-700 text-base">
            Condenses and expands content sections to save space on the
            interface.
          </p>
          <div className="my-4">Inprogress...</div>
        </CardBody>
      </Card>
      <Card className="mt-2">
        <CardHeader>
          <h2 className="text-xl font-bold text-gray-800">File Upload/Input</h2>
        </CardHeader>
        <CardBody>
          <p className="text-gray-700 text-base">
            Allows users to upload files or select files from their device.
          </p>
          <div className="my-4">Inprogress...</div>
        </CardBody>
      </Card>
      <Card className="mt-2">
        <CardHeader>
          <h2 className="text-xl font-bold text-gray-800">Loader/Spinner</h2>
        </CardHeader>
        <CardBody>
          <p className="text-gray-700 text-base">
            Indicates that a process is ongoing or content is loading.
          </p>
          <div className="my-4">Inprogress...</div>
        </CardBody>
      </Card>
      <Card className="mt-2">
        <CardHeader>
          <h2 className="text-xl font-bold text-gray-800">Tooltip</h2>
        </CardHeader>
        <CardBody>
          <p className="text-gray-700 text-base">
            Provides additional information when hovering over an element.
          </p>
          <div className="my-4">Inprogress...</div>
        </CardBody>
      </Card>
      <Card className="mt-2">
        <CardHeader>
          <h2 className="text-xl font-bold text-gray-800">Carousel</h2>
        </CardHeader>
        <CardBody>
          <p className="text-gray-700 text-base">
            Displays a rotating set of images or content.
          </p>
          <div>
            <div className="mb-4">
              <Carousel
                images={carouselImages}
                height={400}
                width="100%"
                timeInterval={3}
              />
            </div>
              <h4 className="font-bold text-xl underline mb-3">
                Code require to make the Generic Carousel Component.
              </h4>
              <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
                <code>
                  {`
              <Carousel
                 images={carouselImages}
                 height={400}
                 width="100%"
                 timeInterval={3}
               />   `}
                </code>
              </pre>
          </div>
        </CardBody>
      </Card>
      <Card className="mt-2">
        <CardHeader>
          <h2 className="text-xl font-bold text-gray-800">Rating/Review</h2>
        </CardHeader>
        <CardBody>
          <p className="text-gray-700 text-base">
            Allows users to provide and view ratings or reviews
          </p>
          <div className="my-4">Inprogress...</div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Presentation;

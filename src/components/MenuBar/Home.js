import React, { useState } from 'react';
import CardFooter from '../Card/CardFooter';
import Card from '../Card';
import CardHeader from '../Card/CardHeader';
import CardBody from '../Card/CardBody';
import { trueIcon } from '../../constant';
import Button from '../Button';
import Modal from '../Modal';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(0);
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
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <Card>
        <CardHeader>
          <h2 className="text-xl font-bold text-gray-800">Botton component</h2>
        </CardHeader>
        <CardBody>

          <p className="text-gray-700 text-base">
            Passing props can change the layout of Button component as expected.
          </p>
          <div className='my-4'>
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
          </div>
        </CardBody>
      </Card>
      <Card>
        <CardHeader>
          <h2 className="text-xl font-bold text-gray-800">Modal component</h2>
        </CardHeader>
        <CardBody>

          <p className="text-gray-700 text-base">
            Popup will appear.
          </p>
          <div className='my-4'>
          <div className="flex justify-center items-center">
              <button onClick={() => openModal(1)} className="bg-blue-500 text-white px-4 py-2 m-2">
                Center Modal
              </button>
              <button onClick={() => openModal(2)} className="bg-blue-500 text-white px-4 py-2 m-2">
                Top Modal
              </button>
              <button onClick={() => openModal(3)} className="bg-blue-500 text-white px-4 py-2 m-2">
                Bottom Modal
              </button>
              {modalType === 1 && <Modal isOpen={isModalOpen} onClose={closeModal} showCloseIcon={true} modalWidth={400} position="center">
                <div>
                  <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                      Terms of Service
                    </h3>
                  </div>
                  <div class="p-4 md:p-5 space-y-4">
                    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                      With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                    </p>
                    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                      The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                    </p>
                  </div>
                  <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                    <button data-modal-hide="default-modal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
                    <button data-modal-hide="default-modal" type="button" class="ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button>
                  </div>
                </div>
              </Modal>}
              {modalType === 2 && <Modal isOpen={isModalOpen} onClose={closeModal} showCloseIcon={true} header="Modal Header" content="Modal Body" modalWidth={400} position="top">
                <div>
                  <p class="text-gray-700 my-2">
                    With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                  </p>
                  <p class="text-gray-700 my-2">
                    The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them
                  </p>
                </div>
              </Modal>}
              {modalType === 3 && <Modal isOpen={isModalOpen} onClose={closeModal} showCloseIcon={true} header="Modal Header" content="Modal Body" modalWidth={400} position="bottom">
                <div>
                  <p class="text-gray-700 my-2">
                    With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                  </p>
                  <p class="text-gray-700 my-2">
                    The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them
                  </p>
                </div>
              </Modal>}
            </div>
          </div>
        </CardBody>
      </Card>
      <Card>
        <CardHeader>
          <h2 className="text-xl font-bold text-gray-800">Card component</h2>
        </CardHeader>
        <CardBody>

          <p className="text-gray-700 text-base">
            Passing props can change the layout of Button component as expected.
          </p>
          <div className='my-4'>
            <Card width={500}>
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
                    This is the content of the card body. It can contain text, images,
                    or any other elements you want to display.
                  </p>
                </CardBody>
                <CardFooter>
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-500">Posted on January 1, 2024</div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      Read More
                    </button>
                  </div>
                </CardFooter>
              </Card>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Home;

import React from "react";

const page = () => {
  return (
    <div>
      <div
        className="w-full  h-full  transform translate-x-0 transition ease-in-out duration-700"
        id="checkout"
      >
        <div
          className="flex items-end lg:flex-row flex-col justify-end"
          id="cart"
        >
          <div
            className="lg:w-1/2 md:w-8/12 w-full lg:px-8 lg:py-14 md:px-6 px-4 md:py-8 py-4 bg-white dark:bg-gray-800 overflow-y-hidden overflow-x-hidden lg:h-screen h-auto"
            id="scroll"
          >
            <div className="flex items-center text-gray-500 hover:text-gray-600 dark:text-white cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-chevron-left"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                stroke-linejoin="round"
              >
                <path
                  stroke="none"
                  d="M0 0h24v24H0z"
                  fill="none"
                />
                <polyline points="15 6 9 12 15 18" />
              </svg>
              <p className="text-sm pl-2 leading-none dark:hover:text-gray-200">
                Back
              </p>
            </div>
            <p className="lg:text-4xl text-3xl font-black leading-10 text-gray-800 dark:text-white pt-3">
              Bag
            </p>
            <div className="md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-50">
              <div className="md:w-4/12 2xl:w-1/4 w-full">
                <img
                  src="https://i.ibb.co/SX762kX/Rectangle-36-1.png"
                  alt="Black Leather Bag"
                  className="h-full object-center object-cover md:block hidden"
                />
                <img
                  src="https://i.ibb.co/g9xsdCM/Rectangle-37.pngg"
                  alt="Black Leather Bag"
                  className="md:hidden w-full h-full object-center object-cover"
                />
              </div>
              <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
                <p className="text-xs leading-3 text-gray-800 dark:text-white md:pt-0 pt-4">
                  RF293
                </p>
                <div className="flex items-center justify-between w-full pt-1">
                  <p className="text-base font-black leading-none text-gray-800 dark:text-white">
                    North wolf bag
                  </p>
                  <select
                    aria-label="Select quantity"
                    className="py-2 px-1 border border-gray-200 mr-6 focus:outline-none dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white"
                  >
                    <option>01</option>
                    <option>02</option>
                    <option>03</option>
                  </select>
                </div>
                <p className="text-xs leading-3 text-gray-600 dark:text-white pt-2">
                  Height: 10 inches
                </p>
                <p className="text-xs leading-3 text-gray-600 dark:text-white py-4">
                  Color: Black
                </p>
                <p className="w-96 text-xs leading-3 text-gray-600 dark:text-white">
                  Composition: 100% calf leather
                </p>
                <div className="flex items-center justify-between pt-5">
                  <div className="flex itemms-center">
                    <p className="text-xs leading-3 underline text-gray-800 dark:text-white cursor-pointer">
                      Add to favorites
                    </p>
                    <p className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">
                      Remove
                    </p>
                  </div>
                  <p className="text-base font-black leading-none text-gray-800 dark:text-white">
                    ,000
                  </p>
                </div>
              </div>
            </div>
            <div className="md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-50">
              <div className="md:w-4/12 2xl:w-1/4 w-full">
                <img
                  src="https://i.ibb.co/c6KyDXN/Rectangle-5-1.png"
                  alt="Gray Sneakers"
                  className="h-full object-center object-cover md:block hidden"
                />
                <img
                  src="https://i.ibb.co/yVSpYqx/Rectangle-6.png"
                  alt="Gray Sneakers"
                  className="md:hidden w-full h-full object-center object-cover"
                />
              </div>
              <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
                <p className="text-xs leading-3 text-gray-800 dark:text-white md:pt-0 pt-4">
                  RF293
                </p>
                <div className="flex items-center justify-between w-full pt-1">
                  <p className="text-base font-black leading-none text-gray-800 dark:text-white">
                    LW sneakers
                  </p>
                  <select
                    aria-label="Select quantity"
                    className="py-2 px-1 border border-gray-200 mr-6 focus:outline-none dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white"
                  >
                    <option>01</option>
                    <option>02</option>
                    <option>03</option>
                  </select>
                </div>
                <p className="text-xs leading-3 text-gray-600 dark:text-white pt-2">
                  Height: 10 inches
                </p>
                <p className="text-xs leading-3 text-gray-600 dark:text-white py-4">
                  Color: Black
                </p>
                <p className="w-96 text-xs leading-3 text-gray-600 dark:text-white">
                  Composition: 100% calf leather
                </p>
                <div className="flex items-center justify-between pt-5">
                  <div className="flex itemms-center">
                    <p className="text-xs leading-3 underline text-gray-800 dark:text-white cursor-pointer">
                      Add to favorites
                    </p>
                    <p className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">
                      Remove
                    </p>
                  </div>
                  <p className="text-base font-black leading-none text-gray-800 dark:text-white">
                    ,000
                  </p>
                </div>
              </div>
            </div>
            <div className="md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-50">
              <div className="md:w-4/12 2xl:w-1/4 w-full">
                <img
                  src="https://i.ibb.co/6gzWwSq/Rectangle-20-1.png"
                  alt="Black Leather Purse"
                  className="h-full object-center object-cover md:block hidden"
                />
                <img
                  src="https://i.ibb.co/TTnzMTf/Rectangle-21.png"
                  alt="Black Leather Purse"
                  className="md:hidden w-full h-full object-center object-cover"
                />
              </div>
              <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
                <p className="text-xs leading-3 text-gray-800 dark:text-white md:pt-0 pt-4">
                  RF293
                </p>
                <div className="flex items-center justify-between w-full">
                  <p className="text-base font-black leading-none text-gray-800 dark:text-white">
                    Luxe card holder
                  </p>
                  <select
                    aria-label="Select quantity"
                    className="py-2 px-1 border border-gray-200 mr-6 focus:outline-none dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white"
                  >
                    <option>01</option>
                    <option>02</option>
                    <option>03</option>
                  </select>
                </div>
                <p className="text-xs leading-3 text-gray-600 dark:text-white pt-2">
                  Height: 10 inches
                </p>
                <p className="text-xs leading-3 text-gray-600 dark:text-white py-4">
                  Color: Black
                </p>
                <p className="w-96 text-xs leading-3 text-gray-600 dark:text-white">
                  Composition: 100% calf leather
                </p>
                <div className="flex items-center justify-between pt-5">
                  <div className="flex itemms-center">
                    <p className="text-xs leading-3 underline text-gray-800 dark:text-white cursor-pointer">
                      Add to favorites
                    </p>
                    <p className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">
                      Remove
                    </p>
                  </div>
                  <p className="text-base font-black leading-none text-gray-800 dark:text-white">
                    ,000
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

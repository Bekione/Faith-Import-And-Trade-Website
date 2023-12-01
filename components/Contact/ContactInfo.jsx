const ContactInfo = () => {
  return (
    <div className="w-full px-4 sm:px-0 mt-4 mb-10 flex grid grid-cols-[repeat(auto-fit,minmax(270px,1fr))] grid-rows-[1fr] gap-x-6 xl:gap-x-10 gap-y-10">
      <div className="relative min-w-[250px] min-h-[150px] p-2 pt-4 bg-white flex-1 flex flex-col rounded-tr-lg rounded-bl-lg shadow-xl">
        <div className="shadow-corner-l absolute top-0 left-[-2px] h-[55px] w-[2px] bg-secondary rounded-b-2xl transform skew-x-[2deg] origin-top-right z-[-1]"></div>
        <div className="shadow-corner-l absolute top-[-2.5px] left-[-2px] w-[55px] h-[2px] bg-secondary rounded-e-2xl transform skew-y-[2deg] origin-top-left z-[-1]"></div>
        <div className="shadow-corner-l absolute bottom-0 right-[-2px] h-[55px] w-[2px] bg-secondary rounded-t-2xl transform skew-x-[2deg] origin-bottom-left z-[-1]"></div>
        <div className="shadow-corner-l absolute bottom-[-2px] right-[-2px] w-[55px] h-[2px] bg-secondary rounded-s-2xl transform skew-y-[2deg] origin-bottom-right z-[-1]"></div>

        <div className="flex itemx-center justify-center mb-[.85rem]">
          <svg
            className="w-[35px] h-[35px] sm:w-[50px] sm:h-[50px]"
            viewBox="0 0 512 512"
            fill="#151f34"
          >
            <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
          </svg>
        </div>
        <div className="mx-2 sm:mx-[1.5rem] flex-1 flex items-center justify-center mt-2">
          <ul>
            <li className="text-base text-body-dark leading-relaxed">
              +251-11 659 0727
            </li>
            <li className="text-base text-body-dark leading-relaxed">
              +251-903-182-736
            </li>
            <li className="text-base text-body-dark leading-relaxed">
              +251-978-367-844
            </li>
          </ul>
          <p className="text-base text-[#ffffff98] leading-relaxed"></p>
        </div>
      </div>
      <div className="min-w-[250px] min-h-[150px] p-2 pt-4 flex-1 flex flex-col bg-primary rounded-lg shadow-2xl">
        <div className="flex itemx-center justify-center mb-[.85rem]">
          <svg
            className="w-[35px] h-[35px] sm:w-[50px] sm:h-[50px]"
            viewBox="0 0 512 512"
            fill="#ffffff"
          >
            <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
          </svg>
        </div>
        <div className="mx-2 flex-1 flex items-center justify-center sm:mx-[1.5rem]">
        <ul>
            <li className="text-base text-body-dark leading-relaxed">
              contact@faithimporttrade.com
            </li>
            <li className="text-base text-body-dark leading-relaxed">
              faithimporttrade@gmail.com
            </li>
          </ul>
        </div>
      </div>
      <div className="relative min-w-[250px] min-h-[150px] p-2 pt-4 bg-white flex-1 flex flex-col rounded-tl-lg rounded-br-lg shadow-xl">
        <div className="shadow-corner-r absolute top-0 right-[-2px] h-[55px] w-[2px] bg-secondary rounded-b-2xl transform skew-x-[-2deg] origin-top-right z-[-1]"></div>
        <div className="shadow-corner-r absolute top-[-2px] right-[-2px] w-[55px] h-[2px] bg-secondary rounded-s-2xl transform skew-y-[-2deg] origin-bottom-right z-[-1]"></div>
        <div className="shadow-corner-l absolute bottom-0 left-[-2px] h-[55px] w-[2px] bg-secondary rounded-t-2xl transform skew-x-[-2deg] origin-bottom-left z-[-1]"></div>
        <div className="shadow-corner-l absolute bottom-[-2px] left-[-2px] w-[55px] h-[2px] bg-secondary rounded-e-2xl transform skew-y-[-2deg] origin-bottom-left z-[-1]"></div>

        <div className="flex itemx-center justify-center mb-[.85rem]">
          <svg
            className="w-[35px] h-[35px] sm:w-[50px] sm:h-[50px]"
            viewBox="0 0 512 512"
            fill="#151f34"
          >
            <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
          </svg>
        </div>
        <div className="mx-2 flex-1 flex items-center ustify-center sm:mx-[1.5rem]">
          <p className="text-base text-center text-body-dark leading-relaxed">
            xxx Building, Lem hotel, Addis Abeba, Ethiopia
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;

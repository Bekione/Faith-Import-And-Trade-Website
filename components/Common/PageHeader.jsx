import { mokoto } from "@utils/font/font";

const PageHeader = ({ title, titleExtra, classes, ctx }) => {
  return (
    <div
      className={`relative h-[300px] md:h-[500px] w-full p-10 flex items-center justify-center mb-5 ${classes} bg-cover !bg-top  bg-fixed`}
    >
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#ffffff50] to-[#151F34f2] z-[5]"
        aria-hidden="true"
      />
      <div className="w-[95%] sm:w-[90%] h-fit mx-auto mt-12 sm:mt-0 flex items-center justify-center gap-5 z-[9]">
        <div className="w-6 lg:w-10 h-1 sm:h-2 bg-white rounded-[4px] transform -skew-x-[16deg] shadow-xl z-[9]"></div>
        <div className="flex flex-col">
          <h1
            className={`${mokoto.className} page-title text-white text-base !text-center !text-[2rem] sm:!text-[2.5rem] md:!text-[4.5rem] lg:!text-[6rem] font-bold  tracking-[.25rem] md:tracking-wider leading-none z-[9]`}
          >
            {title}
          </h1>
          {titleExtra && (
            <>
              {ctx && (
                <p
                  className={`${mokoto.className} page-title -mt-2 text-white text-base !text-center !text-[1rem] sm:!text-[1.25rem] md:!text-[2.25rem] lg:!text-[3rem] font-bold  tracking-[.25rem] md:tracking-wider leading-none z-[9]`}
                >
                  &
                </p>
              )}

              <h1
                className={`${mokoto.className} page-title text-white text-base !text-center !text-[2rem] sm:!text-[2.5rem] md:!text-[4.5rem] lg:!text-[6rem] font-bold  tracking-[.25rem] md:tracking-wider leading-none z-[9]`}
              >
                {titleExtra}
              </h1>
            </>
          )}
        </div>
        <div className="w-6 lg:w-10 h-1 sm:h-2 bg-white rounded-[4px] transform skew-x-[16deg] shadow-xl z-[9]"></div>
      </div>
    </div>
  );
};

export default PageHeader;

import { devLinksData } from "./devLinksData";

const DevLinkTooltip = () => {
  return (
    <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute -top-16 left-1/2 transform -translate-x-1/2 min-w-[220px] h-12 group-hover:h-16 transition-all duration-300">
      <div
        style={{ boxShadow: "2px 2px 6px #04aa83c9" }}
        className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-primary to-secondary rounded-md grid grid-cols-[repeat(5,1fr)] justify-around"
      >
        <div
          style={{ boxShadow: "3px 3px 6px -3px #04aa83c9", zIndex: "-1" }}
          className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-5 h-5 bg-gradient-to-br from-[rgba(0,0,0,1)] via-secondary to-secondary rotate-[45deg] rounded-sm"></div>
        {devLinksData.map((devLink) => (
          <div
            className=" flex items-center justify-center text-white hover:text-primary transition-all duration-300"
            key={devLink.id}
          >
            <a
              href={devLink.link}
              target="_blank"
              className=""
              title={devLink.title}
            >
              <svg
                className="fill-white hover:fill-primary transiton-all duration-300"
                xmlns="http://www.w3.org/2000/svg"
                height="32"
                width="28"
                viewBox={devLink.xy ? "0 0 500 500" : "0 0 448 512"}
              >
                <path d={devLink.path} />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DevLinkTooltip;

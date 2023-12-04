import { mokoto } from "../../utils/font/font";

const AboutDescription = () => {
  return (
    <div className="mt-5 w-full lg:w-7/12 mb-auto">
      <h3 className="text-secondary font-bold text[1.3em] md:text-[1.5em]">
        Who are we?
      </h3>
      <br />
      <h2 className="mb-4 text-primary text-[1.7rem] font-bold !leading-tight sm:text-4xl md:text-[45px]">
        Faith Import and Trade: Your Source for Quality IT Solutions,
        Stationary, and Maintenance Services
      </h2>
      <p className="first-parag mb-5 text-justify  text-base font-normal leading-[1.5] text-primary/70 sm:text-lg sm:leading-[1.5]">
        <span className={`${mokoto.className} text-secondary font-bold`}>
          F
        </span>
        aith Import and Trade: Where Trust, Excellence, and Global Reach meet.
        Welcome to a world of IT solutions, stationary, and maintenance services
        provided by Faith Import and Trade. As a leading company in the
        industry, Faith is dedicated to delivering reliable and top-quality
        products and services to meet your diverse needs. Established in April
        2011 as a sister company of "
        <a
          href=""
          target="_blank"
          rel="norefferer"
          className="text-secondary transition hover:opacity-70"
        >
          E T A Computer & Related Equipment Importer
        </a>
        ," Faith Import and Trade has been a trusted name in the market. Located
        in Addis Ababa, we have been serving the nation with a wide range of
        offerings. From computers, accessories, and stationeries to curative and
        preventive maintenance services, we are your one-stop solution provider.
      </p>

      <p className="mb-5 text-justify text-base font-normal leading-[1.5] text-primary/70 sm:text-lg sm:leading-[1.5]">
        At Faith Import and Trade, we embody our company slogan of Trust,
        Excellence, and Global Reach. We prioritize building trust with our
        customers, ensuring that every interaction is characterized by
        transparency, reliability, and integrity. Our commitment to excellence
        drives us to deliver high-quality products and services that meet the
        highest industry standards. And with our global reach, we source
        cutting-edge technology and products to meet your evolving needs.
      </p>

      {/* <p className="mb-5 text-justify  text-base font-normal leading-[1.5] text-body-dark sm:text-lg sm:leading-[1.5]">
        Experience the difference of working with Faith Import and Trade. Our
        dedicated team of skilled professionals is ready to assist you in
        finding the right IT solutions, sourcing top-quality stationary
        products, and ensuring the smooth operation of your systems through
        expert maintenance services. Trust is at the heart of our partnership
        with you.
      </p> */}

      <p className="mb-5 text-justify  text-base font-normal leading-[1.5] text-primary/70 sm:text-lg sm:leading-[1.5]">
        Choose Faith Import and Trade and embark on a journey built on Trust,
        Excellence, and Global Reach. Let us empower your business with the best
        IT solutions, stationary supplies, and maintenance services, tailored to
        meet your specific needs. Together, we will achieve new heights of
        success.
      </p>
    </div>
  );
};

export default AboutDescription;

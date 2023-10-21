const AboutSectionTitle = ({ title, subTitle }) => {
  return (
    <div className="mb-8">
      <h3 className="text-secondary text-center capitalize font-bold text[1.2em] md:text-[1.3em]">
        {subTitle}
      </h3>
      <h2 className="text-primary text-center capitalize font-bold text-[1.5em] sm:text-[1.6em] md:text-[1.8em]">
        {title}
      </h2>
    </div>
  );
};

export default AboutSectionTitle;

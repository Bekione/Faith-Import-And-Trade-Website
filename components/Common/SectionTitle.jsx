const SectionTitle = ({ title }) => {
  return (
    <div className="text-4xl font-extrabold text-center capitalize mb-16 sm:mb-20 md:mb-10">
      <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
        {title}
      </h1>
    </div>
  );
};

export default SectionTitle;

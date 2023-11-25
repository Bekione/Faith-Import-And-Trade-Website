"use client";

const PageIntro = () => {
  const handleSmoothScroll = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    const topOffset = targetElement.offsetTop - 105;
    if (targetElement) {
      window.scrollTo({
        top: topOffset,
        behavior: "smooth",
      });
    }
  };
  return (
    <span>
      Welcome to our Maintenance Services page. At Faith import & trade, we
      understand the importance of keeping your electronic devices in optimal
      condition for seamless performance and longevity. Whether you've purchased
      a desktop, laptop, printer, or any other electronic machine from us, we
      are committed to providing you with top-notch maintenance services. With a
      team of skilled technicians and a dedication to customer satisfaction, we
      offer both{" "}
      <a
        href="#preventive-maintenance"
        className="page-link"
        onClick={(event) => handleSmoothScroll(event, "preventive-maintenance")}
      >
        preventive
      </a>{" "}
      and{" "}
      <a
        href="#curative-maintenance"
        className="page-link"
        onClick={(event) => handleSmoothScroll(event, "curative-maintenance")}
      >
        curative
      </a>{" "}
      maintenance solutions. Our goal is to ensure that your devices operate
      smoothly and efficiently, allowing you to focus on what matters most. Read
      on to learn more about our comprehensive maintenance offerings and how we
      can help you get the most out of your technology investment.
    </span>
  );
};

export default PageIntro;

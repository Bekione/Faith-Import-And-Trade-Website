import Warranty from "./Warranty";
import ServiceInfo from "./ServiceInfo";
import Technician from './Technician'
import ServicesContact from "../ServicesContact";

const Mainteance = () => {
  const paragOne =
    "Preventive maintenance is a proactive approach aimed at preventing potential issues in systems and devices. Our skilled technicians offer comprehensive preventive maintenance services, including regular check-ups, meticulous hardware cleaning, software updates, and performance optimization. By investing in preventive maintenance, you can minimize downtime, improve system reliability, and extend the lifespan of your valuable devices. Our proactive approach ensures that potential issues are identified and addressed early on, saving you from costly repairs and disruptions in the long run. Trust our experienced team to keep your systems running smoothly and efficiently through proactive maintenance measures. ";
  const paragTwo =
    "Our dedicated team specializes in efficiently resolving hardware and software issues. With their expertise in troubleshooting, our technicians identify and repair faulty components, providing reliable technical support. We understand the frustration caused by device problems, and our goal is to promptly deliver effective solutions. Whether it's a malfunctioning hardware component or a software glitch, we have the necessary tools and knowledge to diagnose and fix the issue. Count on our dedicated team to restore the optimal functioning of your systems and minimize any disruptions to your workflow.";
  return (
    <div className="">
      <Warranty />
      <Technician />
      <ServiceInfo
        title="What is preventive maintenance?"
        text={paragOne}
        ID="preventive-maintenance"
      />
      <ServicesContact ctx="maintenance" />
      <ServiceInfo
        title="What is curative maintenance?"
        text={paragTwo}
        ID="curative-maintenance"
      />
    </div>
  );
};

export default Mainteance;

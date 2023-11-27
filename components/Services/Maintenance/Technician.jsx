import Link from "next/link";
import { essenseData } from "./essenseData";

const Technician = () => {
  return (
    <div className="my-12 flex flex-col mdPlus:flex-row">
      <div className="relative w-full mdPlus:w-6/12 min-h-[28rem] flex items-center justify-center p-20 bg-[url('/images/maintenance/maintenance-technician.avif')] bg-cover bg-right">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/80 z-0"></div>
        <div className="z-10 relative">
          <h2 className="text-5xl text-white font-bold">
            Commited to keep your devices safe
          </h2>
          <p className="mt-8 text-lg text-white/80">
            Our technicians are experts who will make sure that your device is
            running smoothly and securely at all times.
          </p>
          <Link
            href="/contact"
            className="block w-fit mt-5 sm:mt-8 px-6 py-4 rounded-lg font-bold text-white bg-secondary hover:bg-primary transition duration-500"
            style={{
              boxShadow: "3px 10px 20px 1px rgba(4, 169, 114, 0.2)",
            }}
          >
            Contact Us
          </Link>
        </div>
      </div>
      <div className="relative w-full mdPlus:w-6/12 min-h-[28rem] flex items-center justify-center p-20 bg-[url('/images/maintenance/maintenance-technician-2.avif')] bg-cover bg-right">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 to-secondary/80 z-0"></div>
        <div className="z-10 relative">
          <h2 className="text-4xl text-white font-bold">
            We Embrace Best Practices
          </h2>
          <p className="mt-8 text-lg text-white/80">
            We adhere strictly to the latest security protocols, ensuring your
            data remains protected.
          </p>
          <div className="mt-12 flex flex-col gap-4">
            {essenseData.map((essense) => (
              <div className="flex gap-4 items-center" key={essense.id}>
                <div
                  className="w-7 h-7"
                  dangerouslySetInnerHTML={{ __html: essense.icon }}
                />
                <div className="flex">
                  <p className="font-xl font-bold text-white">
                    {essense.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technician;

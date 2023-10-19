"use client";
import Iframe from "react-iframe";
import { useState, useEffect } from "react";

const Map = () => {
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    const iframeElement = document.querySelector("#faith-map-frame");

    const handleLoad = () => {
      setMapLoaded(true);
    };

    iframeElement?.addEventListener("load", handleLoad);

    return () => {
      iframeElement?.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <div className="w-full mt-5">
           {" "}
      <h2 className="mb-2 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
        We are found at
      </h2>
           {" "}
      <div className="w-full mx-auto h-[300px] sm:h-[400px] lg:h-[500px] mb-[-1rem] sm:mb-[-3rem] bg-secondary rounded-md shadow-2xl overflow-hidden">
        {/*         {!mapLoaded && <div>Loading...</div>} */}
        <Iframe
          id="faith-map-frame"
          url="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1772.6985988139595!2d38.794757315330926!3d9.020780948289952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwMDEnMTMuNCJOIDM4wrA0Nyc0MS4zIkU!5e1!3m2!1sen!2set!4v1696898951282!5m2!1sen!2set"
          className="w-full h-full"
          frameBorder={0}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          style={{ display: mapLoaded ? "block" : "none" }}
        />
             {" "}
      </div>
         {" "}
    </div>
  );
};

export default Map;

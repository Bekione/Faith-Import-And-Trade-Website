"use client"

import { useRef } from 'react'
import emailjs from '@emailjs/browser';
import ContactInfo from "./ContactInfo";
import NewsLetter from "./NewsLetter";
import Map from "./Map";


const Contact = () => {
  const formRef = useRef(null)
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = event.target;
    emailjs
      .sendForm(
        "service_4pzcntf",
        "template_uujlgs9",
        formData,
        "DPGDAD-VswlhMnw7_"
      )
      .then((response) => {
        console.log("Your email was sent succesfully. ", response.text)
        alert("Thank you for reaching us.");
      })
      .catch((error) => {
        console.log("Error sending ", error);
        alert("Sorry, something went wrong.")
      });


      formRef.current.reset()
  };

  return (
    <section id="contact" className=" py-10 md:py-16 lg:py-20">
      <ContactInfo />
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div className="wow fadeInUp mb-12 rounded-md bg-primary/[10%] py-11 px-8 dark:bg-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Drop us a line
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                We would love to hear from you.
              </p>
              <form ref={formRef} onSubmit={handleSubmit}>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none border-1 focus:border-secondary/[60%] focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none border-1 focus:border-secondary/[60%] focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        placeholder="Enter your Message"
                        className="w-full resize-none rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none border-1 focus:border-secondary/[60%] focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button
                      type="submit"
                      className="w-full sm:w-fit rounded-md relative inline-flex group items-center justify-center px-12 py-3 cursor-pointer border-b-4 border-l-2 active:border-b-6 outline-0 active:outline-primary hover:shadow-signUp focus-visible:shadow-none bg-gradient-to-tr from-primary to-secondary border-primary overflow-hidden"
                    >
                      <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-[300px] group-hover:h-[300px] opacity-5"></span>
                      <span className="relative text-center text-base font-medium text-white">
                        Send
                      </span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLetter />
          </div>
        </div>
      </div>
      <Map />
    </section>
  );
};

export default Contact;

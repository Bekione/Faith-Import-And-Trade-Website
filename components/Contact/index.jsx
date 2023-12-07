"use client";

import { useRef, useState } from "react";
import { verifyEmail } from "@utils/emailValidator";
import emailjs from "@emailjs/browser";
import ContactInfo from "./ContactInfo";
import NewsLetter from "./NewsLetter";
import Map from "./Map";

const Contact = () => {
  const formRef = useRef(null);
  const [submitting, setSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [isNotSent, setIsNotSent] = useState(false);
  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    const formData = event.target;
    const senderName = formRef.current.elements.from_name.value;
    const senderEmail = formRef.current.elements.reply_to.value;
    const senderMessage = formRef.current.elements.message.value;

    if (!senderEmail || !senderName || !senderMessage) {
      setError(true);
      setErrorText("Please enter a valid value!");
      setTimeout(() => {
        setError(false);
        setErrorText("");
      }, 3000);
      console.log("Please enter a valid name and email address.");
      return;
    }

    try {
      const isEmailValid = await verifyEmail(senderEmail);
      if (!isEmailValid) {
        setError(true);
        setErrorText("Invalid email address.");
        setTimeout(() => {
          setError(false);
          setErrorText("");
        }, 3000);
        console.log("Invalid email address.");
        return;
      }

      await emailjs.sendForm(
        "service_cmwm698",
        "template_2uh6kw9",
        formData,
        "pNd3jgceqxQXm4Ux7",
        {
          to_name: "Faith import & trade",
          from_name: senderName,
          reply_to: senderEmail,
          message: senderMessage,
        }
      );

      console.log("Your email was sent succesfully. ");

      setIsSent(true);
      setTimeout(() => {
        setIsSent(false);
      }, 3000);
      formRef.current.reset();
      setSubmitting(false);
    } catch (error) {
      console.log("Error processing request. ", error);
      setIsNotSent(true);
      setTimeout(() => {
        setIsNotSent(false);
      }, 3000);
    } finally {
      setSubmitting(false);
    }
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
                        id="from_name"
                        name="from_name"
                        placeholder="Enter your name"
                        className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none border-1 focus:border-secondary/[60%] focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                        required
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
                        id="reply_to"
                        name="reply_to"
                        placeholder="Enter your email"
                        className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none border-1 focus:border-secondary/[60%] focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                        required
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
                        id="message"
                        rows={5}
                        placeholder="Enter your Message"
                        className="w-full resize-none rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none border-1 focus:border-secondary/[60%] focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                        required
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button
                      disabled={submitting}
                      type="submit"
                      className={`${
                        submitting ? "cursor-not-allowed" : "cursor-pointer"
                      } w-full h-[44px] sm:w-fit min-w-[137px] rounded-md relative inline-flex group items-center justify-center px-12 shadow-secondary hover:shadow-primary focus:shadow-secondary bg-secondary hover:bg-primary focus:bg-primary overflow-hidden transition-all duration-300 ease-in-out`}
                    >
                      <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-[300px] group-hover:h-[300px] opacity-5"></span>
                      <span className="relative text-center text-base font-medium text-white">
                        {submitting ? <div className="spinner"></div> : "Send"}
                      </span>
                    </button>
                  </div>
                </div>
                <p className="mt-4 h-4">
                  {error && (
                    <span className="mb-4 text-[#ff0000]">{errorText}</span>
                  )}
                  {isSent && (
                    <span className="text-secondary">
                      Message sent succesfully!
                    </span>
                  )}
                  {isNotSent && (
                    <span className="text-[#ff0000]">
                      Couldn't send message. Try again!
                    </span>
                  )}
                </p>
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

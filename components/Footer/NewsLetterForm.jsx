"use client";

import emailjs from "@emailjs/browser";
import { verifyEmail } from "@utils/emailValidator";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const NewsLetterForm = () => {
  const formRef = useRef(null);
  const [submitting, setSubmitting] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [notSubscribed, setNotSubscribed] = useState(false);
  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState("");
  const pathName = usePathname();
  const [isContactPage, setIsContactPage] = useState(false);

  useEffect(() => {
    if (pathName === "/contact") setIsContactPage(true);
    else setIsContactPage(false);
  }, [pathName]);

  const handleSubscription = async (event) => {
    event.preventDefault();

    setSubmitting(true);
    const formData = event.target;
    const senderEmail = formRef.current.elements.reply_to.value;
    const senderName = formRef.current.elements.from_name.value;

    if (!senderEmail || !senderName) {
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
        "service_cxsd813",
        "template_610o2cl",
        formData,
        "pNd3jgceqxQXm4Ux7",
        {
          from_name: senderName,
          reply_to: senderEmail,
        }
      );

      console.log("Subscription added successfully. ");

      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
      }, 3000);
      formRef.current.reset();
      setSubmitting(false);
    } catch (error) {
      console.log("Error processing request. ", error);
      setNotSubscribed(true);
      setTimeout(() => {
        setNotSubscribed(false);
      }, 3000);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {!isContactPage && (
        <div className="w-full px-4 md:w-1/2 lg:w-3/12 xl:w-3/12">
          <div className="mb-12 lg:mb-16">
            <h2 className="mb-10 text-xl font-bold text-black ">
              Subscribe to our news letter
            </h2>
            <form
              ref={formRef}
              onSubmit={handleSubscription}
              className="form max-w-[300px]"
            >
              <div className="relative mb-3">
                <input
                  type="text"
                  className="peer block min-h-[auto] w-full rounded bg-transparent border border-secondary focus:border-transparent px-3 py-[0.32rem] leading-[1.6] outline-none focus:outline-2 focus:outline-secondary transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-secondary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="from_name"
                  name="from_name"
                  placeholder="Your name"
                  required
                />
                <label
                  htmlFor="from_name"
                  className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-body-color transition-all duration-200 ease-out peer-focus:px-[4px] peer-focus:bg-[#f3f3f4] peer-focus:-translate-y-[1rem] peer-focus:scale-[0.8] peer-focus:text-secondary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
                >
                  Your name
                </label>
              </div>
              <div className="relative mb-3">
                <input
                  type="email"
                  className="peer block min-h-[auto] w-full rounded bg-transparent border border-secondary focus:border-transparent px-3 py-[0.32rem] leading-[1.6] outline-none focus:outline-2 focus:outline-secondary transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-secondary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="reply_to"
                  name="reply_to"
                  placeholder="Your email"
                  required
                />
                <label
                  htmlFor="reply_to"
                  className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-body-color transition-all duration-200 ease-out peer-focus:px-[4px] peer-focus:bg-[#f3f3f4] peer-focus:-translate-y-[1rem] peer-focus:scale-[0.8] peer-focus:text-secondary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
                >
                  Your email
                </label>
              </div>
              <button
                disabled={submitting}
                type="submit"
                className={`${
                  submitting ? "cursor-not-allowed" : "cursor-pointer"
                } w-full h-[46px] rounded relative inline-flex group items-center justify-center bg-transparent border border-primary active:shadow-none shadow-lg border-primary outline-none focus:outline-4 focus:outline-primary hover:bg-primary focus:bg-primary hover:text-white focus:text-white text-primary overflow-hidden transition-all duration-300 ease-in-out`}
              >
                <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-[300px] group-hover:h-[300px] opacity-10"></span>
                <span className="relative">
                  {submitting ? <div className="spinner"></div> : "Subscribe"}
                </span>
              </button>
              <p className="leading-6 mt-2 text-center h-4">
                {error && (
                  <span className="mb-4 text-[#ff0000]">{errorText}</span>
                )}
                {subscribed && (
                  <span className="mb-4 text-secondary">
                    Thanks for subscribing!
                  </span>
                )}
                {notSubscribed && (
                  <span className="mb-4 text-[#ff0000]">
                    Subscription failed. Try again!
                  </span>
                )}
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default NewsLetterForm;

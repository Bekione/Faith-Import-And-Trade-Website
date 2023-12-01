"use client";

import emailjs from "@emailjs/browser";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const NewsLetterForm = () => {
  const formRef = useRef(null);
  const [submitting, setSubmitting] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [notSubscribed, setNotSubscribed] = useState(false);
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

    try {
      await emailjs.sendForm(
        "service_ma95etu",
        "template_apt5x5s",
        formData,
        "DPGDAD-VswlhMnw7_",
        {
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
              <div className="relative mb-3" data-te-input-wrapper-init>
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
                className="w-full rounded relative inline-flex group items-center justify-center px-3.5 py-2 cursor-pointer border-b-4 border-l-2 active:border-b-6 outline-0 active:outline-primary  active:shadow-none shadow-lg bg-gradient-to-tr from-primary to-secondary border-primary text-white overflow-hidden"
              >
                <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-[300px] group-hover:h-[300px] opacity-10"></span>
                <span className="relative">
                  {submitting ? "Subscribing..." : "Subscribe"}
                </span>
              </button>
              {subscribed && (
                <p className="mb-4 text-[rgb(20, 210, 10)]">
                  Thanks for subscribing!
                </p>
              )}
              {notSubscribed && (
                <p className="mb-4 text-[rgb(255, 80, 10)]">
                  Subscription failed. Try again!
                </p>
              )}
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default NewsLetterForm;

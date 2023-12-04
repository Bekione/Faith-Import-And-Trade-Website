"use client";

import emailjs from "@emailjs/browser";
import { verifyEmail } from "@utils/emailValidator";
import { useState, useRef } from "react";

const NewsLetter = () => {
  const formRef = useRef(null);
  const [submitting, setSubmitting] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [notSubscribed, setNotSubscribed] = useState(false);
  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState("");

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
    <div className="relative z-10 rounded-md bg-secondary/[10%] p-8 sm:p-11 lg:p-8 xl:p-11">
      <h3 className="mb-4 text-2xl font-bold leading-tight text-black">
        Subscribe to our news letter
      </h3>
      <p className="mb-6 border-b border-primary border-opacity-25 pb-11 text-base font-medium leading-relaxed text-body-color  dark:border-opacity-25">
        You will get notified about us and new deals.
      </p>
      <form
        ref={formRef}
        onSubmit={handleSubscription}
        className="outline-primary"
      >
        <p className="leading-6 text-center h-4 mb-3">
          {error && <span className="mb-4 text-[#ff0000]">{errorText}</span>}
          {subscribed && (
            <span className="mb-4 text-secondary">Thanks for subscribing!</span>
          )}
          {notSubscribed && (
            <span className="mb-4 text-[#ff0000]">
              Subscription failed. Try again!
            </span>
          )}
        </p>
        <input
          type="from_name"
          name="from_name"
          placeholder="Enter your name"
          className="mb-4 w-full bg-[#fff] rounded-md border border-body-color border-opacity-10 py-3 px-6 text-base font-medium text-body-color placeholder-body-color outline-none focus:border-primary focus:border-opacity-100 focus-visible:shadow-none  dark:border-opacity-10 dark:bg-[#242B51] focus:dark:border-opacity-50"
        />
        <input
          type="reply_to"
          name="reply_to"
          placeholder="Enter your email"
          className="mb-4 w-full bg-[#fff] rounded-md border border-body-color border-opacity-10 py-3 px-6 text-base font-medium text-body-color placeholder-body-color outline-none focus:border-primary focus:border-opacity-100 focus-visible:shadow-none  dark:border-opacity-10 dark:bg-[#242B51] focus:dark:border-opacity-50"
        />
        <button
          disabled={submitting}
          type="submit"
          className={`${
            submitting ? "cursor-not-allowed" : "cursor-pointer"
          } w-full h-[48px] sm:w-fit lg:w-full rounded-md relative inline-flex group items-center justify-center px-9 shadow-secondary hover:shadow-primary focus:shadow-secondary bg-secondary hover:bg-primary focus:bg-primary overflow-hidden transition-all duration-300 ease-in-out`}
        >
          <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-#151f34 rounded-full group-hover:w-[300px] group-hover:h-[300px] opacity-5"></span>
          <span className="relative text-center text-base font-medium text-white">
            {submitting ? <div className="spinner"></div> : "Subscribe"}
          </span>
        </button>
      </form>
      <div className="absolute top-0 left-0 z-[-1]">
        <svg
          width="370"
          height="596"
          viewBox="0 0 370 596"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_88:141"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="370"
            height="596"
          >
            <rect width="370" height="596" rx="2" fill="#151f34" />
          </mask>
          <g mask="url(#mask0_88:141)">
            <path
              opacity="0.55"
              d="M15.4076 50.9571L54.1541 99.0711L71.4489 35.1605L15.4076 50.9571Z"
              fill="url(#paint0_linear_88:141)"
            />
            <path
              opacity="0.15"
              d="M20.7137 501.422L44.6431 474.241L6 470.624L20.7137 501.422Z"
              fill="url(#paint1_linear_88:141)"
            />
            <path
              opacity="0.1"
              d="M331.676 198.309C344.398 204.636 359.168 194.704 358.107 180.536C357.12 167.363 342.941 159.531 331.265 165.71C318.077 172.69 318.317 191.664 331.676 198.309Z"
              fill="url(#paint2_linear_88:141)"
            />
            <g opacity="0.3">
              <path
                d="M209 89.9999C216 77.3332 235.7 50.7999 258.5 45.9999C287 39.9999 303 41.9999 314 30.4999C325 18.9999 334 -3.50014 357 -3.50014C380 -3.50014 395 4.99986 408.5 -8.50014C422 -22.0001 418.5 -46.0001 452 -37.5001C478.8 -30.7001 515.167 -45 530 -53"
                stroke="url(#paint3_linear_88:141)"
              />
              <path
                d="M251 64.9999C258 52.3332 277.7 25.7999 300.5 20.9999C329 14.9999 345 16.9999 356 5.49986C367 -6.00014 376 -28.5001 399 -28.5001C422 -28.5001 437 -20.0001 450.5 -33.5001C464 -47.0001 460.5 -71.0001 494 -62.5001C520.8 -55.7001 557.167 -70 572 -78"
                stroke="url(#paint4_linear_88:141)"
              />
              <path
                d="M212 73.9999C219 61.3332 238.7 34.7999 261.5 29.9999C290 23.9999 306 25.9999 317 14.4999C328 2.99986 337 -19.5001 360 -19.5001C383 -19.5001 398 -11.0001 411.5 -24.5001C425 -38.0001 421.5 -62.0001 455 -53.5001C481.8 -46.7001 518.167 -61 533 -69"
                stroke="url(#paint5_linear_88:141)"
              />
              <path
                d="M249 40.9999C256 28.3332 275.7 1.79986 298.5 -3.00014C327 -9.00014 343 -7.00014 354 -18.5001C365 -30.0001 374 -52.5001 397 -52.5001C420 -52.5001 435 -44.0001 448.5 -57.5001C462 -71.0001 458.5 -95.0001 492 -86.5001C518.8 -79.7001 555.167 -94 570 -102"
                stroke="url(#paint6_linear_88:141)"
              />
            </g>
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_88:141"
              x1="13.4497"
              y1="63.5059"
              x2="81.144"
              y2="41.5072"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#151f34" />
              <stop offset="1" stopColor="#151f34" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_88:141"
              x1="28.1579"
              y1="501.301"
              x2="8.69936"
              y2="464.391"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#151f34" />
              <stop offset="1" stopColor="#151f34" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_88:141"
              x1="338"
              y1="167"
              x2="349.488"
              y2="200.004"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#151f34" />
              <stop offset="1" stopColor="#151f34" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_88:141"
              x1="369.5"
              y1="-53"
              x2="369.5"
              y2="89.9999"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#151f34" />
              <stop offset="1" stopColor="#151f34" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_88:141"
              x1="411.5"
              y1="-78"
              x2="411.5"
              y2="64.9999"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#151f34" />
              <stop offset="1" stopColor="#151f34" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint5_linear_88:141"
              x1="372.5"
              y1="-69"
              x2="372.5"
              y2="73.9999"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#151f34" />
              <stop offset="1" stopColor="#151f34" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint6_linear_88:141"
              x1="409.5"
              y1="-102"
              x2="409.5"
              y2="40.9999"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#151f34" />
              <stop offset="1" stopColor="#151f34" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default NewsLetter;

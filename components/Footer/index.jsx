"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathName = usePathname();
  const [isContactPage, setIsContactPage] = useState(false);

  useEffect(() => {
    console.log("Current Path : ", pathName);
    if (pathName === "/contact") setIsContactPage(true);
    else setIsContactPage(false);
  }, [pathName]);

  return (
    <>
      <footer className="footer relative z-10 bg-primary bg-opacity-5 mt-auto pt-16 md:pt-20 lg:pt-24 overflow-visible md:overflow-hidden lg:overflow-visible ">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full flex-1 md:w-1/2 lg:w-4/12 xl:w-4/12 flex">
              <div className="mb-12 max-w-[360px] lg:mb-16">
                <Link href="/" className="mb-8 inline-block">
                  <Image
                    src="/images/logo/logo-dark.png"
                    alt="logo"
                    className="w-full -mt-11"
                    width={200}
                    height={90}
                  />
                </Link>
                <p className="mb-9 text-base font-medium leading-relaxed text-body-color">
                  We strive to always serve you. <br />- Trust, Excellence,
                  Global Reach -
                </p>
                <div className="flex items-center">
                  <a
                    href="/"
                    aria-label="social-link"
                    className="mr-6 text-secondary hover:opacity-80 relative transform hover:rotate-y-[360deg]"
                  >
                    <svg
                      width="9"
                      height="18"
                      viewBox="0 0 9 18"
                      className="transform transition hover:scale-[1.5] hover:rotate-[-9deg] fill-current"
                    >
                      <path d="M8.13643 7H6.78036H6.29605V6.43548V4.68548V4.12097H6.78036H7.79741C8.06378 4.12097 8.28172 3.89516 8.28172 3.55645V0.564516C8.28172 0.254032 8.088 0 7.79741 0H6.02968C4.11665 0 2.78479 1.58064 2.78479 3.92339V6.37903V6.94355H2.30048H0.65382C0.314802 6.94355 0 7.25403 0 7.70564V9.7379C0 10.1331 0.266371 10.5 0.65382 10.5H2.25205H2.73636V11.0645V16.7379C2.73636 17.1331 3.00273 17.5 3.39018 17.5H5.66644C5.81174 17.5 5.93281 17.4153 6.02968 17.3024C6.12654 17.1895 6.19919 16.9919 6.19919 16.8226V11.0927V10.5282H6.70771H7.79741C8.11222 10.5282 8.35437 10.3024 8.4028 9.96371V9.93548V9.90726L8.74182 7.95968C8.76604 7.7621 8.74182 7.53629 8.59653 7.31048C8.54809 7.16935 8.33016 7.02823 8.13643 7Z" />
                    </svg>
                  </a>
                  <a
                    href="/"
                    aria-label="social-link"
                    className="mr-6 text-secondary hover:opacity-80"
                  >
                    <svg
                      width="19"
                      height="14"
                      viewBox="0 0 19 14"
                      className="transform transition hover:scale-[1.5] hover:rotate-[-9deg] fill-current"
                    >
                      <path d="M16.3024 2.26027L17.375 1.0274C17.6855 0.693493 17.7702 0.436644 17.7984 0.308219C16.9516 0.770548 16.1613 0.924658 15.6532 0.924658H15.4556L15.3427 0.821918C14.6653 0.282534 13.8185 0 12.9153 0C10.9395 0 9.3871 1.48973 9.3871 3.21062C9.3871 3.31336 9.3871 3.46747 9.41532 3.57021L9.5 4.0839L8.90726 4.05822C5.29435 3.95548 2.33065 1.13014 1.85081 0.642123C1.06048 1.92637 1.5121 3.15925 1.99194 3.92979L2.95161 5.36815L1.42742 4.5976C1.45565 5.67637 1.90726 6.52397 2.78226 7.14041L3.54435 7.65411L2.78226 7.93665C3.2621 9.24658 4.33468 9.78596 5.125 9.99144L6.16935 10.2483L5.18145 10.8647C3.60081 11.8921 1.625 11.8151 0.75 11.738C2.52823 12.8682 4.64516 13.125 6.1129 13.125C7.21371 13.125 8.03226 13.0223 8.22984 12.9452C16.1331 11.25 16.5 4.82877 16.5 3.54452V3.36473L16.6694 3.26199C17.629 2.44007 18.0242 2.00342 18.25 1.74658C18.1653 1.77226 18.0524 1.82363 17.9395 1.84932L16.3024 2.26027Z" />
                    </svg>
                  </a>
                  <a
                    href="https://t.me/faithimports"
                    target="_blank"
                    aria-label="social-link"
                    className="mr-6 text-secondary hover:opacity-80"
                  >
                    <svg
                      width="20"
                      height="15"
                      viewBox="0 0 20 15"
                      className="transform transition hover:scale-[1.5] hover:rotate-[9deg] fill-current"
                    >
                      <g transform="matrix(0.056603774 0 0 0.056603774 1.1698116 -0)">
                        <path d="M248.85 55.86C 251.42 53.51 248.98 49.5 245.75 51.47C 191.03 84.95667 136.26666 118.38667 81.46 151.76C 81.17333 151.93333 80.87 151.96667 80.55 151.86C 58.143333 144.28668 35.739998 136.72334 13.34 129.17C 7.87 127.33 3.93 123.9 4.74 118.01C 5.39 113.34 9.27 111.1 13.8 109.37C 103.10667 75.34334 192.41 41.303337 281.71 7.25C 284.87 6.05 288.18 4.45 291.57 4.77C 303.14 5.85 309.01 14.7 306.52 25.88C 290.57 97.46 274.87 169.1 258.94 240.69C 257.95 245.16 257.67 248.94 254.56 252.15C 250.85333 255.99 246.65 257.20667 241.95 255.8C 239.81 255.16 236.42001 253.07668 231.78 249.55C 210.56 233.44334 189.14334 217.27667 167.53 201.05C 167.09 200.71667 166.67334 200.74335 166.28 201.13C 154.26666 212.83667 142.19667 224.66667 130.07 236.62C 126.54 240.1 122.52 241.65 119.6 236.52C 119.44 236.24002 119.37 235.93668 119.39 235.61C 120.6 215.21 122.2 194.8 123.83 174.43C 123.91 173.42 123.43 170.8 124.53 169.78C 165.93668 131.76668 207.37668 93.79334 248.85 55.86z" />
                      </g>
                    </svg>
                  </a>
                  <a
                    href="www.linkedin.com/in/faithimports" targer="_blank"
                    aria-label="social-link"
                    className="mr-6 text-secondary hover:opacity-80"
                  >
                    <svg
                      width="20"
                      height="15"
                      viewBox="0 0 20 15"
                      className="transform transition hover:scale-[1.5] hover:rotate-[9deg] fill-current"
                    >
                      <g transform="matrix(0.10135135 0 0 0.10135135 2.4999998 -0)">
                        <path d="M36.510002 19.8C 36.510002 24.39501 34.88542 28.317095 31.636257 31.566256C 28.387096 34.81542 24.465012 36.44 19.87 36.44C 15.274993 36.44 11.352907 34.81542 8.1037445 31.566256C 4.854583 28.317095 3.2300014 24.39501 3.2300014 19.8C 3.2300014 15.20499 4.854583 11.282906 8.1037445 8.033743C 11.352907 4.784581 15.274993 3.1599998 19.87 3.1599998C 24.465012 3.1599998 28.387096 4.784581 31.636257 8.033743C 34.88542 11.282906 36.510002 15.20499 36.510002 19.8C 36.510002 19.993635 36.506622 20.18721 36.499863 20.380726" />
                        <path d="M80.99 62.22C 89.44 48 105.25 44.95 120.74 49.02C 130.35 51.55 135.42 56.1 139.1 65.59C 141.47334 71.71 142.67001 77.78333 142.69 83.81C 142.75667 103.39001 142.77667 122.87001 142.75 142.25C 142.75 142.66422 142.41422 143 142 143L142 143L115.01 143C 114.57922 143 114.23 142.65079 114.23 142.22C 114.24334 126.66667 114.25001 111.30667 114.25 96.14C 114.26 87.89 113.87 76.42 104.12 73.49C 99.11334 71.98334 94.293335 72.37001 89.66 74.65C 82.88 77.99 81.28 88.52 81.27 95.29C 81.24333 110.763336 81.24667 126.543335 81.28 142.63C 81.27999 142.83435 81.11434 143 80.91 143L80.91 143L53.25 143C 52.75 143 52.5 142.75 52.5 142.25L52.5 142.25L52.5 50.25C 52.5 49.973858 52.723858 49.75 53 49.75L53 49.75L79.5 49.75C 80 49.75 80.25 50 80.25 50.5L80.25 50.5L80.25 62.01C 80.25031 62.18859 80.36898 62.345333 80.540794 62.39409C 80.7126 62.44285 80.89591 62.371803 80.99 62.22z" />
                        <path d="M5.49 50.23C 5.49 49.964905 5.704903 49.75 5.97 49.75L5.97 49.75L33.77 49.75C 34.035095 49.75 34.25 49.964905 34.25 50.23L34.25 50.23L34.25 142.51C 34.25 142.7751 34.035095 142.98999 33.77 142.98999L33.77 142.98999L5.97 142.98999C 5.704903 142.98999 5.49 142.7751 5.49 142.51L5.49 142.51L5.49 50.23z" />
                      </g>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Browse
                </h2>
                <ul>
                  <li className="mb-4 flex items-center gap-1">
                    <div className="ml-1">
                      <svg
                        height="0.875em"
                        viewBox="0 0 512 512"
                        fill="#04AA82"
                      >
                        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-352a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
                      </svg>
                    </div>
                    <div>
                      <a
                        href="/about"
                        className="inline-block text-base font-medium text-primary hover:text-body-color"
                      >
                        {" "}
                        About Us{" "}
                      </a>
                    </div>
                  </li>
                  <li className="mb-4 flex items-center gap-1">
                    <div className="ml-1">
                      <svg
                        height="0.875em"
                        viewBox="0 0 512 512"
                        fill="#04AA82"
                      >
                        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-352a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
                      </svg>
                    </div>
                    <div>
                      <a
                        href="/about"
                        className="inline-block text-base font-medium text-primary hover:text-body-color"
                      >
                        {" "}
                        Services{" "}
                      </a>
                    </div>
                  </li>
                  <li className="mb-4 flex items-center gap-1">
                    <div className="ml-1">
                      <svg
                        height="0.875em"
                        viewBox="0 0 512 512"
                        fill="#04AA82"
                      >
                        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-352a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
                      </svg>
                    </div>
                    <div>
                      <a
                        href="/about"
                        className="inline-block text-base font-medium text-primary hover:text-body-color"
                      >
                        {" "}
                        Gallery{" "}
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full  sm:w-1/2 md:w-1/2 lg:w-3/12 xl:w-3/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Contact Us
                </h2>
                <ul>
                  <li className="mb-4 flex items-center gap-1">
                    <div className="w-[30px] flex justify-center">
                      <svg width="21" height="16">
                        <g transform="matrix(0.09580839 0 0 0.09580839 1.3982036 -0)">
                          <path
                            d="M35.25 13.85C 35.25 8.415519 39.655518 4.01 45.09 4.01L45.09 4.01L64.91 4.01C 70.34448 4.01 74.75 8.415519 74.75 13.85L74.75 13.85L74.75 124.149994C 74.75 129.58447 70.34448 133.98999 64.91 133.98999L64.91 133.98999L45.09 133.98999C 39.655518 133.98999 35.25 129.58447 35.25 124.149994L35.25 124.149994L35.25 13.85z"
                            stroke="none"
                            fill="#04AA82"
                            fillRule="nonzero"
                          />
                          <path
                            d="M37.65 142.57C 44.49 145.26 55.76 144.04 63.38 143.99C 67.100006 143.97002 70.07001 143.51668 72.29 142.63C 82.75 138.46 85.23 130.18 85.24 119.27C 85.25334 84.34334 85.25667 49.43 85.25 14.53C 85.25 14.237289 85.48729 14 85.78 14C 109.826675 13.993334 133.93335 13.993334 158.1 14C 164.40001 14.006667 168.92667 14.506667 171.68 15.5C 182.83 19.52 184.79 28.57 184.77 39.94C 184.73001 72.433334 184.73001 104.92667 184.77 137.42C 184.78333 143.69334 184.29666 148.19334 183.31 150.92C 179.47 161.56 170.5 163.97 159.64 163.98C 116.55334 164.02 73.466675 164.02 30.38 163.98C 19.46 163.97 10.53 161.55 6.67 150.86C 5.71 148.18668 5.23 143.89001 5.23 137.97C 5.2633333 105.57001 5.2633333 73.17 5.23 40.77C 5.2233334 34.29 5.7166667 29.673334 6.71 26.92C 9.376667 19.546667 15.190001 15.296667 24.15 14.17C 24.543335 14.123334 24.740002 14.296667 24.74 14.69C 24.760002 49.463333 24.763334 84.19333 24.75 118.88C 24.74 129.92 27.04 138.39 37.65 142.57zM165.23 43.62C 165.23 38.307022 160.92299 34 155.61 34L155.61 34L114.39 34C 111.838615 34 109.39173 35.01353 107.58763 36.81763C 105.78353 38.62173 104.770004 41.068615 104.77 43.62L104.77 43.62L104.77 54.38C 104.770004 56.931385 105.78353 59.37827 107.58763 61.18237C 109.39173 62.98647 111.838615 64 114.39 64L114.39 64L155.61 64C 160.92299 64 165.23 59.692978 165.23 54.38L165.23 54.38L165.23 43.62zM125.22 94.01C 125.22 91.29418 124.14115 88.6896 122.22078 86.769226C 120.30041 84.848854 117.69582 83.77 114.98 83.77C 112.26418 83.77 109.65959 84.84885 107.73922 86.76922C 105.81885 88.6896 104.74 91.29418 104.74 94.01C 104.74 96.72582 105.818855 99.33041 107.73923 101.25078C 109.6596 103.17115 112.26418 104.25 114.98 104.25C 120.6354 104.25 125.22 99.6654 125.22 94.01zM165.22 94.01C 165.22002 91.29418 164.14116 88.68959 162.22078 86.76922C 160.30042 84.84885 157.69582 83.77 154.98 83.77C 149.3246 83.770004 144.74 88.35461 144.74 94.01C 144.74 99.6654 149.32462 104.25 154.98 104.25C 157.69582 104.25 160.30042 103.17115 162.22078 101.25078C 164.14116 99.33041 165.22002 96.72582 165.22 94.01zM125.23 134.01C 125.229996 128.34908 120.64092 123.759995 114.98 123.76C 109.319084 123.759995 104.73001 128.34908 104.73 134.01C 104.73 139.67091 109.319084 144.26 114.98 144.26C 120.64092 144.26 125.23 139.67091 125.23 134.01zM165.22 134.01C 165.22002 131.29417 164.14116 128.68959 162.22078 126.76922C 160.30042 124.84885 157.69582 123.77 154.98 123.77C 149.32462 123.770004 144.74 128.3546 144.74 134.01C 144.74 139.6654 149.3246 144.25 154.98 144.25C 157.69582 144.25002 160.30042 143.17116 162.22078 141.25078C 164.14116 139.33041 165.22002 136.72581 165.22 134.01z"
                            stroke="none"
                            fill="#04AA82"
                            fillRule="nonzero"
                          />
                        </g>
                      </svg>
                    </div>
                    <div className="w-full">
                      <a
                        href="tel:0116590727"
                        className="inline-block text-base font-medium text-primary hover:text-body-color"
                      >
                        {" "}
                        +251-116-590-727{" "}
                      </a>
                    </div>
                  </li>
                  <li className="mb-4 flex items-center gap-1">
                    <div className="w-[30px] flex justify-center">
                      <svg height="1.15em" viewBox="0 0 400 512" fill="#04AA82">
                        <path d="M80 0C44.7 0 16 28.7 16 64V448c0 35.3 28.7 64 64 64H304c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H80zm80 432h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H160c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
                      </svg>
                    </div>
                    <div className="w-full">
                      <a
                        href="tel:0903182736"
                        className="inline-block text-base font-medium text-primary hover:text-body-color"
                      >
                        {" "}
                        +251-903-182-736{" "}
                      </a>
                    </div>
                  </li>
                  <li className="mb-4 flex items-center gap-1">
                    <div className="w-[30px] flex justify-center">
                      <svg height="1.1em" viewBox="0 0 560 512" fill="#04AA82">
                        <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                      </svg>
                    </div>
                    <div className="w-full">
                      <a
                        href="mailto:faithimporttrade@gmail.com"
                        className="inline-block text-base font-medium whitespace-no-wrap text-primary hover:text-body-color"
                      >
                        {" "}
                        faithimporttrade@gmail.com
                      </a>
                    </div>
                  </li>
                  <li className="mb-4 flex items-center gap-1">
                    <div className="w-[30px] flex justify-center">
                      <svg height="1.15em" viewBox="0 0 400 512" fill="#04AA82">
                        <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                      </svg>
                    </div>
                    <div className="w-full">
                      <span className="inline-block text-base font-medium text-primary whitespace-no-wrap">
                        {" "}
                        Lem Hotel, Addis Abeba
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {!isContactPage && (
              <div className="w-full px-4 md:w-1/2 lg:w-3/12 xl:w-3/12">
                <div className="mb-12 lg:mb-16">
                  <h2 className="mb-10 text-xl font-bold text-black ">
                    Subscribe to our news letter
                  </h2>
                  <form action="" className="form max-w-[300px]">
                    <div className="relative mb-3" data-te-input-wrapper-init>
                      <input
                        type="email"
                        className="peer block min-h-[auto] w-full rounded bg-transparent border border-secondary focus:border-transparent px-3 py-[0.32rem] leading-[1.6] outline-none focus:outline-2 focus:outline-secondary transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-secondary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="subscriberEmail"
                        placeholder="Your email"
                        required
                      />
                      <label
                        htmlFor="subscriberEmail"
                        className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-body-color transition-all duration-200 ease-out peer-focus:px-[4px] peer-focus:bg-[#f3f3f4] peer-focus:-translate-y-[1rem] peer-focus:scale-[0.8] peer-focus:text-secondary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
                      >
                        Your email
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="w-full rounded relative inline-flex group items-center justify-center px-3.5 py-2 cursor-pointer border-b-4 border-l-2 active:border-b-6 outline-0 active:outline-primary  active:shadow-none shadow-lg bg-gradient-to-tr from-primary to-secondary border-primary text-white overflow-hidden"
                    >
                      <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-[300px] group-hover:h-[300px] opacity-10"></span>
                      <span className="relative">Subscribe</span>
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="bg-primary py-8">
          <div className="container flex flex-col sm:flex-row justify-center align-center flex-wrap ">
            <p className="text-center text-base text-body-color ">
              &copy;
              <a href="https://faithimports.com" rel="nofollow noopener">
                2023 faith import and trade.
              </a>{" "}
              All right reserved.
            </p>
            <span className="mx-2 block text-center">•</span>
            <p className="text-center text-base text-body-color ">
              Crafted with ❤️ by{" "}
              <a href="#" className="transition hover:text-secondary">
                Bereket
              </a>
            </p>
          </div>
        </div>

        {/* <div className="hidden absolute transform top-0 left-0 w-full h-[550px] sm:block sm:h-full sm:top-[50%] sm:-translate-y-1/2 lg:top-[-140px] lg:translate-y-0 xl:top-[-140px] z-[-1] overflow-hidden "> */}
        <div className="absolute transform -top-20 left-0 w-full h-fit md:top-[120px] lg:top-[-140px] xl:top-[-180px] xl:h-[570px] xl:overflow-hidden z-[-1]">
          <svg
            viewBox="0.00 0.00 709.00 352.00"
            fill="#69739016"
            className="transform md:scale-[1.1] lg:scale-100"
          >
            <circle cx="178.96" cy="17.84" r="3.36" />
            <circle cx="188.40" cy="17.83" r="3.35" />
            <circle cx="198.10" cy="17.85" r="3.43" />
            <circle cx="207.74" cy="17.82" r="3.37" />
            <circle cx="217.23" cy="17.86" r="3.40" />
            <circle cx="226.75" cy="17.83" r="3.36" />
            <circle cx="236.60" cy="17.85" r="3.35" />
            <circle cx="246.13" cy="17.82" r="3.36" />
            <circle cx="255.64" cy="17.85" r="3.38" />
            <circle cx="265.31" cy="17.86" r="3.46" />
            <circle cx="284.41" cy="17.85" r="3.36" />
            <circle cx="294.08" cy="17.86" r="3.44" />
            <circle cx="274.92" cy="17.87" r="3.31" />
            <circle cx="447.73" cy="27.21" r="3.48" />
            <circle cx="159.59" cy="27.26" r="3.31" />
            <circle cx="169.29" cy="27.23" r="3.43" />
            <circle cx="178.93" cy="27.24" r="3.33" />
            <circle cx="188.43" cy="27.26" r="3.32" />
            <circle cx="198.13" cy="27.26" r="3.40" />
            <circle cx="207.75" cy="27.28" r="3.33" />
            <circle cx="217.25" cy="27.30" r="3.39" />
            <circle cx="226.78" cy="27.27" r="3.34" />
            <circle cx="236.59" cy="27.28" r="3.33" />
            <circle cx="246.15" cy="27.26" r="3.33" />
            <circle cx="255.61" cy="27.24" r="3.35" />
            <circle cx="265.33" cy="27.26" r="3.42" />
            <circle cx="274.89" cy="27.26" r="3.33" />
            <circle cx="284.41" cy="27.27" r="3.34" />
            <circle cx="294.09" cy="27.27" r="3.39" />
            <circle cx="303.73" cy="27.31" r="3.33" />
            <circle cx="370.91" cy="27.27" r="3.32" />
            <circle cx="380.37" cy="27.23" r="3.36" />
            <circle cx="418.96" cy="27.28" r="3.39" />
            <circle cx="428.61" cy="27.25" r="3.35" />
            <circle cx="438.11" cy="27.24" r="3.36" />
            <circle cx="515.05" cy="27.27" r="3.31" />
            <circle cx="130.75" cy="36.63" r="3.35" />
            <circle cx="140.46" cy="36.59" r="3.41" />
            <circle cx="150.08" cy="36.65" r="3.29" />
            <circle cx="169.31" cy="36.59" r="3.44" />
            <circle cx="179.00" cy="36.58" r="3.34" />
            <circle cx="188.46" cy="36.59" r="3.29" />
            <circle cx="207.79" cy="36.62" r="3.37" />
            <circle cx="217.27" cy="36.61" r="3.39" />
            <circle cx="226.75" cy="36.62" r="3.34" />
            <circle cx="236.57" cy="36.62" r="3.34" />
            <circle cx="246.12" cy="36.65" r="3.33" />
            <circle cx="255.67" cy="36.56" r="3.35" />
            <circle cx="265.34" cy="36.63" r="3.41" />
            <circle cx="274.93" cy="36.59" r="3.30" />
            <circle cx="284.42" cy="36.59" r="3.33" />
            <circle cx="294.13" cy="36.62" r="3.40" />
            <circle cx="361.44" cy="36.61" r="3.36" />
            <circle cx="370.86" cy="36.59" r="3.35" />
            <circle cx="380.39" cy="36.63" r="3.32" />
            <circle cx="524.55" cy="36.64" r="3.28" />
            <circle cx="111.84" cy="46.16" r="3.39" />
            <circle cx="130.78" cy="46.13" r="3.38" />
            <circle cx="217.26" cy="46.17" r="3.45" />
            <circle cx="265.33" cy="46.12" r="3.45" />
            <circle cx="121.32" cy="46.24" r="3.42" />
            <circle cx="140.41" cy="46.18" r="3.43" />
            <circle cx="150.09" cy="46.16" r="3.33" />
            <circle cx="159.55" cy="46.16" r="3.33" />
            <circle cx="169.34" cy="46.14" r="3.44" />
            <circle cx="207.75" cy="46.19" r="3.36" />
            <circle cx="226.74" cy="46.19" r="3.34" />
            <circle cx="236.56" cy="46.16" r="3.35" />
            <circle cx="246.16" cy="46.16" r="3.33" />
            <circle cx="255.64" cy="46.16" r="3.38" />
            <circle cx="274.93" cy="46.17" r="3.36" />
            <circle cx="284.42" cy="46.23" r="3.37" />
            <circle cx="294.10" cy="46.20" r="3.43" />
            <circle cx="447.74" cy="46.16" r="3.47" />
            <circle cx="457.41" cy="46.20" r="3.40" />
            <circle cx="515.06" cy="46.17" r="3.36" />
            <circle cx="524.55" cy="46.19" r="3.36" />
            <circle cx="533.98" cy="46.20" r="3.35" />
            <circle cx="543.88" cy="46.16" r="3.36" />
            <circle cx="591.73" cy="46.15" r="3.39" />
            <circle cx="601.35" cy="46.18" r="3.47" />
            <circle cx="101.99" cy="55.65" r="3.32" />
            <circle cx="111.77" cy="55.63" r="3.33" />
            <circle cx="121.27" cy="55.69" r="3.31" />
            <circle cx="130.73" cy="55.68" r="3.37" />
            <circle cx="140.48" cy="55.64" r="3.40" />
            <circle cx="150.09" cy="55.65" r="3.28" />
            <circle cx="159.58" cy="55.67" r="3.30" />
            <circle cx="169.32" cy="55.69" r="3.40" />
            <circle cx="178.98" cy="55.69" r="3.31" />
            <circle cx="188.45" cy="55.64" r="3.27" />
            <circle cx="236.57" cy="55.60" r="3.30" />
            <circle cx="246.13" cy="55.66" r="3.32" />
            <circle cx="255.61" cy="55.64" r="3.32" />
            <circle cx="265.33" cy="55.69" r="3.41" />
            <circle cx="284.41" cy="55.67" r="3.33" />
            <circle cx="438.03" cy="55.71" r="3.33" />
            <circle cx="466.89" cy="55.66" r="3.33" />
            <circle cx="486.26" cy="55.68" r="3.32" />
            <circle cx="495.78" cy="55.70" r="3.34" />
            <circle cx="505.35" cy="55.72" r="3.39" />
            <circle cx="515.07" cy="55.68" r="3.30" />
            <circle cx="524.53" cy="55.66" r="3.28" />
            <circle cx="534.02" cy="55.70" r="3.30" />
            <circle cx="543.81" cy="55.70" r="3.32" />
            <circle cx="553.37" cy="55.64" r="3.33" />
            <circle cx="562.91" cy="55.67" r="3.30" />
            <circle cx="572.55" cy="55.66" r="3.43" />
            <circle cx="274.95" cy="55.73" r="3.30" />
            <circle cx="294.10" cy="55.72" r="3.39" />
            <circle cx="601.43" cy="55.71" r="3.40" />
            <circle cx="34.86" cy="65.01" r="3.31" />
            <circle cx="44.47" cy="65.01" r="3.41" />
            <circle cx="54.06" cy="65.01" r="3.27" />
            <circle cx="121.32" cy="65.05" r="3.33" />
            <circle cx="130.77" cy="65.00" r="3.30" />
            <circle cx="140.42" cy="65.01" r="3.40" />
            <circle cx="159.62" cy="65.04" r="3.36" />
            <circle cx="169.30" cy="65.02" r="3.42" />
            <circle cx="178.97" cy="65.01" r="3.29" />
            <circle cx="188.43" cy="65.04" r="3.34" />
            <circle cx="198.09" cy="65.03" r="3.35" />
            <circle cx="207.73" cy="65.03" r="3.32" />
            <circle cx="236.58" cy="65.04" r="3.31" />
            <circle cx="246.17" cy="65.02" r="3.31" />
            <circle cx="255.63" cy="65.01" r="3.35" />
            <circle cx="265.35" cy="65.01" r="3.40" />
            <circle cx="274.93" cy="65.03" r="3.31" />
            <circle cx="284.38" cy="65.00" r="3.33" />
            <circle cx="294.06" cy="65.04" r="3.42" />
            <circle cx="370.91" cy="65.04" r="3.30" />
            <circle cx="380.39" cy="65.02" r="3.33" />
            <circle cx="390.25" cy="65.01" r="3.32" />
            <circle cx="438.01" cy="65.04" r="3.30" />
            <circle cx="447.71" cy="65.02" r="3.40" />
            <circle cx="466.88" cy="65.05" r="3.28" />
            <circle cx="476.51" cy="64.99" r="3.45" />
            <circle cx="486.22" cy="65.00" r="3.30" />
            <circle cx="495.71" cy="65.02" r="3.35" />
            <circle cx="505.32" cy="65.04" r="3.37" />
            <circle cx="515.03" cy="65.03" r="3.30" />
            <circle cx="524.52" cy="65.04" r="3.34" />
            <circle cx="533.98" cy="65.03" r="3.31" />
            <circle cx="543.92" cy="65.01" r="3.32" />
            <circle cx="553.38" cy="65.01" r="3.29" />
            <circle cx="562.89" cy="65.03" r="3.28" />
            <circle cx="572.56" cy="65.00" r="3.38" />
            <circle cx="582.24" cy="65.07" r="3.33" />
            <circle cx="591.73" cy="65.08" r="3.37" />
            <circle cx="601.35" cy="65.01" r="3.46" />
            <circle cx="611.04" cy="65.02" r="3.31" />
            <circle cx="620.60" cy="64.99" r="3.32" />
            <circle cx="630.24" cy="65.01" r="3.44" />
            <circle cx="668.67" cy="65.06" r="3.31" />
            <circle cx="25.32" cy="74.55" r="3.49" />
            <circle cx="34.83" cy="74.53" r="3.44" />
            <circle cx="44.46" cy="74.58" r="3.52" />
            <circle cx="54.12" cy="74.54" r="3.41" />
            <circle cx="63.63" cy="74.56" r="3.45" />
            <circle cx="73.10" cy="74.59" r="3.46" />
            <circle cx="82.89" cy="74.58" r="3.46" />
            <circle cx="92.44" cy="74.56" r="3.41" />
            <circle cx="102.00" cy="74.58" r="3.43" />
            <circle cx="111.80" cy="74.56" r="3.45" />
            <circle cx="121.31" cy="74.56" r="3.46" />
            <circle cx="130.77" cy="74.54" r="3.43" />
            <circle cx="140.49" cy="74.58" r="3.52" />
            <circle cx="150.11" cy="74.55" r="3.43" />
            <circle cx="159.66" cy="74.57" r="3.42" />
            <circle cx="169.31" cy="74.56" r="3.55" />
            <circle cx="178.99" cy="74.54" r="3.46" />
            <circle cx="198.14" cy="74.54" r="3.53" />
            <circle cx="207.74" cy="74.52" r="3.46" />
            <circle cx="217.25" cy="74.54" r="3.45" />
            <circle cx="236.62" cy="74.56" r="3.44" />
            <circle cx="246.14" cy="74.56" r="3.46" />
            <circle cx="255.63" cy="74.57" r="3.45" />
            <circle cx="265.34" cy="74.55" r="3.50" />
            <circle cx="274.93" cy="74.55" r="3.44" />
            <circle cx="361.36" cy="74.57" r="3.44" />
            <circle cx="370.89" cy="74.57" r="3.46" />
            <circle cx="380.39" cy="74.56" r="3.44" />
            <circle cx="390.23" cy="74.51" r="3.44" />
            <circle cx="399.75" cy="74.57" r="3.39" />
            <circle cx="409.27" cy="74.55" r="3.46" />
            <circle cx="418.97" cy="74.55" r="3.50" />
            <circle cx="428.58" cy="74.55" r="3.42" />
            <circle cx="438.08" cy="74.54" r="3.44" />
            <circle cx="447.80" cy="74.60" r="3.54" />
            <circle cx="457.39" cy="74.55" r="3.45" />
            <circle cx="466.92" cy="74.56" r="3.44" />
            <circle cx="476.53" cy="74.59" r="3.54" />
            <circle cx="486.27" cy="74.55" r="3.46" />
            <circle cx="495.73" cy="74.53" r="3.48" />
            <circle cx="505.31" cy="74.56" r="3.48" />
            <circle cx="515.03" cy="74.58" r="3.42" />
            <circle cx="524.57" cy="74.55" r="3.43" />
            <circle cx="534.02" cy="74.54" r="3.44" />
            <circle cx="543.87" cy="74.55" r="3.43" />
            <circle cx="553.34" cy="74.54" r="3.45" />
            <circle cx="562.91" cy="74.52" r="3.42" />
            <circle cx="572.56" cy="74.55" r="3.51" />
            <circle cx="582.26" cy="74.56" r="3.45" />
            <circle cx="591.68" cy="74.57" r="3.45" />
            <circle cx="601.34" cy="74.56" r="3.59" />
            <circle cx="611.02" cy="74.53" r="3.45" />
            <circle cx="620.57" cy="74.56" r="3.43" />
            <circle cx="630.24" cy="74.52" r="3.58" />
            <circle cx="639.95" cy="74.55" r="3.45" />
            <circle cx="649.39" cy="74.57" r="3.45" />
            <circle cx="658.94" cy="74.56" r="3.47" />
            <circle cx="668.70" cy="74.52" r="3.45" />
            <circle cx="678.19" cy="74.57" r="3.42" />
            <circle cx="25.32" cy="84.07" r="3.30" />
            <circle cx="34.78" cy="84.04" r="3.28" />
            <circle cx="44.45" cy="84.10" r="3.41" />
            <circle cx="54.10" cy="84.07" r="3.30" />
            <circle cx="63.67" cy="84.10" r="3.34" />
            <circle cx="73.07" cy="84.09" r="3.33" />
            <circle cx="82.99" cy="84.07" r="3.30" />
            <circle cx="92.45" cy="84.05" r="3.29" />
            <circle cx="102.00" cy="84.09" r="3.31" />
            <circle cx="111.79" cy="84.08" r="3.29" />
            <circle cx="121.28" cy="84.05" r="3.33" />
            <circle cx="130.74" cy="84.06" r="3.29" />
            <circle cx="140.44" cy="84.04" r="3.40" />
            <circle cx="150.11" cy="84.09" r="3.29" />
            <circle cx="159.63" cy="84.09" r="3.30" />
            <circle cx="169.28" cy="84.06" r="3.40" />
            <circle cx="178.99" cy="84.07" r="3.30" />
            <circle cx="188.46" cy="84.06" r="3.29" />
            <circle cx="198.12" cy="84.03" r="3.37" />
            <circle cx="207.75" cy="84.08" r="3.32" />
            <circle cx="236.62" cy="84.08" r="3.34" />
            <circle cx="246.09" cy="84.04" r="3.32" />
            <circle cx="255.63" cy="84.11" r="3.32" />
            <circle cx="294.11" cy="84.08" r="3.39" />
            <circle cx="303.73" cy="84.03" r="3.32" />
            <circle cx="361.37" cy="84.04" r="3.35" />
            <circle cx="370.89" cy="84.05" r="3.30" />
            <circle cx="390.18" cy="84.08" r="3.28" />
            <circle cx="399.74" cy="84.07" r="3.29" />
            <circle cx="409.25" cy="84.11" r="3.33" />
            <circle cx="418.94" cy="84.07" r="3.33" />
            <circle cx="428.60" cy="84.10" r="3.29" />
            <circle cx="438.07" cy="84.08" r="3.30" />
            <ellipse
              cx="0.00"
              cy="0.00"
              transform="translate(447.78,84.08) rotate(-4.2)"
              rx="3.52"
              ry="3.29"
            />
            <circle cx="457.36" cy="84.10" r="3.33" />
            <circle cx="466.83" cy="84.09" r="3.27" />
            <circle cx="476.52" cy="84.03" r="3.40" />
            <circle cx="486.18" cy="84.08" r="3.28" />
            <circle cx="495.69" cy="84.11" r="3.37" />
            <circle cx="505.30" cy="84.10" r="3.39" />
            <circle cx="515.02" cy="84.06" r="3.30" />
            <circle cx="524.51" cy="84.05" r="3.30" />
            <circle cx="534.00" cy="84.12" r="3.35" />
            <circle cx="543.90" cy="84.06" r="3.31" />
            <circle cx="553.40" cy="84.07" r="3.30" />
            <circle cx="562.94" cy="84.08" r="3.29" />
            <ellipse
              cx="0.00"
              cy="0.00"
              transform="translate(572.56,84.05) rotate(-2.6)"
              rx="3.53"
              ry="3.27"
            />
            <circle cx="582.23" cy="84.01" r="3.30" />
            <circle cx="591.71" cy="84.10" r="3.33" />
            <circle cx="601.38" cy="84.04" r="3.45" />
            <circle cx="611.04" cy="84.06" r="3.29" />
            <circle cx="620.52" cy="84.03" r="3.28" />
            <ellipse
              cx="0.00"
              cy="0.00"
              transform="translate(630.20,84.06) rotate(6.5)"
              rx="3.51"
              ry="3.29"
            />
            <circle cx="639.94" cy="84.10" r="3.27" />
            <circle cx="649.36" cy="84.12" r="3.32" />
            <circle cx="658.96" cy="84.08" r="3.28" />
            <circle cx="668.73" cy="84.06" r="3.30" />
            <circle cx="678.20" cy="84.03" r="3.33" />
            <circle cx="687.69" cy="84.06" r="3.32" />
            <circle cx="54.14" cy="93.42" r="3.29" />
            <circle cx="63.62" cy="93.38" r="3.33" />
            <circle cx="73.13" cy="93.38" r="3.32" />
            <circle cx="82.99" cy="93.44" r="3.30" />
            <circle cx="92.50" cy="93.45" r="3.30" />
            <circle cx="101.99" cy="93.44" r="3.32" />
            <circle cx="111.75" cy="93.48" r="3.33" />
            <circle cx="121.34" cy="93.45" r="3.32" />
            <circle cx="130.75" cy="93.43" r="3.33" />
            <circle cx="140.47" cy="93.43" r="3.43" />
            <circle cx="150.14" cy="93.38" r="3.31" />
            <circle cx="361.39" cy="93.47" r="3.33" />
            <circle cx="399.72" cy="93.46" r="3.30" />
            <circle cx="409.26" cy="93.46" r="3.32" />
            <circle cx="438.05" cy="93.43" r="3.31" />
            <circle cx="447.73" cy="93.42" r="3.41" />
            <circle cx="457.35" cy="93.43" r="3.34" />
            <circle cx="466.91" cy="93.46" r="3.29" />
            <circle cx="476.52" cy="93.42" r="3.41" />
            <circle cx="486.24" cy="93.46" r="3.34" />
            <circle cx="495.72" cy="93.40" r="3.35" />
            <circle cx="505.37" cy="93.43" r="3.38" />
            <circle cx="515.05" cy="93.44" r="3.32" />
            <circle cx="524.56" cy="93.41" r="3.33" />
            <circle cx="534.01" cy="93.46" r="3.31" />
            <circle cx="543.85" cy="93.42" r="3.33" />
            <circle cx="553.41" cy="93.51" r="3.35" />
            <circle cx="562.94" cy="93.44" r="3.31" />
            <circle cx="572.59" cy="93.45" r="3.40" />
            <circle cx="582.23" cy="93.46" r="3.31" />
            <circle cx="591.69" cy="93.44" r="3.34" />
            <circle cx="601.35" cy="93.40" r="3.46" />
            <circle cx="611.03" cy="93.43" r="3.32" />
            <circle cx="620.55" cy="93.43" r="3.26" />
            <circle cx="639.92" cy="93.42" r="3.30" />
            <circle cx="25.30" cy="93.50" r="3.31" />
            <circle cx="34.80" cy="93.46" r="3.28" />
            <circle cx="44.45" cy="93.44" r="3.38" />
            <circle cx="159.64" cy="93.46" r="3.27" />
            <circle cx="188.44" cy="93.46" r="3.25" />
            <circle cx="198.11" cy="93.48" r="3.37" />
            <circle cx="246.11" cy="93.44" r="3.28" />
            <circle cx="255.63" cy="93.45" r="3.29" />
            <circle cx="351.72" cy="93.50" r="3.38" />
            <circle cx="380.43" cy="93.44" r="3.26" />
            <circle cx="390.21" cy="93.45" r="3.26" />
            <circle cx="418.95" cy="93.47" r="3.34" />
            <circle cx="428.59" cy="93.46" r="3.26" />
            <circle cx="630.24" cy="93.45" r="3.39" />
            <circle cx="649.42" cy="93.48" r="3.30" />
            <circle cx="658.92" cy="93.45" r="3.27" />
            <circle cx="44.46" cy="102.97" r="3.48" />
            <circle cx="82.92" cy="102.98" r="3.39" />
            <circle cx="92.45" cy="102.95" r="3.37" />
            <circle cx="101.96" cy="102.98" r="3.43" />
            <circle cx="121.30" cy="103.00" r="3.43" />
            <circle cx="130.75" cy="102.97" r="3.44" />
            <circle cx="140.46" cy="103.03" r="3.52" />
            <circle cx="150.13" cy="102.98" r="3.41" />
            <circle cx="159.63" cy="102.99" r="3.41" />
            <circle cx="188.45" cy="102.96" r="3.38" />
            <circle cx="198.08" cy="102.96" r="3.45" />
            <circle cx="207.73" cy="102.97" r="3.40" />
            <circle cx="217.28" cy="102.99" r="3.46" />
            <circle cx="322.93" cy="102.95" r="3.52" />
            <circle cx="332.61" cy="102.93" r="3.44" />
            <circle cx="351.71" cy="102.96" r="3.50" />
            <circle cx="361.37" cy="102.96" r="3.44" />
            <circle cx="370.93" cy="102.97" r="3.39" />
            <circle cx="380.41" cy="102.94" r="3.41" />
            <circle cx="390.24" cy="102.96" r="3.41" />
            <circle cx="399.78" cy="102.97" r="3.40" />
            <circle cx="409.28" cy="102.98" r="3.39" />
            <circle cx="418.97" cy="102.91" r="3.42" />
            <circle cx="428.52" cy="103.01" r="3.39" />
            <circle cx="438.04" cy="102.94" r="3.36" />
            <circle cx="447.70" cy="102.95" r="3.54" />
            <circle cx="457.35" cy="102.99" r="3.41" />
            <circle cx="466.91" cy="102.98" r="3.37" />
            <circle cx="476.55" cy="103.00" r="3.52" />
            <circle cx="486.29" cy="103.02" r="3.43" />
            <circle cx="495.73" cy="102.99" r="3.44" />
            <circle cx="505.32" cy="102.96" r="3.47" />
            <circle cx="515.06" cy="103.00" r="3.40" />
            <circle cx="524.57" cy="102.97" r="3.42" />
            <circle cx="534.02" cy="102.99" r="3.44" />
            <circle cx="543.86" cy="103.03" r="3.41" />
            <circle cx="553.38" cy="102.97" r="3.41" />
            <circle cx="562.87" cy="103.03" r="3.41" />
            <circle cx="572.57" cy="102.92" r="3.48" />
            <circle cx="582.21" cy="102.98" r="3.42" />
            <circle cx="591.72" cy="102.96" r="3.42" />
            <circle cx="630.18" cy="102.91" r="3.51" />
            <circle cx="111.83" cy="103.00" r="3.39" />
            <circle cx="188.46" cy="112.47" r="3.31" />
            <circle cx="207.70" cy="112.50" r="3.34" />
            <circle cx="217.27" cy="112.50" r="3.35" />
            <circle cx="370.88" cy="112.48" r="3.35" />
            <circle cx="380.42" cy="112.47" r="3.31" />
            <circle cx="457.37" cy="112.53" r="3.38" />
            <circle cx="476.55" cy="112.48" r="3.47" />
            <circle cx="495.74" cy="112.56" r="3.40" />
            <circle cx="582.26" cy="112.48" r="3.32" />
            <circle cx="25.36" cy="112.50" r="3.33" />
            <circle cx="92.48" cy="112.50" r="3.29" />
            <circle cx="101.99" cy="112.50" r="3.31" />
            <circle cx="111.79" cy="112.55" r="3.34" />
            <circle cx="121.31" cy="112.56" r="3.33" />
            <circle cx="130.77" cy="112.52" r="3.32" />
            <circle cx="140.47" cy="112.52" r="3.41" />
            <circle cx="150.07" cy="112.48" r="3.29" />
            <circle cx="159.61" cy="112.50" r="3.29" />
            <circle cx="169.27" cy="112.53" r="3.44" />
            <circle cx="178.99" cy="112.53" r="3.34" />
            <circle cx="198.13" cy="112.57" r="3.41" />
            <circle cx="226.78" cy="112.52" r="3.35" />
            <circle cx="322.85" cy="112.47" r="3.41" />
            <circle cx="332.56" cy="112.52" r="3.31" />
            <circle cx="361.38" cy="112.51" r="3.34" />
            <circle cx="390.24" cy="112.47" r="3.30" />
            <circle cx="399.70" cy="112.57" r="3.34" />
            <circle cx="409.30" cy="112.57" r="3.33" />
            <circle cx="419.00" cy="112.54" r="3.40" />
            <circle cx="428.56" cy="112.57" r="3.30" />
            <circle cx="438.03" cy="112.54" r="3.33" />
            <circle cx="447.70" cy="112.56" r="3.44" />
            <circle cx="466.86" cy="112.48" r="3.27" />
            <circle cx="486.23" cy="112.57" r="3.33" />
            <circle cx="505.26" cy="112.58" r="3.41" />
            <circle cx="515.06" cy="112.50" r="3.35" />
            <circle cx="524.53" cy="112.54" r="3.34" />
            <circle cx="534.01" cy="112.51" r="3.34" />
            <circle cx="543.85" cy="112.56" r="3.36" />
            <circle cx="553.39" cy="112.60" r="3.34" />
            <circle cx="562.93" cy="112.51" r="3.32" />
            <circle cx="572.55" cy="112.53" r="3.40" />
            <circle cx="630.26" cy="112.51" r="3.43" />
            <circle cx="101.99" cy="121.90" r="3.33" />
            <circle cx="111.85" cy="121.84" r="3.34" />
            <circle cx="121.33" cy="121.83" r="3.34" />
            <circle cx="130.75" cy="121.90" r="3.33" />
            <circle cx="140.43" cy="121.85" r="3.43" />
            <circle cx="150.11" cy="121.83" r="3.33" />
            <circle cx="159.60" cy="121.83" r="3.34" />
            <circle cx="169.30" cy="121.88" r="3.47" />
            <circle cx="178.96" cy="121.86" r="3.28" />
            <circle cx="188.42" cy="121.85" r="3.33" />
            <circle cx="198.08" cy="121.88" r="3.35" />
            <circle cx="207.76" cy="121.89" r="3.32" />
            <circle cx="217.24" cy="121.85" r="3.36" />
            <circle cx="226.73" cy="121.86" r="3.35" />
            <circle cx="332.59" cy="121.85" r="3.28" />
            <circle cx="342.09" cy="121.88" r="3.32" />
            <circle cx="351.74" cy="121.89" r="3.40" />
            <circle cx="361.36" cy="121.86" r="3.32" />
            <circle cx="370.92" cy="121.82" r="3.32" />
            <circle cx="380.36" cy="121.86" r="3.30" />
            <circle cx="390.25" cy="121.83" r="3.30" />
            <circle cx="399.71" cy="121.85" r="3.29" />
            <circle cx="409.25" cy="121.87" r="3.33" />
            <circle cx="418.97" cy="121.84" r="3.36" />
            <circle cx="428.58" cy="121.82" r="3.32" />
            <circle cx="438.04" cy="121.90" r="3.31" />
            <circle cx="447.70" cy="121.89" r="3.47" />
            <circle cx="457.37" cy="121.83" r="3.36" />
            <circle cx="466.90" cy="121.87" r="3.33" />
            <circle cx="476.55" cy="121.86" r="3.47" />
            <circle cx="486.24" cy="121.86" r="3.36" />
            <circle cx="495.73" cy="121.88" r="3.41" />
            <circle cx="505.31" cy="121.91" r="3.44" />
            <circle cx="515.06" cy="121.86" r="3.36" />
            <circle cx="524.60" cy="121.85" r="3.34" />
            <circle cx="533.96" cy="121.85" r="3.34" />
            <circle cx="543.85" cy="121.84" r="3.34" />
            <circle cx="553.39" cy="121.85" r="3.34" />
            <circle cx="562.93" cy="121.85" r="3.34" />
            <circle cx="572.53" cy="121.88" r="3.39" />
            <circle cx="582.24" cy="121.92" r="3.34" />
            <circle cx="591.73" cy="121.85" r="3.36" />
            <circle cx="601.36" cy="121.89" r="3.49" />
            <circle cx="630.19" cy="121.88" r="3.45" />
            <circle cx="198.08" cy="131.31" r="3.48" />
            <circle cx="361.43" cy="131.36" r="3.45" />
            <circle cx="370.87" cy="131.35" r="3.44" />
            <circle cx="457.36" cy="131.30" r="3.42" />
            <circle cx="476.59" cy="131.34" r="3.53" />
            <circle cx="495.71" cy="131.33" r="3.47" />
            <circle cx="534.03" cy="131.32" r="3.47" />
            <circle cx="582.24" cy="131.34" r="3.43" />
            <circle cx="591.74" cy="131.36" r="3.45" />
            <circle cx="601.40" cy="131.32" r="3.59" />
            <circle cx="111.82" cy="131.42" r="3.43" />
            <circle cx="121.30" cy="131.34" r="3.40" />
            <circle cx="130.76" cy="131.41" r="3.41" />
            <circle cx="140.44" cy="131.36" r="3.49" />
            <circle cx="150.08" cy="131.35" r="3.39" />
            <circle cx="159.59" cy="131.38" r="3.42" />
            <circle cx="169.30" cy="131.37" r="3.48" />
            <circle cx="178.98" cy="131.36" r="3.36" />
            <circle cx="188.46" cy="131.36" r="3.38" />
            <circle cx="207.75" cy="131.38" r="3.41" />
            <circle cx="236.61" cy="131.41" r="3.45" />
            <circle cx="332.56" cy="131.37" r="3.38" />
            <circle cx="342.08" cy="131.38" r="3.40" />
            <circle cx="351.76" cy="131.41" r="3.50" />
            <circle cx="380.36" cy="131.35" r="3.39" />
            <circle cx="390.22" cy="131.35" r="3.37" />
            <circle cx="399.78" cy="131.38" r="3.37" />
            <circle cx="409.25" cy="131.42" r="3.39" />
            <circle cx="419.00" cy="131.37" r="3.46" />
            <circle cx="428.58" cy="131.36" r="3.35" />
            <circle cx="438.04" cy="131.36" r="3.40" />
            <circle cx="447.76" cy="131.40" r="3.54" />
            <circle cx="466.88" cy="131.41" r="3.40" />
            <circle cx="486.25" cy="131.38" r="3.41" />
            <circle cx="505.26" cy="131.44" r="3.53" />
            <circle cx="515.05" cy="131.35" r="3.39" />
            <circle cx="524.47" cy="131.34" r="3.39" />
            <circle cx="543.85" cy="131.35" r="3.41" />
            <circle cx="553.36" cy="131.39" r="3.46" />
            <circle cx="562.97" cy="131.35" r="3.39" />
            <circle cx="572.57" cy="131.37" r="3.47" />
            <circle cx="101.97" cy="140.85" r="3.31" />
            <circle cx="111.82" cy="140.88" r="3.30" />
            <circle cx="121.24" cy="140.92" r="3.31" />
            <circle cx="130.78" cy="140.92" r="3.31" />
            <circle cx="169.24" cy="140.88" r="3.39" />
            <circle cx="198.10" cy="140.89" r="3.36" />
            <circle cx="342.08" cy="140.94" r="3.30" />
            <circle cx="361.41" cy="140.86" r="3.34" />
            <circle cx="380.36" cy="140.88" r="3.29" />
            <circle cx="419.00" cy="140.92" r="3.36" />
            <circle cx="438.08" cy="140.94" r="3.30" />
            <circle cx="447.76" cy="140.89" r="3.41" />
            <circle cx="457.37" cy="140.91" r="3.34" />
            <circle cx="466.94" cy="140.89" r="3.28" />
            <circle cx="486.23" cy="140.90" r="3.32" />
            <circle cx="495.71" cy="140.90" r="3.32" />
            <circle cx="505.34" cy="140.92" r="3.35" />
            <circle cx="515.03" cy="140.92" r="3.29" />
            <circle cx="533.96" cy="140.90" r="3.29" />
            <circle cx="543.86" cy="140.89" r="3.30" />
            <circle cx="553.38" cy="140.85" r="3.30" />
            <circle cx="562.89" cy="140.88" r="3.30" />
            <circle cx="582.25" cy="140.86" r="3.27" />
            <circle cx="601.36" cy="140.91" r="3.43" />
            <circle cx="140.45" cy="140.93" r="3.38" />
            <circle cx="150.09" cy="140.93" r="3.26" />
            <circle cx="159.63" cy="140.93" r="3.28" />
            <circle cx="178.97" cy="140.91" r="3.25" />
            <circle cx="188.41" cy="140.91" r="3.28" />
            <circle cx="322.92" cy="140.93" r="3.38" />
            <circle cx="332.61" cy="140.94" r="3.25" />
            <circle cx="370.89" cy="140.93" r="3.28" />
            <circle cx="476.53" cy="140.95" r="3.40" />
            <circle cx="524.48" cy="140.95" r="3.29" />
            <circle cx="572.57" cy="140.93" r="3.37" />
            <circle cx="111.78" cy="150.29" r="3.32" />
            <circle cx="121.28" cy="150.26" r="3.29" />
            <circle cx="130.75" cy="150.24" r="3.28" />
            <circle cx="140.44" cy="150.24" r="3.39" />
            <circle cx="150.13" cy="150.27" r="3.24" />
            <circle cx="159.58" cy="150.26" r="3.30" />
            <circle cx="169.32" cy="150.25" r="3.39" />
            <circle cx="178.98" cy="150.27" r="3.30" />
            <circle cx="188.48" cy="150.25" r="3.29" />
            <circle cx="322.92" cy="150.32" r="3.42" />
            <circle cx="332.66" cy="150.22" r="3.30" />
            <circle cx="342.11" cy="150.26" r="3.33" />
            <circle cx="351.68" cy="150.24" r="3.39" />
            <circle cx="380.43" cy="150.25" r="3.30" />
            <circle cx="390.25" cy="150.26" r="3.32" />
            <circle cx="399.78" cy="150.28" r="3.30" />
            <circle cx="409.28" cy="150.24" r="3.29" />
            <circle cx="418.97" cy="150.28" r="3.35" />
            <circle cx="438.04" cy="150.26" r="3.30" />
            <circle cx="447.75" cy="150.24" r="3.43" />
            <circle cx="457.36" cy="150.25" r="3.34" />
            <circle cx="466.88" cy="150.28" r="3.29" />
            <circle cx="476.59" cy="150.26" r="3.39" />
            <circle cx="486.28" cy="150.25" r="3.30" />
            <circle cx="495.78" cy="150.31" r="3.33" />
            <circle cx="505.28" cy="150.25" r="3.33" />
            <circle cx="515.05" cy="150.26" r="3.28" />
            <circle cx="524.51" cy="150.28" r="3.26" />
            <circle cx="534.02" cy="150.25" r="3.29" />
            <circle cx="543.86" cy="150.27" r="3.30" />
            <circle cx="553.40" cy="150.28" r="3.27" />
            <circle cx="562.86" cy="150.28" r="3.30" />
            <circle cx="572.56" cy="150.27" r="3.40" />
            <circle cx="601.37" cy="150.25" r="3.42" />
            <circle cx="111.81" cy="159.76" r="3.42" />
            <circle cx="121.27" cy="159.80" r="3.40" />
            <circle cx="130.75" cy="159.76" r="3.43" />
            <circle cx="140.44" cy="159.79" r="3.48" />
            <circle cx="150.06" cy="159.80" r="3.38" />
            <circle cx="169.31" cy="159.78" r="3.52" />
            <circle cx="178.97" cy="159.80" r="3.35" />
            <circle cx="188.47" cy="159.78" r="3.36" />
            <circle cx="332.62" cy="159.78" r="3.41" />
            <circle cx="342.09" cy="159.80" r="3.42" />
            <circle cx="351.70" cy="159.78" r="3.48" />
            <circle cx="380.43" cy="159.76" r="3.38" />
            <circle cx="409.30" cy="159.80" r="3.39" />
            <circle cx="418.98" cy="159.81" r="3.44" />
            <circle cx="428.55" cy="159.80" r="3.39" />
            <circle cx="438.03" cy="159.77" r="3.42" />
            <circle cx="447.74" cy="159.80" r="3.53" />
            <circle cx="457.38" cy="159.81" r="3.43" />
            <circle cx="466.86" cy="159.76" r="3.38" />
            <circle cx="476.53" cy="159.81" r="3.51" />
            <circle cx="486.25" cy="159.79" r="3.40" />
            <circle cx="495.66" cy="159.79" r="3.43" />
            <circle cx="505.30" cy="159.80" r="3.42" />
            <circle cx="515.06" cy="159.78" r="3.39" />
            <circle cx="524.54" cy="159.81" r="3.39" />
            <circle cx="534.03" cy="159.79" r="3.38" />
            <circle cx="543.84" cy="159.82" r="3.37" />
            <circle cx="553.40" cy="159.82" r="3.39" />
            <circle cx="582.22" cy="159.76" r="3.41" />
            <circle cx="591.70" cy="159.78" r="3.47" />
            <circle cx="159.60" cy="159.82" r="3.38" />
            <circle cx="572.59" cy="159.85" r="3.48" />
            <circle cx="121.30" cy="169.33" r="3.32" />
            <circle cx="130.76" cy="169.34" r="3.32" />
            <circle cx="140.48" cy="169.37" r="3.39" />
            <circle cx="150.16" cy="169.35" r="3.28" />
            <circle cx="159.62" cy="169.30" r="3.30" />
            <circle cx="169.28" cy="169.35" r="3.43" />
            <circle cx="178.96" cy="169.30" r="3.28" />
            <circle cx="322.93" cy="169.36" r="3.43" />
            <circle cx="332.61" cy="169.37" r="3.32" />
            <circle cx="342.14" cy="169.38" r="3.32" />
            <circle cx="351.72" cy="169.37" r="3.38" />
            <circle cx="361.38" cy="169.37" r="3.33" />
            <circle cx="370.92" cy="169.32" r="3.34" />
            <circle cx="380.39" cy="169.34" r="3.31" />
            <circle cx="390.28" cy="169.36" r="3.29" />
            <circle cx="399.76" cy="169.33" r="3.33" />
            <circle cx="409.31" cy="169.34" r="3.33" />
            <circle cx="419.02" cy="169.33" r="3.38" />
            <circle cx="428.55" cy="169.32" r="3.26" />
            <circle cx="438.09" cy="169.30" r="3.33" />
            <circle cx="447.76" cy="169.38" r="3.46" />
            <circle cx="457.35" cy="169.31" r="3.38" />
            <circle cx="466.84" cy="169.33" r="3.31" />
            <circle cx="476.52" cy="169.32" r="3.42" />
            <circle cx="486.28" cy="169.38" r="3.36" />
            <circle cx="495.76" cy="169.28" r="3.31" />
            <circle cx="505.33" cy="169.35" r="3.40" />
            <circle cx="515.05" cy="169.38" r="3.32" />
            <circle cx="524.55" cy="169.36" r="3.31" />
            <circle cx="534.05" cy="169.29" r="3.31" />
            <circle cx="543.85" cy="169.34" r="3.30" />
            <circle cx="553.40" cy="169.32" r="3.33" />
            <circle cx="562.88" cy="169.35" r="3.32" />
            <circle cx="188.40" cy="178.67" r="3.32" />
            <circle cx="313.27" cy="178.72" r="3.33" />
            <circle cx="361.37" cy="178.70" r="3.36" />
            <circle cx="370.91" cy="178.69" r="3.32" />
            <circle cx="390.22" cy="178.67" r="3.28" />
            <circle cx="409.26" cy="178.74" r="3.33" />
            <circle cx="438.10" cy="178.68" r="3.31" />
            <circle cx="457.36" cy="178.69" r="3.32" />
            <circle cx="505.30" cy="178.72" r="3.35" />
            <circle cx="534.01" cy="178.70" r="3.31" />
            <circle cx="130.74" cy="178.72" r="3.29" />
            <circle cx="140.41" cy="178.72" r="3.35" />
            <circle cx="150.06" cy="178.72" r="3.27" />
            <circle cx="322.89" cy="178.74" r="3.37" />
            <circle cx="332.56" cy="178.70" r="3.28" />
            <circle cx="342.06" cy="178.75" r="3.29" />
            <circle cx="351.67" cy="178.72" r="3.38" />
            <circle cx="380.32" cy="178.76" r="3.31" />
            <circle cx="399.71" cy="178.72" r="3.30" />
            <circle cx="418.98" cy="178.71" r="3.35" />
            <circle cx="428.57" cy="178.71" r="3.27" />
            <circle cx="447.75" cy="178.70" r="3.41" />
            <circle cx="466.89" cy="178.72" r="3.31" />
            <circle cx="476.50" cy="178.74" r="3.43" />
            <circle cx="486.25" cy="178.76" r="3.31" />
            <circle cx="495.75" cy="178.73" r="3.35" />
            <circle cx="515.02" cy="178.74" r="3.29" />
            <circle cx="524.53" cy="178.71" r="3.28" />
            <circle cx="543.90" cy="178.73" r="3.28" />
            <circle cx="553.40" cy="178.72" r="3.28" />
            <circle cx="562.90" cy="178.72" r="3.30" />
            <circle cx="44.49" cy="188.19" r="3.51" />
            <circle cx="140.47" cy="188.18" r="3.46" />
            <circle cx="150.08" cy="188.24" r="3.36" />
            <circle cx="169.32" cy="188.19" r="3.52" />
            <circle cx="188.48" cy="188.17" r="3.39" />
            <circle cx="198.13" cy="188.17" r="3.47" />
            <circle cx="303.75" cy="188.18" r="3.43" />
            <circle cx="313.22" cy="188.19" r="3.41" />
            <circle cx="322.92" cy="188.15" r="3.46" />
            <circle cx="332.60" cy="188.20" r="3.37" />
            <circle cx="342.07" cy="188.13" r="3.35" />
            <circle cx="351.72" cy="188.23" r="3.44" />
            <circle cx="361.42" cy="188.15" r="3.41" />
            <circle cx="370.93" cy="188.18" r="3.35" />
            <circle cx="380.38" cy="188.19" r="3.36" />
            <ellipse
              cx="0.00"
              cy="0.00"
              transform="translate(390.19,188.21) rotate(81.1)"
              rx="3.45"
              ry="3.23"
            />
            <circle cx="399.74" cy="188.19" r="3.38" />
            <circle cx="409.30" cy="188.20" r="3.41" />
            <circle cx="418.95" cy="188.19" r="3.41" />
            <circle cx="428.59" cy="188.23" r="3.38" />
            <circle cx="438.06" cy="188.19" r="3.37" />
            <circle cx="466.93" cy="188.21" r="3.34" />
            <circle cx="476.57" cy="188.16" r="3.46" />
            <circle cx="486.23" cy="188.17" r="3.39" />
            <circle cx="495.76" cy="188.19" r="3.39" />
            <circle cx="515.01" cy="188.17" r="3.33" />
            <circle cx="524.59" cy="188.23" r="3.36" />
            <circle cx="534.03" cy="188.20" r="3.41" />
            <circle cx="150.06" cy="197.79" r="3.32" />
            <circle cx="159.56" cy="197.77" r="3.32" />
            <circle cx="169.29" cy="197.80" r="3.44" />
            <circle cx="178.98" cy="197.76" r="3.28" />
            <circle cx="303.73" cy="197.73" r="3.35" />
            <circle cx="313.21" cy="197.77" r="3.32" />
            <circle cx="322.83" cy="197.80" r="3.40" />
            <circle cx="332.60" cy="197.74" r="3.32" />
            <circle cx="342.07" cy="197.78" r="3.33" />
            <circle cx="351.69" cy="197.75" r="3.41" />
            <circle cx="361.43" cy="197.75" r="3.32" />
            <circle cx="370.91" cy="197.76" r="3.32" />
            <circle cx="380.40" cy="197.74" r="3.31" />
            <circle cx="390.23" cy="197.77" r="3.30" />
            <circle cx="399.78" cy="197.77" r="3.30" />
            <circle cx="409.23" cy="197.76" r="3.31" />
            <circle cx="418.99" cy="197.73" r="3.34" />
            <circle cx="428.53" cy="197.76" r="3.30" />
            <circle cx="476.51" cy="197.74" r="3.43" />
            <circle cx="486.27" cy="197.76" r="3.29" />
            <circle cx="514.99" cy="197.75" r="3.29" />
            <circle cx="524.52" cy="197.76" r="3.29" />
            <circle cx="534.03" cy="197.76" r="3.30" />
            <circle cx="562.95" cy="197.78" r="3.29" />
            <circle cx="178.97" cy="207.10" r="3.25" />
            <circle cx="198.08" cy="207.15" r="3.37" />
            <circle cx="207.77" cy="207.11" r="3.32" />
            <circle cx="217.25" cy="207.12" r="3.33" />
            <circle cx="313.23" cy="207.12" r="3.29" />
            <circle cx="322.91" cy="207.14" r="3.40" />
            <circle cx="332.56" cy="207.14" r="3.31" />
            <circle cx="342.12" cy="207.10" r="3.30" />
            <circle cx="351.71" cy="207.12" r="3.39" />
            <circle cx="361.40" cy="207.14" r="3.36" />
            <circle cx="370.90" cy="207.12" r="3.33" />
            <circle cx="380.36" cy="207.13" r="3.31" />
            <circle cx="390.25" cy="207.05" r="3.29" />
            <circle cx="399.74" cy="207.08" r="3.28" />
            <circle cx="409.32" cy="207.12" r="3.29" />
            <circle cx="418.98" cy="207.11" r="3.38" />
            <circle cx="428.58" cy="207.10" r="3.29" />
            <circle cx="534.03" cy="207.12" r="3.28" />
            <circle cx="562.93" cy="207.10" r="3.30" />
            <circle cx="361.39" cy="216.57" r="3.39" />
            <circle cx="380.37" cy="216.56" r="3.36" />
            <circle cx="390.25" cy="216.55" r="3.35" />
            <circle cx="399.74" cy="216.54" r="3.33" />
            <circle cx="198.11" cy="216.55" r="3.40" />
            <circle cx="207.68" cy="216.59" r="3.36" />
            <circle cx="217.27" cy="216.57" r="3.36" />
            <circle cx="226.73" cy="216.58" r="3.32" />
            <circle cx="236.56" cy="216.59" r="3.30" />
            <circle cx="322.90" cy="216.62" r="3.46" />
            <circle cx="332.59" cy="216.59" r="3.34" />
            <circle cx="351.71" cy="216.58" r="3.42" />
            <circle cx="370.91" cy="216.58" r="3.33" />
            <circle cx="409.27" cy="216.57" r="3.32" />
            <circle cx="418.97" cy="216.55" r="3.39" />
            <circle cx="486.23" cy="216.60" r="3.34" />
            <circle cx="515.04" cy="216.59" r="3.35" />
            <circle cx="524.54" cy="216.57" r="3.34" />
            <circle cx="553.40" cy="216.53" r="3.35" />
            <circle cx="217.31" cy="226.19" r="3.32" />
            <circle cx="409.27" cy="226.13" r="3.28" />
            <circle cx="543.86" cy="226.19" r="3.34" />
            <circle cx="188.50" cy="226.21" r="3.29" />
            <circle cx="198.10" cy="226.20" r="3.36" />
            <circle cx="207.78" cy="226.16" r="3.27" />
            <circle cx="226.72" cy="226.21" r="3.31" />
            <circle cx="236.58" cy="226.20" r="3.29" />
            <circle cx="361.44" cy="226.21" r="3.33" />
            <circle cx="370.94" cy="226.20" r="3.26" />
            <circle cx="380.35" cy="226.18" r="3.28" />
            <circle cx="390.25" cy="226.18" r="3.27" />
            <circle cx="399.74" cy="226.18" r="3.27" />
            <circle cx="524.59" cy="226.19" r="3.28" />
            <circle cx="553.35" cy="226.19" r="3.31" />
            <circle cx="562.98" cy="226.21" r="3.29" />
            <circle cx="572.59" cy="226.22" r="3.38" />
            <circle cx="524.59" cy="235.51" r="3.35" />
            <circle cx="620.52" cy="235.49" r="3.37" />
            <circle cx="188.45" cy="235.59" r="3.34" />
            <circle cx="198.13" cy="235.51" r="3.41" />
            <circle cx="207.72" cy="235.57" r="3.35" />
            <circle cx="217.24" cy="235.60" r="3.35" />
            <circle cx="226.72" cy="235.58" r="3.36" />
            <circle cx="236.57" cy="235.55" r="3.29" />
            <circle cx="246.12" cy="235.55" r="3.36" />
            <circle cx="255.60" cy="235.57" r="3.36" />
            <circle cx="265.32" cy="235.56" r="3.42" />
            <circle cx="361.40" cy="235.56" r="3.37" />
            <circle cx="370.91" cy="235.58" r="3.31" />
            <circle cx="380.35" cy="235.55" r="3.36" />
            <circle cx="390.23" cy="235.54" r="3.31" />
            <circle cx="399.78" cy="235.54" r="3.32" />
            <circle cx="409.22" cy="235.58" r="3.34" />
            <circle cx="562.94" cy="235.54" r="3.30" />
            <circle cx="591.70" cy="235.54" r="3.35" />
            <circle cx="601.37" cy="235.58" r="3.52" />
            <circle cx="611.03" cy="235.57" r="3.34" />
            <circle cx="188.39" cy="244.89" r="3.32" />
            <circle cx="198.12" cy="244.92" r="3.41" />
            <circle cx="207.73" cy="244.88" r="3.34" />
            <circle cx="217.30" cy="244.82" r="3.34" />
            <circle cx="226.70" cy="244.86" r="3.34" />
            <circle cx="236.55" cy="244.85" r="3.32" />
            <circle cx="246.11" cy="244.88" r="3.32" />
            <circle cx="255.63" cy="244.84" r="3.34" />
            <circle cx="265.36" cy="244.88" r="3.43" />
            <circle cx="361.40" cy="244.86" r="3.33" />
            <circle cx="370.92" cy="244.87" r="3.32" />
            <circle cx="380.39" cy="244.83" r="3.30" />
            <circle cx="390.28" cy="244.81" r="3.32" />
            <circle cx="399.77" cy="244.93" r="3.33" />
            <circle cx="409.31" cy="244.91" r="3.34" />
            <circle cx="553.35" cy="244.87" r="3.33" />
            <circle cx="601.44" cy="244.87" r="3.44" />
            <circle cx="611.02" cy="244.89" r="3.33" />
            <circle cx="198.09" cy="254.52" r="3.37" />
            <circle cx="207.76" cy="254.60" r="3.34" />
            <circle cx="217.26" cy="254.57" r="3.32" />
            <circle cx="226.75" cy="254.60" r="3.34" />
            <circle cx="236.57" cy="254.59" r="3.32" />
            <circle cx="246.18" cy="254.60" r="3.33" />
            <circle cx="255.63" cy="254.61" r="3.32" />
            <circle cx="361.39" cy="254.59" r="3.35" />
            <circle cx="370.85" cy="254.58" r="3.33" />
            <circle cx="380.37" cy="254.59" r="3.32" />
            <circle cx="390.25" cy="254.63" r="3.34" />
            <circle cx="399.77" cy="254.57" r="3.31" />
            <circle cx="409.22" cy="254.57" r="3.33" />
            <circle cx="428.61" cy="254.58" r="3.30" />
            <circle cx="572.53" cy="254.61" r="3.41" />
            <circle cx="582.21" cy="254.61" r="3.34" />
            <circle cx="601.32" cy="254.61" r="3.44" />
            <circle cx="217.23" cy="263.95" r="3.30" />
            <circle cx="255.60" cy="263.91" r="3.31" />
            <circle cx="361.40" cy="263.91" r="3.34" />
            <circle cx="370.92" cy="263.91" r="3.28" />
            <circle cx="390.23" cy="263.88" r="3.25" />
            <circle cx="582.21" cy="263.90" r="3.29" />
            <circle cx="591.69" cy="263.94" r="3.33" />
            <circle cx="601.37" cy="263.95" r="3.41" />
            <circle cx="207.78" cy="263.97" r="3.27" />
            <circle cx="226.75" cy="263.96" r="3.29" />
            <circle cx="236.59" cy="263.92" r="3.26" />
            <circle cx="246.17" cy="263.94" r="3.27" />
            <circle cx="380.36" cy="263.93" r="3.28" />
            <circle cx="399.78" cy="263.96" r="3.28" />
            <circle cx="418.95" cy="263.97" r="3.34" />
            <circle cx="562.93" cy="263.92" r="3.27" />
            <circle cx="572.59" cy="263.96" r="3.36" />
            <circle cx="207.79" cy="273.36" r="3.36" />
            <circle cx="217.29" cy="273.32" r="3.36" />
            <circle cx="226.74" cy="273.34" r="3.32" />
            <circle cx="236.57" cy="273.33" r="3.30" />
            <circle cx="246.13" cy="273.32" r="3.28" />
            <circle cx="370.87" cy="273.37" r="3.31" />
            <circle cx="380.37" cy="273.37" r="3.33" />
            <circle cx="390.22" cy="273.31" r="3.28" />
            <circle cx="399.77" cy="273.27" r="3.30" />
            <circle cx="418.96" cy="273.34" r="3.40" />
            <circle cx="543.87" cy="273.32" r="3.34" />
            <circle cx="553.38" cy="273.34" r="3.34" />
            <circle cx="562.84" cy="273.31" r="3.31" />
            <circle cx="572.55" cy="273.32" r="3.39" />
            <circle cx="582.22" cy="273.35" r="3.35" />
            <circle cx="591.76" cy="273.27" r="3.30" />
            <circle cx="601.34" cy="273.34" r="3.50" />
            <circle cx="611.02" cy="273.32" r="3.33" />
            <circle cx="217.29" cy="282.96" r="3.35" />
            <circle cx="226.72" cy="282.97" r="3.35" />
            <circle cx="370.90" cy="282.97" r="3.36" />
            <circle cx="553.40" cy="282.99" r="3.35" />
            <circle cx="582.24" cy="282.97" r="3.32" />
            <circle cx="591.73" cy="282.92" r="3.37" />
            <circle cx="207.77" cy="282.98" r="3.31" />
            <circle cx="236.62" cy="282.96" r="3.32" />
            <circle cx="380.39" cy="283.00" r="3.34" />
            <circle cx="390.20" cy="283.02" r="3.34" />
            <circle cx="562.96" cy="283.02" r="3.30" />
            <circle cx="572.55" cy="283.00" r="3.38" />
            <circle cx="601.39" cy="283.03" r="3.46" />
            <circle cx="610.99" cy="283.02" r="3.31" />
            <circle cx="620.57" cy="282.99" r="3.33" />
            <circle cx="207.77" cy="292.36" r="3.36" />
            <circle cx="217.26" cy="292.37" r="3.41" />
            <circle cx="226.72" cy="292.38" r="3.34" />
            <circle cx="236.58" cy="292.31" r="3.32" />
            <circle cx="370.94" cy="292.35" r="3.35" />
            <circle cx="380.41" cy="292.37" r="3.36" />
            <circle cx="553.38" cy="292.36" r="3.32" />
            <circle cx="562.88" cy="292.35" r="3.33" />
            <circle cx="591.76" cy="292.36" r="3.37" />
            <circle cx="601.37" cy="292.33" r="3.47" />
            <circle cx="611.02" cy="292.33" r="3.35" />
            <circle cx="217.28" cy="301.73" r="3.35" />
            <circle cx="601.34" cy="301.72" r="3.45" />
            <circle cx="198.08" cy="301.73" r="3.35" />
            <circle cx="207.75" cy="301.73" r="3.33" />
            <circle cx="226.73" cy="301.72" r="3.30" />
            <circle cx="611.01" cy="301.76" r="3.31" />
            <circle cx="198.05" cy="311.35" r="3.39" />
            <circle cx="207.72" cy="311.35" r="3.33" />
            <circle cx="611.05" cy="311.37" r="3.34" />
            <circle cx="658.91" cy="311.31" r="3.34" />
            <ellipse
              cx="0.00"
              cy="0.00"
              transform="translate(198.12,320.76) rotate(-0.1)"
              rx="3.51"
              ry="3.29"
            />
            <circle cx="207.76" cy="320.77" r="3.34" />
            <circle cx="649.39" cy="320.79" r="3.36" />
            <circle cx="198.14" cy="330.11" r="3.47" />
            <circle cx="207.78" cy="330.12" r="3.39" />
            <circle cx="207.71" cy="339.68" r="3.45" />
            <circle cx="198.10" cy="339.72" r="3.49" />
          </svg>
        </div>
      </footer>
    </>
  );
};

export default Footer;

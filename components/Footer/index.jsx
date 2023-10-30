"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathName = usePathname();
  const [isContactPage, setIsContactPage] = useState(false);

  useEffect(() => {
    if (pathName === "/contact") setIsContactPage(true);
    else setIsContactPage(false);
  }, [pathName]);

  return (
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
                We strive to always serve you. <br />- Trust, Excellence, Global
                Reach -
              </p>
              <div className="flex items-center">
                <a
                  href="https://www.facebook.com/faithimports"
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
                  href="#"
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
                  href="www.linkedin.com/in/faithimports"
                  targer="_blank"
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
                    <svg height="0.875em" viewBox="0 0 512 512" fill="#04AA82">
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
                    <svg height="0.875em" viewBox="0 0 512 512" fill="#04AA82">
                      <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-352a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
                    </svg>
                  </div>
                  <div>
                    <a
                      href="/services"
                      className="inline-block text-base font-medium text-primary hover:text-body-color"
                    >
                      {" "}
                      Services{" "}
                    </a>
                  </div>
                </li>
                <li className="mb-4 flex items-center gap-1">
                  <div className="ml-1">
                    <svg height="0.875em" viewBox="0 0 512 512" fill="#04AA82">
                      <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-352a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
                    </svg>
                  </div>
                  <div>
                    <a
                      href="/gallery"
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
            Crafted by{" "}
            <a href="#" className="transition hover:text-secondary">
              Bereket
            </a>
          </p>
        </div>
      </div>

      <div className="absolute transform -top-20 left-0 w-full h-fit md:top-[120px] lg:top-[-140px] xl:top-[-180px] xl:h-[570px] xl:overflow-hidden md:scale-[1.1] lg:scale-100 z-[-1]">
      <div className="w-full h-full transform md:scale-[1.1] lg:scale-100">
        <object
          data="/images/footer-map.svg"
          type="image/svg+xml"
          className="h-full w-full pointer-events-none"
        ></object>
      </div>
    </div>
    </footer>
  );
};

export default Footer;

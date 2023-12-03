"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import menuData from "./menuData";
import { usePathname } from "next/navigation";

const Header = () => {
  // Current route & active link
  const currentRoute = usePathname();
  const [activeLinkClass, setActiveLinkClass] = useState("");
  const pagePaths = [
    "/",
    "/about",
    "/services",
    "/computers",
    "/statinary",
    "/maintenance",
    "/gallery",
    "/contact",
  ];
  useEffect(() => {
    setNavbarOpen(false);
    if (pagePaths.includes(currentRoute)) {
      setActiveLinkClass("!text-secondary font-bold");
    } else setActiveLinkClass("");
  }, [currentRoute]);

  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <>
      <header
        className={`header top-0 left-0 z-40 flex w-full items-center bg-transparent ${
          sticky
            ? "!fixed !z-[9999] !bg-[#151f34] !bg-opacity-80 shadow-sticky backdrop-blur-sm !transition dark:!bg-primary dark:!bg-opacity-20"
            : "absolute z-[20]"
        }`}
      >
        <div className="w-full">
          <div className="relative mx-4 flex items-center justify-between">
            <div
              className={`w-46 sm:w-65 max-w-full px-4 xl:mr-12 ${
                sticky ? "py-2" : "py-4"
              }`}
            >
              <Link href="/" className={`header-logo block `}>
                <Image
                  src="/images/logo/logo-dark.png"
                  alt="logo"
                  width={200}
                  height={85}
                  quality={100}
                  className={`w-auto ${sticky ? "hidden" : ""}`}
                  priority
                />
                <Image
                  src="/images/logo/logo-light.png"
                  alt="logo"
                  width={200}
                  height={85}
                  quality={100}
                  className={`hidden w-auto ${sticky ? "!block" : ""}`}
                  priority
                />
              </Link>
            </div>
            <div className="flex items-center justify-between px-4 mr-10">
              <div>
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] transition-all duration-300 ${
                      sticky ? "bg-white" : "bg-primary"
                    } ${navbarOpen ? " top-[8px] rotate-45" : " "}`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] transition-all duration-300 ${
                      sticky ? "bg-white" : "bg-primary"
                    } ${navbarOpen ? "opacity-0 " : " "}`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] transition-all duration-300 ${
                      sticky ? "bg-white" : "bg-primary"
                    } ${navbarOpen ? " top-[-8px] -rotate-45" : " "}`}
                  />
                </button>
                <nav
                  id="navbarCollapse"
                  className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-white py-4 px-6 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                    navbarOpen
                      ? "visibility top-full opacity-100"
                      : "invisible top-[120%] opacity-0"
                  }`}
                >
                  <ul className="block lg:flex lg:space-x-12">
                    {menuData.map((menuItem, index) => (
                      <li key={menuItem.id} className="group relative">
                        {!menuItem.hasSubMenu ? (
                          <Link
                            href={menuItem.path}
                            className={`flex my-1 py-1 text-base hover:opacity-70 lg:mr-0 lg:inline-flex lg:my-4 lg:py-2 lg:px-0 ${
                              sticky ? "text-dark lg:text-white" : "text-dark"
                            } ${
                              menuItem.path == currentRoute
                                ? "active-link !text-secondary font-bold"
                                : ""
                            }`}
                          >
                            {menuItem.title}
                          </Link>
                        ) : (
                          <>
                            <span>
                              <Link
                                href={menuItem.path}
                                className={`flex cursor-pointer items-center justify-between my-1 py-1 text-base hover:opacity-70 lg:mr-0 lg:inline-flex lg:my-4 lg:py-2 lg:px-0 ${
                                  sticky
                                    ? "text-dark lg:text-white"
                                    : "text-dark"
                                } ${
                                  menuItem.path == currentRoute
                                    ? "!text-secondary font-bold"
                                    : ""
                                }`}
                              >
                                {menuItem.title}
                                <span
                                  className="pl-3"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    handleSubmenu(index);
                                  }}
                                >
                                  <svg
                                    width="15"
                                    height="14"
                                    viewBox="0 0 15 14"
                                  >
                                    <path
                                      d="M7.81602 9.97495C7.68477 9.97495 7.57539 9.9312 7.46602 9.8437L2.43477 4.89995C2.23789 4.70308 2.23789 4.39683 2.43477 4.19995C2.63164 4.00308 2.93789 4.00308 3.13477 4.19995L7.81602 8.77183L12.4973 4.1562C12.6941 3.95933 13.0004 3.95933 13.1973 4.1562C13.3941 4.35308 13.3941 4.65933 13.1973 4.8562L8.16601 9.79995C8.05664 9.90933 7.94727 9.97495 7.81602 9.97495Z"
                                      fill="currentColor"
                                    />
                                  </svg>
                                </span>
                              </Link>
                            </span>
                            <div
                              className={`submenu relative top-full left-0 rounded-md bg-white transition-[top] duration-300 group-hover:opacity-100 dark:bg-dark lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
                                openIndex === index ? "block" : "hidden"
                              }`}
                            >
                              {menuItem.submenu.map((submenuItem) => (
                                <Link
                                  href={submenuItem.path}
                                  key={submenuItem.id}
                                  className={`block rounded pl-3 lg:pl-0 py-2.5 text-sm text-dark hover:opacity-70 dark:text-white lg:px-3 ${
                                    submenuItem.path == currentRoute
                                      ? "!text-secondary font-bold"
                                      : ""
                                  }`}
                                >
                                  {submenuItem.title}
                                </Link>
                              ))}
                            </div>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

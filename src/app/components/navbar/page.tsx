"use client";
import React from "react";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import "my.css";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigation = [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Services", href: "#" },
    { name: "Process", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Contact", href: "#" },
  ];
  const [mobileNavActive, setMobileNavActive] = useState(false);

  const handleMobileNavToggle = () => {
    setMobileNavActive(!mobileNavActive);
  };

  return (
    <div>
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className={`${
            mobileNavActive
              ? "mobile-nav-active"
              : "flex items-center justify-between p-6 lg:px-8"
          } navmenu transition-all duration-800`}
          aria-label="Global"
        >
          <div className="flex lg:flex-1 ">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
            </a>
          </div>
          <div className="flex lg:hidden -mt-2  ">
            {/* <button
              type="button"
              className="w-10 h-12  inline-items justify-center rounded-md p-2.5 text-gray-700  mobile-nav-toggle "
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <div className="h-12 w-10 flex mr-4 -mt-4 navglass">
                <Bars3Icon className="h-full w-full" aria-hidden="true" />
              </div>
            </button> */}
            {mobileMenuOpen ? (
              <div className="w-10 h-12 inline-items justify-center rounded-md p-2.5 text-gray-700 mobile-nav-toggle">
                <span className="sr-only">Open main menu</span>
              </div>
            ) : (
              <button
                type="button"
                className="w-10 h-12 inline-items justify-center rounded-md p-2.5 text-gray-700 mobile-nav-toggle "
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <div className="h-12 w-10 flex mr-4 -mt-4 navglass">
                  <Bars3Icon className="h-full w-full" aria-hidden="true" />
                </div>
              </button>
            )}
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog
          as="div"
          // className={`lg:hidden fixed inset-y-10 inset-x-10 z-50 w-3/4 overflow-y-auto bg-transparent px-6 py-6 navglass sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 transform transition-transform transition-opacity delay-200 ${
          //   mobileMenuOpen
          //     ? "translate-x-0 opacity-100 transition-slow"
          //     : "translate-x-full opacity-0 transition-slow"
          // }`}
          className={`lg:hidden fixed inset-y-10 inset-x-10 z-50 w-3/4 overflow-y-auto bg-transparent px-6 py-6 navglass sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 transform transition-transform transition-opacity delay-200 ${
            mobileMenuOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
          }`}
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <Dialog.Panel className="fixed inset-y-0 flex-grow right-0 z-50 w-full overflow-y-auto bg-transparent px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="bleffect h-full rounded">
              <div className="flex items-center justify-end">
               
                <button
                  type="button"
                  className=" rounded-md p-2.5 text-gray-700 "
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon
                    className="h-10 w-10 mobile-nav-toggle navglass"
                    aria-hidden="true"
                  />
                </button>
              </div>

              <div className="mt-6 flex-grow  flow-root">
                <div className="space-y-6  text-center  ">
                  <div className="mr-4 ml-4 ">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg text-E80358 px-3 py-4  font-semibold leading-7 text-xl  hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </div>
  );
};
export default Navbar;

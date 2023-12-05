import React, { useState } from "react";

import {IMAGE} from "../../assets/images/index"

const Nav = () => { 
  const NavLinks = [ // array for menu navbar
    { title: "Home", link: "/" },
    {
      title: "Product", subpages: [
        { title: "General Insurance", link: "/GeneralInsurance" },
        { title: "Contractor Insurance", link: "/ContractorInsurance" },
      ],
    },
    { title: "Gallery", link: "/Gallery" },
    { title: "Location", link: "/Location" },
    { title: "Contact", link: "/Contact" },
  ];

  const [open, setOpen] = useState(false); // Methode for navbar dropdown on mobile and dropdown for product. 
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setOpen(!open);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setOpen(false); 
  };

  const toggleProductDropdown = () => {
    setProductDropdownOpen(!productDropdownOpen);
  };

  return (
    <header className="navbar-shadow">
      <nav className="px-4 py-2 md:px-8 lg:px-12 xl:px-24 md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <a href="/" className="focus:outline-none" tabIndex="0">
            <img src={IMAGE.icon_logo} alt="logo-perusahaan" className="w-20 h-20" />
          </a>
          <div
            onClick={toggleMobileMenu} //Onclick dropdwon for mobile
            className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
          >
            <button
              id="mobile-menu-toggle"
              aria-label="mobile-menu-button"
              type="button"
              className="md:hidden rounded-lg focus:outline-none focus:shadow-outline"
            >
              <svg
                fill="currentColor"
                aria-labelledby="mobile-menu-toggle"
                viewBox="0 0 20 20"
                className="w-6 h-6"
              >
                <path
                  id="menu-icon"
                  fillRule="evenodd"
                  className={mobileMenuOpen ? "hidden" : ""}
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
                <path
                  id="close-icon"
                  fillRule="evenodd"
                  className={mobileMenuOpen ? "" : "hidden"}
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <ul className={`flex-col md:flex md:justify-end md:flex-row ${mobileMenuOpen ? "" : "hidden"}`} id="menu">  {/*menu navbar and subPages on product dropdown*/}
          {NavLinks.map((Link) => (
            <li key={Link.title} className="md:my-0 my-7 cursor-pointer ">
              {Link.subpages ? (
                <div id="dropdown-menu"
                  className="relative group"
                >
                  <a
                    href={Link.link}// dropdown for subPages on product and icon product
                    className="px-4 py-2 text-sm md:text-base rounded-lg focus:outline-none focus:shadow-outline"
                    onClick={(e) => {
                      e.preventDefault();
                      toggleProductDropdown();
                    }}
                  >
                    {Link.title}
                    <svg 

                      id="dropdown-icon"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      className={`inline w-4 h-4 transition-transform duration-200 transform cursor-pointer ml-2 ${productDropdownOpen ? "transform rotate-180" : ""}`}
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                  <ul className={`absolute right-0 w-full origin-top-right rounded-md shadow-lg md:w-48 mt-2 ${productDropdownOpen ? "" : "hidden"}`} id="dropdown-product">
                    {Link.subpages.map((subpage) => (
                      <li key={subpage.title} className="px-2 py-2 bg-white rounded-md shadow"> {/*subPages on product*/}
                        <a
                          href={subpage.link}
                          className="block px-4 py-2 text-sm bg-transparent rounded-lg focus:outline-none focus:shadow-outline"
                        >
                          {subpage.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <a
                  href={Link.link}
                  className="px-4 py-2 text-sm md:text-base rounded-lg focus:outline-none focus:shadow-outline"
                >
                  {Link.title}
                </a>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
import React, { useState } from "react";
import logoMitrasona from "../../../assets/images/icon/logo.webp"
import "./Navbar.css"; 

const Nav = () => { //function for navbar without dropdown in production and not yet responsive design
  const NavLinks = [
    { title: "Home", link: "/" },
    { title: "Product", link: "/Product" },
    { title: "Gallery", link: "/Gallery" },
    { title: "Location", link: "/Location" },
    { title: "Contact", link: "/Contact" },
  ];
  const [open, setOpen] = useState(false); 

  return (
    <header className="navbar-shadow">
      <nav className="px-4 py-2 md:px-8 lg:px-12 xl:px-24 md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <a href="/Home" className="focus:outline-none" tabIndex="0">
            <img
              src={logoMitrasona}
              alt="logo-perusahaan"
              className="w-20 h-20"
            />
          </a>
          <div onClick={() => setOpen(!open)} className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
          <button
            id="mobile-menu-toggle"
            aria-label="mobile-menu-button"
            type="button"
            class="md:hidden rounded-lg focus:outline-none focus:shadow-outline"
          >
            <svg
              fill="currentColor"
              aria-labelledby="mobile-menu-toggle"
              viewBox="0 0 20 20"
              class="w-6 h-6"
            >
              <path
                id="menu-icon"
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
              <path
                id="close-icon"
                fill-rule="evenodd"
                class="hidden"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        </div>
        <ul className="hidden flex-col md:flex md:justify-end md:flex-row">
          {NavLinks.map((Link) => (
            <li key={Link.title} >
              <a href={Link.link} className="px-4 py-2 text-sm md:text-base rounded-lg focus:outline-none focus:shadow-outline">{Link.title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;


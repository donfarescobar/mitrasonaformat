import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";

import { IMAGE } from "../../assets/images/index";
import "../../index.css"



const  Footer = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [dropdownProduct, setDropdownProduct] = useState(false);
  const [dropdownGallery, setDropdownGallery] = useState(false);
  const [dropdownLocation, setDropdownLocation] = useState(false);
  const [dropdownContact, setDropdownContact] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isMobile = windowWidth < 640;

  const toggleDropdownProduct = () => {
    setDropdownProduct(!dropdownProduct);
  };

  const toggleDropdownGallery = () => {
    setDropdownGallery(!dropdownGallery);
  };

  const toggleDropdownLocation = () => {
    setDropdownLocation(!dropdownLocation);
  };

  const toggleDropdownContact = () => {
    setDropdownContact(!dropdownContact);
  };


  return (
    <>
      <footer className="footer-background">
        <div className="p-4 lg:py-16 md:px-8 lg:px-12 xl:px-24">
          <div className="flex flex-col md:flex-row gap-6 md:gap-14 lg:gap-28">
            <div className="w-full md:w-1/5 flex flex-col gap-3 xl:gap-9">
              <div
                className="flex flex-col items-center gap-1 md:gap-2 lg:gap-4 xl:gap-6"
              >
                <img
                  className="w-24 h-24 object-contain object-center"
                  src={IMAGE.icon_logo}
                  alt="logo-perusahaan" />
                <p
                  className="footer-card-text text-center max-w-custom-xs text-base lg:text-lg"
                >
                  Register and Supervised
                </p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  className="w-24 h-24 object-contain object-center"
                  src={IMAGE.icon_ojk}
                  alt="logo-ojk" />
              </div>
            </div>
            <div
              className="w-full md:w-4/5 ml-0 md:ml-10 lg:ml-0 flex flex-col lg:gap-y-14 lg:my-6"
            >            
         
                
                  <div className="grid grid-cols-1 text-center md:text-left gap-5 lg:gap-10 sm:grid-cols-2 xl:grid-cols-4 xl:gap-14">
                  {!isMobile && (
                    <>
                    {/* Product */}
                    <div className="flex flex-col gap-2">
                      <h2 className="text-yellow footer-yellow-header text-lg lg:text-xl">
                        Product
                      </h2>
                      <div className="flex flex-col gap-1 md:gap-2 xl:gap-3">
                        <Link to="/GeneralInsurance" className="footer-card-text text-sm md:text-base">
                          General Insurance
                        </Link>
                        <Link to="/ContractorInsurance" className="footer-card-text text-sm md:text-base">
                          Contractor Insurance
                        </Link>
                      </div>
                    </div>

                    {/* Gallery */}
                    <div className="flex flex-col gap-2">
                      <h2 className="text-yellow footer-yellow-header text-lg lg:text-xl">
                        Gallery
                      </h2>
                      <div className="flex flex-col gap-1 md:gap-2 xl:gap-3">
                        <Link to="/Gallery#program-overview" className="footer-card-text text-sm md:text-base">
                          Program Overview
                        </Link>
                        <Link to="/Gallery#our-partners" className="footer-card-text text-sm md:text-base">
                          Our Partners
                        </Link>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="flex flex-col gap-2">
                      <h2 className="text-yellow footer-yellow-header text-lg lg:text-xl">
                        Location
                      </h2>
                      <div className="flex flex-col gap-1 md:gap-2 xl:gap-3">
                        <Link to="/Location" className="footer-card-text text-sm md:text-base">
                          Our Office
                        </Link>
                        <Link to="/Location" className="footer-card-text text-sm md:text-base">
                          Working Hours
                        </Link>
                      </div>
                    </div>

                    {/* Contact */}
                    <div className="flex flex-col gap-2">
                      <h2 className="text-yellow footer-yellow-header text-lg lg:text-xl">
                        Contact
                      </h2>
                      <div className="flex flex-col gap-1 md:gap-2 xl:gap-3">
                        <Link to="tel:6281298444393" className="underline underline-offset-8 footer-card-text text-sm md:text-base">
                          +6281298444393
                        </Link>
                        <Link to="mailto:Mspmitra@gmail.com" className="footer-card-text text-sm md:text-base">
                          Mspmitra@gmail.com
                        </Link>
                      </div>
                    </div>

                    {/* Address */}
                    <div className="flex flex-col gap-2 text-center md:text-left ">
                      <h2 className="text-yellow footer-yellow-header text-lg lg:text-xl ">
                        Address
                      </h2>
                      <div>
                        <p className="footer-card-text text-sm md:text-base  "
                        >
                          Ruko Mega Grosir Cempaka Mas Blok M1 no.33 Jakarta Pusat - Indonesia
                        </p>
                      </div>
                    </div>
                    </>
                    )}
                    </div>
                    

                    {/* For screens <640px (Mobile) */}
                    <div className="flex flex-col gap-3 self-stretch ">
                    {isMobile && (
                      <>
                    
                      {/* Address */}
                      <div className="flex flex-col gap-2 md:text-left">
                      <h2 className="text-yellow footer-yellow-header text-lg ">
                        Address
                      </h2>
                      <div>
                        <p className=" self-stretch text-white text-base font-normal leading-6 tracking-tight"
                        >
                          Ruko Mega Grosir Cempaka Mas Blok M1 no.33 Jakarta Pusat - Indonesia
                        </p>
                      </div>
                    </div>
                    
                    {/* Product */}
                    <button onClick={toggleDropdownProduct}>
                    <div className={`w-full ${isMobile ? "block" : "hidden"} flex flex-col gap-y-1`}>
                      <div className="flex justify-between items-center">
                        <h2 className="text-yellow footer-yellow-header text-lg ">
                          Product
                        </h2>
                        <svg
                          id="dropdown-icon"
                          fill="white"
                          viewBox="0 0 20 20"
                          className={`inline w-6 h-6 transition-transform duration-200 transform cursor-pointer ml-2 ${dropdownProduct ? "rotate-180" : ""}`}
                          onClick={toggleDropdownProduct}
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          >
                          </path>
                        </svg>
                      </div>
                      {dropdownProduct && (
                        <div className="flex flex-col gap-1  text-left">
                          <Link to="/GeneralInsurance" className="footer-card-text text-sm underline">
                            General Insurance
                          </Link>
                          <Link to="/ContractorInsurance" className=" footer-card-text text-sm underline">
                            Contractor Insurance
                          </Link>
                        </div>
                      )}
                    </div>
                    </button>  

                    {/* Gallery */}
                    <button onClick={toggleDropdownGallery}>
                    <div className={`w-full ${isMobile ? "block" : "hidden"} flex flex-col gap-y-1`}>
                    <div className="flex justify-between items-center">
                      <h2 className="text-yellow footer-yellow-header text-lg ">
                       Gallery
                      </h2> 
                      <svg
                          id="dropdown-icon"
                          fill="white"
                          viewBox="0 0 20 20"
                          className={`inline w-6 h-6 transition-transform duration-200 transform cursor-pointer ml-2 ${dropdownGallery ? "rotate-180" : ""}`}
                          onClick={toggleDropdownGallery}
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          >
                          </path>
                          </svg>
                          </div>
                          
                        {dropdownGallery &&(
                        <div className="flex flex-col gap-1 text-left ">
                        <Link to="/Gallery#program-overview" className="footer-card-text text-sm underline">
                          Program Overview
                        </Link>
                        <Link to="/Gallery#our-partners" className="footer-card-text text-sm underline">
                          Our Partners
                        </Link>
                      </div>
                        )}   
                    </div>
                    </button>

                    {/* Location */}
                    <button onClick={toggleDropdownLocation}>
                    <div className={`w-full ${isMobile ? "block" : "hidden"} flex flex-col gap-y-1`}>
                    <div className="flex justify-between items-center">
                      <h2 className="text-yellow footer-yellow-header text-lg">
                       Location
                      </h2> 
                      <svg
                          id="dropdown-icon"
                          fill="white"
                          viewBox="0 0 20 20"
                          className={`inline w-6 h-6 transition-transform duration-200 transform cursor-pointer ml-2 ${dropdownLocation ? "rotate-180" : ""}`}
                          onClick={toggleDropdownLocation}
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          >
                          </path>
                          </svg>
                          </div>
                        {dropdownLocation &&(
                        <div className="flex flex-col gap-1 text-left ">
                        <Link to="/Location" className="footer-card-text text-sm underline ">
                        Our Office
                        </Link>
                        <Link to="/Location" className="footer-card-text text-sm underline">
                        Working Hours
                        </Link>
                      </div>
                        )}   
                    </div>
                    </button>

                    {/* Contact */}
                    <button onClick={toggleDropdownContact}> 
                    <div className={`w-full ${isMobile ? "block" : "hidden"} flex flex-col gap-y-1`}>
                    <div className="flex justify-between items-center">
                      <h2 className="text-yellow footer-yellow-header text-lg">
                        Contact
                      </h2> 
                      <svg
                          id="dropdown-icon"
                          fill="white"
                          viewBox="0 0 20 20"
                          className={`inline w-6 h-6 transition-transform duration-200 transform cursor-pointer ml-2 ${dropdownContact ? "rotate-180" : ""}`}
                          onClick={toggleDropdownContact}
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          >
                          </path>
                          </svg>
                          </div>
                        {dropdownContact &&(
                        <div className="flex flex-col gap-1 text-left">
                        <Link to="tel:6281298444393" className="footer-card-text text-sm underline">
                        Contact
                        </Link>
                        <Link to="mailto:Mspmitra@gmail.com" className="footer-card-text text-sm underline">
                          Our Partners
                        </Link>
                      </div>
                        )}
                    </div>
                    </button>
                   </>
                    )}  
                        </div>
              </div>
            </div>
            </div>
      </footer>
    </>
  );
}

export default Footer;
import React from "react";
import Nav from "../../components/molecules/Navbar/Nav"
import Footer from "../../components/molecules/Footer/Footer"
import "../../index.css"

export default function Location (){
    return(
        <div>
        <Nav />
         <main>
            <section>
                <div className="px-4 py-10 md:px-8 lg:px-12 xl:px-24 lg:py-12">
                <div className="flex flex-col gap-8">
                    <div className="responsive-iframe-wrapper">
                    <iframe
                        id="gmap_canvas"
                        src="https://maps.google.com/maps?q=Ruko%20Mega%20Cempaka%20Mas%20blok%20M%201%20no.%2033,%20Jakarta%20Pusat%20-%20Indonesia&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        title="Lokasi Perusahaan"
                        frameborder="0"
                        scrolling="no"
                        marginheight="0"
                        marginwidth="0"
                    ></iframe>
                    </div>
                    <div className="flex flex-col md:flex-row md:justify-between">
                    <div className="flex flex-col items-start gap-4 md:gap-6 lg:gap-8">
                        <h2 className="location-header text-lg lg:text-2xl">Our Office</h2>
                        <div className="flex items-center justify-center gap-2 md:gap-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            aria-labelledby="icon-phone"
                            width="36"
                            height="36"
                            viewBox="0 0 36 36"
                            fill="none"
                        >
                            <path
                            d="M22.5751 7.5C24.0402 7.78585 25.3867 8.50239 26.4422 9.5579C27.4978 10.6134 28.2143 11.9599 28.5001 13.425M22.5751 1.5C25.6191 1.83815 28.4575 3.20126 30.6245 5.36551C32.7915 7.52976 34.1582 10.3665 34.5001 13.41M33.0001 25.38V29.88C33.0018 30.2978 32.9163 30.7113 32.7489 31.094C32.5816 31.4768 32.3361 31.8204 32.0283 32.1028C31.7204 32.3852 31.357 32.6002 30.9613 32.7341C30.5655 32.8679 30.1462 32.9176 29.7301 32.88C25.1144 32.3785 20.6806 30.8012 16.7851 28.275C13.1609 25.972 10.0881 22.8993 7.78514 19.275C5.25011 15.3618 3.67251 10.9065 3.18014 6.27C3.14266 5.8552 3.19196 5.43714 3.32489 5.04244C3.45783 4.64773 3.6715 4.28503 3.95229 3.97743C4.23309 3.66983 4.57485 3.42406 4.95583 3.25578C5.33681 3.0875 5.74865 3.00039 6.16514 3H10.6651C11.3931 2.99284 12.0988 3.25062 12.6508 3.7253C13.2027 4.19998 13.5633 4.85917 13.6651 5.58C13.8551 7.0201 14.2073 8.43409 14.7151 9.795C14.917 10.3319 14.9606 10.9154 14.841 11.4763C14.7214 12.0373 14.4434 12.5522 14.0401 12.96L12.1351 14.865C14.2705 18.6203 17.3798 21.7297 21.1351 23.865L23.0401 21.96C23.448 21.5567 23.9629 21.2788 24.5238 21.1591C25.0848 21.0395 25.6683 21.0832 26.2051 21.285C27.5661 21.7928 28.98 22.1451 30.4201 22.335C31.1488 22.4378 31.8142 22.8048 32.2899 23.3662C32.7656 23.9277 33.0184 24.6444 33.0001 25.38Z"
                            stroke="#F79A1F"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            />
                        </svg>
                        <p className="location-text text-sm lg:text-base">
                            <a href="tel:6281298444393">+6281298444393</a>
                        </p>
                        </div>
                        <div className="flex items-center justify-center gap-2 md:gap-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            aria-labelledby="icon-email"
                            width="36"
                            height="36"
                            viewBox="0 0 36 36"
                            fill="none"
                        >
                            <path
                            d="M6 6H30C31.65 6 33 7.35 33 9V27C33 28.65 31.65 30 30 30H6C4.35 30 3 28.65 3 27V9C3 7.35 4.35 6 6 6Z"
                            stroke="#F79A1F"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            />
                            <path
                            d="M33 9L18 19.5L3 9"
                            stroke="#F79A1F"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            />
                        </svg>
                        <p className="location-text text-sm lg:text-base">
                            Mspmitra@gmail.com
                        </p>
                        </div>
                        <div
                        className="flex items-center justify-center gap-2 md:gap-4 max-w-lg"
                        >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            aria-labelledby="icon-address"
                            width="36"
                            height="36"
                            viewBox="0 0 36 36"
                            fill="none"
                        >
                            <path
                            d="M31.5 15C31.5 25.5 18 34.5 18 34.5C18 34.5 4.5 25.5 4.5 15C4.5 11.4196 5.92232 7.9858 8.45406 5.45406C10.9858 2.92232 14.4196 1.5 18 1.5C21.5804 1.5 25.0142 2.92232 27.5459 5.45406C30.0777 7.9858 31.5 11.4196 31.5 15Z"
                            stroke="#F79A1F"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            />
                            <path
                            d="M18 19.5C20.4853 19.5 22.5 17.4853 22.5 15C22.5 12.5147 20.4853 10.5 18 10.5C15.5147 10.5 13.5 12.5147 13.5 15C13.5 17.4853 15.5147 19.5 18 19.5Z"
                            stroke="#F79A1F"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            />
                        </svg>
                        <address className="location-text text-sm lg:text-base">
                            Ruko Mega Grosir Cempaka Mas Blok M1 no.33 Jakarta Pusat -
                            Indonesia
                        </address>
                        </div>
                    </div>
                    <div className="flex flex-col items-start gap-4 md:gap-6 lg:gap-8">
                        <h3 className="location-header text-lg lg:text-2xl">
                        Working Hours
                        </h3>
                        <div className="flex items-center justify-center gap-2 md:gap-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            aria-labelledby="icon-clock"
                            width="36"
                            height="36"
                            viewBox="0 0 36 36"
                            fill="none"
                        >
                            <path
                            d="M18 33C26.2843 33 33 26.2843 33 18C33 9.71573 26.2843 3 18 3C9.71573 3 3 9.71573 3 18C3 26.2843 9.71573 33 18 33Z"
                            stroke="#F79A1F"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            />
                            <path
                            d="M18 9V18L24 21"
                            stroke="#F79A1F"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            />
                        </svg>
                        <p className="location-text text-sm lg:text-base">
                            Monday - Friday : 08:00 - 17:00
                        </p>
                        </div>
                        <div className="flex items-center justify-center gap-2 md:gap-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            aria-labelledby="icon-clock"
                            width="36"
                            height="36"
                            viewBox="0 0 36 36"
                            fill="none"
                        >
                            <path
                            d="M18 33C26.2843 33 33 26.2843 33 18C33 9.71573 26.2843 3 18 3C9.71573 3 3 9.71573 3 18C3 26.2843 9.71573 33 18 33Z"
                            stroke="#F79A1F"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            />
                            <path
                            d="M18 9V18L24 21"
                            stroke="#F79A1F"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            />
                        </svg>
                        <p className="location-text text-sm lg:text-base">
                            Saturday - Sunday : Closed
                        </p>
                  </div>
                 </div>  
                </div>
              </div>
             </div>
            </section>
           </main>
          <Footer />
        </div>
    );
}
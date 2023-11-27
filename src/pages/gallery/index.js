import React from "react";

import Nav from "../../components/molecules/Navbar/Nav";
import Footer from "../../components/molecules/Footer/Footer"
import { PARTNERS, GALLERY_IMAGES } from "../../assets/images";
import "../../index.css";

const Gallery = () => {
 
  return (
    <>
    <Nav />
    <main>
      <section id="program-overview">
        <div className="px-4 py-10 md:px-8 lg:px-12 xl:px-24 lg:py-12">
          <div className="flex flex-col gap-12 text-center">
            <h2 className="business-lines-header text-xl sm:text-2xl lg:text-3xl">
              Program Overview
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
              {GALLERY_IMAGES.map((image, index) => (
                <div key={index} className="w-full md:w-auto">
                  <img
                    className="w-72 h-40 object-cover rounded shadow-md"
                    src={image}
                    alt={`Gambar${index + 1}`}
                  />
                </div>
              ))
              }

            </div>
          </div>
        </div>
      </section>
      <section id="our-partners">
          <div className="px-4 py-10 md:px-8 lg:px-12 xl:px-24 lg:py-12">
            <div className="flex flex-col gap-12 text-center">
              <h2 className="business-lines-header text-xl sm:text-2xl lg:text-3xl">
                Our Partners
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
              {PARTNERS.map((partner, index) => (
                <div className="gallery-container-img" key={index}> 
                  <img
                    className="gallery-img"
                    src={partner.partnerImg}
                    alt={partner.alt}
                  />
                </div>
                ))}
              </div>
            </div>
          </div>
        </section>
    </main>
    <Footer />
    </>
  );
};

export default Gallery;

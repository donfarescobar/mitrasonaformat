import React from "react";


import "../../index.css"
import {MARINES} from "../data";
import { Link } from "react-router-dom";


const AllMarine = () =>{
  
    return(
      <>
        <main>
          <section>
            <div className="px-4 py-10 md:px-8 lg:px-12 xl:px-24 lg:py-12">
              <div className="flex flex-start justify-center mb-12">
                <h2 className="business-lines-header text-center text-xl md:text-2xl lg:text-3xl">
                  All Marine
                </h2>
              </div>
              <div className="px-6 py-6 lg:px-12 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {MARINES.map((marine) =>{ 
             const {id, img,title,description, path} = marine; 
            return (
        <div key={id} className="flex flex-col flex-start gap-3 md:gap-6">
          <div>
            <img
              className="object-cover h-36 lg:h-56 rounded-md w-full"
              src={img}
              alt={`gambar ${title}`}
              loading="lazy"
            />
          </div>
          <div className="flex flex-col gap-2.5 lg:gap-3.5">
            <h3 className="product-card-header text-xl lg:text-2xl">
              {title}
            </h3>
            <p className="engineering-page-card-description text-sm md:text-base">
              {description?.slice(0, 58)}...
            </p>
            <div>
              <Link to = {`/All-marine/${path}`}
                className="product-card-button text-md md:text-lg"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
        )})}
      </div>
              </div>
          </section>
          </main>
        </>
    );
  };

export default AllMarine;
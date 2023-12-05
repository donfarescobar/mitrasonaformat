import React from "react";
import { useParams } from "react-router-dom";

import { ENGINEERING } from "../data";
import "../../index.css"

const SpecificEngineering = () => {
  const { engineering_path } = useParams();  


  const SpecificEngineering = ENGINEERING.find((engineering) => engineering.path === engineering_path); 

  if (!SpecificEngineering) {
    return <div>engineering not found</div>; 
  }



  const { img, titleSub, description, items, atributes } = SpecificEngineering;

  return (
    <main>
    <section>
      <div className="px-4 py-10 md:px-8 lg:px-12 xl:px-24 lg:py-12">
        <div className="flex flex-col gap-3 md:gap-4">
          <div className="w-full">
            <img
              src={img}
              className="w-full h-80 lg:h-72 object-cover"
              alt={`gambar ${titleSub}`}
            />
          </div>
          <div className="flex flex-col gap-2 md:gap-3">
            <h2 className="location-header text-xl lg:text-2xl">
             {titleSub}
            </h2>
            <p className="card-detail text-sm md:text-base">
              {description}
            </p>
          </div>
          <div className="flex flex-col gap-4 md:gap-5">
            {items && items.length > 0 && (
              <>
                {items.map((item, index) => (
                  <div key={index}>
                    <h3 className="location-header text-xl">{item.titleAttribute}</h3>
                    <ul className="list-none list-inside">
                      <li className="text-sm md:text-base">{item.desk}</li>
                    </ul>
                  </div>
                ))}
              </>
            )}
            </div>
            <div className="flex flex-col md:flex-row gap-12 self-start mt-6 md:mt-8">
              {atributes && atributes.length > 0 && (
                <>
                  {atributes.map((attribute, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center rounded-xl shadow border gap-4 md:gap-6  p-6 md:p-8"
                    >
                      <h4 className="text-lg text-black font-bold text-center">
                        {attribute.title}
                      </h4>
                      <p className="card-detail text-left text-sm md:text-base">
                        {attribute.desk}
                      </p>
                    </div>
                  ))}
                </>
              )}
            </div>
        </div>
      </div>
    </section>
  </main>
  );
};

export default SpecificEngineering;

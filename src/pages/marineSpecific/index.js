import React from "react";
import { useParams } from "react-router-dom";

import { MARINES } from "../data";
import "../../index.css"

const SpecificMarine = () => {
  const { marine_path } = useParams();  



    const specificMarine = MARINES.find((marine) => marine.path === marine_path); 
    if (!specificMarine) {
      return <div>Marine not found</div>; 
    }

  const { img, titleSub, description, items } = specificMarine;
  return (
    <main>
    <section>
      <div className="px-4 py-10 md:px-8 lg:px-12 xl:px-24 lg:py-12">
        <div className="flex flex-col gap-3 md:gap-6">
          <div className="w-full">
            <img
              src={img}
              className="w-full h-80 md:h-72 object-cover"
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
    <div className="flex flex-col gap-4">
      <ol className="list-decimal px-2">
      {items && items.length > 0 ? items.map ((item, index) => (
        <li className="items-center ml-2 mt-2 p-2" key={index}>
          <h3 className="text-lg font-semibold">{item.titleAttribute}</h3>
          <p className="text-base">{item.desk}</p>
        </li>
          ))
        : null}
      </ol>
    </div>
  </div>
  </div>
  </div>
  </section>
  </main>
  );
};

export default SpecificMarine;

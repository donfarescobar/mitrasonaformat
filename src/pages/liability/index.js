import React from "react";

import "../../index.css"
import { IMAGE } from "../../assets/images";
import {LIABILITY} from "../data"


const Liability = () => {
    return (
      <>
          <main>
            <section>
              <div className="px-4 py-10 md:px-8 lg:px-12 xl:px-24 lg:py-12">
                <div className="flex flex-col gap-4 md:gap-6">
                  <div className="w-full">
                    <img
                      src={IMAGE.liability}
                      className="w-full h-80 md:h-72 object-cover"
                      alt="Images Liability"
                    />
                  </div>
                  <div className="flex flex-col gap-2 md:gap-3">
                    <h2 className="location-header text-xl lg:text-2xl">{LIABILITY[0].title}</h2>
                    <p className="card-detail text-sm md:text-base">
                      {LIABILITY[0].description}
                    </p>
                  </div>
                  <div className="flex flex-col gap-6 md:gap-12 mt-6 md:mt-8">
                  {LIABILITY.slice(1).map((section, index) => (
                    <div key={index} className="liability-container-shadow my-1 px-1">
                      <article className="overflow-hidden">
                        <header className="flex flex-col items-center justify-between p-3 md:p-6">
                          <h3 className="text-lg lg:text-xl liability-card-header">
                            {section.attribute}
                          </h3>
                        </header>
                        <div className="flex flex-col gap-4 p-6">
                          {section.items &&
                            section.items.map((item, i) => (
                              <div key={i} className="flex flex-col gap-1 md:gap-3">
                                <h4 className="text-base text-black font-semibold">
                                  {item.titleAttribute}
                                </h4>
                                <p className="card-detail text-left text-sm md:text-base">
                                  {item.desk}
                                </p>
                              </div>
                            ))}
                          {!section.description && !section.items && (
                            <p className="card-detail text-left text-sm md:text-base">
                              {section.desk}
                            </p>
                          )}
                        </div>
                      </article>
                    </div>
                  ))}
                  </div>
                </div>
              </div>
            </section>
          </main>
          </>
      );
    }
    
    export default Liability;
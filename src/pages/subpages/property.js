import React from "react";

import Nav from "../../components/molecules/Navbar/Nav"
import Footer from "../../components/molecules/Footer/Footer"
import "../../index.css"
import { IMAGE } from "../../assets/images";
import {PROPERTY_ALL_RISK} from "../data"

function Property (){
    return(
        <div>
            <Nav/>
            <main>
            <section>
                <div className="px-4 py-10 md:px-8 lg:px-12 xl:px-24 lg:py-12">
                <div className="flex flex-col gap-4 md:gap-6">
                    <div className="w-full">
                    <img
                        src={IMAGE.surety_bond}
                        className="w-full h-80 md:h-72 object-cover"
                        alt="property-images"
                    />
                    </div>

                    {PROPERTY_ALL_RISK.map((property, index) => (
                    <div key={index} className="flex flex-col gap-3">
                        <h2 className="location-header text-xl lg:text-2xl">
                            {property.title}
                        </h2>
                        <p className="card-detail text-sm md:text-base">
                            {property.desk}
                        </p>
                        {property.attribute && (
                            <div className="flex flex-col gap-1 md:gap-2">
                                <h3 className="location-header text-xl">Benefits</h3>
                                <ul className="list-disc list-inside">
                                    {property.description.map((benefit, i) => (
                                    <li key={i} className="card-detail text-sm md:text-base">{benefit}</li>
                                        ))}
                            </ul>
                        </div>
                       )}
                     </div>
                     ))}
                </div>
                </div>
            </section>
            </main>
         <Footer/>
        </div>
    );
}

export default Property;
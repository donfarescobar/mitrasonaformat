import React from "react";

import Nav from "../../components/molecules/Navbar/Nav"
import Footer from "../../components/molecules/Footer/Footer"
import "../../index.css"

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
                        src="/images/property-all-risk.webp"
                        className="w-full h-80 md:h-72 object-cover"
                        alt="property-images"
                    />
                    </div>
                    <div className="flex flex-col gap-2 md:gap-3">
                    <h2 className="location-header text-xl lg:text-2xl">
                        Property All Risk
                    </h2>
                    <p className="card-detail text-sm md:text-base">
                        Provides protection to your property against all damage from any
                        fortuitous cause such as fire, lightning strike, explosion,
                        plane crash, smoke (FLEXAS), hurricane, storm, flood,
                        landslides, earthquakes, strikes, riots, riots, evil actions of
                        others and other risks.
                    </p>
                    </div>
                    <div className="flex flex-col gap-1 md:gap-2">
                    <h3 className="location-header text-xl">Benefits</h3>
                    <ul className="list-disc list-inside">
                        <li className="card-detail text-sm md:text-base">
                        Provide compensation for damage, loss and destruction to
                        property (material damage).
                        </li>
                        <li className="card-detail text-sm md:text-base">
                        Provide compensation for losses or lost profits in connection
                        with the cessation of company operations (business
                        interruption) caused by loss of property.
                        </li>
                        <li className="card-detail text-sm md:text-base">
                        Providing extended coverage with an additional premium to be
                        able to get additional benefits such as third party claim
                        fees, debris cleaning fees, and fire fighting fees.
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
            </section>
            </main>
         <Footer/>
        </div>
    );
}

export default Property;
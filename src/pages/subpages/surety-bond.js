import React from "react";

import Nav from "../../components/molecules/Navbar/Nav"
import Footer from "../../components/molecules/Footer/Footer"
import "../../index.css"
import { IMAGE } from "../../assets/images";
import { SURETY_BOND } from "../data";


function SuretyBond (){

    return(
        <div>
            <Nav />
            <main>
                <section>
                    <div className="px-4 py-10 md:px-8 lg:px-12 xl:px-24 lg:py-12">
                        <div className="flex flex-col gap-3 md:gap-6">
                            <div className="w-full">
                                <img
                                    src={IMAGE.surety_bond}
                                    className="w-full h-80 md:h-72 object-cover"
                                    alt="surety-bond-images"
                                />
                            </div>
                            {/* Displaying the title */}
                            <div className="flex flex-col gap-2 md:gap-3">
                                <h2 className="location-header text-xl lg:text-2xl">{SURETY_BOND[0].title}</h2>
                            </div>
                            {/* Mapping for other surety bonds */}
                            {SURETY_BOND.slice(1).map((surety, index) => {
                                if (!surety.atribute) return null; // Skip objects without 'atribute'
                                const number = index + 1; // Use index + 1 as the number
                                return(
                                    <div key={index} className="flex flex-col gap-2 md:gap-3">
                                        <div className="flex flex-col gap-4">
                                            <ol>
                                                <li className="items-center ml-2 p-2">
                                                    <h3 className="text-lg font-semibold">{number}. {surety.atribute}</h3>
                                                    <p className="text-base">{surety.description}</p>
                                                </li>
                                            </ol>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>
              </main>
            <Footer/>
        </div>
    );
}


export default SuretyBond;
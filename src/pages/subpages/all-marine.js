import React from "react";

import Nav from "../../components/molecules/Navbar/Nav"
import Footer from "../../components/molecules/Footer/Footer"
import "../../index.css"


function AllMarine (){
    return(
        <div>
         <Nav />
          <main>
            <section>
                <div className="px-4 py-10 md:px-8 lg:px-12 xl:px-24 lg:py-12">
                <div className="flex flex-start justify-center mb-12">
                    <h2
                    className="business-lines-header text-center text-xl md:text-2xl lg:text-3xl"
                    >
                    All Marine
                    </h2>
                </div>
                <div
                    className="px-6 py-6 lg:px-12 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                >
                    <div className="flex flex-col flex-start gap-3 md:gap-6">
                    <div>
                        <img
                        className="object-cover h-36 lg:h-56 rounded-md w-full"
                        src="/images/marine-cargo-insurance.webp"
                        alt="Cargo Insurance"
                        loading="lazy"
                        />
                    </div>
                    <div className="flex flex-col gap-2.5 lg:gap-3.5">
                        <h3 className="product-card-header text-xl lg:text-2xl">
                        Marine Cargo
                        </h3>
                        <p
                        className="engineering-page-card-description text-sm md:text-base"
                        >
                        Marine cargo insurance covers the risk to goods transported
                        through all means of transportation, land, air or sea..
                        </p>
                        <div className="">
                        <a
                            href="/pages/general-insurance/marines/marine-cargo.html"
                            className="product-card-button text-md md:text-lg"
                        >
                            Read More
                        </a>
                        </div>
                    </div>
                    </div>
                    <div className="flex flex-col flex-start gap-3 md:gap-6">
                    <div>
                        <img
                        className="object-cover h-36 lg:h-56 rounded-md w-full"
                        src="/images/marine-hull.webp"
                        alt="Marine Hull Insurance"
                        loading="lazy"
                        />
                    </div>
                    <div className="flex flex-col gap-2.5 lg:gap-3.5">
                        <h3 className="product-card-header text-xl lg:text-2xl">
                        Marine Hull
                        </h3>
                        <p
                        className="engineering-page-card-description text-sm md:text-base"
                        >
                        Marine Hull Insurance which is an insurance coverage for the
                        ship’s hull , along with its engines and equipments, against
                        damage or loss that occurs as a result of shipping risks and
                        other marine hazards.
                        </p>
                        <div className="">
                        <a
                            href="/pages/general-insurance/marines/marine-hull.html"
                            className="product-card-button text-md md:text-lg"
                        >
                            Read More
                        </a>
                        </div>
                    </div>
                    </div>
                    <div className="flex flex-col flex-start gap-3 md:gap-6">
                    <div>
                        <img
                        className="object-cover h-36 lg:h-56 rounded-md w-full"
                        src="/images/wreck-removal-insurance.webp"
                        alt="Wreck Removal Insurance"
                        loading="lazy"
                        />
                    </div>
                    <div className="flex flex-col gap-2.5 lg:gap-3.5">
                        <h3 className="product-card-header text-xl lg:text-2xl">
                        Wreck Removal
                        </h3>
                        <p
                        className="engineering-page-card-description text-sm md:text-base"
                        >
                        Wreck Removal Insurance is an insurance coverage that provides
                        compensation to the shipowner for the removal of wreck and
                        other objects originating from the ship in the event of an
                        accident that causes the ship to sink.
                        </p>
                        <div className="">
                        <a
                            href="/pages/general-insurance/marines/wreck-removal.html"
                            className="product-card-button text-md md:text-lg"
                        >
                            Read More
                        </a>
                        </div>
                    </div>
                    </div>
                    <div className="flex flex-col flex-start gap-3 md:gap-6">
                    <div>
                        <img
                        className="object-cover h-36 lg:h-56 rounded-md w-full"
                        src="/images/marine-protection.webp"
                        alt="Marine Protection & Indemnity Insurance"
                        loading="lazy"
                        />
                    </div>
                    <div className="flex flex-col gap-2.5 lg:gap-3.5">
                        <h3 className="product-card-header text-xl lg:text-2xl">
                        Marine Protection & Indemnity
                        </h3>
                        <p
                        className="engineering-page-card-description text-sm md:text-base"
                        >
                        Insurance coverage to ship owners, operators or charterers for
                        legal liability to third parties.
                        </p>
                        <div className="">
                        <a
                            href="/pages/general-insurance/marines/marine-protection.html"
                            className="product-card-button text-md md:text-lg"
                        >
                            Read More
                        </a>
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

export default AllMarine;
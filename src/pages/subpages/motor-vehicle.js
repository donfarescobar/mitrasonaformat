import React from "react";

import Nav from "../../components/molecules/Navbar/Nav"
import Footer from "../../components/molecules/Footer/Footer"
import "../../index.css"



function MotorVehicle (){
    return(
        <div>
        <Nav/>
        <main>
        <section>
            <div className="px-4 py-10 md:px-8 lg:px-12 xl:px-24 lg:py-12">
            <div className="flex flex-col gap-4 md:gap-6">
                <div className="w-full">
                <img
                    src="/images/motor-vehicle.webp"
                    className="w-full h-80 md:h-72 object-cover"
                    alt="motor-vehicle-images"
                />
                </div>
                <div className="flex flex-col gap-2 md:gap-3">
                <h2 className="location-header text-xl lg:text-2xl">Motor Vehicle</h2>
                <p className="card-detail text-sm md:text-base">
                    Provides protection for all types of motorized vehiches, such as
                    trucks, four-wheeled vehicles (cars) & two-wheeled vehicles
                    (motorbikes) againts any loss or damage caused by:
                </p>
                <div className="flex flex-col gap-4 mt-2">
                    <ol className="list-decimal list-inside">
                    <li className="card-detail text-sm md:text-base">Accident</li>
                    <li className="card-detail text-sm md:text-base">
                        External acts of crime
                    </li>
                    <li className="card-detail text-sm md:text-base">
                        Theft, fire and damage that occurred while on the ferry
                    </li>
                    <li className="card-detail text-sm md:text-base">Riot</li>
                    <li className="card-detail text-sm md:text-base">
                        Act of God (Natural Disaster, Eruption)
                    </li>
                    <li className="card-detail text-sm md:text-base">
                        Floods, earthquakes, strong winds, rainstorms
                    </li>
                    </ol>
                </div>
                </div>
            </div>
            </div>
        </section>
        </main>
        <Footer/>
        </div>
    );
}

export default MotorVehicle
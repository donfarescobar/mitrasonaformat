import React from "react";

import Nav from "../../components/molecules/Navbar/Nav"
import Footer from "../../components/molecules/Footer/Footer"
import "../../index.css"
import { IMAGE } from "../../assets/images";
import { MOTOR_VEHICLE } from "../data";



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
                    src={IMAGE.motor_vehicle}
                    className="w-full h-80 md:h-72 object-cover"
                    alt="motor-vehicle-images"
                />
                </div>
                <div className="flex flex-col gap-2 md:gap-3">
                <h2 className="location-header text-xl lg:text-2xl">{MOTOR_VEHICLE[0].title}</h2>
                <p className="card-detail text-sm md:text-base">
                {MOTOR_VEHICLE[0].description}
                </p>
                {MOTOR_VEHICLE.slice(1).map((motor, index)=>{
                if (!motor.atribute) return null;
                const number = index + 1 ;
                return(
                <div key={index} className="flex flex-col gap-4 mt-2">
                <ol className=" list-inside">
                <li className="card-detail text-sm md:text-base">{number}. {motor.atribute}</li>
                </ol>
                </div>
                );
                })}

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
import React from "react";

import Nav from "../../components/molecules/Navbar/Nav"
import Footer from "../../components/molecules/Footer/Footer"
import "../../index.css"


function Liability (){
    return(
        <div>
        <Nav /> 
            <main>
            <section>
            <div className="px-4 py-10 md:px-8 lg:px-12 xl:px-24 lg:py-12">
            <div className="flex flex-col gap-4 md:gap-6">
            <div className="w-full">
                <img src="/images/liability-insurance.webp" className="w-full h-80 md:h-72 object-cover" alt="Images Liability"/>
            </div>
            <div className="flex flex-col gap-2 md:gap-3">
                <h2 className="location-header text-xl lg:text-2xl">Liability Insurance</h2>
                <p className="card-detail text-sm md:text-base">
                Liability insurance is an insurance product that provides an insured party with protection against claims
                resulting from injuries and damage to other people or property. Liability insurance policies cover any
                legal costs and payouts an insured party is responsible for if they are found legally liable.
                </p>
            </div>
                {/* <!-- <h3 className="text-lg md:text-xl">Liability insurance can be grouped as follows:</h3> --> */}
                <div className="flex flex-col gap-6 md:gap-12 mt-6 md:mt-8">
                <div className="liability-container-shadow my-1 px-1">
                    <article className="overflow-hidden">
                    <header className="flex flex-col items-center justify-between p-3 md:p-6">
                        <h3 className="text-lg lg:text-xl liability-card-header">
                        General
                        </h3>
                    </header>
                    <div className="flex flex-col gap-4 p-6">
                        <div className="flex flex-col gap-1 md:gap-3">                 
                            <h4 className="text-base text-black font-semibold">Public Liability</h4>
                            <p className="card-detail text-left text-sm md:text-base">Covering the risks that occur in the
                            Insured
                            Company. So the risk that is guaranteed
                            is
                            the risk of the activities carried out in the insured company’s premises. Since Public
                            Liability
                            guarantees Premises risks, namely hazards in the area covered by the Insured and which result
                            in
                            damage or loss to the environment and people, except those suffered by workers from the
                            Insured
                            himself. Premises can be in the form of factories, cinemas, restaurants, shops and so on.</p>
                        </div>
                        <div className="flex flex-col gap-1 md:gap-3">
                            <h4 className="text-base text-black font-semibold">Product Liability</h4>
                            <p className="card-detail text-left text-sm md:text-base">Covering the risks that occur in the Insured
                            Company. So the risk that is guaranteed
                            Guarantee an entrepreneur against the risk of being sued by a third party (generally consumers
                            of their products) due to bodily injury or property damage due to the use of their products
                            that</p>
                    
                        </div>
                        <div className="flex flex-col gap-1 md:gap-3">
                            <h4 className="text-base text-black font-semibold">Employer’s Liability</h4>
                            <p className="card-detail text-left text-sm md:text-base">if an employee is injured while carrying out his
                            duties, the employer must be responsible for this injury, then the employee must be able to
                            prove that the accident was caused by the negligence of the employer in providing facilities
                            for
                            the safety of his employees.</p>
                    
                        </div>
                    </div>
                    </article>
                </div>
                <div className="liability-container-shadow my-1 px-1">
                    <article className="overflow-hidden">
                    <header className="flex flex-col items-center justify-between p-6">
                        <h3 className="text-lg lg:text-xl liability-card-header">
                        Professional
                        </h3>
                    </header>
                    <div className="flex p-6">
                        <p className="card-detail text-left text-sm md:text-base">
                        Providing indemnity to the insured in connection with his legal responsibilities to other persons
                        or
                        related parties with bodily injury or loss of damage to property arising from the negligence of
                        the
                        insured’s profession or due to the negligence of his employees.
                        The process of the occurrence of a professional liability claim can take a long time and is
                        divided
                        into three stages: Failure to carry out the profession, Materialization of losses, Claim for
                        compensation.
                        The process from one stage to another can take a long time. The consequences that arise from a
                        doctor’s mistake in carrying out an operation, for example, can only be seen in a few months, even
                        several years later.
                        </p>
                    </div>
                    </article>
                </div>
                <div className="liability-container-shadow my-1 px-1">
                    <article className="overflow-hidden">
                    <header className="flex flex-col items-center p-6">
                        <h3 className="text-lg lg:text-xl liability-card-header">
                        Personal
                        </h3>
                    </header>
                    <div className="flex p-6">
                        <p className="card-detail text-left text-sm md:text-base">
                        Providing indemnity to the insured against claims resulting from injuries and damage to other
                        people
                        or property as the result of the insured negligence.
                                </p>
                        </div>
                        </article>
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

export default Liability;
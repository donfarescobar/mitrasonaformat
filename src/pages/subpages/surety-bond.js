import React from "react";

import Nav from "../../components/molecules/Navbar/Nav"
import Footer from "../../components/molecules/Footer/Footer"
import "../../index.css"

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
                            src="/images/surety-bond.webp"
                            className="w-full h-80 md:h-72 object-cover"
                            alt="surety-bond-images"
                        />
                        </div>
                        <div className="flex flex-col gap-2 md:gap-3">
                        <h2 className="location-header text-xl lg:text-2xl">Surety Bond</h2>
                        <div className="flex flex-col gap-4">
                            <ol className="list-decimal">
                            <li className="items-center ml-2 p-2">
                                <h3 className="text-lg font-semibold">Bid Bond</h3>
                                <p className="text-base">
                                Guarantee the Obligee if the Principal resigns (reneges on
                                his promise) or does not continue to sign the contract.
                                </p>
                            </li>
                            <li className="items-center ml-2 p-2">
                                <h3 className="text-lg font-semibold">Advance Payment Bond</h3>
                                <p className="text-base">
                                Guarantee the Obligee that the Principal will be able to
                                return the down payment that has been received in
                                accordance with the terms agreed in the contract.
                                </p>
                            </li>
                            <li className="items-center ml-2 p-2">
                                <h3 className="text-lg font-semibold">Performance Bond</h3>
                                <p className="text-base">
                                Guarantee the ability of the Principal to carry out
                                Guarantee the Obligee / Employer if the Principal /
                                Employee fails to carry out his job or the physical work
                                is not in accordance with the provisions of the contract.
                                </p>
                            </li>
                            <li className="items-center ml-2 p-2">
                                <h3 className="text-lg font-semibold">Maintenance Bond</h3>
                                <p className="text-base">
                                Maintenance Guarantee for the results of work that has
                                been completed as a substitute for the amount retained by
                                the Obligee or the employer.
                                </p>
                            </li>
                            <li className="items-center ml-2 p-2">
                                <h3 className="text-lg font-semibold">Customs Bond</h3>
                                <p className="text-base">
                                The guarantee for a risk provided by the “Guarantor”
                                (Surety) to the Domestic Ethyl Alcohol-Containing Beverage
                                Industry Company is not categorized as liquor (Principal)
                                to carry out its obligations in accordance with the
                                periodic excise payment deferral facility it obtains from
                                the government, in this case the Directorate General of
                                Customs. & Excise. If the Principal does not carry out its
                                obligation, namely paying periodic Excise, the Obligee
                                will redeem the guarantee provided by Surety.
                                </p>
                            </li>
                            <li className="items-center ml-2 p-2">
                                <h3 className="text-lg font-semibold">Bank Guarantee</h3>
                                <p className="text-base">
                                Collateral for the Bank Guarantee issued by the Bank for
                                the benefit of the “Employee” (Principal) in fulfilling
                                its obligations in accordance with the provisions
                                contained in the principal “Employer” (Obligee) agreement
                                with the Principal, and if the Principal does not fulfill
                                his obligations in accordance with the provisions of the
                                contract, then the Insurance (Surety) will pay to the Bank
                                for the Bank Guarantee claim submitted by the Obligee /
                                Job Owner.
                                </p>
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

export default SuretyBond
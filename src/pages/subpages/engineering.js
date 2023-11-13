import React from "react";

import Nav from "../../components/molecules/Navbar/Nav"
import Footer from "../../components/molecules/Footer/Footer"
import "../../index.css"


function Engineering (){
    return(
       <div>
          <Nav />
            <main>
                <section>
                    <div className="px-4 py-10 md:px-8 lg:px-12 xl:px-24 lg:py-12">
                        <div className="flex flex-start justify-center mb-12">
                            <h2 className="business-lines-header text-center text-xl md:text-2xl lg:text-3xl">Engineering Insurance</h2>
                        </div>
                        <div className="px-6 py-6 lg:px-12 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            <div className="flex flex-col flex-start gap-3 md:gap-6">
                                <div>
                                    <img className="object-cover h-36 lg:h-56 rounded-md w-full" src="/images/contractor-all.webp"
                                        alt="Engineering - Contractor All Risk" loading="lazy" />
                                </div>
                                <div className="flex flex-col gap-2.5 lg:gap-3.5">
                                    <h3 className="product-card-header text-xl lg:text-2xl">Contractor's All Risk Insurance</h3>
                                    <p className="engineering-page-card-description text-sm md:text-base">Insurance policy that provides coverage
                                        during construction for property damage and
                                        third-party injury or damage due to
                                        non-conformity of conditions in the agreement, other than those stated in the policy exeption..</p>
                                    <div className="">
                                        <a href="/pages/general-insurance/engineering/contractor-allrisk.html"
                                            className="product-card-button text-md md:text-lg">
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col flex-start gap-3 md:gap-6">
                                <div><img className="object-cover h-36 lg:h-56 rounded-md w-full" src="/images/electronic-equipment.webp"
                                    alt="Engineering - Electronic Equipment" loading="lazy"/>
                                </div>
                                <div className="flex flex-col gap-2.5 lg:gap-3.5">
                                    <h3 className="product-card-header text-xl lg:text-2xl">Electronic Equipment Insurance</h3>
                                    <p className="engineering-page-card-description text-sm md:text-base">Insurance that provides guarantee or
                                        protection against loss or damage to electronic
                                        goods / equipment as a result of
                                        the risk covered in the policy..</p>
                                    <div className="">
                                        <a href="/pages/general-insurance/engineering/electronic-equipment.html"
                                            className="product-card-button text-md md:text-lg">
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col flex-start gap-3 md:gap-6">
                                <div><img className="object-cover h-36 lg:h-56 rounded-md w-full" src="/images/machinery.webp"
                                    alt="Engineering - Machinery Breakdown Insurance" loading="lazy"/>
                                </div>
                                <div className="flex flex-col gap-2.5 lg:gap-3.5">
                                    <h3 className="product-card-header text-xl lg:text-2xl">Machinery Breakdown Insurance
                                    </h3>
                                    <p className="engineering-page-card-description text-sm md:text-base">Provides guarantee or protection for
                                        loss or damage to machines as a result of the
                                        risks guaranteed in the policy.</p>
                                    <div className="">
                                        <a href="/pages/general-insurance/engineering/marchinery-breakdown.html"
                                            className="product-card-button text-md md:text-lg">
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col flex-start gap-3 md:gap-6">
                                <div><img className="object-cover h-36 lg:h-56 rounded-md w-full" src="/images/heavy-equipment.webp"
                                    alt="Engineering - Heavy Equipment" loading="lazy"/>
                                </div>

                                <div className="flex flex-col gap-2.5 lg:gap-3.5">
                                    <h3 className="product-card-header text-xl lg:text-2xl">Heavy Equipment Insurance</h3>
                                    <p className="engineering-page-card-description text-sm md:text-base">Heavy equipment insurance is an
                                        insurance that provides compensation when heavy
                                        equipment is damaged and/or lost due to
                                        an incident caused by guaranteed risks..</p>
                                    <div className="">
                                        <a href="/pages/general-insurance/engineering/heavy-equipment.html"
                                            className="product-card-button text-md md:text-lg">
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col flex-start gap-3 md:gap-6">
                                <div><img className="object-cover h-36 lg:h-56 rounded-md w-full" src="/images/moveable-all.webp"
                                    alt="Engineering - Moveable-all risk insurance" loading="lazy"/>
                                </div>
                                <div className="flex flex-col gap-2.5 lg:gap-3.5">
                                    <h3 className="product-card-header text-xl lg:text-2xl">Moveable All Risk Insurance
                                    </h3>
                                    <p className="engineering-page-card-description text-sm md:text-base">Provides guarantees for costs required
                                        for repair / return of damaged goods such as
                                        before the occurrence of a damage,
                                        sudden, unwanted and accidental loss..</p>
                                    <div className="">
                                        <a href="/pages/general-insurance/engineering/moveable-all.html"
                                            className="product-card-button text-md md:text-lg">
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section className="background-pdf my-14">
                        <div className="px-4 py-10 md:px-8 lg:px-12 xl:px-24 lg:py-12">
                            <div
                                className="flex flex-row justify-between items-center gap-6 md:flex-row"
                            >
                                <div className="inline-flex items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        aria-labelledby="icon-pdf"
                                        width="72"
                                        height="72"
                                        viewBox="0 0 72 72"
                                        fill="none"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M63 20.25V63C63 65.3869 62.0518 67.6761 60.364 69.364C58.6761 71.0518 56.3869 72 54 72H49.5V67.5H54C55.1935 67.5 56.3381 67.0259 57.182 66.182C58.0259 65.3381 58.5 64.1935 58.5 63V20.25H49.5C47.7098 20.25 45.9929 19.5388 44.727 18.273C43.4612 17.0071 42.75 15.2902 42.75 13.5V4.5H18C16.8065 4.5 15.6619 4.97411 14.818 5.81802C13.9741 6.66193 13.5 7.80653 13.5 9V49.5H9V9C9 6.61305 9.94821 4.32387 11.636 2.63604C13.3239 0.948212 15.6131 0 18 0L42.75 0L63 20.25ZM7.2 53.325H0V71.3205H3.5595V65.2815H7.173C8.4645 65.2815 9.5625 65.025 10.467 64.503C11.3805 63.9765 12.078 63.2655 12.5505 62.37C13.0409 61.4303 13.2899 60.3834 13.275 59.3235C13.275 58.1985 13.0365 57.1815 12.564 56.277C12.094 55.3779 11.3755 54.6328 10.494 54.1305C9.594 53.5905 8.5005 53.325 7.2 53.325ZM9.6525 59.3235C9.66872 59.9164 9.53728 60.504 9.27 61.0335C9.03021 61.4945 8.65696 61.8725 8.199 62.118C7.67515 62.3772 7.09571 62.5039 6.5115 62.487H3.546V56.16H6.516C7.497 56.16 8.2665 56.43 8.82 56.9745C9.3735 57.5235 9.6525 58.3065 9.6525 59.3235ZM15.129 53.325V71.3205H21.699C23.5035 71.3205 25.002 70.9605 26.19 70.254C27.3922 69.5347 28.331 68.4476 28.8675 67.1535C29.4525 65.8035 29.7495 64.1745 29.7495 62.2755C29.7495 60.3855 29.457 58.7745 28.8675 57.438C28.3373 56.1587 27.4075 55.0853 26.217 54.378C25.029 53.676 23.5215 53.325 21.6945 53.325H15.129ZM18.6885 56.2275H21.222C22.338 56.2275 23.247 56.4525 23.9625 56.9115C24.7052 57.3972 25.2655 58.1158 25.5555 58.9545C25.911 59.859 26.0865 60.9885 26.0865 62.343C26.1005 63.2405 25.9976 64.136 25.7805 65.007C25.6202 65.6939 25.3199 66.3404 24.8985 66.906C24.507 67.4106 23.9882 67.802 23.3955 68.04C22.701 68.2999 21.9634 68.4251 21.222 68.409H18.6885V56.2275ZM35.532 64.161V71.3205H31.977V53.325H43.443V56.2635H35.532V61.29H42.759V64.161H35.532Z"
                                            fill="white" />
                                    </svg>
                                    <div className="flex flex-col gap-1 ml-3">
                                        <h3
                                            className="pdf-header text-white text-md md:text-xl lg:text-2xl"
                                        >
                                            Download Company Profile
                                        </h3>
                                        <p className="text-white text-sm md:text-base lg:text-lg">
                                            Type : PDF
                                        </p>
                                    </div>
                                </div>
                                <div className="h-full">
                                    <a
                                        href="/pdf/General.pdf"
                                        download
                                        className="bg-button-banner pdf-button flex flex-row justify-center items-center py-2 px-4 lg:py-5 lg:px-10 text-white rounded-md"
                                    >
                                        Download
                                    </a>
                                </div>
                            </div>
                        </div>
                        </section>
                    </section>
                </main>
        <Footer />
     </div>
    );
}

export default Engineering;
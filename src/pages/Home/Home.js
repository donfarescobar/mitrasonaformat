import React from "react";
import Nav from "../../components/molecules/Navbar/Nav";
import Footer from "../../components/molecules/Footer/Footer";



export default function Home() {
    return (
        <div>
            <Nav/> {/*Import component navbar*/}
            <main>
                <section>
                    <div className="px-4 py-10 md:px-8 lg:px-12 xl:px-24 lg:py-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="flex flex-col items-start gap-6 lg:gap-14">
                                <div className="flex flex-col gap-4 lg:gap-8">
                                    <h1 className="hero-heading text-2xl lg:text-3xl">
                                        WELCOME TO<br /><span>PT Mitra Sona Persada</span>
                                    </h1>
                                    <p className="hero-text text-sm text-justify lg:text-base max-w-md">
                                        PT. Mitra Sona Persada has been established since 2015,
                                        specializing in insurance policy issuance services and general
                                        supplies of military equipment. Our commitment lies in
                                        prioritizing the interests of our clients, making us a
                                        reliable company in the industry. We are honored to earn the
                                        full trust of our clients in managing their insurance policies
                                        and military equipment supplies.
                                    </p>
                                </div>
                                <div>
                                    <a
                                        href="tel:+6281298444393"
                                        className="hero-button-link text-sm px-4 py-3 lg:px-6 lg:py-4"
                                    >Talk With Us</a>
                                </div>
                            </div>
                            <div className="container-image-hero">
                                <img
                                    className="rounded-md object-cover object-center h-full w-full"
                                    src='./images/hero-dekstop.webp'
                                    alt="Company Hero" />
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="px-4 py-10 md:px-8 lg:px-12 xl:px-24 lg:py-12">
                        <div
                            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-14"
                        >
                            <div
                                className="responsive-iframe-wrapper-home relative aspect-ratio-16/9"
                            >
                                <iframe
                                    className="responsive-iframe-home"
                                    src="https://maps.google.com/maps?q=Ruko%20Mega%20Cempaka%20Mas%20blok%20M%201%20no.%2033,%20Jakarta%20Pusat%20-%20Indonesia&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                    title="Lokasi Perusahaan"
                                    frameborder="0"
                                    scrolling="no"
                                    marginheight="0"
                                    marginwidth="0"
                                    allowfullscreen
                                ></iframe>
                            </div>
                            <div className="flex flex-col justify-center md:justify-start gap-10">
                                <div className="flex col self-center md:self-start">
                                    <h2 className="text-xl sm:text-2xl lg:text-3xl visi-misi-header">
                                        Vision & Mission
                                    </h2>
                                </div>
                                <div className="flex flex-col gap-8">
                                    <div className="flex items-start gap-3 md:gap-6">
                                        <img
                                            src='/images/icon/send.webp'
                                            alt="logo vision"
                                            className="svg-size object-cover" />
                                        <div className="flex flex-col gap-2 lg:gap-4">
                                            <h3 className="visi-subheader text-lg lg:text-2xl">
                                                Company Vision
                                            </h3>
                                            <p
                                                className="visi-misi-description text-justify text-sm lg:text-base"
                                            >
                                                To become a large company in the field of trade and
                                                services on a national and international scale.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3 md:gap-6">
                                        <img
                                            src="/images/icon/users.webp"
                                            alt="logo vision"
                                            className="svg-size object-cover" />
                                        <div className="flex flex-col gap-2 lg:gap-4">
                                            <h3 className="misi-subheader text-lg lg:text-2xl">
                                                Company Mission
                                            </h3>
                                            <ul className="list-decimal list-inside space-y-2">
                                                <li
                                                    className="visi-misi-description text-justify text-sm lg:text-base"
                                                >
                                                    Establish professional cooperation/business partnerships
                                                    with related bodies, institutions/agencies, institutions
                                                    to play a role in national development.
                                                </li>
                                                <li
                                                    className="visi-misi-description text-justify text-sm lg:text-base"
                                                >
                                                    Creating customer satisfaction with the best solutions
                                                    and high-quality services.
                                                </li>
                                                <li
                                                    className="visi-misi-description text-justify text-sm lg:text-base"
                                                >
                                                    Build qualified and resilient human resources.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="px-4 py-10 md:px-8 lg:px-12 xl:px-24 lg:py-12">
                        <div className="flex flex-col gap-12">
                            <div className="flex self-center md:flex-start">
                                <h2 className="text-xl sm:text-2xl lg:text-3xl business-lines-header">
                                    Business Lines
                                </h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2">
                                <div
                                    className="bg-container-business-lines-general-insurance text-left px-6 py-6 md:px-12 lg:px-24"
                                >
                                    <div className="flex flex-col gap-5 md:gap-6">
                                        <div className="flex flex-col gap-2 h-auto md:h-42 xl:h-32">
                                            <h3
                                                className="business-lines-header text-white text-lg lg:text-2xl xl:text-3xl"
                                            >
                                                General Insurance
                                            </h3>
                                            <p
                                                className="business-lines-description text-justify text-sm lg:text-base text-white"
                                            >
                                                Insurance that provides one of the benefits in the form of
                                                compensation to the insured, in the event of damage or
                                                loss of the insured material
                                            </p>
                                        </div>
                                        <div>
                                            <a
                                                href="/GeneralInsurance"
                                                className="business-lines-button-text bg-button-banner text-sm md:text-base flex flex-row justify-center items-center w-40 md:w-44 h-10 md:h-12 text-white rounded"
                                            >
                                                General Info
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="bg-container-business-lines text-left px-6 py-6 md:px-12 lg:px-24"
                                >
                                    <div className="flex flex-col gap-5 md:gap-6">
                                        <div className="flex flex-col gap-2 h-auto md:h-42 xl:h-32">
                                            <h3
                                                className="business-lines-header text-white text-lg lg:text-2xl xl:text-3xl"
                                            >
                                                Contractor Insurance
                                            </h3>
                                            <p
                                                className="business-lines-description text-justify text-sm lg:text-base text-white"
                                            >
                                                Insurance protection for companies supplying military
                                                equipment,ensuring they're financially secure in case of
                                                unexpected events.
                                            </p>
                                        </div>
                                        <div>
                                            <a
                                                href="/ContractorInsurance"
                                                className="business-lines-button-text bg-button-banner text-sm md:text-base flex flex-row justify-center items-center w-40 md:w-44 h-10 md:h-12 text-white rounded"
                                            >
                                                Contractor Info
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="px-4 py-10 md:px-8 lg:px-12 xl:px-24 lg:py-12">
                        <div className="flex flex-col gap-12">
                            <div className="flex self-center">
                                <h2
                                    className="text-xl sm:text-2xl lg:text-3xl company-partner-header"
                                >
                                    Our Partners
                                </h2>
                            </div>
                            <div className="slider"> {/*Company partner slider */}
                                <div className="slide-track">
                                    <div className="slide">
                                        <img
                                            className="w-full"
                                            src="/images/Company-Partner/askrindo.webp"
                                            alt="pt.askrindo" />
                                    </div>
                                    <div className="slide">
                                        <img
                                            className="w-full"
                                            src="/images/Company-Partner/jasindo.webp"
                                            alt="asuransiJasindo" />
                                    </div>
                                                            {/* <!-- <div className="slide">
                                    <img className="w-full" src="/images/Company-Partner/jamkrindo.webp" alt="pt.asuransi jamkrindo" />
                                </div> -->
                                    <!-- <div className="slide">
                                    <img className="w-full" src="/images/Company-Partner/jamkrindo-syariah.webp"
                                    alt="pt.asuransi jamkrindo syariah" />
                                </div> --> */}
                                    <div className="slide">
                                        <img
                                            className="w-full"
                                            src="/images/Company-Partner/bri-insurance.webp"
                                            alt="pt.bri insurance" />
                                    </div>
                                    <div className="slide">
                                        <img
                                            className="w-full"
                                            src="/images/Company-Partner/asuransi-bhayangkara.webp"
                                            alt="pt.asuransi bhakti bayangkara" />
                                    </div>
                                    <div className="slide">
                                        <img
                                            className="w-full"
                                            src="/images/Company-Partner/maxium-insurance.webp"
                                            alt="pt.maximus insurance" />
                                    </div>
                                    <div className="slide">
                                        <img
                                            className="w-full"
                                            src="/images/Company-Partner/sinarmas.webp"
                                            alt="pt.asuransi sinarmas" />
                                    </div>
                                    <div className="slide">
                                        <img
                                            className="w-full"
                                            src="/images/Company-Partner/sinarmas-syariah.webp"
                                            alt="pt.asuransi sinarmas syariah" />
                                    </div>
                                    <div className="slide">
                                        <img
                                            className="w-full"
                                            src="/images/Company-Partner/bosowa-insurance.webp"
                                            alt="pt.bosowa asuransi" />
                                    </div>
                                    <div className="slide">
                                        <img
                                            className="w-full"
                                            src="/images/Company-Partner/tugu-insurance.webp"
                                            alt="pt.asuransi tugu" />
                                    </div>
                                    <div className="slide">
                                        <img
                                            className="w-full"
                                            src="/images/Company-Partner/pln-insurance.webp"
                                            alt="pt.pln insurance" />
                                    </div>
                                    <div className="slide">
                                        <img
                                            className="w-full"
                                            src="/images/Company-Partner/bank-mandiri.webp"
                                            alt="bank mandiri" />
                                    </div>
                                    <div className="slide">
                                        <img
                                            className="w-full"
                                            src="/images/Company-Partner/bank-bri.webp"
                                            alt="bank rakyat indonesia" />
                                    </div>
                                    <div className="slide">
                                        <img
                                            className="w-full"
                                            src="/images/Company-Partner/bank-bni.webp"
                                            alt="bank negara indonesia" />
                                    </div>
                                    <div className="slide">
                                        <img
                                            className="w-full"
                                            src="/images/Company-Partner/bank-jogja.webp"
                                            alt="bank jogja" />
                                    </div>
                                    <div className="slide">
                                        <img
                                            className="w-full"
                                            src="/images/Company-Partner/bank-kalsel.webp"
                                            alt="bank kalimantan selatan" />
                                    </div>
                                    <div className="slide">
                                        <img
                                            className="w-full"
                                            src="/images/Company-Partner/bank-bukopin.webp"
                                            alt="bank bukopin syariah" />
                                    </div>
                                    <div className="slide">
                                        <img
                                            className="w-full"
                                            src="/images/Company-Partner/bank-bukopin-syariah.webp"
                                            alt="bank bukopin" />
                                    </div>
                                    <div className="slide">
                                        <img
                                            className="w-full"
                                            src="/images/Company-Partner/ikonoa.webp"
                                            alt="pt.ikonoa solusindo asia" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />  {/*import component footer*/}
        </div>
    );
}

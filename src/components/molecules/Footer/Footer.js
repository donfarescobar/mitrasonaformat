import React from "react";



export default function Footer() {   
  return (
    <footer className="footer-background">
      <div className="px-4 py-8 lg:py-16 md:px-8 lg:px-12 xl:px-24">
        <div className="flex flex-col md:flex-row gap-7 md:gap-14 lg:gap-28">
          <div className="w-full md:w-1/5 flex flex-col gap-3 xl:gap-9">
            <div
              className="flex flex-col items-center gap-1 md:gap-2 lg:gap-4 xl:gap-6"
            > 
              <img
                className="w-24 h-24 object-contain object-center"
                src="/images/icon/logo.webp"
                alt="logo-perusahaan" />
              <p
                className="footer-card-text text-center max-w-custom-xs text-base lg:text-lg"
              >
                Register and Supervised
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                className="w-24 h-24 object-contain object-center"
                src="/images/icon/OJK_Logo.webp"
                alt="logo-ojk" />
            </div>
          </div>
          <div
            className="w-full md:w-4/5 ml-0 md:ml-10 lg:ml-0 flex flex-col gap-y-12 lg:gap-y-14 lg:my-6"
          >
            <div
              className="grid grid-cols-1 text-center md:text-left gap-5 lg:gap-10 sm:grid-cols-2 xl:grid-cols-4 xl:gap-14"
            >
              <div className="flex flex-col gap-2">
                <h2 className="text-yellow footer-yellow-header text-lg lg:text-xl">
                  Product
                </h2>
                <div className="flex flex-col gap-1 md:gap-2 xl:gap-3">
                  <a
                    className="footer-card-text text-sm md:text-base"
                    href="/general-insurance.html"
                  >General Insurance</a>
                  <a
                    className="footer-card-text text-sm md:text-base"
                    href="/contractor.html"
                  >Contractor Insurance</a>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-yellow footer-yellow-header text-lg lg:text-xl">
                  Gallery
                </h2>
                <div className="flex flex-col gap-1 md:gap-2 xl:gap-3">
                  <a
                    className="footer-card-text text-sm md:text-base"
                    href="/Gallery"
                  >Program Overview</a>
                  <a
                    className="footer-card-text text-sm md:text-base"
                    href="/Gallery#our-partners"
                  >Our Partners</a>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-yellow footer-yellow-header text-lg lg:text-xl">
                  Location
                </h2>
                <div className="flex flex-col gap-1 md:gap-2 xl:gap-3">
                  <a
                    className="footer-card-text text-sm md:text-base"
                    href="/Location"
                  >Our Office</a>
                  <a
                    className="footer-card-text text-sm md:text-base"
                    href="/Location"
                  >Working Hours</a>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-yellow footer-yellow-header text-lg lg:text-xl">
                  Contact
                </h2>
                <div className="flex flex-col gap-1 md:gap-2 xl:gap-3">
                  <a
                    href="tel:6281298444393"
                    className="underline underline-offset-8 footer-card-text text-sm md:text-base"
                  >+6281298444393</a>
                  <a
                    href="mailto:Mspmitra@gmail.com"
                    className="footer-card-text text-sm md:text-base"
                  >
                    Mspmitra@gmail.com</a>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 text-center md:text-left">
              <h2 className="text-yellow footer-yellow-header text-lg lg:text-xl">
                Address
              </h2>
               <div>
                <p className="footer-card-text text-sm md:text-base">
                  Ruko Mega Grosir Cempaka Mas Blok M1 no.33 Jakarta Pusat -
                  Indonesia
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

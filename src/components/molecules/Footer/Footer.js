import React from "react";
import logoMitrasona from "../../../assets/images/icon/logo.webp"
import logoOJK from "../../../assets/images/icon/OJK_Logo.webp"


export default function Footer (){ // footer without all the design and without in it
    return(
        <footer class="footer-background">
        <div class="px-4 py-8 lg:py-16 md:px-8 lg:px-12 xl:px-24">
          <div class="flex flex-col md:flex-row gap-7 md:gap-14 lg:gap-28">
            <div class="w-full md:w-1/5 flex flex-col gap-3 xl:gap-9">
              <div
                class="flex flex-col items-center gap-1 md:gap-2 lg:gap-4 xl:gap-6"
              >
                <img
                  class="w-24 h-24 object-contain object-center"
                  src={logoMitrasona}
                  alt="logo-perusahaan"
                />
                <p
                  class="footer-card-text text-center max-w-custom-xs text-base lg:text-lg"
                >
                  Register and Supervised
                </p>
              </div>
              <div class="flex flex-col items-center">
                <img
                  class="w-24 h-24 object-contain object-center"
                  src="/images/icon/OJK_Logo.webp"
                  alt={logoOJK}
                />
              </div>
            </div>
            <div
              class="w-full md:w-4/5 ml-0 md:ml-10 lg:ml-0 flex flex-col gap-y-12 lg:gap-y-14 lg:my-6"
            >
            </div>
            </div>
            </div>
      </footer>
    );
}
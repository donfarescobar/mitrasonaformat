import React from "react";
import Nav from "../../components/molecules/Navbar/Nav"
import Footer from "../../components/molecules/Footer/Footer"
import "../../index.css"


export default function Contact(){
    return(
        <div>
            <Nav/>
             <main>
              <section>
                <div class="px-4 py-10 md:px-8 lg:px-12 xl:px-24 lg:py-12">
                 <div class="flex flex-col gap-6 md:gap-12">
                    <div class="flex flex-col gap-2 self-center items-center">
                    <h2 class="business-lines-header text-xl sm:text-2xl lg:text-3xl">
                        Contact Us
                    </h2>
                    {/* <!-- <p class="contact-page-subheader text-sm lg:text-base">
                    Contact Us Any Time
                    </p> --> */}
                    </div>
                    <form class="w-full">
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label
                            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            for="grid-first-name"
                        >
                            First Name
                        </label>
                        <input
                            class="appearance-none block w-full text-gray-700 contact-page-input-border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="grid-first-name"
                            type="text"
                            placeholder="Jane"
                        />
                        <p class="text-red-500 text-xs italic">
                            Please fill out this field.
                        </p>
                        </div>
                        <div class="w-full md:w-1/2 px-3">
                        <label
                            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            for="grid-last-name"
                        >
                            Last Name
                        </label>
                        <input
                            class="appearance-none block w-full text-gray-700 contact-page-input-border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-last-name"
                            type="text"
                            placeholder="Doe"
                        />
                        </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full px-3">
                        <label
                            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            for="grid-password"
                        >
                            Email Address
                        </label>
                        <input
                            class="appearance-none block w-full text-gray-700 contact-page-input-border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-email"
                            type="email"
                            placeholder="********@*****.**"
                        />
                        </div>
                    </div>

                    <div class="flex flex-col gap-3 lg:gap-7 -mx-3 mb-6">
                        <div class="w-full px-3">
                        <label
                            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            for="grid-password"
                        >
                            Your Message
                        </label>
                        <textarea
                            rows="10"
                            class="appearance-none block w-full text-gray-700 contact-page-input-border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        >
                        </textarea>
                        </div>
                        <div class="flex items-center justify-center">
                        <button
                            class="contact-page-button-text flex justify-center items-center w-40 h-12 text-white bg-button-banner rounded-md"
                        >
                            Submit
                        </button>
                     </div>
                   </div>
                 </form>
               </div>
             </div>
            </section>
          </main>
         <Footer />
        </div>
    );
}
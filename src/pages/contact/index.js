import React from "react";

import "../../index.css"

 
const Contact = () =>{
    return(
        <>
            <main>
              <section>
                <div className="px-4 py-10 md:px-8 lg:px-12 xl:px-24 lg:py-12">
                 <div className="flex flex-col gap-6 md:gap-12">
                    <div className="flex flex-col gap-2 self-center items-center">
                    <h2 className="business-lines-header text-xl sm:text-2xl lg:text-3xl">
                        Contact Us
                    </h2>
                    </div>
                    <form className="w-full">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-first-name"
                        >
                            First Name
                        </label>
                        <input
                            className="appearance-none block w-full text-gray-700 contact-page-input-border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="grid-first-name"
                            type="text"
                            placeholder="Jane"
                        />
                        <p className="text-red-500 text-xs italic">
                            Please fill out this field.
                        </p>
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-last-name"
                        >
                            Last Name
                        </label>
                        <input
                            className="appearance-none block w-full text-gray-700 contact-page-input-border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-last-name"
                            type="text"
                            placeholder="Doe"
                        />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                        >
                            Email Address
                        </label>
                        <input
                            className="appearance-none block w-full text-gray-700 contact-page-input-border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-email"
                            type="email"
                            placeholder="********@*****.**"
                        />
                        </div>
                    </div>

                    <div className="flex flex-col gap-3 lg:gap-7 -mx-3 mb-6">
                        <div className="w-full px-3">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                        >
                            Your Message
                        </label>
                        <textarea
                            rows="10"
                            className="appearance-none block w-full text-gray-700 contact-page-input-border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        >
                        </textarea>
                        </div>
                        <div className="flex items-center justify-center">
                        <button
                            className="contact-page-button-text flex justify-center items-center w-40 h-12 text-white bg-button-banner rounded-md"
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
          </>
    );
}

export default Contact;
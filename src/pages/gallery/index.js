import React from "react";
import Nav from "../../components/molecules/Navbar/Nav"
import Footer from "../../components/molecules/Footer/Footer"
import "../../index.css"

export default function Gallery(){
    return(
        <div>
         <Nav/> {/* Import navbar  */}
         <main>
      <section id="program-overview">
        <div className="px-4 py-10 md:px-8 lg:px-12 xl:px-24 lg:py-12">
          <div className="flex flex-col gap-12 text-center">
            <h2 className="business-lines-header text-xl sm:text-2xl lg:text-3xl">
              Program Overview
            </h2>
            <div
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center"
            >
              <div className="w-full md:w-auto">
                <img
                  className="w-72 h-40 object-cover rounded shadow-md"
                  src="images/Gallery/satu.webp"
                  alt="Gambar1"
                />
              </div>
              <div className="w-full md:w-auto">
                <img
                  className="w-72 h-40 object-cover rounded shadow-md"
                  src="images/Gallery/dua.webp"
                  alt="Gambar2"
                />
              </div>
              <div className="w-full md:w-auto">
                <img
                  className="w-72 h-40 object-cover rounded shadow-md"
                  src="images/Gallery/tiga.webp"
                  alt="Gambar3"
                />
              </div>
              <div className="w-full md:w-auto">
                <img
                  className="w-72 h-40 object-cover rounded shadow-md"
                  src="images/Gallery/empat.webp"
                  alt="Gambar4"
                />
              </div>
              <div className="w-full md:w-auto">
                <img
                  className="w-72 h-40 object-cover rounded shadow-md"
                  src="images/Gallery/lima.webp"
                  alt="Gambar5"
                />
              </div>
              <div className="w-full md:w-auto">
                <img
                  className="w-72 h-40 object-cover rounded shadow-md"
                  src="images/Gallery/enam.webp"
                  alt="Gambar6"
                />
              </div>
              <div className="w-full md:w-auto">
                <img
                  className="w-72 h-40 object-cover rounded shadow-md"
                  src="images/Gallery/tujuh.webp"
                  alt="Gambar7"
                />
              </div>
              <div className="w-full md:w-auto">
                <img
                  className="w-72 h-40 object-cover rounded shadow-md"
                  src="images/Gallery/delapan.webp"
                  alt="Gambar8"
                />
              </div>
              <div className="w-full md:w-auto">
                <img
                  className="w-72 h-40 object-cover rounded shadow-md"
                  src="images/Gallery/sembilan.webp"
                  alt="Gambar9"
                />
              </div>
              <div className="w-full md:w-auto">
                <img
                  className="w-72 h-40 object-cover rounded shadow-md"
                  src="images/Gallery/sepuluh.webp"
                  alt="Gambar10"
                />
              </div>
              <div className="w-full md:w-auto">
                <img
                  className="w-72 h-40 object-cover rounded shadow-md"
                  src="images/Gallery/sebelas.webp"
                  alt="Gambar11"
                />
              </div>
              <div className="w-full md:w-auto">
                <img
                  className="w-72 h-40 object-cover rounded shadow-md"
                  src="images/Gallery/duabelas.webp"
                  alt="Gambar12"
                />
              </div>
              <div className="w-full md:w-auto">
                <img
                  className="w-72 h-40 object-cover rounded shadow-md"
                  src="images/Gallery/tigabelas.webp"
                  alt="Gambar13"
                />
              </div>
              <div className="w-full md:w-auto">
                <img
                  className="w-72 h-40 object-cover rounded shadow-md"
                  src="images/Gallery/enambelas.webp"
                  alt="Gambar14"
                />
              </div>
              <div className="w-full md:w-auto">
                <img
                  className="w-72 h-40 object-cover rounded shadow-md"
                  src="images/Gallery/tujuhbelas.webp"
                  alt="Gambar15"
                />
              </div>
              <div className="w-full md:w-auto">
                <img
                  className="w-72 h-40 object-cover rounded shadow-md"
                  src="images/Gallery/delapanbelas.webp"
                  alt="Gambar16"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="our-partners">
        <div className="px-4 py-10 md:px-8 lg:px-12 xl:px-24 lg:py-12">
          <div className="flex flex-col gap-12 text-center">
            <h2 className="business-lines-header text-xl sm:text-2xl lg:text-3xl">
              Our Partners
            </h2>
            <div
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center"
            >
              <div className="gallery-container-img">
                <img
                  className="gallery-img"
                  src="/images/Company-Partner/askrindo.webp"
                  alt="pt.askrindo"
                />
              </div>
              <div className="gallery-container-img">
                <img
                  className="gallery-img"
                  src="/images/Company-Partner/jasindo.webp"
                  alt="pt.asuransi jasindo"
                />
              </div>
              <div className="gallery-container-img">
                <img
                  className="gallery-img"
                  src="/images/Company-Partner/jamkrindo.webp"
                  alt="pt.asuransi jamkrindo"
                />
              </div>
              <div className="gallery-container-img">
                <img
                  className="gallery-img"
                  src="/images/Company-Partner/jamkrindo-syariah.webp"
                  alt="pt.asuransi jamkrindo syariah"
                />
              </div>
              <div className="gallery-container-img">
                <img
                  className="gallery-img"
                  src="/images/Company-Partner/bri-insurance.webp"
                  alt="pt.bri insurance"
                />
              </div>
              <div className="gallery-container-img">
                <img
                  className="gallery-img"
                  src="/images/Company-Partner/asuransi-bhayangkara.webp"
                  alt="pt.asuransi bhakti bayangkara"
                />
              </div>
              <div className="gallery-container-img">
                <img
                  className="gallery-img"
                  src="/images/Company-Partner/maxium-insurance.webp"
                  alt="pt.maximus insurance"
                />
              </div>
              <div className="gallery-container-img">
                <img
                  className="gallery-img"
                  src="/images/Company-Partner/sinarmas.webp"
                  alt="pt.asuransi sinarmas"
                />
              </div>
              <div className="gallery-container-img">
                <img
                  className="gallery-img"
                  src="/images/Company-Partner/sinarmas-syariah.webp"
                  alt="pt.asuransi sinarmas syariah"
                />
              </div>
              <div className="gallery-container-img">
                <img
                  className="gallery-img"
                  src="/images/Company-Partner/bosowa-insurance.webp"
                  alt="pt.bosowa asuransi"
                />
              </div>
              <div className="gallery-container-img">
                <img
                  className="gallery-img"
                  src="/images/Company-Partner/tugu-insurance.webp"
                  alt="pt.asuransi tugu"
                />
              </div>
              <div className="gallery-container-img">
                <img
                  className="gallery-img"
                  src="/images/Company-Partner/pln-insurance.webp"
                  alt="pt.pln insurance"
                />
              </div>
              <div className="gallery-container-img">
                <img
                  className="gallery-img"
                  src="/images/Company-Partner/bank-mandiri.webp"
                  alt="bank mandiri"
                />
              </div>
              <div className="gallery-container-img">
                <img
                  className="gallery-img"
                  src="/images/Company-Partner/bank-bri.webp"
                  alt="bank rakyat indonesia"
                />
              </div>
              <div className="gallery-container-img">
                <img
                  className="gallery-img"
                  src="/images/Company-Partner/bank-bni.webp"
                  alt="bank negara indonesia"
                />
              </div>
              <div className="gallery-container-img">
                <img
                  className="gallery-img"
                  src="/images/Company-Partner/bank-jogja.webp"
                  alt="bank jogja"
                />
              </div>
              <div className="gallery-container-img">
                <img
                  className="gallery-img"
                  src="/images/Company-Partner/bank-kalsel.webp"
                  alt="bank kalimantan selatan"
                />
              </div>
              <div className="gallery-container-img">
                <img
                  className="gallery-img"
                  src="/images/Company-Partner/bank-bukopin.webp"
                  alt="bank bukopin syariah"
                />
              </div>
              <div className="gallery-container-img">
                <img
                  className="gallery-img"
                  src="/images/Company-Partner/bank-bukopin-syariah.webp"
                  alt="bank bukopin"
                />
              </div>
              <div className="gallery-container-img">
                <img
                  className="gallery-img"
                  src="/images/Company-Partner/ikonoa.webp"
                  alt="pt.ikonoa solusindo asia"
                />
              </div>
            </div>
          </div>
        </div>
        </section>
        </main>
        <Footer />   {/*Import component footer*/}
        </div>
    );
}
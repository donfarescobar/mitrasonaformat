import React from "react";

const Gallery = () => {
  const images = [
    "satu.webp",
    "dua.webp",
    "tiga.webp",
    "empat.webp",
    "lima.webp",
    "enam.webp",
    "tujuh.webp",
    "delapan.webp",
    "sembilan.webp",
    "sepuluh.webp",
    "sebelas.webp",
    "duabelas.webp",
    "tigabelas.webp",
    "enambelas.webp",
    "tujuhbelas.webp",
    "delapanbelas.webp",
  ];

  return (
    <main>
      <section id="program-overview">
        <div className="px-4 py-10 md:px-8 lg:px-12 xl:px-24 lg:py-12">
          <div className="flex flex-col gap-12 text-center">
            <h2 className="business-lines-header text-xl sm:text-2xl lg:text-3xl">
              Program Overview
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
              {images.map((image, index) => (
                <div key={index} className="w-full md:w-auto">
                  <img
                    className="w-72 h-40 object-cover rounded shadow-md"
                    src={`../../assets/images/Gallery/${image}`}
                    alt={`Gambar${index + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Gallery;

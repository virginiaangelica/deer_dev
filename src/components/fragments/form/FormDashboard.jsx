import React from "react";
import { useNavigate } from "react-router-dom";

export const FormDashboard = () => (
  <section className="bg-[#171717] text-white">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
      {/* Text Content */}
      <div className="text-center md:text-left md:w-1/2">
        <p className="text-sm">TEMUKAN INSPIRASI OUTFIT TERBARU DISINI</p>
        <h1 className="text-4xl font-bold mb-4">
          TEMUKAN GAYA UNIK YANG SESUAI KEPRIBADIANMU!
        </h1>
      </div>

      {/* Image */}
      <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center ml-14">
        <img
          src="src/assets/bg beranda.png"
          alt="Inspirasi Outfit"
          className="w-2/3 md:w-full max-w-sm rounded-lg shadow-lg"
        />
      </div>
    </div>
  </section>
);

export const KategoriSection = () => {
  const navigate = useNavigate();

  const kategori = [
    { name: "Kaos", img: "src/assets/kategori1.png", path: "/kaos" },
    { name: "Kemeja", img: "src/assets/kategori2.png" },
    { name: "Jaket", img: "src/assets/kategori3.png" },
    { name: "Hoodie", img: "src/assets/kategori4.png" },
    { name: "Denim", img: "src/assets/kategori5.png" },
    { name: "Cargo", img: "src/assets/kategori6.png" },
    { name: "Chino", img: "src/assets/kategori7.png" },
    { name: "Jas", img: "src/assets/kategori8.png" },
    { name: "Parka", img: "src/assets/kategori9.png" },
    { name: "Aksesoris", img: "src/assets/kategori10.png" },
  ];

  const handleCardClick = (path) => {
    navigate(path); 
  };

  return (
    <section className="py-7 px-20 bg-white">
      <h2 className="text-xl font-bold mb-4">Kategori</h2>
      <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
        {kategori.map((item, index) => (
          <div
            key={index}
            onClick={() => handleCardClick(item.path)}
            className="w-32 h-40 flex flex-col items-center justify-center bg-gray-100 rounded-lg shadow-md p-4 shrink-0"
          >
            <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
              <img
                src={item.img}
                alt={item.name}
                className="w-20 h-20 object-contain"
              />
            </div>
            <p className="text-sm font-medium mt-3">{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export const InspirasiGayaSection = () => {
  const navigate = useNavigate();

  const inspirasiGaya = [
    { name: "Formal", img: "src/assets/formal.jpg", path: "/fashion-style" },
    { name: "Semi Formal", img: "src/assets/semi formal.jpg", path: "/fashion-style" },
    { name: "Sehari Hari", img: "src/assets/sehari hari.jpg", path: "/fashion-style" },
    { name: "Casual", img: "src/assets/casual.jpg", path: "/fashion-style" },
  ];

  const handleCardClick = (path) => {
    navigate(path);
  };

  return (
    <section className="py-10 px-10 bg-gray-300 ml-20 mr-20 rounded-[20px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {inspirasiGaya.map((item, index) => (
          <div
            key={index}
            onClick={() => handleCardClick(item.path)}
            className="relative rounded-[26px] overflow-hidden shadow-md cursor-pointer"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-40 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h3 className="text-white font-bold text-lg">{item.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

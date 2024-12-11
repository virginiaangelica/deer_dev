import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FormTips() {
  const navigate = useNavigate();
  const [selectedCard, setSelectedCard] = useState(null); 

  const tipsData = [
    { name: "MEMILIH BAHAN", img: "src/assets/tips1.jpg", path: "/pilih-bahan" },
    { name: "KOMBINASI WARNA", img: "src/assets/tips2.jpg", path: "/paduan-warna" },
    { name: "PENGGUNAAN AKSESORIS", img: "src/assets/tips3.jpg", path: "/aksesoris" },
  ];

  const handleCardClick = (index, path) => {
    setSelectedCard(index);
    navigate(path); 
  };

  return (
    <section className="py-10 px-10 bg-white">
      <p className="text-2xl font-bold mb-4 ml-8">TIPS FASHION</p>
      <p className="text-lg mb-4 ml-8 mr-8">
        Inspirasikan gaya anda dengan tips fashion terbaik dari pemilihan bahan,
        kombinasi warna, hingga penggunaan aksesoris. Ikuti tips kami dan buat
        gaya anda semakin menarik setiap hari!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ml-7 mr-7">
        {tipsData.map((item, index) => (
          <div
            key={index}
            onClick={() => handleCardClick(index, item.path)} 
            className={`relative rounded-[10px] overflow-hidden shadow-md mt-3 bg-black cursor-pointer ${
              selectedCard === index ? "border-4 border-blue-700" : "" 
            }`}
            style={{ height: "330px" }}
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-4/5 object-cover"
            />
            <div className="absolute bottom-0 bg-black bg-opacity-50 w-full py-4">
              <h3 className="text-white font-bold text-center text-lg">{item.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; 

export default function FormKaos() {
  const kaosData = [
    {
      name: "Kaos oversize",
      price: "Rp 149.000",
      rating: 4.7,
      reviews: 311,
      img: "src/assets/kaos1.png",
    },
    {
      name: "Kaos oversize",
      price: "Rp 135.000",
      rating: 4.2,
      reviews: 448,
      img: "src/assets/kaos2.png",
    },
    {
      name: "Kaos kerah bulat",
      price: "Rp 135.000",
      rating: 4.5,
      reviews: 223,
      img: "src/assets/kaos3.png",
    },
    {
      name: "Kaos garis mini",
      price: "Rp 139.000",
      rating: 4.7,
      reviews: 361,
      img: "src/assets/kaos4.png",
    },
    {
      name: "Kaos garis lebar",
      price: "Rp 170.000",
      rating: 4.2,
      reviews: 496,
      img: "src/assets/kaos5.png",
    },
    {
      name: "Kaos kerah V",
      price: "Rp 160.000",
      rating: 3.9,
      reviews: 801,
      img: "src/assets/kaos6.png",
    },
    {
      name: "Kaos polos lengan panjang",
      price: "Rp 139.000",
      rating: 4.7,
      reviews: 771,
      img: "src/assets/kaos7.png",
    },
    {
      name: "Kaos klasik lengan panjang",
      price: "Rp 139.000",
      rating: 3.9,
      reviews: 422,
      img: "src/assets/kaos8.png",
    },
  ];

  const [lovedItems, setLovedItems] = useState(new Set());
  const navigate = useNavigate(); 

  const toggleLove = (index) => {
    setLovedItems((prev) => {
      const updatedLovedItems = new Set(prev);
      if (updatedLovedItems.has(index)) {
        updatedLovedItems.delete(index);
      } else {
        updatedLovedItems.add(index);
      }
      return updatedLovedItems;
    });
  };

  const handleAddToCart = () => {
    navigate("/tambah-keranjang"); 
  };

  return (
    <section className="py-10 px-10 bg-white">
      <h1 className="text-2xl font-bold mb-8 ml-10">KAOS</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 ml-10 mr-10">
        {kaosData.map((item, index) => (
          <div
            key={index}
            className="relative flex flex-col border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
          >
            {/* Heart Icon */}
            <div
              onClick={() => toggleLove(index)}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500 cursor-pointer"
            >
              {lovedItems.has(index) ? (
                <FaHeart size={24} color="red" />
              ) : (
                <FaRegHeart size={24} color="gray" />
              )}
            </div>

            {/* Image */}
            <div className="w-80 h-80 ml-20">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Card Details */}
            <div className="p-4 flex-grow">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <div className="flex items-center gap-2">
                  <span className="text-yellow-500">★</span>
                  <span>{item.rating}</span>
                  <span className="text-gray-500">({item.reviews})</span>{" "}
                  {/* Reviews next to rating */}
                </div>
              </div>

              <p className="text-gray-700">{item.price}</p>

              <button
                onClick={handleAddToCart}
                className="mt-4 w-full bg-black text-white py-2 rounded-md hover:bg-gray-800"
              >
                TAMBAHKAN KE KERANJANG
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

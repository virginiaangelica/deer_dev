import React, { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function FormFavorit() {
  const navigate = useNavigate();
  
  const favoritData = [
    {
      name: "Kaos kerah bulat",
      code: "934584",
      color: "Abu - abu",
      size: "S",
      price: "Rp 135.000",
      img: "src/assets/kaos3.png",
    },
    {
      name: "Kaos garis double",
      code: "728402",
      color: "Cream",
      size: "L",
      price: "Rp 135.000",
      img: "src/assets/kaos2.png",
    },
  ];

  const [likes, setLikes] = useState(Array(favoritData.length).fill(false)); 

  const handleLike = (index) => {
    const updatedLikes = [...likes];
    updatedLikes[index] = !updatedLikes[index];
    setLikes(updatedLikes);

    Swal.fire({
      icon: updatedLikes[index] ? "success" : "info",
      title: updatedLikes[index]
        ? "Berhasil Ditambahkan ke Favorit!"
        : "Dihapus dari Favorit",
      text: updatedLikes[index]
        ? "Produk ini telah masuk ke daftar favorit Anda."
        : "Produk ini telah dihapus dari favorit Anda.",
      timer: 1500,
      showConfirmButton: false,
    });
  };

  return (
    <section className="py-10 px-10 bg-white">
      {/* Header dengan Icon Back */}
      <div className="flex items-center mb-6 ml-10">
        <button
          className="bg-black/50 p-2 rounded-full text-white hover:bg-black/70 mr-4"
          onClick={() => navigate("/kaos")} 
        >
          <ArrowLeft size={20} />
        </button>
        <p className="text-xl font-bold">FAVORIT SAYA</p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {favoritData.map((item, index) => (
          <div
            key={index}
            className="flex items-center p-6 border rounded-lg shadow-md ml-10 mr-10"
          >
            <div className="relative w-32 h-32 mr-4">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-full object-cover rounded-md"
              />
              <div
                className="absolute top-2 right-2 text-2xl cursor-pointer"
                onClick={() => handleLike(index)}
              >
                <span className={likes[index] ? "text-red-500" : "text-gray-400"}>
                  {likes[index] ? "❤️" : "🤍"}
                </span>
              </div>
            </div>
            <div className="flex-grow">
              <h3 className="font-bold text-lg">{item.name}</h3>
              <p className="text-sm text-gray-600">
                Kode produk: {item.code} <br />
                Warna: {item.color} <br />
                Ukuran: {item.size}
              </p>
              <p className="font-semibold mt-2">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

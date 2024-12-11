import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FormTambahKeranjang() {
  const [selectedSize, setSelectedSize] = useState("S");
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate(); 

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleQuantityChange = (type) => {
    if (type === "decrease" && quantity > 1) {
      setQuantity(quantity - 1);
    } else if (type === "increase") {
      setQuantity(quantity + 1);
    }
  };

  const handleAddToCart = () => {
    navigate("/keranjang");
  };

  return (
    <div className="flex flex-col space-y-7">
      {/* Nama produk */}
      <h1 className="text-2xl font-bold text-gray-800">Kaos kerah bulat</h1>

      {/* Pilihan ukuran */}
      <div>
        <div className="flex space-x-2">
          {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
            <button
              key={size}
              onClick={() => handleSizeClick(size)}
              className={`px-4 py-2 border rounded-md font-semibold ${
                selectedSize === size
                  ? "bg-black text-white"
                  : "bg-white text-black border-gray-400"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Harga dan Quantity bersebelahan */}
      <div className="flex items-center space-x-32">
        <p className="text-xl font-bold text-gray-800">Rp 135.000</p>

        {/* Quantity dan tombol tambah */}
        <div className="flex items-center space-x-5 border border-gray-400 rounded-full px-6 py-2 bg-gray-200">
          <button
            onClick={() => handleQuantityChange("decrease")}
            className="text-xl font-bold text-gray-700"
          >
            -
          </button>
          <span className="text-lg font-medium">{quantity}</span>
          <button
            onClick={() => handleQuantityChange("increase")}
            className="text-xl font-bold text-gray-700"
          >
            +
          </button>
        </div>
      </div>

      {/* Tombol tambah ke keranjang */}
      <button
        onClick={handleAddToCart} 
        className="bg-black text-white px-4 py-2 rounded-lg shadow-md font-bold mr-80 ml-20"
      >
        MASUKKAN KERANJANG
      </button>
    </div>
  );
}

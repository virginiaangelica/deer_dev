import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react"; // Mengimpor ikon panah kiri untuk tombol kembali

export default function FormBCA2() {
  const [activeTab, setActiveTab] = useState("Sedang Dikemas");
  const navigate = useNavigate();

  const tabs = [
    "Semua",
    "Belum Bayar",
    "Sedang Dikemas",
    "Dikirim",
    "Selesai",
    "Dibatalkan",
    "Pengembalian Barang",
  ];

  const orders = [
    {
      name: "Kaos kerah bulat",
      color: "Abu - abu",
      size: "S",
      price: "Rp 135.000",
      quantity: 1,
      total: "Rp 163.000",
      img: "src/assets/kaos3.png",
      status: "Sedang Dikemas",
    },
    {
      name: "Kaos garis double",
      color: "Cream",
      size: "L",
      price: "Rp 145.000",
      quantity: 2,
      total: "Rp 163.000",
      img: "src/assets/kaos2.png",
      status: "Sedang Dikemas",
    },
  ];

  const filterOrders = (tab) => {
    if (tab === "Semua") {
      // Menampilkan hanya 1 produk baju abu-abu di tab "Semua"
      return orders.filter((order) => order.name === "Kaos kerah bulat");
    }
    if (tab === "Sedang Dikemas") {
      // Menampilkan hanya 1 produk baju abu-abu di tab "Sedang Dikemas"
      return orders.filter((order) => order.name === "Kaos kerah bulat");
    }
    return orders.filter((order) => order.status === tab);
  };

  useEffect(() => {
    setActiveTab("Sedang Dikemas");
  }, []);

  return (
    <div className="py-10 px-4 md:px-10 bg-white">
      <div className="border rounded-lg p-4 shadow-md bg-gray-50">
        {/* Icon Back */}
        <button
          className="bg-black/50 p-2 rounded-full text-white hover:bg-black/70 mb-4"
          onClick={() => navigate("/keranjang")}
        >
          <ArrowLeft size={20} />
        </button>

        {/* Header Tabs */}
        <div className="flex items-center justify-between border-b pb-2 mb-4 text-sm font-medium text-gray-700">
          <div className="flex space-x-4">
            {tabs.map((tab) => (
              <span
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`cursor-pointer ${
                  activeTab === tab
                    ? "text-black border-b-2 border-black"
                    : "text-gray-500"
                }`}
              >
                {tab}
                {filterOrders(tab).length > 0 && (
                  <span className="ml-1 text-gray-500">
                    ({filterOrders(tab).length})
                  </span>
                )}
              </span>
            ))}
          </div>
        </div>

        {/* Orders Display */}
        <div>
          {filterOrders(activeTab).map((order, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-start md:items-center justify-between border rounded-lg p-4 bg-white shadow-sm mb-4"
            >
              <div className="flex items-center">
                <img
                  src={order.img}
                  alt={order.name}
                  className="w-24 h-24 object-cover rounded-lg mr-4"
                />
                <div>
                  <h3 className="font-bold text-lg">{order.name}</h3>
                  <p className="text-sm text-gray-600">Warna: {order.color}</p>
                  <p className="text-sm text-gray-600">Ukuran: {order.size}</p>
                  <p className="mt-2">{order.price}</p>
                  <p className="text-sm text-gray-600">
                    Jumlah: {order.quantity}
                  </p>
                </div>
              </div>
              <div className="mt-4 md:mt-0 text-right">
                <span
                  className={`block text-sm font-medium ${
                    order.status === "Sedang Dikemas"
                      ? "text-green-600"
                      : "text-gray-600"
                  }`}
                >
                  {order.status}
                </span>
                <p className="font-bold text-lg mt-10">
                  TOTAL PESANAN : <span className="ml-14">{order.total}</span>
                </p>
                {order.status === "Sedang Dikemas" && (
                  <button className="mt-7 px-6 py-2 bg-black text-white text-sm font-bold rounded-lg">
                    BATALKAN PESANAN
                  </button>
                )}
              </div>
            </div>
          ))}
          {filterOrders(activeTab).length === 0 && (
            <div className="text-center py-10 text-gray-500">
              <p>Tidak ada data untuk tab "{activeTab}".</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

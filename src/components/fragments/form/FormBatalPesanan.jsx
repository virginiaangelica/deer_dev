import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function FormBatalPesanan() {
  const [activeTab, setActiveTab] = useState("Dibatalkan");
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
      status: "Dibatalkan",
    },
    {
      name: "Kaos garis double",
      color: "Cream",
      size: "L",
      price: "Rp 145.000",
      quantity: 2,
      total: "Rp 290.000",
      img: "src/assets/kaos2.png",
      status: "Belum Bayar",
    },
  ];

  const getTabCount = (tab) => {
    if (tab === "Semua") return orders.length;
    return orders.filter((order) => order.status === tab).length;
  };

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
                {getTabCount(tab) > 0 && (
                  <span className="ml-1 text-gray-500">
                    ({getTabCount(tab)})
                  </span>
                )}
              </span>
            ))}
          </div>
        </div>

        {/* Content */}
        <div>
          {orders
            .filter(
              (order) =>
                activeTab === "Semua" || order.status === activeTab
            )
            .map((order, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-start md:items-center justify-between border rounded-lg p-4 bg-white shadow-sm mb-4"
              >
                {/* Product Info */}
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
                    <p className="text-sm text-gray-600">Jumlah: {order.quantity}</p>
                  </div>
                </div>

                {/* Order Info */}
                <div className="mt-4 md:mt-0 text-right">
                  {/* Status */}
                  <span
                    className={`block text-sm font-medium ${
                      order.status === "Belum Bayar"
                        ? "text-red-600"
                        : order.status === "Dibatalkan"
                        ? "text-red-600"
                        : "text-green-600"
                    }`}
                  >
                    {order.status}
                  </span>

                  {/* Total Pesanan */}
                  <p className="font-bold text-lg mt-10">
                    TOTAL PESANAN : <span className="ml-14">{order.total}</span>
                  </p>

                  {/* Button Beli Lagi */}
                  <button
                    onClick={() => navigate("/tambah-keranjang")}
                    className="mt-4 px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-black"
                  >
                    BELI LAGI
                  </button>
                </div>
              </div>
            ))}

          {/* Jika Tidak Ada Pesanan */}
          {orders.filter(
            (order) =>
              activeTab === "Semua" || order.status === activeTab
          ).length === 0 && (
            <div className="text-center py-10 text-gray-500">
              <p>Tidak ada data untuk tab "{activeTab}".</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

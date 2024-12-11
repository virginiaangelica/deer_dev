import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import { useNavigate } from "react-router-dom"; 
import { ArrowLeft } from "lucide-react"; 

export default function FormBCA() {
  const [activeTab, setActiveTab] = useState("Belum Bayar");
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
      status: "Belum Bayar",
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

  const getTabCount = (tab) => {
    if (tab === "Semua") return 1; 
    if (tab === "Sedang Dikemas") return 0; 
    if (tab === "Belum Bayar") return 1; 
    return orders.filter((order) => order.status === tab).length;
  };

  useEffect(() => {
    setActiveTab("Belum Bayar");
  }, []);

  const showBCAConfirmation = () => {
    Swal.fire({
      html: `
        <div style="display: flex; justify-content: space-between; align-items: center; font-size: 16px; font-weight: bold;">
          <span>Total Pesanan</span>
          <span style="color: black;">Rp 163.000</span>
        </div>
        <hr style="border: none; height: 1px; background-color: #ddd; margin: 1rem 0;" />
        <div style="display: flex; justify-content: space-between; align-items: center; font-size: 16px; margin-top: 1rem;">
          <span style="font-weight: bold;">Bayar Dalam</span>
          <span style="color: red; font-weight: bold;">Jatuh Tempo 10 Desember 2024, 10.00</span>
        </div>
        <hr style="border: none; height: 1px; background-color: #ddd; margin: 1rem 0;" />
        <div style="text-align: left; font-size: 14px; margin-bottom: 1rem;">
          <p style="font-weight: bold; margin-top: 1.25rem;">BCA Virtual Account</p>
          <div style="display: flex; align-items: center; margin-top: 1.25rem;">
            <p style="margin: 0; font-weight: bold; flex-grow: 1;">
              No. Rekening: 
              <span style="color: red;">1121 4435 6767 1902</span>
            </p>
            <button style="background-color: #28a745; color: white; font-weight: bold; border: none; padding: 0.5rem 1rem; border-radius: 5px; cursor: pointer; margin-left: 1rem;">
              SALIN
            </button>
          </div>
          <p style="margin-top: 0.5rem; text-align: start; font-weight: bold;">Hanya menerima dari bank BCA</p>
        </div>
        <hr style="border: none; height: 1px; background-color: #ddd; margin: 1rem 0;" />
        <div style="text-align: left; font-size: 14px;">
          <p style="font-weight: bold; margin-bottom: 0.5rem;">Petunjuk transfer M-Banking</p>
          <ol style="padding-left: 1.5rem; list-style: decimal;">
            <li>Pilih m - Transfer > BCA Virtual Account.</li>
            <li>Masukkan Nomor Virtual Account <span style="color: red;">1121 4435 6767 1902</span> dan pilih send.</li>
            <li>Periksa informasi yang tertera di layar.</li>
            <li>Masukkan PIN m - BCA anda dan pilih OK.</li>
            <li>Jika muncul notifikasi "Transaksi Gagal. Nominal melebihi limit harian", mohon ulangi transaksi menggunakan Klik BCA (iBanking) atau ATM.</li>
          </ol>
        </div>
      `,
      confirmButtonText: `<span style="font-weight: bold; font-size: 16px;">OK</span>`,
      customClass: {
        popup: "rounded-lg max-w-lg mx-auto p-4",
        confirmButton: "bg-black text-white font-bold", 
      },
      backdrop: "rgba(0,0,0,0.4)",
      willClose: () => {
        navigate("/bca2");  
      }
    });
  };

  return (
    <div className="py-10 px-4 md:px-10 bg-white">
      <div className="border rounded-lg p-4 shadow-md bg-gray-50">
        <button
          className="bg-black/50 p-2 rounded-full text-white hover:bg-black/70 mb-4"
          onClick={() => navigate("/keranjang")}
        >
          <ArrowLeft size={20} />
        </button>
        <div className="flex items-center justify-between border-b pb-2 mb-4 text-sm font-medium text-gray-700">
          <div className="flex space-x-4">
            {tabs.map((tab) => (
              <span
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`cursor-pointer ${activeTab === tab ? "text-black border-b-2 border-black" : "text-gray-500"}`}
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
        <div>
          {orders
            .filter((order) => {
              if (activeTab === "Semua") return order.name === "Kaos kerah bulat";
              if (activeTab === "Belum Bayar") return order.name === "Kaos kerah bulat";
              if (activeTab === "Sedang Dikemas") return false;
              return order.status === activeTab;
            })
            .map((order, index) => (
              <div key={index} className="flex flex-col md:flex-row items-start md:items-center justify-between border rounded-lg p-4 bg-white shadow-sm mb-4">
                <div className="flex items-center">
                  <img src={order.img} alt={order.name} className="w-24 h-24 object-cover rounded-lg mr-4" />
                  <div>
                    <h3 className="font-bold text-lg">{order.name}</h3>
                    <p className="text-sm text-gray-600">Warna: {order.color}</p>
                    <p className="text-sm text-gray-600">Ukuran: {order.size}</p>
                    <p className="mt-2">{order.price}</p>
                    <p className="text-sm text-gray-600">Jumlah: {order.quantity}</p>
                  </div>
                </div>
                <div className="mt-4 md:mt-0 text-right">
                  <span className={`block text-sm font-medium ${order.status === "Belum Bayar" ? "text-red-600" : "text-green-600"}`}>
                    {order.status}
                  </span>
                  <p className="font-bold text-lg mt-10">TOTAL PESANAN : <span className="ml-14">{order.total}</span></p>
                  {order.status === "Belum Bayar" && (
                    <button
                      onClick={showBCAConfirmation}
                      className="mt-7 px-6 py-2 bg-black text-white text-sm font-bold rounded-lg"
                    >
                      BAYAR
                    </button>
                  )}
                </div>
              </div>
            ))}
          {orders.filter((order) => {
            if (activeTab === "Semua") return order.name === "Kaos kerah bulat";
            if (activeTab === "Belum Bayar") return order.name === "Kaos kerah bulat";
            if (activeTab === "Sedang Dikemas") return false;
            return order.status === activeTab;
          }).length === 0 && (
            <div className="text-center text-gray-600 mt-4">
              Tidak ada produk dalam status ini.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FormKeranjang() {
  const [selectedShipping, setSelectedShipping] = useState([]);
  const [selectedPayment, setSelectedPayment] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  const shippingOptions = ["J & T Express (RP 10.000)"];
  const paymentOptions = ["Cash of Delivery (COD)", "BCA Virtual Account"];

  const handleShippingChange = (value) => {
    setSelectedShipping((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const handlePaymentChange = (value) => {
    setSelectedPayment(value);
  };

  const handlePlaceOrder = () => {
    if (selectedPayment === "Cash of Delivery (COD)") {
      navigate("/cod");
    } else if (selectedPayment === "BCA Virtual Account") {
      navigate("/bca");
    } else {
      alert("Silakan pilih metode pembayaran.");
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Detail Produk */}
      <div className="col-span-2 space-y-4">
        <div className="flex flex-col md:flex-row items-start space-x-7">
          {/* Gambar Produk */}
          <img
            src="/src/assets/kaos3.png"
            alt="Produk"
            className="w-64 h-64 object-cover border border-gray-400 rounded-lg bg-gray-200"
          />

          {/* Detail Produk dan Alamat */}
          <div className="w-full">
            {/* Detail Produk */}
            <div className="mb-6">
              <h2 className="text-2xl font-bold">Kaos kerah bulat</h2>
              <p>Kode produk: 934584</p>
              <p>Warna: Abu - abu</p>
              <p>Ukuran: S</p>
              <p className="mb-6 mt-6">Rp 135.000</p>
              <p>Jumlah: 1</p>
              <p>SUBTOTAL PRODUK: Rp 135.000</p>
            </div>

            {/* Alamat */}
            <div>
              <label className="block font-semibold mb-2">Alamat:</label>
              <p className="mb-3">
                *Wajib mengisi alamat sesuai dengan format yang ditentukan*
              </p>
              <p className="mb-5">
                Nama/No.HP aktif/Provinsi/Kota/Kecamatan/Kode Pos/Nama
                Jalan/Gedung/No.Rumah
              </p>
              <textarea
                placeholder="Isi alamat rumah kamu disini..."
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full p-2 border border-gray-400 rounded-lg"
              ></textarea>
            </div>
          </div>
        </div>
      </div>

      {/* Ringkasan Pesanan */}
      <div className="col-span-1 border border-gray-400 p-4 rounded-lg space-y-4">
        <h3 className="text-lg font-bold">RINGKASAN PESANAN 1 PRODUK</h3>
        <p className="font-bold">
          Subtotal produk: <span className="float-right">Rp 135.000</span>
        </p>
        <p className="font-bold">
          Subtotal pengiriman: <span className="float-right">Rp 10.000</span>
        </p>
        <p className="font-bold">
          Termasuk PPN: <span className="float-right">Rp 18.000</span>
        </p>
        <hr />
        <p className="font-bold">
          TOTAL PESANAN: <span className="float-right">Rp 163.000</span>
        </p>

        {/* Jasa Pengiriman */}
        <div className="mt-4">
          <p className="font-semibold">
            Jasa Pengiriman: <span className="text-red-500">*</span>
          </p>
          {shippingOptions.map((option) => (
            <label key={option} className="block">
              <input
                type="checkbox"
                value={option}
                checked={selectedShipping.includes(option)}
                onChange={() => handleShippingChange(option)}
                className="mr-2"
              />
              {option}
            </label>
          ))}
        </div>

        {/* Metode Pembayaran */}
        <div className="mt-4">
          <p className="font-semibold">
            Metode Pembayaran: <span className="text-red-500">*</span>
          </p>
          {paymentOptions.map((option) => (
            <label key={option} className="block">
              <input
                type="radio"
                value={option}
                checked={selectedPayment === option}
                onChange={() => handlePaymentChange(option)}
                className="mr-2"
              />
              {option}
            </label>
          ))}
        </div>

        {/* Tombol Buat Pesanan */}
        <button
          onClick={handlePlaceOrder}
          className="w-2/4 bg-black text-white py-2 rounded-lg font-bold mx-auto block ml-52"
        >
          BUAT PESANAN
        </button>
      </div>
    </div>
  );
}

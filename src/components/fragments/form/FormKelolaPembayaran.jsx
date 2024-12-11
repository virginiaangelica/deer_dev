import React, { useState } from "react";

const FormKelolaPembayaran = () => {
  const [pembayaran, setPembayaran] = useState([
    { id: 1, nama: "Andi Pratama", tanggal: "01/02/24", status: "Dikonfirmasi", bukti: "src/assets/tf bukti.jpeg" },
    { id: 2, nama: "Syahputra", tanggal: "18/05/24", status: "Belum dikonfirmasi", bukti: "src/assets/tf bukti.jpeg" },
  ]);

  const [selectedBukti, setSelectedBukti] = useState(null);

  const totalDikonfirmasi = pembayaran.filter((item) => item.status === "Dikonfirmasi").length;
  const totalBelumDikonfirmasi = pembayaran.filter((item) => item.status === "Belum dikonfirmasi").length;

  const handleStatusUpdate = (id, status) => {
    setPembayaran((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status } : item))
    );
  };

  const handleClosePopup = () => {
    setSelectedBukti(null);
  };

  return (
    <div>
      {/* Title */}
      <h1 className="text-3xl font-bold mb-6">Kelola Pembayaran</h1>

      {/* Summary Boxes */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div className="bg-gray-200 p-4 rounded shadow">
          <h3 className="text-lg font-bold">Total pembayaran dikonfirmasi</h3>
          <p className="text-2xl">{totalDikonfirmasi}</p>
        </div>
        <div className="bg-gray-200 p-4 rounded shadow">
          <h3 className="text-lg font-bold">Total pembayaran belum dikonfirmasi</h3>
          <p className="text-2xl">{totalBelumDikonfirmasi}</p>
        </div>
      </div>

      {/* List Pembayaran */}
      <div className="space-y-4">
        {pembayaran.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center bg-white shadow p-4 rounded border"
          >
            <div>
              <h4 className="font-bold">{item.nama}</h4>
              <p className="text-gray-600">{item.tanggal}</p>
              <button
                onClick={() => setSelectedBukti(item.bukti)}
                className="text-blue-500 text-sm"
              >
                Lihat bukti pembayaran
              </button>
            </div>
            <div className="text-right">
              <p
                className={`font-bold mb-2 ${
                  item.status === "Dikonfirmasi" ? "text-green-600" : "text-red-600"
                }`}
              >
                {item.status}
              </p>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleStatusUpdate(item.id, "Dikonfirmasi")}
                  className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
                >
                  Simpan
                </button>
                <button
                  onClick={() => handleStatusUpdate(item.id, "Belum dikonfirmasi")}
                  className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
                >
                  Tolak
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Popup for Bukti Pembayaran */}
      {selectedBukti && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded shadow-lg relative">
            {/* Close Button */}
            <button
              onClick={handleClosePopup}
              className="absolute top-2 right-2 bg-gray-200 p-2 rounded-full hover:bg-gray-300"
            >
              ✕
            </button>
            <img
              src={selectedBukti}
              alt="Bukti Pembayaran"
              className="max-w-full max-h-[80vh]"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default FormKelolaPembayaran;

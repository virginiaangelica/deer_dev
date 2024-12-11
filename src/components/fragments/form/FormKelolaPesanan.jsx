import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";

const FormKelolaPesanan = () => {
  // State untuk data pesanan
  const [orders, setOrders] = useState([
    { no: 1, kodeProduk: "934584", kodePesanan: "KK1026SS", totalHarga: "Rp 135.000", jumlah: 1 },
    { no: 2, kodeProduk: "922764", kodePesanan: "K127CCSK", totalHarga: "Rp 405.000", jumlah: 3 },
    { no: 3, kodeProduk: "576443", kodePesanan: "12AQQKXS", totalHarga: "Rp 160.000", jumlah: 1 },
    { no: 4, kodeProduk: "345848", kodePesanan: "Y888ASDV", totalHarga: "Rp 278.000", jumlah: 2 },
    { no: 5, kodeProduk: "227649", kodePesanan: "55JHGIBX", totalHarga: "Rp 170.000", jumlah: 1 },
    { no: 6, kodeProduk: "764435", kodePesanan: "UL789IHC", totalHarga: "Rp 556.000", jumlah: 4 },
    { no: 7, kodeProduk: "345849", kodePesanan: "33DSAVBX", totalHarga: "Rp 417.000", jumlah: 3 },
    { no: 8, kodeProduk: "458493", kodePesanan: "SG19VBIL", totalHarga: "Rp 149.000", jumlah: 1 },
  ]);

  // State untuk mengedit data
  const [editingOrder, setEditingOrder] = useState(null);
  const [formData, setFormData] = useState({
    kodeProduk: "",
    kodePesanan: "",
    totalHarga: "",
    jumlah: "",
  });

  // Handle edit button click
  const handleEdit = (order) => {
    setEditingOrder(order.no);
    setFormData({
      kodeProduk: order.kodeProduk,
      kodePesanan: order.kodePesanan,
      totalHarga: order.totalHarga,
      jumlah: order.jumlah,
    });
  };

  // Handle save after edit
  const handleSave = () => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.no === editingOrder ? { ...order, ...formData } : order
      )
    );
    setEditingOrder(null);
  };

  // Handle delete button click
  const handleDelete = (no) => {
    setOrders((prevOrders) => prevOrders.filter((order) => order.no !== no));
  };

  // Handle form change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="p-4">
      {/* Teks Kelola Pesanan */}
      <h2 className="text-3xl font-bold mb-6">Kelola Pesanan</h2>
      <div className="bg-white shadow-md rounded-lg p-4">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">No</th>
              <th className="border border-gray-300 px-4 py-2">Kode produk</th>
              <th className="border border-gray-300 px-4 py-2">Kode pesanan</th>
              <th className="border border-gray-300 px-4 py-2">Total harga</th>
              <th className="border border-gray-300 px-4 py-2">Jumlah</th>
              <th className="border border-gray-300 px-4 py-2">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.no} className="text-center">
                <td className="border border-gray-300 px-4 py-2">{order.no}</td>
                <td className="border border-gray-300 px-4 py-2">{order.kodeProduk}</td>
                <td className="border border-gray-300 px-4 py-2">{order.kodePesanan}</td>
                <td className="border border-gray-300 px-4 py-2">{order.totalHarga}</td>
                <td className="border border-gray-300 px-4 py-2">{order.jumlah}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <div className="flex justify-center items-center space-x-2">
                    <button
                      className="bg-green-500 text-white px-4 py-1 rounded flex items-center justify-center hover:bg-green-600"
                      onClick={() => handleEdit(order)}
                    >
                      <FaEdit className="mr-1" />
                      Edit
                    </button>
                    <button
                      className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
                      onClick={() => handleDelete(order.no)}
                    >
                      Hapus
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Form untuk Edit */}
        {editingOrder && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Edit Pesanan</h3>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="kodeProduk"
                value={formData.kodeProduk}
                onChange={handleChange}
                className="border border-gray-300 rounded p-2"
                placeholder="Kode Produk"
              />
              <input
                type="text"
                name="kodePesanan"
                value={formData.kodePesanan}
                onChange={handleChange}
                className="border border-gray-300 rounded p-2"
                placeholder="Kode Pesanan"
              />
              <input
                type="text"
                name="totalHarga"
                value={formData.totalHarga}
                onChange={handleChange}
                className="border border-gray-300 rounded p-2"
                placeholder="Total Harga"
              />
              <input
                type="number"
                name="jumlah"
                value={formData.jumlah}
                onChange={handleChange}
                className="border border-gray-300 rounded p-2"
                placeholder="Jumlah"
              />
            </div>
            <button
              onClick={handleSave}
              className="bg-blue-500 text-white px-4 py-2 mt-2 rounded hover:bg-blue-600"
            >
              Simpan
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FormKelolaPesanan;

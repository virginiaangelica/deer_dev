import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";

const FormKelolaProduk = () => {
  const [products, setProducts] = useState([
    { no: 1, image: "src/assets/kaos3.png", name: "Kaos kerah bulat", category: "Kaos", price: "Rp 135.000", stock: 38, code: "934584" },
    { no: 2, image: "src/assets/kaos2.png", name: "Kaos oversize", category: "Kaos", price: "Rp 135.000", stock: 19, code: "922764" },
    { no: 3, image: "src/assets/kaos6.png", name: "Kaos kerah V", category: "Kaos", price: "Rp 160.000", stock: 10, code: "576443" },
    { no: 4, image: "src/assets/kaos4.png", name: "Kaos garis mini", category: "Kaos", price: "Rp 139.000", stock: 32, code: "345848" },
    { no: 5, image: "src/assets/kaos5.png", name: "Kaos garis lebar", category: "Kaos", price: "Rp 170.000", stock: 25, code: "227649" },
    { no: 6, image: "src/assets/kaos7.png", name: "Kaos polos lengan panjang", category: "Kaos", price: "Rp 139.000", stock: 13, code: "764435" },
    { no: 7, image: "src/assets/kaos8.png", name: "Kaos klasik lengan panjang", category: "Kaos", price: "Rp 139.000", stock: 28, code: "345849" },
    { no: 8, image: "src/assets/kaos1.png", name: "Kaos oversize", category: "Kaos", price: "Rp 149.000", stock: 15, code: "458493" },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [formData, setFormData] = useState({
    no: products.length + 1,
    image: "",
    name: "",
    category: "",
    price: "",
    stock: "",
    code: "",
  });

  const handleOpenModal = (product = null) => {
    setCurrentProduct(product);
    setFormData(product || {
      no: products.length + 1,
      image: "",
      name: "",
      category: "",
      price: "",
      stock: "",
      code: "",
    });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFormData({ ...formData, image: imageUrl });
    }
  };

  const handleSave = () => {
    if (currentProduct) {
      // Edit product
      setProducts(products.map((product) => (product.no === currentProduct.no ? formData : product)));
    } else {
      // Add new product
      setProducts([...products, formData]);
    }
    handleCloseModal();
  };

  const handleDelete = (no) => {
    setProducts(products.filter((product) => product.no !== no));
  };

  return (
    <div>
      {/* Title outside the card */}
      <h2 className="text-3xl font-bold mb-6">Kelola Produk</h2>

      <div className="bg-white p-6 shadow-md rounded-lg">
        {/* Button to Add Product */}
        <button
          className="bg-green-500 text-white px-4 py-2 rounded mb-4 hover:bg-green-600"
          onClick={() => handleOpenModal()}
        >
          Tambah produk
        </button>

        {/* Table */}
        <table className="w-full border-collapse border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="border border-gray-300 px-4 py-2">No</th>
              <th className="border border-gray-300 px-4 py-2">Gambar</th>
              <th className="border border-gray-300 px-4 py-2">Nama produk</th>
              <th className="border border-gray-300 px-4 py-2">Kategori</th>
              <th className="border border-gray-300 px-4 py-2">Harga</th>
              <th className="border border-gray-300 px-4 py-2">Stok</th>
              <th className="border border-gray-300 px-4 py-2">Kode produk</th>
              <th className="border border-gray-300 px-4 py-2">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.no} className="text-center">
                <td className="border border-gray-300 px-4 py-2">{product.no}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <img src={product.image} alt={product.name} className="w-10 h-10 object-cover mx-auto" />
                </td>
                <td className="border border-gray-300 px-4 py-2">{product.name}</td>
                <td className="border border-gray-300 px-4 py-2">{product.category}</td>
                <td className="border border-gray-300 px-4 py-2">{product.price}</td>
                <td className="border border-gray-300 px-4 py-2">{product.stock}</td>
                <td className="border border-gray-300 px-4 py-2">{product.code}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <div className="flex justify-center items-center space-x-2">
                    <button
                      className="bg-green-500 text-white px-4 py-1 rounded flex items-center justify-center hover:bg-green-600"
                      onClick={() => handleOpenModal(product)}
                    >
                      <FaEdit className="mr-1" />
                      Edit
                    </button>
                    <button
                      className="bg-red-500 text-white px-4 py-1 rounded flex items-center justify-center hover:bg-red-600"
                      onClick={() => handleDelete(product.no)}
                    >
                      Hapus
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-1/3">
            <h2 className="text-lg font-bold mb-4">{currentProduct ? "Edit Produk" : "Tambah Produk"}</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700">Nama Produk</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 px-4 py-2 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Kategori</label>
                <input
                  type="text"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 px-4 py-2 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Harga</label>
                <input
                  type="text"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 px-4 py-2 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Stok</label>
                <input
                  type="number"
                  name="stock"
                  value={formData.stock}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 px-4 py-2 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Kode Produk</label>
                <input
                  type="text"
                  name="code"
                  value={formData.code}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 px-4 py-2 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Gambar Produk</label>
                <input
                  type="file"
                  onChange={handleImageChange}
                  className="w-full border border-gray-300 px-4 py-2 rounded"
                />
              </div>
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={handleSave}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  {currentProduct ? "Simpan" : "Tambah"}
                </button>
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                >
                  Tutup
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormKelolaProduk;

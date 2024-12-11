import React from "react";
import FormTambahKeranjang from "@/components/fragments/form/FormTambahKeranjang";
import Navbar from "@/components/ui/Navbar"; 
import Footer from "@/components/ui/Footer";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function TambahKeranjangPage() {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Konten utama */}
      <div className="flex flex-col md:flex-row flex-grow p-6 space-y-6 md:space-y-0 md:space-x-6">
        {/* Gambar produk dan Icon Back */}
        <div className="flex flex-col md:flex-row items-start space-x-4 flex-1">
          {/* Icon Back */}
          <button
            className="bg-black/50 p-2 rounded-full text-white hover:bg-black/70"
            onClick={() => navigate("/kaos")}
          >
            <ArrowLeft size={20} />
          </button>

          {/* Gambar produk */}
          <img
            src="src/assets/tambahkeranjang.jpg"
            alt="Kaos kerah bulat"
            className="w-full md:w-3/4 h-auto object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Form Tambah Keranjang */}
        <div className="flex flex-col flex-1">
          <FormTambahKeranjang />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <Footer />
      </footer>
    </section>
  );
}

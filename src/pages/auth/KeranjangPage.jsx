import React from "react";
import FormKeranjang from "@/components/fragments/form/FormKeranjang";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function KeranjangCODPage() {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Konten utama */}
      <div className="flex flex-col p-6 md:p-12 space-y-6">
        {/* Teks dan Icon Back */}
        <div className="flex items-center space-x-2">
          <button
            className="bg-black/50 p-2 rounded-full text-white hover:bg-black/70"
            onClick={() => navigate("/tambah-keranjang")}
          >
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-xl font-bold">RINCIAN PESANAN SAYA</h1>
        </div>

        {/* Form Keranjang */}
        <FormKeranjang />
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <Footer />
      </footer>
    </section>
  );
}

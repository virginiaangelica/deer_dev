import React from "react";
import { Link } from "react-router-dom"; 
import { FaWhatsapp, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-17">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        {/* Kolom Pages */}
        <div>
          <h3 className="font-bold mb-4">PAGES</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/dashboard" className="hover:text-gray-300">
                Beranda
              </Link>
            </li>
            <li>
              <Link to="/tentang" className="hover:text-gray-300">
                Tentang
              </Link>
            </li>
            <li>
              <Link to="/login" className="hover:text-gray-300">
                Login/Daftar
              </Link>
            </li>
          </ul>
        </div>

        {/* Kolom Referensi */}
        <div>
          <h3 className="font-bold mb-4">REFERENSI</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/fashion-style" className="hover:text-gray-300">
                Formal
              </Link>
            </li>
            <li>
              <Link to="/fashion-style" className="hover:text-gray-300">
                Semi formal
              </Link>
            </li>
            <li>
              <Link to="/fashion-style" className="hover:text-gray-300">
                Casual
              </Link>
            </li>
            <li>
              <Link to="/fashion-style" className="hover:text-gray-300">
                Sehari-hari
              </Link>
            </li>
          </ul>
        </div>

        {/* Kolom Pertanyaan Umum */}
        <div>
          <h3 className="font-bold mb-4">PERTANYAAN UMUM</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/profil" className="hover:text-gray-300">
                Profil
              </Link>
            </li>
            <li>
              <Link to="/bca2" className="hover:text-gray-300">
                Pesanan
              </Link>
            </li>
            <li>
              <p className="text-white">Metode Pembayaran</p>
              <div className="flex space-x-5 mt-3">
                {/* Gambar BCA dan COD */}
                <img 
                  src="src/assets/COD.jpg" 
                  alt="BCA" 
                  className="h-8" 
                />
                <img 
                  src="src/assets/bca.png" 
                  alt="COD" 
                  className="h-8" 
                />
              </div>
            </li>
          </ul>
        </div>

        {/* Kolom Deskripsi dan Media Sosial */}
        <div>
          <h3 className="font-bold mb-4 text-lg">DEER</h3>
          <p className="mb-6">
            Kami memiliki koleksi pakaian yang sesuai dengan gaya Anda dan akan
            membuat Anda merasa percaya diri saat mengenakannya.
          </p>
          <div className="flex space-x-4">
            {/* Ikon Media Sosial */}
            <a
              href="#"
              aria-label="WhatsApp"
              className="text-white hover:text-green-500"
            >
              <FaWhatsapp size={24} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-white hover:text-pink-500"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="#"
              aria-label="TikTok"
              className="text-white hover:text-red-500"
            >
              <FaTiktok size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

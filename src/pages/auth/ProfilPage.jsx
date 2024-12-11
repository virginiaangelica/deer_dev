import FormProfil from "@/components/fragments/form/FormProfil";
import Image from "@/assets/profill.jpg";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/ui/Footer";

export default function ProfilPage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Langsung navigasi ke halaman login
    navigate("/login");
  };

  return (
    <section className="flex flex-col min-h-screen bg-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 bg-white">
        <span className="font-bold pl-24 text-lg">Profil</span>
        <button
          className="text-black pr-24 font-bold text-lg"
          onClick={handleLogout} // Langsung logout
        >
          Logout
        </button>
      </nav>

      {/* Konten utama */}
      <div className="flex flex-grow justify-center items-center p-4">
        <div className="w-full max-w-7xl p-11 border border-gray-300 rounded-lg shadow-md flex flex-col md:flex-row items-center">
          {/* Bagian gambar profil */}
          <div className="flex flex-col items-center md:items-start w-full md:w-1/3 mb-8 md:mb-0 space-y-4">
            <img
              src={Image}
              alt="Profil"
              className="w-40 h-40 drop-shadow-2xl rounded-lg mb-4 ml-12"
            />
            {/* Choose File */}
            <div>
              <input
                id="file-upload"
                type="file"
                accept="image/*"
                className="text-gray-700 border-gray-400 rounded-lg"
              />
            </div>
          </div>

          {/* Form untuk pengeditan profil */}
          <div className="w-full md:w-2/3">
            <FormProfil />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-black text-white py-12">
        <Footer />
      </div>
    </section>
  );
}

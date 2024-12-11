import FormEditProfil from "@/components/fragments/form/FormEditProfil";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/ui/Footer"; 

export default function ProfilPage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    if (window.confirm("Yakin mau keluar dari akun ini?")) {
      navigate("/dashboard");
    }
  };

  return (
<section className="flex flex-col min-h-screen bg-white">
  {/* Navbar */}
  <nav className="flex justify-between items-center p-6 bg-white">
    <span className="font-bold pl-24 text-lg">Profil</span>
    <button
      className="text-black pr-24 font-bold text-lg"
      onClick={handleLogout}
    >
      Logout
    </button>
  </nav>

  {/* Konten utama */}
  <div className="flex flex-grow justify-center items-center p-4">
    <div className="w-full max-w-5xl p-11 border border-gray-300 rounded-lg shadow-md flex flex-col md:flex-row items-center">
      {/* Bagian profil kosong */}
      <div className="flex flex-col items-center w-full md:w-1/3 space-y-4">
        <div className="w-40 h-40 flex justify-center items-center rounded-lg border border-gray-400 bg-gray-200">
          {/* User Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-24 h-24 text-gray-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9A3.75 3.75 0 1112 5.25 3.75 3.75 0 0115.75 9z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M18.75 18a6.75 6.75 0 10-13.5 0"
              transform="translate(0, 2)"
            />
          </svg>
        </div>

        {/* Choose File */}
        <div>
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            className="text-gray-700 border-gray-400 ml-24"
          />
        </div>
      </div>

      {/* Form untuk pengeditan profil */}
      <div className="w-full md:w-2/3 mt-8 md:mt-0">
        <FormEditProfil />
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

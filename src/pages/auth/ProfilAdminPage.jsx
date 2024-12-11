import React, { useState } from "react";
import FormProfilAdmin from "@/components/fragments/form/FormProfilAdmin";
import DefaultImage from "@/assets/profill.jpg";
import { useNavigate } from "react-router-dom";

export default function ProfilAdminPage() {
  const navigate = useNavigate();
  const [profileImage, setProfileImage] = useState(DefaultImage);

  const handleFileChange = (event) => {
    const file = event.target.files[0]; 
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result); 
      };
      reader.readAsDataURL(file); 
    }
  };

  const handleLogout = () => {
    navigate("/login-admin");
  };

  return (
    <section className="flex flex-col min-h-screen bg-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 bg-white">
        <span className="font-bold pl-24 text-lg">Profil Admin</span>
        <button
          className="text-black pr-24 font-bold text-lg"
          onClick={handleLogout}
        >
          Logout
        </button>
      </nav>

      {/* Konten utama */}
      <div className="flex flex-grow justify-center items-center p-4">
        <div className="w-full max-w-7xl p-11 border border-gray-300 rounded-lg shadow-md flex flex-col md:flex-row items-center">
          {/* Bagian gambar profil admin */}
          <div className="flex flex-col items-center md:items-start w-full md:w-1/3 mb-8 md:mb-0 space-y-4">
            <img
              src={profileImage}
              alt="Profil"
              className="w-40 h-40 drop-shadow-2xl rounded-lg mb-4 ml-12"
            />
          </div>

          {/* Form untuk pengeditan profil admin */}
          <div className="w-full md:w-2/3">
            <FormProfilAdmin />
          </div>
        </div>
      </div>
    </section>
  );
}
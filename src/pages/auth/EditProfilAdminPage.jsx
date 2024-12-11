import { useState } from "react";
import FormEditProfilAdmin from "@/components/fragments/form/FormEditProfilAdmin";
import { useNavigate } from "react-router-dom";

export default function EditProfilAdminPage() {
  const navigate = useNavigate();
  const [imagePreview, setImagePreview] = useState(null);

  const handleLogout = () => {
    navigate("/home-admin"); 
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result); 
      };
      reader.readAsDataURL(file);
    }
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
        <div className="w-full max-w-5xl p-11 border border-gray-300 rounded-lg shadow-md flex flex-col md:flex-row items-center">
          {/* Bagian profil admin*/}
          <div className="flex flex-col items-center w-full md:w-1/3 space-y-4">
            <div className="w-40 h-40 flex justify-center items-center rounded-lg border border-gray-400 bg-gray-200">
              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt="Profil Preview"
                  className="w-full h-full object-cover rounded-lg"
                />
              ) : (
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
                  />
                </svg>
              )}
            </div>

            {/* Choose File */}
            <div className="flex justify-center w-full ml-24">
              <input
                id="file-upload"
                type="file"
                accept="image/*"
                className="text-gray-700 border-gray-400"
                onChange={handleFileChange} 
              />
            </div>
          </div>

          {/* Form untuk pengeditan profil admin*/}
          <div className="w-full md:w-2/3 mt-8 md:mt-0">
            <FormEditProfilAdmin />
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FaUser, FaEnvelope, FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";

export default function FormEditProfilAdmin() {
  const [name, setName] = useState("Itok");
  const [email, setEmail] = useState("itok10@gmail.com");
  const [file, setFile] = useState(null);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSave = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Yakin mau simpan perubahan ini?",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Simpan",
      cancelButtonText: "Batal",
    }).then((result) => {
      if (result.isConfirmed) {
       
        console.log({ name, email, file });

        Swal.fire({
          title: "Berhasil!",
          text: "Perubahan berhasil disimpan.",
          icon: "success",
          confirmButtonColor: "#3085d6",
        }).then(() => {
          navigate("/home-admin"); 
        });
      }
    });
  };

  return (
    <form className="space-y-5">
      {/* Input Fields */}
      <div className="grid grid-cols-1 gap-4">
        {/* Nama */}
        <div className="relative flex items-center">
          <Label htmlFor="name" className="text-gray-700 font-medium w-36">
            Nama
          </Label>
          <Input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="flex-1 border-gray-400 rounded-lg px-4 py-2 pr-10"
          />
          <FaUser className="absolute right-4 text-gray-500" />
        </div>

        {/* Email */}
        <div className="relative flex items-center">
          <Label htmlFor="email" className="text-gray-700 font-medium w-36">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 border-gray-400 rounded-lg px-4 py-2 pr-10"
          />
          <FaEnvelope className="absolute right-4 text-gray-500" />
        </div>

        {/* Password Lama */}
        <div className="relative flex items-center">
          <Label htmlFor="old-password" className="text-gray-700 font-medium w-36">
            Password Lama
          </Label>
          <Input
            id="old-password"
            type={passwordVisible ? "text" : "password"}
            className="flex-1 border-gray-400 rounded-lg px-4 py-2 pr-10"
          />
          <div
            className="absolute right-4 cursor-pointer text-gray-500"
            onClick={togglePasswordVisibility}
          >
            {passwordVisible ? <FaEyeSlash /> : <FaEye />}
          </div>
        </div>

        {/* Password Baru */}
        <div className="relative flex items-center">
          <Label htmlFor="new-password" className="text-gray-700 font-medium w-36">
            Password Baru
          </Label>
          <Input
            id="new-password"
            type={passwordVisible ? "text" : "password"}
            className="flex-1 border-gray-400 rounded-lg px-4 py-2 pr-10"
          />
          <div
            className="absolute right-4 cursor-pointer text-gray-500"
            onClick={togglePasswordVisibility}
          >
            {passwordVisible ? <FaEyeSlash /> : <FaEye />}
          </div>
        </div>

        {/* Konfirmasi Password */}
        <div className="relative flex items-center">
          <Label htmlFor="confirm-password" className="text-gray-700 font-medium w-36">
            Konfir Password
          </Label>
          <Input
            id="confirm-password"
            type={passwordVisible ? "text" : "password"}
            className="flex-1 border-gray-400 rounded-lg px-4 py-2 pr-10"
          />
          <div
            className="absolute right-4 cursor-pointer text-gray-500"
            onClick={togglePasswordVisibility}
          >
            {passwordVisible ? <FaEyeSlash /> : <FaEye />}
          </div>
        </div>
      </div>

      {/* Tombol Simpan */}
      <div className="flex justify-end">
        <Button
          className="bg-black text-white py-2 px-6 rounded-lg shadow-md"
          onClick={handleSave}
        >
          Simpan
        </Button>
      </div>
    </form>
  );
}

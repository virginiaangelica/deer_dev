import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function FormProfilAdmin() {
  const [name, setName] = useState("Itok");
  const [email, setEmail] = useState("itok10@gmail.com");
  const [phone, setPhone] = useState("08334478782");

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/editprofil-admin"); 
  };

  return (
    <form className="space-y-7">
      {/* Input Fields */}
      <div className="grid grid-cols-1 gap-6">
        {/* Nama */}
        <div className="flex items-center">
          <Label htmlFor="name" className="text-gray-700 font-medium w-32">
            Nama
          </Label>
          <Input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled 
            className="flex-1 border-gray-400 rounded-lg"
          />
        </div>

        {/* Email */}
        <div className="flex items-center">
          <Label htmlFor="email" className="text-gray-700 font-medium w-32">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled
            className="flex-1 border-gray-400 rounded-lg"
          />
        </div>

        {/* Nomor Telepon */}
        <div className="flex items-center">
          <Label htmlFor="phone" className="text-gray-700 font-medium w-32">
            Nomor Telepon
          </Label>
          <Input
            id="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            disabled
            className="flex-1 border-gray-400 rounded-lg"
          />
        </div>
      </div>

      {/* Tombol Simpan */}
      <div className="flex justify-end space-x-4 mt-6">
        <Button
          className="bg-black text-white py-2 px-6 rounded-lg"
          onClick={handleNavigate} 
        >
          Perbarui Profil
        </Button>
      </div>
    </form>
  );
}

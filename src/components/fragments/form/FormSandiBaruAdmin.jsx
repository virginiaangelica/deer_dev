import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye } from "lucide-react";
import { useNavigate } from "react-router-dom"; 

export default function FormSandiBaruAdmin() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({ newPassword: "", confirmPassword: "" });
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const navigate = useNavigate(); 
  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = { newPassword: "", confirmPassword: "" };

    if (!newPassword) {
      newErrors.newPassword = "Kata sandi baru wajib diisi";
    } else if (newPassword.length < 6) {
      newErrors.newPassword = "Kata sandi baru harus minimal 6 karakter";
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = "Konfirmasi kata sandi wajib diisi";
    } else if (confirmPassword !== newPassword) {
      newErrors.confirmPassword = "Konfirmasi kata sandi tidak cocok";
    }

    if (newErrors.newPassword || newErrors.confirmPassword) {
      setErrors(newErrors);
      return;
    }


    console.log("Form submitted!", { newPassword, confirmPassword });


    setNewPassword("");
    setConfirmPassword("");
    setErrors({ newPassword: "", confirmPassword: "" });

    navigate("/login-admin");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="space-y-4">
        <div className="space-y-1">
          <Label htmlFor="newPassword" className="text-white">
            Kata Sandi Baru
          </Label>
          <div className="flex items-center space-x-2 pl-1 pr-2 rounded bg-white">
            <Input
              id="newPassword"
              type={showNewPassword ? "text" : "password"}
              placeholder="Masukkan kata sandi baru"
              value={newPassword}
              className="bg-white rounded border-0"
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <Eye
              className="text-gray-800 cursor-pointer"
              onClick={() => setShowNewPassword(!showNewPassword)}
            />
          </div>
          {errors.newPassword && <p className="text-red-500">{errors.newPassword}</p>}
        </div>

        <div className="space-y-1">
          <Label htmlFor="confirmPassword" className="text-white">
            Konfirmasi Kata Sandi Baru
          </Label>
          <div className="flex items-center space-x-2 pl-1 pr-2 rounded bg-white">
            <Input
              id="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Masukkan konfirmasi kata sandi baru"
              value={confirmPassword}
              className="bg-white rounded border-0"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Eye
              className="text-gray-800 cursor-pointer"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            />
          </div>
          {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword}</p>}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <Button className="w-full bg-black/50" size="lg" type="submit">
          Selesai
        </Button>
      </div>
    </form>
  );
}

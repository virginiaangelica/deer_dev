import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, User } from "lucide-react";
import { useNavigate } from "react-router-dom"; 

export default function FormRegister() {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate(); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = { email: "", username: "", password: "", confirmPassword: "" };

    if (!formData.email) {
      newErrors.email = "Alamat email wajib diisi";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Alamat email tidak valid";
    }

    if (!formData.username) {
      newErrors.username = "Username wajib diisi";
    }

    if (!formData.password) {
      newErrors.password = "Kata sandi wajib diisi";
    } else if (formData.password.length < 6) {
      newErrors.password = "Kata sandi harus minimal 6 karakter";
    }

    if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Konfirmasi kata sandi tidak sesuai";
    }

    if (
      newErrors.email ||
      newErrors.username ||
      newErrors.password ||
      newErrors.confirmPassword
    ) {
      setErrors(newErrors);
      return;
    }

    console.log("Form submitted!", formData);

    setFormData({
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    });
    setErrors({
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    });

    navigate("/login"); 
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="space-y-4">
        <div className="space-y-1">
          <Label htmlFor="email" className="text-white">
            Email
          </Label>
          <div className="flex items-center space-x-2 pl-1 pr-2 rounded bg-white">
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="example10@gmail.com"
              value={formData.email}
              className="bg-white rounded border-0"
              onChange={handleChange}
            />
            <User className="text-gray-800" />
          </div>
          {errors.email && <p className="text-red-500">{errors.email}</p>}
        </div>

        <div className="space-y-1">
          <Label htmlFor="username" className="text-white">
            Username
          </Label>
          <div className="flex items-center space-x-2 pl-1 pr-2 rounded bg-white">
            <Input
              id="username"
              name="username"
              type="text"
              placeholder="example"
              value={formData.username}
              className="bg-white rounded border-0"
              onChange={handleChange}
            />
            <User className="text-gray-800" />
          </div>
          {errors.username && <p className="text-red-500">{errors.username}</p>}
        </div>

        <div className="space-y-1">
          <Label htmlFor="password" className="text-white">
            Kata Sandi
          </Label>
          <div className="flex items-center space-x-2 pl-1 pr-2 rounded bg-white">
            <Input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Masukkan kata sandi"
              value={formData.password}
              className="bg-white rounded border-0"
              onChange={handleChange}
            />
            <Eye
              className="text-gray-800 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>
          {errors.password && <p className="text-red-500">{errors.password}</p>}
        </div>

        <div className="space-y-1">
          <Label htmlFor="confirmPassword" className="text-white">
            Konfirmasi Kata Sandi
          </Label>
          <div className="flex items-center space-x-2 pl-1 pr-2 rounded bg-white">
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type={showPassword ? "text" : "password"}
              placeholder="Konfirmasi kata sandi"
              value={formData.confirmPassword}
              className="bg-white rounded border-0"
              onChange={handleChange}
            />
            <Eye
              className="text-gray-800 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>
          {errors.confirmPassword && (
            <p className="text-red-500">{errors.confirmPassword}</p>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <Button className="w-full bg-black/50" size="lg" type="submit">
          Daftar
        </Button>
        <Button
          className="flex items-center justify-start w-full"
          variant="outline"
          size="lg"
        >
          <img src="googleicons.svg" className="size-5 mr-2" />
          <span className="flex-1 text-center">Daftar dengan Google</span>
        </Button>
      </div>
    </form>
  );
}

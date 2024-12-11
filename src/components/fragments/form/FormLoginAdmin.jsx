import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, User } from "lucide-react";
import { useNavigate } from "react-router-dom";  
import { Link } from "react-router-dom"; 

export default function FormLoginAdmin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();  

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = { email: "", password: "" };

    if (!email) {
      newErrors.email = "Alamat email wajib diisi";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Alamat email tidak valid";
    }

    if (!password) {
      newErrors.password = "Kata sandi wajib diisi";
    } else if (password.length < 6) {
      newErrors.password = "Kata sandi harus minimal 6 karakter";
    }

    if (newErrors.email || newErrors.password) {
      setErrors(newErrors);
      return;
    }

    console.log("Form submitted!", { email, password });
    setEmail("");
    setPassword("");
    setErrors({ email: "", password: "" });

    navigate("/home-admin"); 
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-white text-center">Login sebagai admin DEER</h2>
        <div className="space-y-1">
          <Label htmlFor="email" className="text-white">
            Email
          </Label>
          <div className="flex items-center space-x-2 pl-1 pr-2 rounded bg-white">
            <Input
              id="email"
              type="email"
              placeholder="example10@gmail.com"
              value={email}
              className="bg-white rounded border-0"
              onChange={(e) => setEmail(e.target.value)}
            />
            <User className="text-gray-800" />
          </div>
          {errors.email && <p className="text-red-500">{errors.email}</p>}
        </div>

        <div className="space-y-1">
          <Label htmlFor="password" className="text-white">
            Kata Sandi
          </Label>
          <div className="flex items-center space-x-2 pl-1 pr-2 rounded bg-white">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Masukkan kata sandi"
              value={password}
              className="bg-white rounded border-0"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Eye
              className="text-gray-800 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>
          {errors.password && <p className="text-red-500">{errors.password}</p>}
          <p className="text-end text-xs text-white">
            <Link to="/lupasandi-admin" className="text-white">
              Lupa kata sandi?
            </Link>
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <Button
          className="w-full bg-black/50 hover:bg-black transition ease-in-out duration-300"
          size="lg"
          type="submit"
        >
          Masuk
        </Button>
      </div>
    </form>
  );
}

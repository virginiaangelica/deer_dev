import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";  // Import useNavigate for navigation

export default function FormLupaSandi() {
  const [email, setEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [errors, setErrors] = useState({ email: "", verificationCode: "" });

  const navigate = useNavigate();  // Initialize navigate function for page redirection

  const handleSendCode = (e) => {
    e.preventDefault();
    let error = "";

    if (!email) {
      error = "Alamat email wajib diisi";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      error = "Alamat email tidak valid";
    }

    if (error) {
      setErrors({ email: error, verificationCode: "" });
      return;
    }

    // Simulate sending verification code
    console.log("Kode verifikasi dikirim ke:", email);
    setIsCodeSent(true);
    setErrors({ email: "", verificationCode: "" });
  };

  const handleVerifyCode = (e) => {
    e.preventDefault();
    let error = "";

    if (!verificationCode) {
      error = "Kode verifikasi wajib diisi";
    }

    if (error) {
      setErrors({ ...errors, verificationCode: error });
      return;
    }

    // Simulate verifying the code
    console.log("Kode berhasil diverifikasi:", verificationCode);
    setErrors({ email: "", verificationCode: "" });
  };

  const handleNext = (e) => {
    e.preventDefault(); // Prevent form submission to avoid page reload

    if (!isCodeSent || !verificationCode) {
      console.log("Pastikan kode telah dikirim dan diverifikasi.");
      return;
    }

    // Navigate to the new password page
    navigate("/sandi-baru"); // Navigate to the /sandi-baru page
  };

  return (
    <form className="space-y-9">
      <div className="space-y-7">
        {/* Input Email dan Tombol Kirim Kode */}
        <div className="flex items-center space-x-2">
          <div className="flex items-center flex-1 pl-1 pr-2 rounded bg-white">
            <Input
              id="email"
              type="email"
              placeholder="example10@gmail.com"
              value={email}
              className="bg-white rounded border-0 flex-1"
              onChange={(e) => setEmail(e.target.value)}
              disabled={isCodeSent}
            />
            <Mail className="text-gray-800" />
          </div>
          <Button
            className="bg-black/50"
            size="sm"
            type="button"
            onClick={handleSendCode}
            disabled={isCodeSent}
          >
            Kirim Kode
          </Button>
        </div>
        {errors.email && <p className="text-red-500">{errors.email}</p>}

        {/* Input Verifikasi dan Tombol Verifikasi */}
        <div className="flex items-center space-x-2">
          <div className="flex items-center flex-6 pl-1 pr-2 rounded bg-white">
            <Input
              id="verificationCode"
              type="text"
              placeholder="******"
              value={verificationCode}
              className="bg-white rounded border-0 flex-1"
              onChange={(e) => setVerificationCode(e.target.value)}
            />
            <div className="rounded-full bg-black p-1">
              <CheckCircle className="text-white" />
            </div>
          </div>
          <Button
            className="bg-black/50 pr-5"
            size="sm"
            type="button"
            onClick={handleVerifyCode}
          >
            Verifikasi
          </Button>
        </div>
        {errors.verificationCode && (
          <p className="text-red-500">{errors.verificationCode}</p>
        )}
      </div>

      {/* Tombol Lanjut */}
      <div className="flex flex-col gap-4">
        <Button
          className="w-full bg-black/50"
          size="lg"
          type="button"
          onClick={handleNext}
        >
          Lanjut
        </Button>
      </div>
    </form>
  );
}

import FormLupaSandi from "@/components/fragments/form/FormLupaSandi";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import logo from "@/assets/deer_logo.png";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function LupaSandiPage() {
  const navigate = useNavigate();

  return (
    <section className="relative z-[100] bg-custom-bg bg-cover md:bg-top bg-center h-screen flex items-center">

      {/* Icon Back */}
      <button
        className="absolute top-6 left-6 bg-black/50 p-2 rounded-full text-white hover:bg-black/70"
        onClick={() => navigate("/register")} 
      >
        <ArrowLeft size={20} />
      </button>

      <div className="flex items-start justify-center h-screen w-full bg-[#373636]/80 md:w-fit md:min-w-[50%]">
        <Card className="border-0 shadow-none bg-transparent md:min-w-[400px] mt-6">
          <CardHeader className="w-full justify-center p-3">
            <CardTitle className="text-center text-xl font-bold flex flex-col items-center gap-1 text-white">
              <img src={logo} alt="logo" className="size-36" />
            </CardTitle>
          </CardHeader>

          <CardContent className="flex flex-col space-y-4 mt-4">
            <FormLupaSandi />

          </CardContent>
        </Card>
      </div>
    </section>
  );
}

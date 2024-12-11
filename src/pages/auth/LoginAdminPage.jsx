import FormLoginAdmin from "@/components/fragments/form/FormLoginAdmin";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import logo from "@/assets/deer_logo.png";

export default function LoginAdminPage() {
  return (
    <section className="relative z-[100] bg-custom-bg bg-cover md:bg-top bg-center h-screen flex items-center">
      <div className="flex items-start justify-center h-screen w-full bg-[#373636]/80 md:w-fit md:min-w-[50%]">
        <Card className="border-0 shadow-none bg-transparent md:min-w-[400px] mt-6">
          <CardHeader className="w-full justify-center p-3">
            <CardTitle className="text-center text-xl font-bold flex flex-col items-center gap-1 text-white">
              <img src={logo} alt="logo" className="size-36" />
            </CardTitle>
          </CardHeader>

          <CardContent className="flex flex-col space-y-4 mt-4">
            <FormLoginAdmin />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
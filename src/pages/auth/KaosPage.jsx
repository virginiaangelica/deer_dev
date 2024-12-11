import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import FormKaos from "@/components/Fragments/form/FormKaos";

export default function KaosPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <FormKaos />
      </main>
      <footer className="bg-black text-white py-12">
        <Footer />
      </footer>
    </div>
  );
}

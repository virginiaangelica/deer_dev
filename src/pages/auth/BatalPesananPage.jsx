import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import FormBatalPesanan from "@/components/Fragments/form/FormBatalPesanan";

export default function BatalPesananPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <FormBatalPesanan />
      </main>
      <footer className="bg-black text-white py-12">
        <Footer />
      </footer>
    </div>
  );
}

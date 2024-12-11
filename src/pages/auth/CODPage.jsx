import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import FormCOD from "@/components/Fragments/form/FormCOD";

export default function CODPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <FormCOD />
      </main>
      <footer className="bg-black text-white py-12">
        <Footer />
      </footer>
    </div>
  );
}

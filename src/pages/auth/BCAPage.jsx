import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import FormBCA from "@/components/Fragments/form/FormBCA";

export default function BCAPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <FormBCA />
      </main>
      <footer className="bg-black text-white py-12">
        <Footer />
      </footer>
    </div>
  );
}

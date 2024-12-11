import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import FormBCA2 from "@/components/Fragments/form/FormBCA2";

export default function BCA2Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <FormBCA2 />
      </main>
      <footer className="bg-black text-white py-12">
        <Footer />
      </footer>
    </div>
  );
}

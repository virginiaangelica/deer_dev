import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import FormTips from "@/components/Fragments/form/formTips"; 

export default function TipsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <FormTips />
      </main>
      <footer className="bg-black text-white py-12">
        <Footer />
      </footer>
    </div>
  );
}

import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import FormFashionStyle from "@/components/Fragments/form/formfashionstyle";

export default function FashionStylePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <FormFashionStyle />
      </main>
      <footer className="bg-black text-white py-12">
        <Footer />
      </footer>
    </div>
  );
}

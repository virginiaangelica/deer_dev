import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import FormFavorit from "@/components/Fragments/form/formFavorit";

export default function FavoritPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <FormFavorit />
      </main>
      <footer className="bg-black text-white py-12">
        <Footer />
      </footer>
    </div>
  );
}

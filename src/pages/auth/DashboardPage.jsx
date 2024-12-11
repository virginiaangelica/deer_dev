import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { FormDashboard, KategoriSection, InspirasiGayaSection } from "@/components/fragments/form/FormDashboard";

export default function DashboardPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Form Dashboard Section */}
        <FormDashboard />

        {/* Kategori Section */}
        <KategoriSection />

        {/* Inspirasi Gaya Section */}
        <InspirasiGayaSection />
      </main>
      <footer className="bg-black text-white py-12 mt-8">
        <Footer />
      </footer>
    </div>
  );
}

import React from "react";
import Navbar from "@/components/ui/Navbar"; 
import Footer from "@/components/ui/Footer";
import FormPaduanWarna from "@/components/fragments/form/FormPaduanWarna"; 

const PaduanWarnaPage = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Form Paduan Warna */}
      <FormPaduanWarna />

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <Footer />
      </footer>
    </div>
  );
};

export default PaduanWarnaPage;

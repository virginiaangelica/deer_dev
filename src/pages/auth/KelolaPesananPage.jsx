import React from "react";
import Sidebar from '@/components/ui/Sidebar';
import NavAdmin from '@/components/ui/NavAdmin'
import FormKelolaPesanan from '@/components/Fragments/form/FormKelolaPesanan';

const KelolaPesananPage = () => {
    return (
      <div className="flex flex-col bg-gray-100 min-h-screen">
        <NavAdmin />
        <div className="flex flex-grow">
          <Sidebar />
          <main className="flex-grow p-6">
            <FormKelolaPesanan />
          </main>
        </div>
      </div>
    );
  };
  
  export default KelolaPesananPage;

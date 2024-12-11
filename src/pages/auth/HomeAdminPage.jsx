import React from 'react';
import Sidebar from '@/components/ui/Sidebar';
import FormHomeAdmin from '@/components/Fragments/form/FormHomeAdmin';
import NavAdmin from '@/components/ui/NavAdmin';

const HomeAdminPage = () => {
  return (
    <div className="flex flex-col bg-gray-100 min-h-screen">
      <NavAdmin />
      <div className="flex flex-grow">
        <Sidebar />
        <main className="flex-grow p-6">
          <FormHomeAdmin />
        </main>
      </div>
    </div>
  );
};

export default HomeAdminPage;

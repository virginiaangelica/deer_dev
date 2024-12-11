import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const FormHomeAdmin = () => {

  const data = {
    labels: ["Januari", "Februari", "Maret", "April", "Mei", "Juni"],
    datasets: [
      {
        label: "Pendapatan (Rp)", 
        data: [1000000, 1500000, 2000000, 2500000, 3000000, 3500000],
        backgroundColor: "rgba(54, 162, 235, 0.7)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      title: {
        display: true,
        font: {
          size: 18,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 10000, 
        },
      },
    },
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <header>
        <h1 className="text-3xl font-bold">Beranda</h1>
      </header>

      {/* Statistik */}
      <section className="grid grid-cols-4 gap-6">
        {[ 
          {
            label: "Pelanggan",
            value: "250",
            date: "1 Jan - 4 Jun 2024",
            change: "18.2% Peningkatan sejak bulan lalu",
            color: "text-green-500",
          },
          {
            label: "Pendapatan",
            value: "3.000.000",
            date: "1 Jan - 4 Jun 2024",
            change: "4.6% Peningkatan sejak bulan lalu",
            color: "text-green-500",
          },
          {
            label: "Pembelian",
            value: "79",
            date: "1 Jan - 4 Jun 2024",
            change: "2.6% Penurunan sejak bulan lalu",
            color: "text-red-500",
          },
          {
            label: "Jumlah Pengunjung",
            value: "358",
            date: "1 Jan - 4 Jun 2024",
            change: "2.5% Peningkatan sejak bulan lalu",
            color: "text-green-500",
          },
        ].map((stat, index) => (
          <div key={index} className="bg-gray-200 p-4 shadow rounded-lg">
            <h2 className="text-gray-600 font-semibold">{stat.label}</h2>
            <p className="text-3xl font-bold">{stat.value}</p>
            <p className="text-sm text-gray-500">{stat.date}</p>
            <p className={`text-sm ${stat.color}`}>{stat.change}</p>
          </div>
        ))}
      </section>

      {/* Transaksi Akhir & Grafik */}
      <section className="grid grid-cols-2 gap-6">
        {/* Transaksi Akhir */}
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-lg font-bold mb-4">Transaksi Akhir</h2>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="border-b p-2">Kode Pesanan</th>
                <th className="border-b p-2">Produk</th>
                <th className="border-b p-2">Pelanggan</th>
                <th className="border-b p-2">Total</th>
                <th className="border-b p-2">Tanggal</th>
                <th className="border-b p-2"></th>
              </tr>
            </thead>
            <tbody>
              {[ 
                {
                  code: "KK1026SS",
                  product: "Kaos Kerah Bulat",
                  customer: "Andi Pratama",
                  total: "Rp 135.000",
                  date: "01/02/24",
                },
                {
                  code: "K127CCSK",
                  product: "Kaos Kerah V",
                  customer: "Jordi Himansyah",
                  total: "Rp 160.000",
                  date: "10/03/24",
                },
                {
                  code: "12AQQKXS",
                  product: "Kaos Oversize",
                  customer: "Khairul Bardansyah",
                  total: "Rp 135.000",
                  date: "06/04/24",
                },
                
              ].map((transaction, index) => (
                <tr key={index} className="border-b">
                  <td className="p-2">{transaction.code}</td>
                  <td className="p-2">{transaction.product}</td>
                  <td className="p-2">{transaction.customer}</td>
                  <td className="p-2">{transaction.total}</td>
                  <td className="p-2">{transaction.date}</td>
                  <td className="p-2"></td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="block w-full text-center mt-4 text-blue-500 font-bold">
            View All
          </button>
        </div>

        {/* Diagram */}
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-lg font-bold mb-4">Diagram 6 Bulan Terakhir</h2>
          <div className="h-60">
            <Bar data={data} options={options} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default FormHomeAdmin;

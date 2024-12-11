import React from "react";

export const FormAksesoris = () => {
  return (
    <section className="text-gray-800">
      {/* Banner Image */}
      <div className="relative w-full">
        <img
          src="src/assets/banner aksesoris.jpg"
          alt="Banner Aksesoris"
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-start justify-center ml-20">
          <h1 className="text-4xl font-bold text-white">AKSESORIS</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-20 bg-white flex flex-col gap-12">
        {/* Section 1: Warna Kulit */}
        <div className="flex items-center gap-12">
          {/* Image */}
          <div
            className="relative rounded-[10px] overflow-hidden shadow-md bg-black"
            style={{ height: "370px", width: "460px" }}
          >
            <img
              src="src/assets/aksesoris1.jpg"
              alt="Warna Kulit"
              className="w-full h-full object-cover rounded-[10px] shadow-md"
            />
            <div className="absolute bottom-0 w-full bg-black py-3">
              <p className="text-center text-white font-bold">AKSESORIS</p>
            </div>
          </div>

          {/* Text Content */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Jam Tangan</h2>
            <ul className="list-disc ml-6 mb-8">
              <li>
                <strong>Pilih sesuai aktivitas: </strong> Untuk tampilan formal, pilih jam tangan kulit atau logam klasik. Untuk acara santai atau olahraga, pilih jam tangan sporty atau digital.
              </li>
              <li>
                <strong>Perhatikan ukuran:</strong>  Pastikan ukuran jam tangan sesuai dengan pergelangan tangan. Jam tangan yang terlalu besar atau kecil dapat merusak proporsi tampilan.
              </li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">Gelang</h2>
            <ul className="list-disc ml-6">
              <li>
                <strong>Gunakan warna netral:</strong> Gelang kulit atau manik-manik dengan warna-warna netral bisa cocok untuk berbagai kesempatan.
              </li>
              <li>
                <strong>Batasi jumlahnya:</strong> Sebaiknya tidak memakai terlalu banyak gelang sekaligus. Satu atau dua sudah cukup untuk tampilan yang elegan.
              </li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">Topi</h2>
            <ul className="list-disc ml-6">
              <li>
                <strong>Perhatikan acara dan lokasi:</strong> Topi fedora atau newsboy hat cocok untuk gaya klasik atau semi formal, sementara topi baseball atau bucket hat pas untuk gaya kasual.
              </li>
              <li>
                <strong>Sesuai dengan bentuk wajah:</strong> Bentuk topi yang tepat akan menyeimbangkan proporsi wajah.
              </li>
            </ul>
          </div>
        </div>

        {/* Section 2: Warna Netral */}
        <div className="flex items-center gap-12">
          {/* Text Content */}
          <div className="w-4/6">
            <h2 className="text-2xl font-bold mb-4">kacamata</h2>
            <ul className="list-disc ml-6 mb-4">
              <li>
                <strong>Cari bentuk yang cocok dengan wajah:</strong> Bentuk wajah menentukan model kacamata yang paling pas. Wajah oval bisa mencoba berbagai model, sementara wajah bulat cocok dengan bentuk kotak.
              </li>
              <li>
                <strong>Fungsi dan gaya:</strong> Jika untuk penggunaan sehari-hari, pilih warna netral. Kacamata hitam atau dengan lensa berwarna cocok untuk acara santai.
              </li>
              <li>
                <strong>Warna Monokromatik:</strong> Pilih variasi dari satu
                warna, seperti biru tua, biru muda dan biru pastel. Ini memberi
                kesan elegan dan minimalis.
              </li>
            </ul>

            <h2 className="text-2xl font-bold mb-3">Cincin</h2>
            <ul className="list-disc ml-6 mb-4">
              <li>
                <strong>Jangan berlebihan:</strong> Jika ingin mengenakan cincin, pilih satu atau dua yang sederhana. Cincin minimalis atau cincin signet cocok untuk gaya pria yang maskulin.
              </li>
              <li>
                <strong>Perhatikan ukuran dan desain:</strong> Pilih cincin yang sesuai dengan jari agar nyaman dipakai sepanjang hari.
              </li>
            </ul>

            <h2 className="text-2xl font-bold mb-3 mt-4">Dompet</h2>
            <ul className="list-disc ml-6">
              <li>
                <strong>Pilih yang tipis dan fungsional:</strong> Dompet yang terlalu besar dapat terlihat tidak rapi saat diletakkan di saku.
              </li>
              <li>
                <strong>Warna dan bahan:</strong> Warna hitam atau coklat gelap dari bahan kulit memberikan kesan elegan dan profesional.
              </li>
            </ul>

            <h2 className="text-2xl font-bold mb-3 mt-4">Parfum</h2>
            <ul className="list-disc ml-6">
              <li>
                <strong>Gunakan sesuai acara:</strong> Parfum dengan aroma segar cocok untuk siang hari, sementara aroma yang lebih berat dan maskulin cocok untuk malam hari.
              </li>
              <li>
                <strong>Semprotkan secukupnya:</strong> Jangan berlebihan. Semprotkan di area nadi seperti pergelangan tangan atau leher agar wangi bertahan lebih lama.
              </li>
            </ul>
          </div>

          {/* Image */}
          <div
            className="relative rounded-[10px] overflow-hidden shadow-md"
            style={{ height: "370px", width: "350px" }}
          >
            <img
              src="src/assets/aksesoris2.jpg"
              alt="Warna Netral"
              className="w-full h-full object-cover rounded-[10px] shadow-md"
            />
            <div className="absolute bottom-0 w-full bg-black py-3">
              <p className="text-center text-white font-bold">WARNA NETRAL</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormAksesoris;

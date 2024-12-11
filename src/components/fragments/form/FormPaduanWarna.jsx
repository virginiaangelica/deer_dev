import React from "react";

export const FormPaduanWarna = () => {
  return (
    <section className="text-gray-800">
      {/* Banner Image */}
      <div className="relative w-full">
        <img
          src="src/assets/banner paduan warna.jpg"
          alt="Inspirasi Outfit"
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-start justify-center ml-20">
          <h1 className="text-4xl font-bold mb-4 text-white">PADUAN WARNA</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-20 bg-white flex flex-col gap-12">
        {/* Section 1: Warna Kulit */}
        <div className="flex items-center gap-12">
          {/* Image */}
          <div
            className="relative rounded-[10px] overflow-hidden shadow-md bg-black"
            style={{ height: "310px", width: "400px" }}
          >
            <img
              src="src/assets/paduan warna1.jpg"
              alt="Warna Kulit"
              className="w-full h-full object-cover rounded-[10px] shadow-md"
            />
            <div className="absolute bottom-0 w-full bg-black py-3">
              <p className="text-center text-white font-bold">WARNA KULIT</p>
            </div>
          </div>

          {/* Text Content */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Kenali Undertone Kulit Kamu</h2>
            <ul className="list-disc ml-6 mb-8">
              <li>
                <strong>Warm Undertone:</strong> Pilih warna-warna hangat seperti
                kuning, oranye, merah bata, hijau zaitun, atau cokelat.
              </li>
              <li>
                <strong>Cool Undertone:</strong> Pilih warna-warna dingin seperti
                biru, hijau teal, ungu, dan abu-abu.
              </li>
              <li>
                <strong>Netral Undertone:</strong> Bereksperimen dengan warna
                netral seperti beige, krem, atau putih gading.
              </li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">Gunakan Warna Netral</h2>
            <ul className="list-disc ml-6">
              <li>
                Warna seperti putih, hitam, abu-abu, beige, dan navy mudah
                dipadukan dengan warna lain.
              </li>
              <li>Tambahkan aksen dengan warna lebih cerah atau bold.</li>
            </ul>
          </div>
        </div>

        {/* Section 2: Warna Netral */}
        <div className="flex items-center gap-12">
          {/* Text Content */}
          <div className="w-4/6">
            <h2 className="text-2xl font-bold mb-4">Pahami Roda Warna</h2>
            <ul className="list-disc ml-6 mb-4">
              <li>
                <strong>Warna Komplementer:</strong> Pilih warna yang
                berseberangan (misalnya biru dan oranye). Kombinasi ini memberikan
                kontras yang kuat.
              </li>
              <li>
                <strong>Warna Analog:</strong> Pilih warna yang berdekatan
                (misalnya biru, biru-hijau, dan hijau). Kombinasi ini menciptakan
                tampilan yang harmonis.
              </li>
              <li>
                <strong>Warna Monokromatik:</strong> Pilih variasi dari satu
                warna, seperti biru tua, biru muda dan biru pastel. Ini memberi
                kesan elegan dan minimalis.
              </li>
            </ul>

            <h2 className="text-2xl font-bold mb-3">Bermain dengan Tekstur dan Pola</h2>
            <ul className="list-disc ml-6 mb-4">
              <li>
                Jika menggunakan warna yang sama atau mirip, tambahkan variasi
                dengan tekstur atau pola berbeda untuk memberikan dimensi pada
                tampilanmu.
              </li>
            </ul>

            <h2 className="text-2xl font-bold mb-3 mt-4">Aksesoris sebagai Penyeimbang</h2>
            <ul className="list-disc ml-6">
              <li>
                Jika outfitmu berwarna netral, tambahkan aksesori berwarna terang.
                Sebaliknya, jika pakaianmu berwarna cerah, pilih aksesori dengan
                warna netral untuk menyeimbangkan.
              </li>
            </ul>
          </div>

          {/* Image */}
          <div
            className="relative rounded-[10px] overflow-hidden shadow-md"
            style={{ height: "340px", width: "380px" }}
          >
            <img
              src="src/assets/paduan warna2.jpg"
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

export default FormPaduanWarna;

import React from "react";

export const FormPilihBahan = () => {
  return (
    <section className="text-gray-800">
      {/* Banner Image */}
      <div className="relative w-full">
        <img
          src="src/assets/banner memilih bahan.jpg"
          alt="Memilih Bahan"
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-start justify-center ml-20">
          <h1 className="text-4xl font-bold mb-4 text-white">MEMILIH BAHAN</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-20 bg-white flex gap-16">
        {/* Left Section: Tips */}
        <div className="w-1/2 max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">
            Memahami jenis bahan pakaian agar tetap nyaman di segala situasi.
          </h2>
          <p className="mb-11">
            Memilih pakaian yang tepat bukan hanya soal gaya dan warna, tetapi
            juga soal kenyamanan, yang sangat ditentukan oleh jenis bahan yang
            digunakan. Di panduan ini, kami menyajikan tips praktis untuk
            membantu kamu menentukan bahan yang paling cocok untuk kebutuhanmu,
            baik saat beraktivitas di luar ruangan dengan bahan yang menyerap
            keringat, maupun menghadiri acara formal atau cuaca dingin dengan
            bahan yang lebih tebal dan hangat. Sehingga kamu bisa memilih
            pakaian yang tidak hanya tampil stylish tetapi juga nyaman dan
            sesuai untuk setiap kesempatan. Dengan memahami perbedaan antara
            bahan-bahan ini, kamu dapat lebih mudah menyesuaikan pilihan pakaian
            dengan aktivitas dan kondisi cuaca yang beragam.
          </p>
          <p>Berikut dibawah beberapa tips dalam memilih bahan pakaian.</p>
          <h2 className="text-2xl font-bold">1. Pahami Jenis Bahan</h2>
          <p className="text-gray-700 mb-4">
            Pahami karakteristik dan penggunaan dari tiap jenis pakaian, seperti
            katun, linen, wol, dan lainnya.
          </p>

          <h2 className="text-2xl font-bold">2. Perhatikan Cuaca dan Iklim</h2>
          <p className="text-gray-700 mb-4">
            Pilih bahan yang sesuai dengan cuaca tempat tinggal kamu. Misalnya,
            gunakan katun dan linen di daerah panas, sementara wol sangat cocok
            di daerah dingin.
          </p>

          <h2 className="text-2xl font-bold">
            3. Pertimbangkan Kegiatan Sehari-hari
          </h2>
          <p className="text-gray-700 mb-4">
            Sesuaikan bahan dengan aktivitas yang akan dilakukan. Bahan yang
            stretchy dan breathable baik untuk kegiatan olahraga, sedangkan
            bahan yang lebih formal seperti wool cocok untuk acara resmi.
          </p>

          <h2 className="text-2xl font-bold">4. Cek Kualitas Bahan</h2>
          <p className="text-gray-700 mb-4">
            Perhatikan ketebalan, tekstur, dan keawetan. Cobalah meraba bahan untuk memastikan kenyamanan saat digunakan.
          </p>

          <h2 className="text-2xl font-bold">5. Pilih Warna dan Pola</h2>
          <p className="text-gray-700 mb-4">
            Pilih warna dan pola yang sesuai dengan selera dan kebutuhan. Warna netral lebih fleksibel untuk dipadu padankan, sementara pola dapat memberikan kesan unik.
          </p>
        </div>

        {/* Right Section: Cards */}
        <div className="w-2/4 ml-30">
          {/* Row 1: Katun and Linen */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div
              className="relative rounded-[10px] overflow-hidden shadow-md bg-black"
              style={{ height: "310px", width: "250px" }}
            >
              <img
                src="src/assets/memilih bahan1.jpg"
                alt="Katun"
                className="w-full h-full object-cover rounded-[10px] shadow-md"
              />
              <div className="absolute bottom-0 w-full bg-black py-3">
                <p className="text-center text-white font-bold">KATUN</p>
              </div>
            </div>

            <div
              className="relative rounded-[10px] overflow-hidden shadow-md bg-black"
              style={{ height: "310px", width: "250px" }}
            >
              <img
                src="src/assets/memilih bahan2.jpg"
                alt="Linen"
                className="w-full h-full object-cover rounded-[10px] shadow-md"
              />
              <div className="absolute bottom-0 w-full bg-black py-3">
                <p className="text-center text-white font-bold">LINEN</p>
              </div>
            </div>
          </div>

          {/* Row 2: Wol and Polyester */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div
              className="relative rounded-[10px] overflow-hidden shadow-md bg-black"
              style={{ height: "310px", width: "250px" }}
            >
              <img
                src="src/assets/memilih bahan3.jpg"
                alt="Wol"
                className="w-full h-full object-cover rounded-[10px] shadow-md"
              />
              <div className="absolute bottom-0 w-full bg-black py-3">
                <p className="text-center text-white font-bold">WOL</p>
              </div>
            </div>

            <div
              className="relative rounded-[10px] overflow-hidden shadow-md bg-black"
              style={{ height: "310px", width: "250px" }}
            >
              <img
                src="src/assets/memilih bahan4.jpg"
                alt="Polyester"
                className="w-full h-full object-cover rounded-[10px] shadow-md"
              />
              <div className="absolute bottom-0 w-full bg-black py-3">
                <p className="text-center text-white font-bold">POLYESTER</p>
              </div>
            </div>
          </div>

          {/* Row 3: Rayon and Denim */}
          <div className="grid grid-cols-2 gap-4">
            <div
              className="relative rounded-[10px] overflow-hidden shadow-md bg-black"
              style={{ height: "310px", width: "250px" }}
            >
              <img
                src="src/assets/memilih bahan5.jpg"
                alt="Rayon"
                className="w-full h-full object-cover rounded-[10px] shadow-md"
              />
              <div className="absolute bottom-0 w-full bg-black py-3">
                <p className="text-center text-white font-bold">RAYON</p>
              </div>
            </div>

            <div
              className="relative rounded-[10px] overflow-hidden shadow-md bg-black"
              style={{ height: "310px", width: "250px" }}
            >
              <img
                src="src/assets/memilih bahan6.jpg"
                alt="Denim"
                className="w-full h-full object-cover rounded-[10px] shadow-md"
              />
              <div className="absolute bottom-0 w-full bg-black py-3">
                <p className="text-center text-white font-bold">DENIM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormPilihBahan;

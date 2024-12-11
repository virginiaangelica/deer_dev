import React from "react";

export default function FormFashionStyle() {
  const fashionStyles = [
    {
      category: "SEHARI-HARI",
      styles: [
        { name: "CASUAL", img: "src/assets/casuall.jpg" },
        { name: "STREETWEAR", img: "src/assets/streetwear.jpg" },
        { name: "PREPPY", img: "src/assets/preppy.jpg" },
        { name: "TROPICAL", img: "src/assets/tropical.jpg" },
        { name: "VINTAGE", img: "src/assets/vintage.jpg" },
        { name: "MINIMALIST", img: "src/assets/minimalist.jpg" },
        { name: "E-BOY", img: "src/assets/e-boy.jpg" },
        { name: "ART HOE", img: "src/assets/art hoe.jpg" },
        { name: "DENIM ON DENIM", img: "src/assets/denim on denim.jpg" },
        { name: "MONOCHROME", img: "src/assets/monochrome.jpg" },
        { name: "SPORTY/ATHLEISURE", img: "src/assets/sporty_athleisure.jpg" },
      ],
    },
    {
      category: "SEMI FORMAL",
      styles: [
        { name: "PREPPY", img: "src/assets/preppy.jpg" },
        { name: "SMART CASUAL", img: "src/assets/smart casual.jpg" },
        { name: "BUSSINES CASUAL", img: "src/assets/bussines casual.jpg" },
        { name: "URBAN", img: "src/assets/urban.jpg" },
        { name: "K-POP STYLE", img: "src/assets/kpop style.jpg" },
        { name: "CHIC STYLE", img: "src/assets/chic style.jpg" },
      ],
    },
    {
      category: "FORMAL",
      styles: [
        { name: "FORMAL", img: "src/assets/formal.jpg" },
        { name: "BUSINESS CASUAL", img: "src/assets/business casual.jpg" },
        { name: "CLASSIC", img: "src/assets/classic.jpg" },
        { name: "BATIK", img: "src/assets/batik.jpg" },
      ],
    },
    {
      category: "KHUSUS",
      styles: [
        { name: "GOTHIC", img: "src/assets/gothic.jpg" },
        { name: "PUNK", img: "src/assets/punk.jpg" },
        { name: "ROCKER STYLE", img: "src/assets/rocker style.jpg" },
        { name: "MILITARY STYLE", img: "src/assets/military style.jpg" },
      ],
    },
  ];

  return (
    <section className="py-10 px-8 bg-white ml-10 mr-10 ">
      {fashionStyles.map((category, index) => (
        <div key={index} className="mb-10">
          <h2 className="text-2xl font-bold mb-6">{category.category}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {category.styles.map((style, idx) => (
              <div
                key={idx}
                className="relative rounded-[10px] overflow-hidden shadow-md bg-black"
                style={{ height: "330px" }}
              >
                <img
                  src={style.img}
                  alt={style.name}
                  className="w-full h-4/5 object-cover"
                />
                <div className="absolute bottom-0 bg-black bg-opacity-50 w-full py-4">
                  <h3 className="text-white font-bold text-center text-lg">
                    {style.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

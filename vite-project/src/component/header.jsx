import React from "react";

const Home = () => {
  const features = [
    {
      title: "Bridal & Designer Blouses",
      desc: "Luxury hand‑embroidery for your special day.",
      img: "/images/bridal-blouse.jpg",
    },
    {
      title: "Customized Stitching",
      desc: "Perfect fit, tailored to your style.",
      img: "/images/custom-stitching.jpg",
    },
    {
      title: "Aari & Hand Embroidery",
      desc: "Intricate designs, handcrafted with care.",
      img: "/images/hand-embroidery.jpg",
    },
  ];

  return (
    <div className="font-sans text-gray-800">
      {/* Hero */}
      <section className="bg-gradient-to-r from-pink-200 via-pink-100 to-white py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">Sparsh Ladies Designer</h1>
        <p className="text-xl mb-6">
          Hand‑embroidery & bespoke stitching in Coimbatore
        </p>
        <a
          href="https://wa.me/919994056184"
          className="inline-block bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg"
        >
          WhatsApp Us
        </a>
      </section>

      {/* Highlights */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">
          What We Offer
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={f.img}
                alt={f.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                <p className="text-gray-600">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Info + Location */}
      <section className="bg-pink-50 py-12 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4">Visit Us</h2>
          <p className="mb-2">
            📍{" "}
            <strong>135 A, Avinashi Road, Hope College, Coimbatore, TN</strong>
          </p>
          <p className="mb-2">
            🛠️ Since Jan 2022, creating bespoke garments & designer blouses.
          </p>
          <p>
            📱{" "}
            <a href="tel:+919994056184" className="text-pink-600 font-medium">
              +91‑99940‑56184
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;

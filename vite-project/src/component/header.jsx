import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

// Product List
const products = [
  {
    name: "Banarasi Silk Saree",
    price: "₹2999",
    img: "https://picsum.photos/seed/banarasi-silk/300/400",
  },
  {
    name: "Kanjivaram Saree",
    price: "₹3499",
    img: "https://picsum.photos/seed/kanjivaram/300/400",
  },
  {
    name: "Soft Net Saree",
    price: "₹2199",
    img: "https://picsum.photos/seed/softnet/300/400",
  },
  {
    name: "Cotton Handloom Saree",
    price: "₹2499",
    img: "https://picsum.photos/seed/handloom/300/400",
  },
  {
    name: "Organza Designer Saree",
    price: "₹2699",
    img: "https://picsum.photos/seed/organza-designer/300/400",
  },
  {
    name: "Tussar Silk Saree",
    price: "₹2899",
    img: "https://picsum.photos/seed/tussar-silk/300/400",
  },
  {
    name: "Georgette Saree",
    price: "₹1899",
    img: "https://picsum.photos/seed/georgette/300/400",
  },
  {
    name: "Printed Chiffon Saree",
    price: "₹1799",
    img: "https://picsum.photos/seed/chiffon-printed/300/400",
  },
];

const fabrics = [
  {
    name: "Cotton Fabric",
    img: "https://picsum.photos/seed/cotton-fabric/300/300",
  },
  {
    name: "Raw Silk",
    img: "https://picsum.photos/seed/raw-silk/300/300",
  },
  {
    name: "Organza",
    img: "https://picsum.photos/seed/organza-fabric/300/300",
  },
  {
    name: "Chanderi",
    img: "https://picsum.photos/seed/chanderi/300/300",
  },
  {
    name: "Tissue Silk",
    img: "https://picsum.photos/seed/tissue-silk/300/300",
  },
  {
    name: "Velvet",
    img: "https://picsum.photos/seed/velvet-fabric/300/300",
  },
];

const journals = [
  {
    title: "Art of Hand Embroidery",
    desc: "Behind the scenes of Aari and hand embroidery process.",
    img: "https://picsum.photos/seed/embroidery-blog/500/300",
  },
  {
    title: "Weaving Tradition",
    desc: "How sarees are crafted by artisans across India.",
    img: "https://picsum.photos/seed/weaving-saree/500/300",
  },
  {
    title: "Draping the Story",
    desc: "Cultural impact of sarees through generations.",
    img: "https://picsum.photos/seed/draping-saree/500/300",
  },
];

export default function Home() {
  const [navOpen, setNavOpen] = useState(false);
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const handleBuyNow = (product) => {
    alert(`Proceeding to buy: ${product.name} - ${product.price}`);
  };

  return (
    <div className="font-sans text-gray-800">
      {/* Navbar */}
      <nav className="bg-white shadow-md fixed w-full z-20">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img
              src="https://picsum.photos/seed/saree-logo/40"
              alt="Logo"
              className="h-8 w-8 rounded-full"
            />
            <span className="text-xl font-bold">Sparsh Designer</span>
            <span className="ml-2 text-sm text-pink-600">
              🛒 {cart.length} item{cart.length !== 1 ? "s" : ""}
            </span>
          </div>
          <div className="hidden md:flex space-x-6 items-center">
            <a href="#" className="hover:text-pink-600">
              Home
            </a>
            <a href="#" className="hover:text-pink-600">
              Sarees
            </a>
            <a href="#" className="hover:text-pink-600">
              Fabrics
            </a>
            <a href="#" className="hover:text-pink-600">
              Contact
            </a>
          </div>
          <button className="md:hidden" onClick={() => setNavOpen(!navOpen)}>
            {navOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
        {navOpen && (
          <div className="md:hidden bg-white px-6 pb-4 space-y-2">
            <a href="#" className="block">
              Sarees
            </a>
            <a href="#" className="block">
              Fabrics
            </a>
            <a href="#" className="block">
              Contact
            </a>
          </div>
        )}
      </nav>

      <main className="pt-20">
        {/* Hero */}
        <section className="relative">
          <img
            src="https://picsum.photos/seed/hero-saree/1600/600"
            alt="Hero"
            className="w-full h-[60vh] object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-3">
                Pen Kalamkari Sarees
              </h1>
              <p className="max-w-2xl mx-auto">
                Discover the elegance of handcrafted sarees — tradition blended
                with modern artistry.
              </p>
              <button className="mt-5 px-6 py-2 bg-pink-600 hover:bg-pink-700 rounded text-white">
                Shop Now
              </button>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="py-12 px-4 text-center bg-white">
          <h2 className="text-3xl font-semibold mb-4">About Sparsh</h2>
          <p className="max-w-3xl mx-auto mb-4">
            At Sparsh, we design handcrafted sarees, custom blouse designs, and
            luxury Indian fabrics. Our boutique brings heritage to life through
            every stitch.
          </p>
          <button className="px-5 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded">
            Explore Collections
          </button>
        </section>

        {/* Saree Products */}
        <section className="py-12 px-6">
          <h2 className="text-2xl font-bold mb-6 text-center">
            New Arrival Sarees
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {products.map((p, i) => (
              <div
                key={i}
                className="bg-white shadow rounded-lg overflow-hidden"
              >
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4 text-center space-y-2">
                  <h3 className="font-medium">{p.name}</h3>
                  <p className="text-pink-600 font-semibold">{p.price}</p>
                  <div className="space-x-2">
                    <button
                      onClick={() => handleAddToCart(p)}
                      className="px-3 py-1 bg-gray-100 border border-gray-300 rounded hover:bg-gray-200 text-sm"
                    >
                      Add to Cart
                    </button>
                    <button
                      onClick={() => handleBuyNow(p)}
                      className="px-3 py-1 bg-pink-600 text-white rounded hover:bg-pink-700 text-sm"
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Cart Preview */}
        <section className="py-12 px-6 bg-white">
          <h2 className="text-xl font-bold text-center mb-4">
            🛍️ Cart Preview
          </h2>
          <div className="max-w-xl mx-auto text-sm text-gray-700">
            {cart.length === 0 ? (
              <p className="text-center">No items in cart.</p>
            ) : (
              cart.map((item, i) => (
                <div key={i} className="flex justify-between border-b py-2">
                  <span>{item.name}</span>
                  <span>{item.price}</span>
                </div>
              ))
            )}
          </div>
        </section>

        {/* Fabric Section */}
        <section className="py-12 px-6">
          <h2 className="text-2xl font-bold text-center mb-6">
            Fabrics by Collection
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 max-w-6xl mx-auto">
            {fabrics.map((f, i) => (
              <img
                key={i}
                src={f.img}
                alt={f.name}
                className="rounded-lg shadow-sm"
              />
            ))}
          </div>
        </section>

        {/* Store Banner */}
        <section className="py-12 px-6">
          <img
            src="https://picsum.photos/seed/store-banner-saree/1200/400"
            alt="Store Banner"
            className="rounded-lg mx-auto shadow"
          />
        </section>

        {/* Journal / Blog */}
        <section className="py-12 px-6 bg-white">
          <h2 className="text-2xl font-bold text-center mb-6">
            From the Journal
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {journals.map((j, i) => (
              <div
                key={i}
                className="bg-white shadow-lg rounded overflow-hidden"
              >
                <img
                  src={j.img}
                  alt={j.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-1">{j.title}</h3>
                  <p className="text-sm text-gray-600">{j.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-pink-700 text-white mt-12">
          <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-4 gap-6 text-sm">
            <div>
              <h4 className="font-bold mb-2">Sparsh Designer</h4>
              <p>135 A, Avinashi Road, Hope College, Coimbatore</p>
              <p className="mt-2">📞 +91‑99940‑56184</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">Quick Links</h4>
              <ul>
                <li>About Us</li>
                <li>Contact</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2">Collections</h4>
              <ul>
                <li>New Arrivals</li>
                <li>Sarees</li>
                <li>Fabrics</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2">Follow Us</h4>
              <p>Instagram | Facebook</p>
              <p>© 2025 Sparsh. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

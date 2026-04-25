import { useState, useMemo } from "react";
import Navbar from "./components/Navbar/CustomerNavbar";
import Footer from "./components/Footer/Footer";
import ProductCard from "./components/ProductCard/ProductCard";
import "./Home.css";

export default function Home() {
  const [search, setSearch] = useState("");

  // Product list
  const products = useMemo(() => [
      {
      serial_id: 5,
      product_name: "Electric Egg Boiler",
      product_image: "https://m.media-amazon.com/images/I/71p1L3X-ViL._SL1500_.jpg",
      product_link: "https://amzn.to/4e4AEOh",
    },  
    {
      serial_id: 4,
      product_name: "2 in 1 vegetable peeler",
      product_image: "https://m.media-amazon.com/images/I/61WJX+XPsdL._SL1024_.jpg",
      product_link: "https://amzn.to/4mxlMtO",
    },    
    {
      serial_id: 3,
      product_name: "Foldable Camping Light",
      product_image: "https://m.media-amazon.com/images/I/61kMSLn7k9L._SL1500_.jpg",
      product_link: "https://amzn.to/3OacLdC",
    },
    {
      serial_id: 2,
      product_name: "Masala Rack Set 18 Glass Jar",
      product_image: "https://m.media-amazon.com/images/I/719wLAwglvL._SL1500_.jpg",
      product_link: "https://amzn.to/4tm4ZMG",
    },
    {
      serial_id: 1,
      product_name: "Backflow Smoke Fountain Shivaling",
      product_image: "https://m.media-amazon.com/images/I/61xd8Xq-clL._SL1500_.jpg",
      product_link: "https://amzn.to/4sy89Nc",
    }
  ], []);

  // 🔥 Live search filter
  const filteredProducts = useMemo(() => {
    const text = search.trim().toLowerCase();

    if (!text) return products;

    return products.filter((p) =>
      p.product_name.toLowerCase().includes(text) ||
      String(p.serial_id).includes(text)
    );
  }, [search, products]);

  return (
    <div>
      {/* Navbar */}
      <Navbar onSearch={setSearch} />

      {/* Header */}
      <div id="top">
        <h2>
          Latest Drops <p>↴</p>
        </h2>
      </div>

      {/* Products Grid */}
      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((p) => (
            <ProductCard key={p.serial_id} product={p} />
          ))
        ) : (
          <h2 className="no-results">No products found 😢</h2>
        )}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

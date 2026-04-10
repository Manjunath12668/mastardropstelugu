import { useState, useMemo } from "react";
import Navbar from "./components/Navbar/CustomerNavbar";
import Footer from "./components/Footer/Footer";
import ProductCard from "./components/ProductCard/ProductCard";
import "./Home.css";

// Products images
// import Product1 from "./assets/productsimg/Facebook.jpg";


export default function Home() {
  const [search, setSearch] = useState("");

  const products = useMemo(() => [
    
    {
      serial_id: 1,
      product_name: "Backflow Smoke Fountain Shivaling",
      product_image: "https://m.media-amazon.com/images/I/61xd8Xq-clL._SL1500_.jpg",
      product_link: "https://amzn.to/4sy89Nc"
    },
    {
      serial_id: 2,
      product_name: "Masala Rack Set 18 Glass Jar",
      product_image: "https://m.media-amazon.com/images/I/719wLAwglvL._SL1500_.jpg",
      product_link: "https://amzn.to/4tm4ZMG"
    },
    {
      serial_id: 3,
      product_name: " Foldable Camping Light",
      product_image: "https://m.media-amazon.com/images/I/61kMSLn7k9L._SL1500_.jpg",
      product_link: "https://amzn.to/3OacLdC"
    }
  ], []);

  // 🔥 LIVE SEARCH FILTER
  const filteredProducts = useMemo(() => {
  const text = search.trim().toLowerCase();

  let filtered = products;

  if (text) {
    filtered = products.filter((p) =>
      p.product_name.toLowerCase().includes(text) ||
      String(p.serial_id).includes(text)
    );
  }

  // 🔥 SORT DESCENDING (latest first)
  return [...filtered].sort((a, b) => b.serial_id - a.serial_id);

}, [search, products]);

  return (
    <div>
      <Navbar onSearch={setSearch}  />

      <div id="top">
        <h2>Latest Drops <p>↴</p></h2>
      </div>

      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((p) => (
            <ProductCard key={p.serial_id} product={p} />
          ))
        ) : (
          <h2 className="no-results">No products found 😢</h2>
        )}
      </div>

      <Footer />
    </div>
  );
}
